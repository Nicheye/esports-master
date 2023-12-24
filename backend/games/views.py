from django.shortcuts import render
from rest_framework.views import APIView
from django.forms.models import model_to_dict
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.shortcuts import get_object_or_404
from .serializers import GameSerializer,MateSerializer
from rest_framework.permissions import IsAuthenticated,IsAuthenticatedOrReadOnly

from .models import Game,Mate,GameTypes
# Create your views here.
from rest_framework.decorators import  permission_classes
class GameView(APIView):
	def get(self,request,*args,**kwargs):
		qs = Game.objects.all()
		serial = GameSerializer(qs,many=True)
		return Response({"games":serial.data})
	
class MateView(APIView):
	permission_classes = [IsAuthenticatedOrReadOnly,]
	def get(self,request,id):
		game = get_object_or_404(Game,id=id)
		qs = Mate.objects.filter(game=game).all()
		serial = MateSerializer(qs,many=True)
		return Response({"mates":serial.data})
	
	
	def post(self,request,id):

		serializer = MateSerializer(data=request.data)
		print()
		if serializer.is_valid(raise_exception=True):
			# instance = serializer.save(commit=False)
			# instance = forms.save()
			type = GameTypes.objects.get(id=request.data['type'])
			created_by = request.user
			connection = request.data['type_of_connection']
			game = Game.objects.get(id=request.data['game'])
			
			serializer.save(type=type,created_by=created_by,game=game,type_of_connection=connection)
			
			print(serializer.data)
			return Response(serializer.data)
		return Response({"invalid":"not good data"},status=400)
	
class GameDetailApi(generics.RetrieveAPIView):
	queryset = Game.objects.all()
	# lookup_field = 'pk' ??
	lookup_field= 'id'
	serializer_class = GameSerializer