
from rest_framework import serializers
from rest_framework.reverse import reverse
from .models import Game,GameTypes,Mate

class GameSerializer(serializers.ModelSerializer):
	image_url = serializers.SerializerMethodField()
	
	class Meta:
		model = Game
		fields = [
			'title',
			'image_url',
			'id'
			
		]

	def get_image_url(self,obj):
		return  "http://127.0.0.1:8000"+obj.image.url
		
class MateSerializer(serializers.ModelSerializer):
	type = serializers.SerializerMethodField()
	game = serializers.SerializerMethodField()
	created_by = serializers.SerializerMethodField()
	color = serializers.SerializerMethodField()
	author_ava = serializers.SerializerMethodField()
	author_id = serializers.SerializerMethodField()
	game_ava =serializers.SerializerMethodField()
	class Meta:
		model = Mate
		fields = ['title','type','description','game',"created_by","color",'author_ava','type_of_connection','author_id','game_ava']
	def get_game_ava(self,obj):
		return "http://127.0.0.1:8000"+obj.game.image.url
	def get_type(self,obj):
		return obj.type.title
	def get_color(self,obj):
		return obj.type.color
	def get_game(self,obj):
		return obj.game.title
	def get_author_id(self,obj):
		return obj.created_by.id
	def get_created_by(self,obj):
		return obj.created_by.username
	def get_author_ava(self,obj):
		return "http://127.0.0.1:8000"+ obj.created_by.profile.avatar.url
	def create(self, validated_data):
		"""
        Create and return a new `Snippet` instance, given the validated data.
        """
		return Mate.objects.create(**validated_data)
		
    		