from django.contrib import admin
from .models import UserAccess
from django.contrib.auth.admin import UserAdmin

# Register your models here.

class MyUserAdmin(UserAdmin):
   model=UserAccess
   list_display = ['first_name','last_name', 'email','password','username']

admin.site.register(UserAccess, MyUserAdmin)


