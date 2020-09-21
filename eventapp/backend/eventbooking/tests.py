from django.test import TestCase

from django.urls import reverse
from eventbooking.models import Booking
from event.models import Event
from rest_framework import status
from django.contrib.auth.models import User
 
# Create your tests here.
class EventBookingTestCase(TestCase):    
   
   #Create a user and an event
    def setUp(self):
        self.user = User.objects.create(
            first_name = "Elikem",
            last_name = "Danku",
            username = "Elik",
            password = "12345",
            email = "elikem@danku.com"
        )
        #user = User.objects.get(username = "Elik")
        self.user.set_password("12345")
        self.user.save()
        #self.assertEquals(user.email, "elikem@danku.com")
        self.event = Event.objects.create(
            title = "Reading Conference",
            location = "Accra",
            event_time= "Morning",
            speaker = "Elikem",
            topic= "Helppp",
            roomcapacity= "2",
            description = "Hiiii",
            image = ""
        )      
        self.event.save()
        #events = Event.objects.get(location = "Accra")
        #self.assertEquals(events.description, "Hiiii")
#test tomsee if the user created is able to book event
    def test_event_booking(self):
        user = self.user.id
        event = self.event.id
        time = self.event.event_time

        data = {
            "time" : time,
            "event" : event,
            "user" : user
        }
        response = self.client.post("/eventbookings/", data)
        self.assertEquals(response.status_code, status.HTTP_201_CREATED)
        