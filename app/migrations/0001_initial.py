# Generated by Django 4.2.4 on 2023-08-21 14:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='img',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file_title', models.CharField(default='image', max_length=50)),
                ('img_file', models.ImageField(upload_to='pictures')),
                ('date', models.DateField(auto_now_add=True)),
            ],
        ),
    ]
