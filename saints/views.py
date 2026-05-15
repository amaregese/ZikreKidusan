from rest_framework import viewsets
from .models import Saint
from .serializers import SaintSerializer

class SaintViewSet(viewsets.ModelViewSet):
    queryset = Saint.objects.filter(is_active=True)
    serializer_class = SaintSerializer
