from django.db import models
from usermanagement.models import UserAccess,User
from event.models import Event

# Create your models here.

class Booking(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
 
    times = (
        ('Morning', 'Morning'),
        ('Midmorning', 'Midmorning'),
        ('Afternoon', 'Afternoon'),
    )
 
    time = models.CharField(verbose_name='time', max_length=50,
           choices=times, default='', unique=True)



def __str__(self):
    return self.title