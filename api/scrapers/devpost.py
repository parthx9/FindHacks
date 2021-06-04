import re
from bs4 import BeautifulSoup
from requests import get


def devpost(devpostHackathons: list):
    for i in range(1, 7):

        url = 'https://devpost.com/api/hackathons?page=' + str(i)
        response = get(url)
        json_response = response.json()

        for i in json_response["hackathons"]:
            hackathon = {}
            title = i["title"]
            link = i["url"]
            date = i["submission_period_dates"]

            if("https:" in i["thumbnail_url"][0:]):
                image = i["thumbnail_url"][0:]
            else:
                image = "https://" + i["thumbnail_url"][2:]

            numbers = re.findall('[0-9,]+', i['prize_amount'])
            prize = i['prize_amount'][0] + " " + numbers[0]
            participants = i['registrations_count']

            if(image == "https://devpost-challengepost.netdna-ssl.com/assets/defaults/thumbnail-placeholder-42bcab8d8178b413922ae2877d8b0868.gif"):
                continue

            hackathon["title"] = title
            hackathon["link"] = link
            hackathon["image"] = image
            hackathon["date"] = date
            hackathon["prize"] = prize
            hackathon["participants"] = participants
            hackathon["company"] = "devpost"
            hackathon["companyLogo"] = "https://pbs.twimg.com/profile_images/625987202909085696/KKYbLP8y.jpg"

            devpostHackathons.append(hackathon)

    return devpostHackathons
