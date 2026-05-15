from rest_framework import viewsets
from .models import Teaching
from .serializers import TeachingSerializer

class TeachingViewSet(viewsets.ModelViewSet):
    queryset = Teaching.objects.filter(is_active=True)
    serializer_class = TeachingSerializer
