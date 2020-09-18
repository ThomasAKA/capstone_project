from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework import permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication,TokenAuthentication
from .serializers import BookingSerializer
from .models import Booking

serializer = BookingSerializer()
class BookingView(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    # Note: You can have as many authentication classes here as suits your needs
    authentication_classes = (TokenAuthentication,BasicAuthentication,SessionAuthentication)

    serializer_class = BookingSerializer   
    queryset = Booking.objects.all()

    # we are overriding the in-built create method inherited from viewsets.ModelViewSet
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)