from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BookingSerializer
from .models import Booking

class BookingView(viewsets.ModelViewSet):
    serializer_class = BookingSerializer   
    queryset = Booking.objects.all()