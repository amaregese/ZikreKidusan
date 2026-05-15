from django.contrib import admin
from .models import Teaching

@admin.register(Teaching)
class TeachingAdmin(admin.ModelAdmin):
    list_display = ['title', 'published_date', 'created_at']
    list_filter = ['published_date']
