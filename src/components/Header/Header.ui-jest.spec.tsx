import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from "./Header";

describe("Header", () => {
    it("should render the 'Header' component", () => {
        render(<Header />);
        const header = screen.getByTestId("header");

        expect(header).toBeInTheDocument();
    })
})