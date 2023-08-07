import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { CharacterList } from "./CharacterList";
import { CharacterProvider } from "../CharacterContext";

describe("CharacterList", () => {
  jest.mock("../CharacterContext/CharacterContext", () => ({
    useCharacterList: () => ({
      listState: [
        {
          id: 1,
          name: "Rick Sanchez",
          status: "alive",
          species: "Human",
          type: "",
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          url: "https://rickandmortyapi.com/api/character/1",
          created: "2017-11-04T18:48:46.250Z",
        },
      ],
      modalIsOpen: false,
      modalData: null,
      openModal: jest.fn(),
      closeModal: jest.fn(),
      setModalData: jest.fn(),
      onPrev: jest.fn(),
      onNext: jest.fn(),
    }),
  }));

  it("should open the modal window when a list item is clicked", async () => {
    render(
      <CharacterProvider>
        <CharacterList />
      </CharacterProvider>
    );
    // FIXME: TestingLibraryElementError: Unable to find an element by: [data-testid="listItem"] !!!
    const listItem = await screen.findByTestId("listItem");
    fireEvent.click(listItem);
    expect(screen.getByTestId("character-modal")).toBeInTheDocument();
  });
});
