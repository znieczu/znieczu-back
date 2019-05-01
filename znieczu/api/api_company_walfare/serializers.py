from rest_framework.serializers import ModelSerializer

from apps.company_walfare.models import Company


class CompanySerializer(ModelSerializer):
    class Meta:
        model = Company
        fields = "__all__"