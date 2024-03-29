# Generated by Django 4.2.6 on 2023-12-20 21:36

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('authentification', '0005_profile'),
    ]

    operations = [
        migrations.CreateModel(
            name='SocialConnection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('Discord', 'Discord'), ('Telegram', 'Telegram')], max_length=10)),
                ('link', models.CharField(max_length=70)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
