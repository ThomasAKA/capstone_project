from django.db import models
from django.contrib.auth.models import User

User._meta.get_field('email')._unique = True  

# Create your models here.
class UserAccess(User):
    #adding fields to the
    # firstname = models.CharField(max_length = 50)
    # lastname = models.CharField(max_length = 50)
    # email = models.EmailField(unique = True,null=False)
    # username = models.CharField(unique = True, max_length = 20, null=False)
    # password = models.CharField(max_length = 15, null=False,blank = False)
    #confirm_password = models.CharField(max_length = 15, null = False, blank = False)
    terms = models.BooleanField(default=False)

class Event(models.Model):
    title = models.CharField(max_length= 100)
    location = models.CharField(max_length= 100)
    description = models.TextField()
    image = models.ImageField(upload_to = 'uploads/', default ='C:/Users/user.CAMIL/Desktop/capstone_project/eventapp/backend/usermanagement/download.jpg')



    def __str__(self):
        return self.title