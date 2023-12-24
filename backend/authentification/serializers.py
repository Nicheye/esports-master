from rest_framework import serializers
from .models import User,Profile
from games.models import Mate
from .models import SocialConnection
from games.serializers import MateSerializer
class UserSerializer(serializers.ModelSerializer):
	links = serializers.SerializerMethodField()
	author_ava = serializers.SerializerMethodField()
	bio = serializers.SerializerMethodField()
	posts = serializers.SerializerMethodField()
	class Meta:
		model = User
		fields =['id','username','password','email','links','author_ava','bio','posts']
		extra_kwargs = {
			'password':{'write_only':True}
		}
	def get_posts(self,obj):
		posts = Mate.objects.filter(created_by=obj).order_by('-id')[0:5]
		seria =MateSerializer(posts,many=True).data
		return seria
	def get_bio(self,obj):
		return obj.profile.bio
	def get_author_ava(self,obj):
		return "http://127.0.0.1:8000"+ obj.profile.avatar.url
	def get_links(self,obj):
		links = SocialConnection.objects.filter(user=obj)
		linkers={}
		for link in links:
			linkers[link.type]=link.link
		return linkers
	def create(self,validated_data):
		password = validated_data.pop('password',None)
		instance =  self.Meta.model(**validated_data)
		if password is not None:
			instance.set_password(password)
		instance.save()
		return instance
	
class ProfileSerializer(serializers.ModelSerializer):
	ava = serializers.SerializerMethodField()
	links = serializers.SerializerMethodField()
	class Meta:
		model =Profile
		fields= ['ava','bio','links']
	
	def get_ava(self,obj):
		return "http://127.0.0.1:8000"+ obj.avatar.url
	def get_links(self,obj):
		user =obj.user
		links = SocialConnection.objects.filter(user=user)
		linkers={}
		for link in links:
			linkers[link.type]=link.link
# class SocialConnectionSerializer(serializers.ModelSerializer):
# 	class Meta:
# 		model = SocialConnection
# 		field