# Generated by Django 3.1 on 2020-09-15 15:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='event_time',
            field=models.CharField(choices=[('Morning', 'Morning'), ('Midmorning', 'Midmorning'), ('Afternoon', 'Afternoon')], max_length=15),
        ),
        migrations.AlterField(
            model_name='event',
            name='image',
            field=models.ImageField(upload_to='uploads/'),
        ),
    ]