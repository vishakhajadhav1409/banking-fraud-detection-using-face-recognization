from django.contrib import admin
from django.urls import path
from apps.biometrics.views import VerifyAPIView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/verify/', VerifyAPIView.as_view()),
]
