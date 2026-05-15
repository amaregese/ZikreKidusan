"""
Django settings module configuration
"""
import os

# Default to dev settings
ENV = os.environ.get('DJANGO_SETTINGS_MODULE', 'zikre_kidusan.settings.dev')

from .dev import *
