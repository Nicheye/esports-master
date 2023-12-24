# Generated by Django 4.2.6 on 2023-12-13 20:23

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('games', '0008_alter_mate_game_alter_mate_type'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('avatar', models.ImageField(upload_to='avatars')),
                ('bio', models.CharField(blank=True, max_length=1000)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='pidorik', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
