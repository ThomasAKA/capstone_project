from .models import Booking
from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        exclude = []
        validators = [
            UniqueTogetherValidator(
                queryset=Booking.objects.all(),
                fields=['user', 'time']
            )
        ]