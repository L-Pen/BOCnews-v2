from django.db import models
from bs4 import BeautifulSoup
import requests


def generate_model():
    url = "https://www.bankofcanada.ca/"
    pageResponse = requests.get(url).text
    soup = BeautifulSoup(pageResponse, "html.parser")
    indicator_label = soup.find_all("div", class_="indicator-value")

    pre_dic_ls = []



    for div in indicator_label:
        pre_dic_ls.append(str(div.find("span").getText()))

    financialStat = {
        "interestRate": pre_dic_ls[0],
        "inflation": pre_dic_ls[1],
        "trim": pre_dic_ls[2],
        "median": pre_dic_ls[3],
        "common": pre_dic_ls[4],
    }

    return financialStat

# Create your models here.
class FinancialStat(models.Model):
    interestRate = models.CharField(max_length=120,default=generate_model()["interestRate"])
    inflation = models.CharField(max_length=120,default=generate_model()["inflation"])
    trim = models.CharField(max_length=120,default=generate_model()["trim"])
    median = models.CharField(max_length=120,default=generate_model()["median"])
    common = models.CharField(max_length=120,default=generate_model()["common"])

# {
#     "interestRate":"3",
#     "inflation":"3",
#     "trim":"3",
#     "median": "2",
#     "common": "5"
# }
