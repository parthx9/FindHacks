from bs4 import BeautifulSoup
from requests import get


def eventbrite(ebHackathons: list): 
    url = 'https://www.eventbrite.com/d/online/hackathon/'
    response = get(url)
    html_soup = BeautifulSoup(response.text, 'html.parser')
    
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
        
        ebHackathons.append(hackathon)

    return ebHackathons