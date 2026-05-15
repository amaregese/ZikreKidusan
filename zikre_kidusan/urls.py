from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from saints.views import SaintViewSet
from devotions.views import DevotionViewSet
from mass_readings.views import ReadingTypeViewSet, MassReadingViewSet
from teachings.views import TeachingViewSet
from core.views import DailyContentViewSet, DailyCommemorationViewSet

router = DefaultRouter()
router.register(r'saints', SaintViewSet)
router.register(r'devotions', DevotionViewSet)
router.register(r'reading-types', ReadingTypeViewSet)
router.register(r'mass-readings', MassReadingViewSet)
router.register(r'teachings', TeachingViewSet)
router.register(r'daily-content', DailyContentViewSet)
router.register(r'commemorations', DailyCommemorationViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
