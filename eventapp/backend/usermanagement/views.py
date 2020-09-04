from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer,RegisterSerializer
from .models import User


from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken

# Create your views here.

class UserView(viewsets.ModelViewSet):
<<<<<<< HEAD
<<<<<<< HEAD
    serializer_class = UserSerializer
=======
    serialiizer_class = UserSerializer
>>>>>>> 7984da657df4e25d1f23806d4fb89f9c68136687
=======
    serializer_class = UserSerializer
>>>>>>> 4de622fa1a75502da6bf73ebe2597f6675e6e7e3
    queryset = User.objects.all()



# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
        "user": UserSerializer(user, context=self.get_serializer_context()).data,
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
