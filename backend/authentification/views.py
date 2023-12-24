from rest_framework.views import APIView
from .serializers import UserSerializer,ProfileSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated,IsAuthenticatedOrReadOnly
from django.conf import settings
from rest_framework.parsers import FileUploadParser,JSONParser,MultiPartParser
from .models import User,Profile,SocialConnection
from django.core.mail import send_mail
class HomeView(APIView):
   permission_classes = (IsAuthenticated, )
   parser_classes=(JSONParser,MultiPartParser )
   def get(self, request):
       user = User.objects.filter(id=request.user.id)
       user = UserSerializer(user,many=True).data
       return Response({"user":user})
   def patch(self,request):
        user = request.user
        profile = Profile.objects.get(user=user)
        serializer = ProfileSerializer(profile,data=request.data)
        try:
             ds = request.data['discord']
             print(ds)
             try:
               sociallinks = SocialConnection.objects.get(user=user,type="Discord")
             except:
                  sociallinks =SocialConnection()
                  sociallinks.user =user
                  sociallinks.type ='Discord'
             sociallinks.link=ds
             sociallinks.save()
             return Response({"msg":"discord updated"})
        except:
             pass
        try:
             tg = request.data['telegram']
             print(tg)
             try:
               sociallinks = SocialConnection.objects.get(user=user,type="Telegram")
             except:
                  sociallinks =SocialConnection(user=user)
                  sociallinks.user =user
                  sociallinks.type ='Telegram'
             print(sociallinks)
             sociallinks.link=tg
             sociallinks.save()
             return Response({"msg":"Telegram updated"})
        except:
             pass
        try:
             
             profile.avatar = request.FILES['avatar']
             profile.save()
             
        except:
             pass
        if serializer.is_valid():
             serializer.save()
             return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
   
   
   
class LogoutView(APIView):
     permission_classes = (IsAuthenticated,)
     def post(self, request):
          
          try:
               refresh_token = request.data["refresh_token"]
               token = RefreshToken(refresh_token)
               token.blacklist()
               return Response(status=status.HTTP_205_RESET_CONTENT)
          except Exception as e:
               return Response(status=status.HTTP_400_BAD_REQUEST)
from rest_framework.views import APIView
class RegisterView(APIView):
	def post(self,request):
               serializer =  UserSerializer(data=request.data)
               serializer.is_valid(raise_exception=True)
               serializer.save()
               email = serializer.data['email']
               send_mail(
                    'You have registered to gameboard',
                    'Welcome to gay party',
                    'settings.EMAIL_HOST_USER',
                    [email],fail_silently=False

               )
               return Response(serializer.data)
     
class ProfileView(APIView):
     def get(self,request,*args,**kwargs):
          pk =kwargs.get('pk',None)
          if pk is not None:
               user = User.objects.filter(id=pk)
               seria = UserSerializer(user,many=True).data
               return Response({"user":seria})
          
          return Response({"user":"gay"})