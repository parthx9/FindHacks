from requests import get


def devfolio(devfolioHackathons: list):
    url = 'https://devfolio.co/api/hackathons?filter=all&page=1&limit=20'
    response = get(url)
    json_response = response.json()

    for i in json_response["result"]:
        hackathon = {}
        title = i["name"]
        link = i["hackathon_setting"]["site"] or \
            "https://" + i["hackathon_setting"]["subdomain"] + ".devfolio.co/"

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

        devfolioHackathons.append(hackathon)

    return devfolioHackathons
