# poi_app/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.poi_list, name='poi_list'),
]
