import { render, fireEvent, queryByTestId } from "@testing-library/react";
import { CharacterPage, CharacterPageProps } from "./CharacterPage";

const mockCharacterData: CharacterPageProps["id"] = 1;

describe("CharacterPage", () => {
  it("should display the title", () => {
    const { queryByTestId } = render(<CharacterPage id={mockCharacterData} />);

    const title = queryByTestId("title");
    expect(title).toBeVisible();
  });

  it("should display the subtitle", () => {
    const { queryByTestId } = render(<CharacterPage id={mockCharacterData} />);

    const subtitle = queryByTestId("subtitle");
    expect(subtitle).toBeVisible();
  });

  it("should display the main content", () => {
    const { queryByTestId } = render(<CharacterPage id={mockCharacterData} />);

    const content = queryByTestId("content");
    expect(content).toBeVisible();
  });

  it("handles the 'Return home' link correctly", async () => {
    const { queryByTestId } = render(<CharacterPage id={mockCharacterData} />);

    const link = queryByTestId("link");
    expect(link).toBeVisible();
  });
});
