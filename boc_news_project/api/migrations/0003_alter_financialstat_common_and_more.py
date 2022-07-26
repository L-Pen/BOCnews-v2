# Generated by Django 4.0.6 on 2022-07-25 19:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_financialstat_common_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='financialstat',
            name='common',
            field=models.CharField(default='4.6%', max_length=120),
        ),
        migrations.AlterField(
            model_name='financialstat',
            name='inflation',
            field=models.CharField(default='8.1%', max_length=120),
        ),
        migrations.AlterField(
            model_name='financialstat',
            name='median',
            field=models.CharField(default='4.9%', max_length=120),
        ),
        migrations.AlterField(
            model_name='financialstat',
            name='trim',
            field=models.CharField(default='5.5%', max_length=120),
        ),
    ]
