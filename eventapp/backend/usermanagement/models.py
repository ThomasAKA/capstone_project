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