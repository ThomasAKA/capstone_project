from django.test import TestCase

# Create your tests here.
from django.urls import reverse
from event.models import Event
from usermanagement.tests import UserAccessTestCase
from rest_framework import status
from django.contrib.auth.models import User
 
# Create your tests here.
class EventTestCase(TestCase):
    def test_event(self):
        # User Details
        data = {"title": "Reading Conference",
        "location": "Accra",
        "event_time": "Morning",
        "speaker": "Elikem",
        "topic": "His efficiency",
        "roomcapacity" : "2",
        "description" :"How Great",
        "image": ""
        }
    # Create User by Sending Post
        returned_values = self.client.post('/events/', data)
        # Check to see if event was created
        self.assertEqual(returned_values.status_code, status.HTTP_201_CREATED)
       