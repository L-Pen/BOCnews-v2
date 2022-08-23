from django.urls import path
from . import views

urlpatterns = [
    path('',views.apiOverview, name="api_overview"),
    path('stat-list', views.statList, name="stat-list"),
    path('stat-create', views.statCreate, name="stat-create"),
    path('stat-delete/<str:pk>/', views.statDelete, name="stat-delete"),
    path('tweets', views.recentTweets, name="tweets")
]