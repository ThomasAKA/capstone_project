from django.shortcuts import render
from rest_framework import viewsets,generics,permissions
from rest_framework.response import Response
from .serializers import BookingSerializer
from .models import Booking
from event.serializers import EventSerializer
from event.models import Event
from django.http import HttpResponse
from usermanagement.models import UserAccess,User
import datetime
from django.db.models import F
from rest_framework.permissions import IsAuthenticated, IsAdminUser

#Create your views here
class BookCountView(generics.GenericAPIView):
    permission_classes = (IsAdminUser, IsAuthenticated)
    serializer_class = BookingSerializer

    def post(self,request,format = None):
        event = Booking.objects.all()
        count = event.__len__()
        serializer = BookingSerializer(event,many = True)
        return Response({"count":count, "data":serializer.data})
        #return Booking.objects.filter(event=Booking.user).count()

class BookingView(generics.GenericAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = BookingSerializer
    queryset = Booking.objects.all()
 
    def post(self,request,format = None):
        if(request.method == 'POST'):
            #create variables
            event_id = request.POST.get('event_id')
            user_id = request.POST.get('user_id')
            
            event = Event.objects.get(pk = event_id)
            user = User.objects.get(pk = user_id)
            
            # grab info from Booking model
            query = Booking.objects.filter(
                event = event,
                user = user)

            #Check if user has already registered for an event
            if (query.__len__() != 0 ):
                return Response({'message':"User already registered" ,'success':False})
            else:

                #Check if user has already booked for an event at that time
                time_validation = Booking.objects.filter(
                    user = user,
                    time = event.event_time
                )

                #Check
                if (time_validation.__len__() != 0):
                    return Response({'message':"User already booked for an event for this time" ,'success':False})
                else:
                    #Validate room capacity
                    if(event.count < event.roomcapacity):

                        #Registering for an event
                        book_event = Booking.objects.create(
                            event = event,
                            user = user,
                            date_registered = datetime.datetime.now(),
                            time = event.event_time
                        )
                        book_event.save()
                        Event.objects.filter(pk = event.id).update(count = F('count')+1)
                        return Response({'message': "Successfully booked for an event" , 'success':True})

                    else:
                        return Response({'message':"Event is fully booked" , 'success':False})






            


        

        
    