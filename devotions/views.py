from rest_framework import viewsets
from .models import Devotion
from .serializers import DevotionSerializer

class DevotionViewSet(viewsets.ModelViewSet):
    queryset = Devotion.objects.filter(is_active=True)
    serializer_class = DevotionSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        date = self.request.query_params.get('date')
        if date:
            queryset = queryset.filter(date=date)
        return queryset
