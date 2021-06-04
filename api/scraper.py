from requests import get
import time;
import json

def mlh(mlhHackathons):
    url = 'https://mlh.io/seasons/2021/events'
    response = get(url)
    from bs4 import BeautifulSoup
    html_soup = BeautifulSoup(response.text, 'html.parser')
    mlh_containers = html_soup.find_all('div', class_ = 'event')

    count = 0

    for i in html_soup.find_all('div',{'class':'event-wrapper'}):
        hackathon = {}
        title = i.h3.text
        
        link = i.find('a',href=True)
        image = i.find('img')
        date = i.find('p',{'class':'event-date'}).text
        if link is None:
            continue
        hackathon["title"] = title
        hackathon["link"] = link['href']
        hackathon["image"] = image['src']
        hackathon["date"] = date
        hackathon["prize"] = "" 
        hackathon["participants"] = ""  
        hackathon["company"] = "mlh"
        hackathon["companyLogo"] = "https://pbs.twimg.com/profile_images/1184141979493568515/NMa0vlIb_400x400.jpg"     
        
        mlhHackathons.append(hackathon)
        count +=1
        if(count==5):
            break

    return mlhHackathons

def devfolio(devfolioHackathons): 
    import json
    url = 'https://devfolio.co/api/hackathons?filter=all&page=1&limit=20'
    response = get(url)
    from bs4 import BeautifulSoup
    html_soup = BeautifulSoup(response.text, 'html.parser')
    y = json.loads(response.text)
    #devfolioHackathons = []


    for i in y["result"]:
        hackathon = {}
        title = i["name"]
        link = i["hackathon_setting"]["site"]
        if link==None:
            link = "https://" + i["hackathon_setting"]["subdomain"] + ".devfolio.co/"

        date = i["starts_at"][0:10] + " - " + i["ends_at"][0:10]
        image = i["cover_img"]
        
        hackathon["title"] = title
        hackathon["link"] = link
        hackathon["image"] = image
        hackathon["date"] = date
        hackathon["prize"] = "" 
        hackathon["participants"] = "" 
        hackathon["company"] = "devfolio"
        hackathon["companyLogo"] = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres-1.cloudinary.com%2Fcrunchbase-production%2Fimage%2Fupload%2Fc_lpad%2Ch_256%2Cw_256%2Cf_auto%2Cq_auto%3Aeco%2Fbb1vetfygfwstghs4hjp&f=1&nofb=1"
        #hackathons.append(hackathon)
        devfolioHackathons.append(hackathon)
  

    return devfolioHackathons

def devpost(devpostHackathons):

    import json
    import re
    for i in range(1,7):
        url = 'https://devpost.com/api/hackathons?page=' + str(i)

        response = get(url)
        from bs4 import BeautifulSoup
        html_soup = BeautifulSoup(response.text, 'html.parser')
        y = json.loads(response.text)

        #devpostHackathons = []

        for i in y["hackathons"]:
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
            
            if(image=="https://devpost-challengepost.netdna-ssl.com/assets/defaults/thumbnail-placeholder-42bcab8d8178b413922ae2877d8b0868.gif"):
                continue
            
            hackathon["title"] = title
            hackathon["link"] = link
            hackathon["image"] = image
            hackathon["date"] = date
            hackathon["prize"] = prize 
            hackathon["participants"] = participants
            hackathon["company"] = "devpost"
            hackathon["companyLogo"] = "https://pbs.twimg.com/profile_images/625987202909085696/KKYbLP8y.jpg"
            #hackathons.append(hackathon)
            devpostHackathons.append(hackathon)

    
    return devpostHackathons

def eventbrite(ebHackathons): 
    url = 'https://www.eventbrite.com/d/online/hackathon/'
    response = get(url)
    from bs4 import BeautifulSoup
    html_soup = BeautifulSoup(response.text, 'html.parser')
    #ebHackathons = []

    containers = html_soup.find_all('div', class_ = 'search-event-card-wrapper')

    for i in containers:

        hackathon = {}
        title = i.find('div',{'class':'eds-is-hidden-accessible'}).text
        link = i.find('a').get('href')
        date = i.find('div',{'class':'eds-evet-card-content__sub-title'}).text
        image = i.find('img',{'class':'eds-event-card-content__image'}).get('data-src')
        hackathon["title"] = title
        hackathon["link"] = link
        hackathon["image"] = image
        hackathon["date"] = date[5:17]
        hackathon["prize"] = "" 
        hackathon["participants"] = ""
        hackathon["company"] = "eventbrite"
        hackathon["companyLogo"] = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.evbstatic.com%2Fs3-s3%2Fstatic%2Fimages%2Fsupport_site%2Fsupport_about_us%2Feventbrite_logo.jpg&f=1&nofb=1"
        #hackathons.append(hackathon)
        ebHackathons.append(hackathon)

    return ebHackathons

def hackerearth(heHackathons): 
    url = 'https://www.hackerearth.com/challenges/hackathon/'
    response = get(url)
    from bs4 import BeautifulSoup
    html_soup = BeautifulSoup(response.text, 'html.parser')

    containers = html_soup.find_all('div', class_ = 'challenge-card-modern')
    count = 0
    for i in containers:

        hackathon = {}

        try:
            hackathon["title"] = i.find('span',{'class':'challenge-list-title'}).text
        except: 
            hackathon["title"] = ""
            pass
       
        hackathon["link"] = i.find('a').get('href')
        
        try:
            hackathon["image"] = i.find('div',{'class':'event-image'}).get('style')[23:-3]
        except: 
            hackathon["image"] = ""
            pass
        
        hackathon["date"] = ""
        hackathon["prize"] = "" 
        hackathon["participants"] = ""
        try:
            participants = i.find('div',{'class':'registrations'}).text
            participants = participants.replace(" ", "") 
            participants = participants.replace("\n", "") 
            hackathon["participants"] = participants
        except: 
            hackathon["participants"] = ""
            pass
        hackathon["company"] = "hackerearth"
        hackathon["companyLogo"] = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.glassdoor.com%2Fsqll%2F831907%2Fhackerearth-squarelogo-1492510960751.png&f=1&nofb=1"
        
        heHackathons.append(hackathon)
        if(count==4):
            break
        count+=1

    return heHackathons



hackathons = []
hackathons = mlh(hackathons)
hackathons = devpost(hackathons)
hackathons = devfolio(hackathons)
hackathons = eventbrite(hackathons)
hackathons = hackerearth(hackathons)

json_string = json.dumps(hackathons)
#print(json_string)
file = open('data.json', 'w')
file.write(json_string)
file.close()