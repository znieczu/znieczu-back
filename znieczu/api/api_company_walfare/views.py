from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from api.api_company_walfare.serializers import CompanySerializer
from apps.company_walfare.models import Company


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer