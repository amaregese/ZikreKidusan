from django.db import models

class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        abstract = True

class DailyContent(BaseModel):
    date = models.DateField(unique=True, help_text="The date this content is for")
    image = models.ImageField(upload_to='daily_content/', blank=True, null=True, help_text="Daily changing image")
    title = models.CharField(max_length=200, blank=True, default="")

    class Meta:
        verbose_name = "Daily Content"
        verbose_name_plural = "Daily Contents"
        ordering = ['-date']

    def __str__(self):
        return f"Daily Content - {self.date}"

class DailyCommemoration(BaseModel):
    date = models.DateField(unique=True, help_text="ቀን")
    title_am = models.CharField(max_length=300, blank=True, default="", help_text="ርዕስ (Amharic title)")
    content_am = models.TextField(blank=True, default="", help_text="ተራ ጽሁፍ (plain text - optional if using sections below)")
    quote_am = models.TextField(blank=True, default="", help_text="ልዩ ጥቅስ / የተወሰደ ትምህርት (quote)")
    quote_source_am = models.CharField(max_length=300, blank=True, default="", help_text="የጥቅሱ ምንጭ (quote source)")

    class Meta:
        verbose_name = "Daily Commemoration"
        verbose_name_plural = "Daily Commemorations"
        ordering = ['-date']

    def __str__(self):
        return f"Commemoration - {self.date}"

class CommemorationSection(BaseModel):
    SECTION_TYPES = [
        ('heading', '✝ Heading'),
        ('subheading', '☞ Subheading'),
        ('quote', '📖 Quote'),
        ('text', 'Text'),
        ('sub', '° Sub Text'),
    ]
    commemoration = models.ForeignKey(DailyCommemoration, on_delete=models.CASCADE, related_name='sections')
    section_type = models.CharField(max_length=20, choices=SECTION_TYPES, default='text')
    content = models.TextField(help_text="ይህን ክፍል ውስጥ የሚፈልጉትን ጽሁፍ ያስገቡ")
    order = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name = "Content Section"
        verbose_name_plural = "Content Sections"
        ordering = ['order']

    def __str__(self):
        return f"{self.get_section_type_display()} - {self.content[:50]}"

class CommemorationImage(BaseModel):
    commemoration = models.ForeignKey(DailyCommemoration, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='commemorations/')
    caption = models.CharField(max_length=200, blank=True, default="")

    class Meta:
        verbose_name = "Commemoration Image"
        verbose_name_plural = "Commemoration Images"

    def __str__(self):
        return f"Image for {self.commemoration.date}"
