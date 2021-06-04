import CardsComponent from "../../components/CardsComponent";

import AxiosMock from "axios-mock-adapter";
import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { api } from "../../services/api";

const apiMock = new AxiosMock(api);

const hackathonsMockData = {
  hackathon: [
    {
      company: "MLH",
      companyLogo:
        "https://pbs.twimg.com/profile_images/1184141979493568515/NMa0vlIb_400x400.jpg",
      date: "Jun 4th - 6th",
      image:
        "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/205/412/thumb/hack-girl-summer-purple_mlh-event-hero.png?1622297661",
      link: "https://organize.mlh.io/participants/events/7019-hack-girl-summer-2-0",
      participants: "",
      prize: "",
      title: "Hack Girl Summer 2.0",
    },
    {
      company: "Devpost",
      companyLogo:
        "https://pbs.twimg.com/profile_images/625987202909085696/KKYbLP8y.jpg",
      date: "Jun 03 - Jul 08, 2021",
      image:
        "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/001/524/742/datas/medium.png",
      link: "https://rapydhack.devpost.com/",
      participants: 524,
      prize: "$ 267,000",
      title: "Formula 0001: Rapyd Fintech Grand Prix",
    },
    {
      company: "Devfolio",
      companyLogo:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres-1.cloudinary.com%2Fcrunchbase-production%2Fimage%2Fupload%2Fc_lpad%2Ch_256%2Cw_256%2Cf_auto%2Cq_auto%3Aeco%2Fbb1vetfygfwstghs4hjp&f=1&nofb=1",
      date: "2021-05-15 - 2021-06-07",
      image:
        "https://assets.devfolio.co/hackathons/6605bf82462149b9a772cc37819897bb/assets/cover/532.jpeg",
      link: "https://solanaszn.devfolio.co/",
      participants: "",
      prize: "",
      title: "Solana Season Hackathon",
    },
    {
      company: "Eventbrite",
      companyLogo:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.evbstatic.com%2Fs3-s3%2Fstatic%2Fimages%2Fsupport_site%2Fsupport_about_us%2Feventbrite_logo.jpg&f=1&nofb=1",
      date: "Jun 11, 2021",
      image:
        "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F133980697%2F260102652130%2F1%2Foriginal.20210501-123305?h=200&w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1660%2C830&s=6d00d2311d2bd56211601aa3964fbdec",
      link: "https://www.eventbrite.de/e/nanogiants-hackathon-tickets-153126281831?aff=ebdssbonlinesearch",
      participants: "",
      prize: "",
      title: "NanoGiants Hackathon",
    },
    {
      company: "HackerEarth",
      companyLogo:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.glassdoor.com%2Fsqll%2F831907%2Fhackerearth-squarelogo-1492510960751.png&f=1&nofb=1",
      date: "",
      image:
        "https://media-fastly.hackerearth.com/media/hackathon/hackerearth-hackcovid-2/images/3594b49abf-hackCOVID2.0_Listing.png",
      link: "https://www.hackerearth.com/challenges/hackathon/hackerearth-hackcovid-2/",
      participants: "771",
      prize: "",
      title: "hackCOVID 2.0",
    },
  ],
};

describe("CardsComponent", () => {
  beforeEach(() => {
    apiMock.reset();
  });

  it("renders all hackathons cards", async () => {
    apiMock.onGet("/hacks").reply(200, hackathonsMockData);

    render(<CardsComponent />);

    await waitFor(() => {
      expect(screen.queryAllByTestId("card").length).toEqual(
        hackathonsMockData["hackathon"].length
      );
    });
  });
});
