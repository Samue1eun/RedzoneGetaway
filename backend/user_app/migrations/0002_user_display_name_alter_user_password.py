# Generated by Django 5.1.4 on 2025-01-03 00:13

import django.core.validators
import user_app.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='display_name',
            field=models.CharField(default=1, max_length=128, unique=True),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=128, validators=[user_app.validators.validate_password, django.core.validators.MinLengthValidator(8)]),
        ),
    ]
