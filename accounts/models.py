from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    profile_image = models.ImageField(upload_to='profile_images/',null=True,blank=True)
    height = models.IntegerField(null=True,blank=True)
    weight = models.FloatField(null=True,blank=True)
    fitness_goal = models.CharField(max_length=200,blank=True)
    
    
    
    

