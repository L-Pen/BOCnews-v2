from os import stat
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import FinancialStatSerializer
from .models import FinancialStat

# Create your views here.
@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/stat-list/',
		'Create':'/stat-create/',
		'Update':'/stat-update/<str:pk>/',
		'Delete':'/stat-delete/<str:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def statList(request):
    stats = FinancialStat.objects.all()
    serializer = FinancialStatSerializer(stats, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def statCreate(request):
    serializer = FinancialStatSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def statDelete(request,pk):
    stat_object = FinancialStat.objects.get(id=pk)
    stat_object.delete()
    return Response("Item Deleted")
