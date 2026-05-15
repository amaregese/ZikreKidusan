from django.db import models
from core.models import BaseModel

class ReadingType(BaseModel):
    name = models.CharField(max_length=50)  # Epistle, Gospel, First Reading, etc.

    def __str__(self):
        return self.name

class MassReading(BaseModel):
    date = models.DateField()
    reading_type = models.ForeignKey(ReadingType, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    content = models.TextField()
    source = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.date} - {self.reading_type}"
