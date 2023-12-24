from django.contrib import admin
from django.urls import path
from django.contrib import admin

from .views import GameView,MateView,GameDetailApi

urlpatterns = [
	path('',GameView.as_view()),
	path('mate/<int:id>/',MateView.as_view()),
	path('game/<int:id>/',GameDetailApi.as_view())
    
]
