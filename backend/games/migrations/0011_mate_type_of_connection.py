# Generated by Django 4.2.6 on 2023-12-20 21:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('games', '0010_delete_profile'),
    ]

    operations = [
        migrations.AddField(
            model_name='mate',
            name='type_of_connection',
            field=models.CharField(choices=[('Discord', 'Discord'), ('Telegram', 'Telegram')], default='Discord', max_length=20),
        ),
    ]