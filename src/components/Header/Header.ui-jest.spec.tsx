import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from "./Header";
import mockRouter from 'next-router-mock';

jest.mock("next/router", () => jest.requireActual("next-router-mock"));

describe("Header", () => {
  it("should render the 'Header' component", () => {
    mockRouter.push("/initial-path");
    render(<Header />);
    const header = screen.getByTestId("header");

    expect(header).toBeInTheDocument();
  });
});
