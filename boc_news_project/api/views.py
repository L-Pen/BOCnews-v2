import os
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import FinancialStatSerializer
from .models import FinancialStat
import requests 
from dotenv import load_dotenv

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

# Financial Stat Views
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

@api_view(['DELETE', 'GET'])
def statDelete(request,pk):
    stat_object = FinancialStat.objects.get(id=pk)
    stat_object.delete()
    return Response("Item Deleted")

# To set your environment variables in your terminal run the following line:
# export 'BEARER_TOKEN'='<your_bearer_token>'
bearer_token = os.getenv("BEARER_TOKEN")

search_url = "https://api.twitter.com/2/tweets/search/recent"

# Optional params: start_time,end_time,since_id,until_id,max_results,next_token,
# expansions,tweet.fields,media.fields,poll.fields,place.fields,user.fields
query_params = {'query': '(kevin durant) OR #twitterdev','tweet.fields': 'author_id'}


# Twitter Views
def bearer_oauth(r):
    """
    Method required by bearer token authentication.
    """

    r.headers["Authorization"] = f"Bearer {bearer_token}"
    r.headers["User-Agent"] = "v2RecentSearchPython"
    return r

@api_view(['GET'])
def recentTweets(request):
    response = requests.get(search_url, auth=bearer_oauth, params=query_params)
    print(response.status_code)
    if response.status_code != 200:
        raise Exception(response.status_code, response.text)
    return Response(response.json())

