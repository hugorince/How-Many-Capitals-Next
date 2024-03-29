import GameOver from "../../pages/gameover";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("GameOver", () => {
  it("renders GameOver page", () => {
    render(<GameOver />);
    // check if all components are rendered
    expect(screen.getByTestId("difficulty")).toBeInTheDocument();
  });
});
