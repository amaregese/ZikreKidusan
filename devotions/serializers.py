from rest_framework import serializers
from .models import Devotion

class DevotionSerializer(serializers.ModelSerializer):
    saint_name = serializers.CharField(source='saint.name', read_only=True)

    class Meta:
        model = Devotion
        fields = ['id', 'title', 'date', 'content', 'saint_name', 'prayer', 'created_at']
