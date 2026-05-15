from django.contrib import admin
from .models import Devotion

@admin.register(Devotion)
class DevotionAdmin(admin.ModelAdmin):
    list_display = ['title', 'date', 'saint', 'created_at']
    list_filter = ['date', 'saint']
