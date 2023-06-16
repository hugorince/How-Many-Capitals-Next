import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders home page", () => {
    render(<Home />);
    // check if all components are rendered
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});
