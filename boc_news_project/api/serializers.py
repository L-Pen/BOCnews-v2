from rest_framework import serializers
from .models import FinancialStat

class FinancialStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = FinancialStat
        fields = "__all__"