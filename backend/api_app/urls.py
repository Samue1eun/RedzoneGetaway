from django.urls import path
from . import views

urlpatterns = [
    path('city/<str:city_name>/', views.CityPlacesView.as_view(), name='city_detail'),
    path('today_games/', views.GameTodayView.as_view(), name='games-by-date'),
    path('nfl_teams/', views.NFLTeamView.as_view(), name="nfl_teams"),
]
