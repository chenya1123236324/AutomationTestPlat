import json
import re
import traceback
import logging
from datetime import datetime

from django.utils import timezone
from rest_framework import status
from rest_framework.exceptions import ValidationError
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializer import JobSerializer, JobToCaseSerializer
from .models import Job, JobToCase
from users.models import User
from django.conf import settings

from backend.utils.fastdfs.FastDFSStorage import FastDFSStorage


logger = logging.getLogger('test_plat')


class JobView(APIView):
    """测试任务视图"""

    def post(self, request):
        """创建任务"""
        data = request.data

        context = {
            'user': request.user
        }

        # 创建时如果指定了责任人，那么任务状态直接为待测试
        if data.get('executor'):
            data['status'] = 2
            context['tester'] = data.get('executor')

        serializer = JobSerializer(data=data, context=context)

        try:
            serializer.is_valid(raise_exception=True)
            serializer.save()
        except ValidationError as e:
            logger.error(traceback.format_exc())
            return Response({'msg': e.get_full_details()}, status=status.HTTP_400_BAD_REQUEST)

        logger.info(f'测试任务创建成功，ID: {serializer.data["id"]}')
        return Response({'msg': '测试任务创建成功', 'data': serializer.data}, status=status.HTTP_201_CREATED)

    def get(self, request):
        """查询任务"""
        pass

    def put(self, request):
        """修改任务状态"""
        data = request.data
        id = data.pop('id')
        state = data.get('status')

        try:
            job = Job.objects.get(id=id)

            if state == 4:
                relation = JobToCase.objects.filter(job=job, case_status__in=[0, 2, 3])
                if len(relation) != 0:
                    return Response({'msg': '任务尚未完成'}, status=status.HTTP_400_BAD_REQUEST)

                # 判断是否延期
                if job.expect_end_time < datetime.now():
                    data['is_delay'] = True

                # 加上实际结束时间
                data['actual_end_time'] = timezone.datetime.strftime(datetime.now(), '%Y-%m-%d %H:%M:%S')

            serializer = JobSerializer(instance=job, data=data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
        except Job.DoesNotExist:
            logger.warning(f'任务不存在，ID: {id}')
            return Response({'msg': '任务不存在'}, status=status.HTTP_400_BAD_REQUEST)
        except ValidationError as e:
            logger.error(traceback.format_exc())
            return Response({'msg': str(e)}, status=status.HTTP_400_BAD_REQUEST)

        return Response({'data': serializer.data, 'msg': '任务已关闭' if status == 4 else '状态已变更'})

    def delete(self, request):
        """删除用例"""
        data = request.data
        id = data.get('id')

        try:
            job = Job.objects.get(id=id)
        except Job.DoesNotExist:
            logger.warning(f'任务不存在，ID: {id}')
            return Response({'msg': '任务不存在'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            job.is_active = False
            job.save()
            logger.warning(f'任务已取消，ID: {id}')
            return Response({'msg': '任务已取消'})


class JobListView(ListAPIView):
    """用例列表视图"""

    serializer_class = JobSerializer

    def get_queryset(self):
        # 获取请求参数，前端传入的对象，被默认转成了字符串：'{}'
        conditions = self.request.query_params.get('conditions')

        if conditions == 'unfinish':
            instance = Job.objects.filter(executor=self.request.user, status__in=[2, 3, 5], is_active=True).order_by(
                'expect_end_time')

        elif conditions == 'finish':
            instance = Job.objects.filter(executor=self.request.user, status=4, is_active=True).order_by(
                '-actual_end_time')

        else:
            # 把字符串转换成对应的字典
            conditions = json.loads(conditions)

            # 处理掉空值，避免干扰查询
            valid_conditions = dict()
            for key, value in conditions.items():
                if value != "":
                    valid_conditions[key] = value

            # 任务编号和名称提供模糊查询
            task_no = valid_conditions.pop('task_no', "")
            task_name = valid_conditions.pop('task_name', "")

            instance = Job.objects.filter(**valid_conditions, task_name__contains=task_name,
                                          task_no__icontains=task_no, is_active=True).order_by('expect_end_time')

        return instance


class DispatchJobView(APIView):
    """指派任务视图"""

    def put(self, request):
        ids = request.data.get('ids')
        job_ids = request.data.get('job_ids')

        querySet = Job.objects.filter(id__in=job_ids)

        if not querySet:
            logger.warning(f'要指派的测试任务不存在，ID: {job_ids}')
            return Response({'msg': '要指派的测试任务不存在'}, status=status.HTTP_400_BAD_REQUEST)

        users = User.objects.filter(id__in=ids)
        if users.count() == 0:
            logger.warning(f'被指派人不存在，USER_ID: {ids}')
            return Response({'msg': '被指派人不存在'}, status=status.HTTP_400_BAD_REQUEST)

        querySet.update(status=2)
        for job in querySet:
            job.executor.add(*users)

        logger.info(f'任务指派完成，USER_ID: {ids}，JOD_ID:{job_ids}')
        return Response({'msg': '任务指派完成'})


class JobCaseListView(ListAPIView):
    """单个任务下的用例列表"""

    serializer_class = JobToCaseSerializer

    def get_queryset(self):
        job_id = self.kwargs['id']

        try:
            job = Job.objects.get(id=job_id)
        except Job.DoesNotExist:
            logger.warning(f'测试任务不存在，ID: {job_id}')
            return Response({'msg': '测试任务不存在'}, status=status.HTTP_400_BAD_REQUEST)

        case = JobToCase.objects.filter(job=job)
        return case


class TestResultView(APIView):
    """测试结果视图"""

    def post(self, request):
        # 获取关联id
        data = request.data
        id = data.pop('id')

        try:
            relation = JobToCase.objects.get(id=id)

            # 更新用例时可能会删除掉一些图片，所以跟新时检查原来的图片是否还在用，没用就删除
            if relation.test_detail:
                ids = re.findall(rf'<img src="{settings.FDFS_URL}(.+?)">', relation.test_detail)
                if ids:
                    storage = FastDFSStorage()
                    for id in ids:
                        if id not in data['test_detail']:
                            storage.delete(id)
            # 修改测试任务状态
            if relation.job.status == 2:
                relation.job.status = 3
                relation.job.save()

            serializer = JobToCaseSerializer(instance=relation, data=data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
        except JobToCase.DoesNotExist:
            logger.warning(traceback.format_exc())
            return Response({'msg': '任务和用例无关联'}, status=status.HTTP_400_BAD_REQUEST)
        except ValidationError as e:
            logger.error(traceback.format_exc())
            return Response({'msg': str(e)}, status=status.HTTP_400_BAD_REQUEST)

        return Response({'data': serializer.data, 'msg': '保存成功'})
