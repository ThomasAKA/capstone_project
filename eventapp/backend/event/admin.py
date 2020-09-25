from django.contrib import admin
from .models import Event

# Register your models here.
@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'event_time','speaker','topic','roomcapacity','description', 'image', 'count')

