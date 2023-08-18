import { render, fireEvent, queryByTestId } from "@testing-library/react";
import { CharacterPage } from "./CharacterPage";
import { CharacterDetailsProps } from "src/mypages/character/[character_id]";

const mockCharacterData: CharacterDetailsProps["characterData"] = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z",
};

describe("CharacterPage", () => {
  it("should display the title", () => {
    const { queryByTestId } = render(
      <CharacterPage characterData={mockCharacterData} />
    );

    const title = queryByTestId("title");
    expect(title).toBeVisible();
  });

  it("should display the subtitle", () => {
    const { queryByTestId } = render(
      <CharacterPage characterData={mockCharacterData} />
    );

    const subtitle = queryByTestId("subtitle");
    expect(subtitle).toBeVisible();
  });

  it("should display the main content", () => {
    const { queryByTestId } = render(
      <CharacterPage characterData={mockCharacterData} />
    );

    const content = queryByTestId("content");
    expect(content).toBeVisible();
  });

  it("handles the 'Return home' link correctly", async () => {
    const { queryByTestId } = render(
      <CharacterPage characterData={mockCharacterData} />
    );

    const link = queryByTestId("link");
    expect(link).toBeVisible();
  });
});
