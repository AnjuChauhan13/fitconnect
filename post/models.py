from django.db import models
from django.contrib.auth.models import User



class Post(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    content= models.TextField(blank=True)
    images= models.ImageField(upload_to='post_images/',null=True,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
