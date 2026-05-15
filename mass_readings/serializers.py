from rest_framework import serializers
from .models import ReadingType, MassReading

class ReadingTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReadingType
        fields = ['id', 'name']

class MassReadingSerializer(serializers.ModelSerializer):
    reading_type_name = serializers.CharField(source='reading_type.name', read_only=True)

    class Meta:
        model = MassReading
        fields = ['id', 'date', 'reading_type', 'reading_type_name', 'title', 'content', 'source', 'created_at']
