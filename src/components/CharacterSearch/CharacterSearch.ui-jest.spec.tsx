import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { CharacterSearch } from "./CharacterSearch";
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'))

describe("CharacterSearch", () => {
  it("should update suggestions", async () => {
    mockRouter.push("/initial-path");
    render(<CharacterSearch />);

    const searchInput = screen.getByPlaceholderText("Search a character...");
    fireEvent.change(searchInput, { target: { value: "rick" } });

    await waitFor(() => {
      const suggestion1 = screen.getByText("Rick Sanchez");
      const suggestion2 = screen.getByText("Adjudicator Rick");
      expect(suggestion1).toBeInTheDocument();
      expect(suggestion2).toBeInTheDocument();
    });
  });

  it("should render the component", async () => {
    const { getByTestId } = render(<CharacterSearch />);
    const textBox = getByTestId("textbox");
    const suggestions = getByTestId("suggestions");

    expect(textBox).toBeInTheDocument();
    expect(suggestions).toBeInTheDocument();
  });

  /*
  it("should hide suggestions on blur", () => {
    render(<CharacterSearch />);

    const searchInput = screen.getByTestId("textbox");
    fireEvent.focus(searchInput);

    const suggestions = screen.getByTestId("suggestions");
    expect(suggestions).not.toHaveClass("hidden");

    fireEvent.blur(searchInput);

    // FIXME: Expected the element to have class: hidden, Received: suggestions false
    expect(suggestions).toHaveClass("h
    */
});
