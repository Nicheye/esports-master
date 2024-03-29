# Generated by Django 4.2.6 on 2023-12-09 20:03

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('games', '0005_alter_mate_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='mate',
            name='created_by',
            field=models.ForeignKey(default='1', on_delete=django.db.models.deletion.PROTECT, related_name='creator_of_mate', to=settings.AUTH_USER_MODEL),
        ),
    ]
