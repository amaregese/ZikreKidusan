from django.contrib import admin
from .models import ReadingType, MassReading

@admin.register(ReadingType)
class ReadingTypeAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(MassReading)
class MassReadingAdmin(admin.ModelAdmin):
    list_display = ['date', 'reading_type', 'title', 'created_at']
    list_filter = ['date', 'reading_type']
