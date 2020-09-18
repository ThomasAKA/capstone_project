from django.test import TestCase

# Create your tests here.

from django.urls import reverse
from usermanagement.models import UserAccess
from rest_framework import status
from django.contrib.auth.models import User
 
# Create your tests here.
class UserAccessTestCase(TestCase):
    def test_user_registration(self):
        # User Details
        data = {"first_name": "Elikem",
        "last_name": "Danku",
        "email": "elikem@danku.com",
        "password": "Hayou",
        "username": "Elikem"
        }
    # Create User by Sending Post
        returned_values = self.client.post(reverse('register'), data)
        # Fetch the same user to test if the user was created
        user = User.objects.get(username = "Elikem")
        self.assertEqual(returned_values.status_code, status.HTTP_200_OK)
        self.assertEqual(user.first_name, "Elikem")
        self.assertEqual(user.last_name, "Danku")

    

