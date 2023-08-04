import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("should render the 'Footer' component", () => {
    render(<Footer />);
    const footer = screen.getByTestId("footer");

    expect(footer).toBeInTheDocument();
  });
});
