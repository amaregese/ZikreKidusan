from rest_framework import viewsets
from .models import ReadingType, MassReading
from .serializers import ReadingTypeSerializer, MassReadingSerializer

class ReadingTypeViewSet(viewsets.ModelViewSet):
    queryset = ReadingType.objects.all()
    serializer_class = ReadingTypeSerializer

class MassReadingViewSet(viewsets.ModelViewSet):
    queryset = MassReading.objects.filter(is_active=True)
    serializer_class = MassReadingSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        date = self.request.query_params.get('date')
        reading_type = self.request.query_params.get('reading_type')
        if date:
            queryset = queryset.filter(date=date)
        if reading_type:
            queryset = queryset.filter(reading_type_id=reading_type)
        return queryset
