import Header from "../../components/Header";
import { render, screen } from "@testing-library/react";

describe("Header Component", () => {
  it("renders Header component successfully", () => {
    render(<Header />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
