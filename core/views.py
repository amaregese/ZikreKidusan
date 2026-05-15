from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import DailyContent, DailyCommemoration
from .serializers import DailyContentSerializer, DailyCommemorationSerializer
from datetime import date

class DailyContentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = DailyContent.objects.filter(is_active=True)
    serializer_class = DailyContentSerializer

    @action(detail=False, methods=['get'])
    def today(self, request):
        today = date.today()
        content = self.get_queryset().filter(date=today).first()
        if content:
            serializer = self.get_serializer(content)
            return Response(serializer.data)
        return Response(None)

class DailyCommemorationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = DailyCommemoration.objects.filter(is_active=True)
    serializer_class = DailyCommemorationSerializer

    @action(detail=False, methods=['get'])
    def today(self, request):
        today = date.today()
        content = self.get_queryset().filter(date=today).first()
        if content:
            serializer = self.get_serializer(content)
            return Response(serializer.data)
        return Response(None)
