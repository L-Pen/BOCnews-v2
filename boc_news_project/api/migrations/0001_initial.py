# Generated by Django 4.0.6 on 2022-07-25 18:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FinancialStat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('interestRate', models.CharField(max_length=120)),
                ('inflation', models.CharField(max_length=120)),
                ('trim', models.CharField(max_length=120)),
                ('median', models.CharField(max_length=120)),
                ('common', models.CharField(max_length=120)),
            ],
        ),
    ]
