from django.contrib import admin
from .models import Saint

@admin.register(Saint)
class SaintAdmin(admin.ModelAdmin):
    list_display = ['name', 'feast_day', 'created_at']
    search_fields = ['name']
