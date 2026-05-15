from django.db import models
from core.models import BaseModel
from saints.models import Saint

class Devotion(BaseModel):
    title = models.CharField(max_length=200)
    date = models.DateField()
    content = models.TextField()
    saint = models.ForeignKey(Saint, on_delete=models.SET_NULL, null=True, blank=True)
    prayer = models.TextField()

    def __str__(self):
        return f"{self.title} - {self.date}"
