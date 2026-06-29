from django.urls import path
from .views import PostModelviewset



urlpatterns=[
   path("",PostModelviewset.as_view()),
   path("<int:pk>/", PostModelviewset.as_view()),

]