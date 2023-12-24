from django.contrib import admin

# Register your models here.
from .models import Game,GameTypes,Mate
admin.site.register(Game)
admin.site.register(Mate)
admin.site.register(GameTypes)