from bs4 import BeautifulSoup
from requests import get


def mlh(mlhHackathons: list):
    url = 'https://mlh.io/seasons/2021/events'
    response = get(url)
    html_soup = BeautifulSoup(response.text, 'html.parser')
    mlh_containers = html_soup.find_all('div', class_='event')

    count = 0

    for i in html_soup.find_all('div', {'class': 'event-wrapper'}):
        hackathon = {}
        title = i.h3.text

        link = i.find('a', href=True)
        image = i.find('img')
        date = i.find('p', {'class': 'event-date'}).text
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
        count += 1
        if(count == 5):
            break

    return mlhHackathons
