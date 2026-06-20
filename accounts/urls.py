from django.urls import path
from .views import home,register_user,profile_view

urlpatterns = [
    path('', home),
    path('register/',register_user),
    path('profile/',profile_view,name="profile")
]