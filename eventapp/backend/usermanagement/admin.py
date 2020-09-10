from django.contrib import admin
from .models import UserAccess,Event
from django.contrib.auth.admin import UserAdmin

# Register your models here.

class MyUserAdmin(UserAdmin):
   model=UserAccess
   list_display = ['first_name','last_name', 'email','password','username']

admin.site.register(UserAccess, MyUserAdmin)


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'description', 'image')
