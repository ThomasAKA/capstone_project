from django.shortcuts import render
from rest_framework import viewsets,generics
from rest_framework.response import Response
from .serializers import BookingSerializer
from .models import Booking
from event.serializers import EventSerializer

class BookingView(viewsets.ModelViewSet):
    serializer_class = BookingSerializer   
    queryset = Booking.objects.all()

#Count the total number of booked events

class BookCountView(generics.GenericAPIView):
    serializer_class = BookingSerializer

    def post(self,request,format = None):
        event = Booking.objects.all()
        count = event.__len__()
        serializer = BookingSerializer(event,many = True)
        return Response({"count":count, "data":serializer.data})
        #return Booking.objects.filter(event=Booking.user).count()