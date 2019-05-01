from django.urls import path, include
from rest_framework.routers import DefaultRouter

from api.api_company_walfare.views import CompanyViewSet

router = DefaultRouter()


router.register('companies', CompanyViewSet)

urlpatterns = [
    path('', include(router.urls)),
]