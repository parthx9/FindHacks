from bs4 import BeautifulSoup
from requests import get


def hackerearth(heHackathons: list):
    url = 'https://www.hackerearth.com/challenges/hackathon/'
    response = get(url)
    html_soup = BeautifulSoup(response.text, 'html.parser')

    containers = html_soup.find_all('div', class_='challenge-card-modern')

    count = 0
    for i in containers:

        hackathon = {}

        try:
            hackathon["title"] = i.find(
                'span', {'class': 'challenge-list-title'}).text
        except:
            hackathon["title"] = ""
            pass

        hackathon["link"] = i.find('a').get('href')

        try:
            hackathon["image"] = i.find(
                'div', {'class': 'event-image'}).get('style')[23:-3]
        except:
            hackathon["image"] = ""
            pass

        hackathon["date"] = ""
        hackathon["prize"] = ""
        hackathon["participants"] = ""
        try:
            participants = i.find('div', {'class': 'registrations'}).text
            participants = participants.replace(" ", "").replace("\n", "")
            hackathon["participants"] = participants
        except:
            hackathon["participants"] = ""
            pass
        hackathon["company"] = "hackerearth"
        hackathon["companyLogo"] = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.glassdoor.com%2Fsqll%2F831907%2Fhackerearth-squarelogo-1492510960751.png&f=1&nofb=1"

        heHackathons.append(hackathon)
        if(count == 4):
            break
        count += 1

    return heHackathons
