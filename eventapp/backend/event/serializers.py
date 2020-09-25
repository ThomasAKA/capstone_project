from .models import Event
from rest_framework import serializers

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id','title', 'location','event_time','speaker','topic','roomcapacity', 'description', 'image','count']
        

