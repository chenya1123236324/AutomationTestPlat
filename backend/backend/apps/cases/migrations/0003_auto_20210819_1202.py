# Generated by Django 3.1.7 on 2021-08-19 12:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cases', '0002_auto_20210819_1134'),
    ]

    operations = [
        migrations.AlterField(
            model_name='case',
            name='author',
            field=models.CharField(db_index=True, max_length=20, verbose_name='作者'),
        ),
        migrations.AlterField(
            model_name='module',
            name='uuid',
            field=models.CharField(default='395d6a0a2ac66da897a74e6702d00375', max_length=36, verbose_name='UUID'),
        ),
    ]
