from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets,generics,permissions
from .serializers import RegisterSerializer
from .models import UserAccess,User
from rest_framework.permissions import IsAuthenticated, IsAdminUser


from rest_framework.response import Response
from knox.models import AuthToken

# Create your views here.

# Register API
class RegisterAPI(generics.GenericAPIView):
    #permission_classes = (IsAdminUser, IsAuthenticated)
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
        request.user.id
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)



