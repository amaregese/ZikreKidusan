from django.db import models
from core.models import BaseModel

class Saint(BaseModel):
    name = models.CharField(max_length=200)
    feast_day = models.DateField(null=True, blank=True)
    biography = models.TextField()
    quote = models.TextField(help_text="Famous quote or saying")
    image = models.ImageField(upload_to='saints/', null=True, blank=True)

    def __str__(self):
        return self.name
