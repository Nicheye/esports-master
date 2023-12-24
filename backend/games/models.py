from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.
user = get_user_model()
class Game(models.Model):
	title = models.CharField(max_length=100)
	image = models.ImageField(upload_to="media/games_photos")
	def __str__(self) -> str:
		return self.title
class GameTypes(models.Model):
	color = models.CharField(max_length=100)
	title = models.CharField(max_length=100)
	def __str__(self) -> str:
		return self.title

class Mate(models.Model):
	Discord = 'Discord'
	Telegram = 'Telegram'
	CON_OPTIONS = [
		(Discord,'Discord'),
		(Telegram,'Telegram')
	]
	type_of_connection = models.CharField(max_length=20,choices=CON_OPTIONS,default=Discord)
	title = models.CharField(max_length=120)
	type =models.ForeignKey(GameTypes,on_delete=models.CASCADE)
	description = models.CharField(max_length=1000)
	game = models.ForeignKey(Game,on_delete=models.CASCADE,related_name="game_of_mate",default="1")
	created_by = models.ForeignKey(user,on_delete=models.CASCADE,related_name="creator_of_mate",default="1")
	def __str__(self) -> str:
		return self.title



	