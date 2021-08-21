# Generated by Django 3.1.7 on 2021-08-18 11:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Case',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
                ('no', models.CharField(db_index=True, max_length=120, unique=True, verbose_name='用例编号')),
                ('name', models.CharField(db_index=True, max_length=60, verbose_name='用例名称')),
                ('priority', models.SmallIntegerField(choices=[(1, '高'), (2, '中'), (3, '低')], default=2, verbose_name='优先级')),
                ('status', models.BooleanField(default=True, verbose_name='可用状态')),
                ('is_auto', models.BooleanField(default=False, verbose_name='自动化实现')),
                ('version', models.CharField(blank=True, max_length=10, null=True, verbose_name='A版本号')),
                ('code_time', models.CharField(blank=True, max_length=24, null=True, verbose_name='A编写时间')),
                ('type', models.CharField(blank=True, max_length=20, null=True, verbose_name='A类型')),
                ('author', models.CharField(max_length=20, verbose_name='作者')),
                ('creator', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='sync_cases', to=settings.AUTH_USER_MODEL, verbose_name='同步人')),
            ],
            options={
                'verbose_name': '测试用例',
                'verbose_name_plural': '测试用例',
                'db_table': 'tp_case',
            },
        ),
        migrations.CreateModel(
            name='Module',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
                ('uuid', models.CharField(max_length=36, verbose_name='UUID')),
                ('name', models.CharField(max_length=20, verbose_name='模块名称')),
                ('creator', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='modules', to=settings.AUTH_USER_MODEL, verbose_name='创建人')),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='subs', to='cases.module', verbose_name='父级模块')),
            ],
            options={
                'verbose_name': '模块',
                'verbose_name_plural': '模块',
                'db_table': 'tp_module',
            },
        ),
        migrations.CreateModel(
            name='CaseDetail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(blank=True, max_length=100, null=True, verbose_name='A用例描述')),
                ('step', models.CharField(blank=True, max_length=250, null=True, verbose_name='测试步骤')),
                ('expectation', models.CharField(blank=True, max_length=100, null=True, verbose_name='测试步骤')),
                ('path', models.CharField(blank=True, max_length=200, null=True, verbose_name='A执行路径')),
                ('case', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='detail', to='cases.case', verbose_name='用例')),
            ],
            options={
                'verbose_name': '用例详情',
                'verbose_name_plural': '用例详情',
                'db_table': 'tp_case_detail',
            },
        ),
        migrations.AddField(
            model_name='case',
            name='module',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='cases', to='cases.module', verbose_name='功能模块'),
        ),
        migrations.AddField(
            model_name='case',
            name='reviser',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='modify_cases', to=settings.AUTH_USER_MODEL, verbose_name='修改人'),
        ),
    ]
