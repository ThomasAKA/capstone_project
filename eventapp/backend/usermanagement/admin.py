from django.contrib import admin
from .models import UserAccess

# Register your models here.
@admin.register(UserAccess)
class UserAdmin(admin.ModelAdmin):
    list_display = ['firstname','lastname', 'email' , 'password1', 'password2', 'terms']