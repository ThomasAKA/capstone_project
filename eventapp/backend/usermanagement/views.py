from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets,generics,permissions
from .serializers import RegisterSerializer,EventSerializer
from .models import UserAccess, Event


from rest_framework.response import Response
from knox.models import AuthToken

# Create your views here.

# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
        "user": RegisterSerializer(user, context=self.get_serializer_context()).data,
        "token": AuthToken.objects.create(user)[1]
        })


from django.contrib.auth import login
from rest_framework import permissions
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView

class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)


# Create your views here.
class EventView(generics.GenericAPIView):
    serializer_class = EventSerializer
    queryset = Event.objects.all()

    def post(self,request):
        file_model = Event()
        
        _, file = request.FILES.popitem() #get first element of uploaded images
        file = file[0] # get the file from MultiValueDict

        file_model.file = file
        file_model.save()

        return HttpResponse(content_type='text/plain', content='File uploaded')