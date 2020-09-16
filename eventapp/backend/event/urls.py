from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from . import views

from .views import EventView
from knox import views as knox_views



router = routers.DefaultRouter()
router.register('events', views.EventView, 'event')

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    #path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/',include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)