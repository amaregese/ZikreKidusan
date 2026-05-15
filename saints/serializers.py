from rest_framework import serializers
from .models import Saint

class SaintSerializer(serializers.ModelSerializer):
    class Meta:
        model = Saint
        fields = ['id', 'name', 'feast_day', 'biography', 'quote', 'image', 'created_at']
