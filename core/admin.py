from django.contrib import admin
from .models import DailyContent, DailyCommemoration, CommemorationImage, CommemorationSection

@admin.register(DailyContent)
class DailyContentAdmin(admin.ModelAdmin):
    list_display = ['date', 'title', 'is_active']
    list_filter = ['is_active']

class CommemorationImageInline(admin.TabularInline):
    model = CommemorationImage
    extra = 3

class CommemorationSectionInline(admin.TabularInline):
    model = CommemorationSection
    extra = 1
    fields = ['section_type', 'content', 'order']

@admin.register(DailyCommemoration)
class DailyCommemorationAdmin(admin.ModelAdmin):
    list_display = ['date', 'title_am', 'is_active']
    list_filter = ['is_active']
    search_fields = ['title_am', 'content_am']
    fieldsets = [
        (None, {'fields': ['date', 'is_active']}),
        ('Title', {'fields': ['title_am']}),
    ]
    inlines = [CommemorationImageInline, CommemorationSectionInline]
