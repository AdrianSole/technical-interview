import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { CharacterSearch } from "./CharacterSearch";

describe("CharacterSearch", () => {
  it("should update suggestions", async () => {
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

  it("should hide suggestions on blur", () => {
    render(<CharacterSearch />);

    const searchInput = screen.getByTestId("textbox");
    fireEvent.focus(searchInput);

    const suggestions = screen.getByTestId("suggestions");
    expect(suggestions).not.toHaveClass("hidden");

    fireEvent.blur(searchInput);

    expect(suggestions).toHaveClass("hidden");
  });
});
