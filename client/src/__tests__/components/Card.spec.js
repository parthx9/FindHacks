import Card from "../../components/Card";
import { render, screen } from "@testing-library/react";

describe("Card Component", () => {
  it("renders Card component successfully", () => {
    const hackathonItem = {
      company: "Test Company",
      companyLogo: "http://example.com/company_logo.jpg",
      date: "Jan 01 - 02, 2021",
      image: "http://example.com/test_image.jpg",
      link: "http://example.com/",
      participants: "42",
      prize: "$ 123,42",
      title: "Test Hackaton",
    };

    render(<Card item={hackathonItem} />);

    expect(screen.getByText(hackathonItem.title)).toBeInTheDocument();
    expect(screen.getByText(hackathonItem.title)).toHaveAttribute(
      "href",
      hackathonItem.link
    );
    expect(screen.getByText(hackathonItem.date)).toBeInTheDocument();
    expect(screen.getByText(hackathonItem.prize)).toBeInTheDocument();
    expect(screen.getByText(hackathonItem.participants)).toBeInTheDocument();
  });

  it("does not show empty prize", () => {
    const hackathonItem = {
      company: "Test Company",
      companyLogo: "http://example.com/company_logo.jpg",
      date: "Jan 01 - 02, 2021",
      image: "http://example.com/test_image.jpg",
      link: "http://example.com/",
      participants: "42",
      prize: "",
      title: "Test Hackaton",
    };

    render(<Card item={hackathonItem} />);

    expect(screen.queryByTestId("card-prize")).not.toBeInTheDocument();
  });

  it("does not show empty participants", () => {
    const hackathonItem = {
      company: "Test Company",
      companyLogo: "http://example.com/company_logo.jpg",
      date: "Jan 01 - 02, 2021",
      image: "http://example.com/test_image.jpg",
      link: "http://example.com/",
      participants: "",
      prize: "$ 123,42",
      title: "Test Hackaton",
    };

    render(<Card item={hackathonItem} />);

    expect(screen.queryByTestId("card-participants")).not.toBeInTheDocument();
  });
});
