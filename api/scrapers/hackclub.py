from requests import get


def hackclub(highSchoolHackathons: list):
    url = 'https://hackathons.hackclub.com/api/events/upcoming'
    response = get(url)
    json_response = response.json()

    for i in json_response:
        hackathon = {}
        title = i["name"]
    
        link = i["website"]
        date = i["start"][0:10]
        image = i["banner"]

        hackathon["title"] = title
        hackathon["link"] = link
        hackathon["image"] = image
        hackathon["date"] = date
        hackathon["prize"] = ""
        hackathon["participants"] = ""
        hackathon["company"] = "hackclub"
        hackathon["companyLogo"] = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJw-SSBCOwItQ9wiSCttGi5h4JxXXUaGYqG4jw%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1"

    
        highSchoolHackathons.append(hackathon)

    return highSchoolHackathons
