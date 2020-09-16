from .models import UserAccess

#import for knox
from rest_framework import serializers
from django.contrib.auth.models import User


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','first_name','last_name','username', 'email' , 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        # user = User.objects.create_user(validated_data['username'], validated_data['first_name'],validated_data['last_name'], validated_data['email'], validated_data['password'])
        myuser = User()
        myuser.username = validated_data['username']
        myuser.first_name = validated_data['first_name']
        myuser.last_name = validated_data['last_name']
        myuser.email = validated_data['email']
        myuser.set_password(validated_data['password'])
        myuser.save()

        return myuser

    
