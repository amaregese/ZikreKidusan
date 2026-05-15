from rest_framework import serializers
from .models import Teaching

class TeachingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teaching
        fields = ['id', 'title', 'description', 'audio_file', 'video_url', 'thumbnail', 'duration', 'published_date', 'created_at']
