# Generated by Django 5.1.4 on 2025-01-13 19:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flight_app', '0002_flight_connecting_in_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='flight',
            name='connecting_in_date',
            field=models.CharField(default='no connection'),
        ),
        migrations.AlterField(
            model_name='flight',
            name='connecting_out_date',
            field=models.CharField(default='no connection'),
        ),
    ]
