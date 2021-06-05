from requests import get
import json
from scrapers.mlh import mlh
from scrapers.devpost import devpost
from scrapers.devfolio import devfolio
from scrapers.eventbrite import eventbrite
from scrapers.hackerearth import hackerearth
from scrapers.hackclub import hackclub


def get_hackatons():
    hackathons = []
    hackathons = mlh(hackathons)
    hackathons = devpost(hackathons)
    hackathons = devfolio(hackathons)
    hackathons = eventbrite(hackathons)
    hackathons = hackerearth(hackathons)
    hackathons = hackclub(hackathons)

    return hackathons


if __name__ == '__main__':
    with open('data.json', 'w') as json_file:
        json.dump(get_hackatons(), json_file)
