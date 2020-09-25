from django.shortcuts import render
from .serializers import EventSerializer
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import viewsets,generics,permissions,status
from rest_framework.views import APIView
from .models import Event
from usermanagement.models import User,UserAccess
from eventbooking.models import Booking
from rest_framework.permissions import IsAuthenticated, IsAdminUser


# Create your views here.
class EventView(viewsets.ModelViewSet):
    #permission_classes = (IsAdminUser, IsAuthenticated)

    serializer_class = EventSerializer
    queryset = Event.objects.all()

    def post(self,request):
        file_model = Event()
        
        _, file = request.FILES.popitem() #get first element of uploaded images
        file = file[0] # get the file from MultiValueDict

        file_model.file = file
        file_model.save()

        return HttpResponse(content_type='text/plain', content='Event added')

class EventsBookedByUser(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, pk, format=None):
        try:
            u = User.objects.get(pk = pk) 
        except:    
            return Response(status.HTTP_404_NOT_FOUND)
        qs = u.booking_set.all().values_list("event", flat=True)        
        qs = Event.objects.filter(pk__in=qs)        
        events = EventSerializer(qs, many=True)        
        return Response(events.data)

class CountView(generics.GenericAPIView):
    permission_classes = (IsAdminUser, IsAuthenticated)
    serializer_class = EventSerializer

    def get(self,request,format = None):
        event = Event.objects.all()
        count = event.__len__()
        serializer = EventSerializer(event,many = True)
        return Response({"count":count, "data":serializer.data})
