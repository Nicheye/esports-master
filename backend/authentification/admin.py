from django.contrib import admin

# Register your models here.
from .models import User,Profile,SocialConnection
admin.site.register(User)
admin.site.register(Profile)
admin.site.register(SocialConnection)