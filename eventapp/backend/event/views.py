from django.shortcuts import render
from .serializers import EventSerializer
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import viewsets,generics,permissions
from .models import Event


# Create your views here.
class EventView(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    queryset = Event.objects.all()

    def post(self,request):
        file_model = Event()
        
        _, file = request.FILES.popitem() #get first element of uploaded images
        file = file[0] # get the file from MultiValueDict

        file_model.file = file
        file_model.save()

        return HttpResponse(content_type='text/plain', content='Event added')

class CountView(generics.GenericAPIView):
    serializer_class = EventSerializer

    def post(self,request,format = None):
        event = Event.objects.all()
        count = event.__len__()
        serializer = EventSerializer(event,many = True)
        return Response({"count":count, "data":serializer.data})