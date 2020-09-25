from .models import Booking
from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'
       # validators = [
        #    UniqueTogetherValidator(
        #        queryset=Booking.objects.all(),
         #       fields=['user', 'time']
         #   )
        #]
    
   # def validate_event(self, value):
     #   if value:
     #       if value.roomcapacity <= Booking.objects.count():
      #          raise serializers.ValidationError(           
      #               {"Fully Booked": "All seats have been allocated"})
      #  return value
