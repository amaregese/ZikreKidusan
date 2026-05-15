from django.db import models
from core.models import BaseModel

class Teaching(BaseModel):
    title = models.CharField(max_length=200)
    description = models.TextField()
    audio_file = models.FileField(upload_to='audio/teachings/', null=True, blank=True)
    video_url = models.URLField(null=True, blank=True)
    thumbnail = models.ImageField(upload_to='teachings/', null=True, blank=True)
    duration = models.DurationField(null=True, blank=True)
    published_date = models.DateField()

    def __str__(self):
        return self.title
