from rest_framework import serializers
from .models import DailyContent, DailyCommemoration, CommemorationImage, CommemorationSection

class DailyContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyContent
        fields = ['id', 'date', 'image', 'title']

class CommemorationImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommemorationImage
        fields = ['id', 'image', 'caption']

class CommemorationSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommemorationSection
        fields = ['id', 'section_type', 'content', 'order']

class DailyCommemorationSerializer(serializers.ModelSerializer):
    images = CommemorationImageSerializer(many=True, read_only=True)
    sections = CommemorationSectionSerializer(many=True, read_only=True)

    class Meta:
        model = DailyCommemoration
        fields = ['id', 'date', 'title_am', 'images', 'sections']