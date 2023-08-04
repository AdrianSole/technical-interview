import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CharacterModal, CharacterModalProps } from "./CharacterModal";

const mockCharacterData: CharacterModalProps["modalData"] = {
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

describe("CharacterModal", () => {
  it("should render CharacterModal correctly", () => {
    const closeModal = jest.fn();
    const modalIsOpen = true;

    render(
      <CharacterModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        modalData={mockCharacterData}
      />
    );

    mockCharacterData?.name &&
      expect(screen.getByText(mockCharacterData.name)).toBeInTheDocument();
    mockCharacterData?.status &&
      expect(screen.getByText(mockCharacterData.status)).toBeInTheDocument();
    mockCharacterData?.species &&
      expect(screen.getByText(mockCharacterData.species)).toBeInTheDocument();
    mockCharacterData?.type &&
      expect(screen.getByText(mockCharacterData.type)).toBeInTheDocument();
    mockCharacterData?.gender &&
      expect(screen.getByText(mockCharacterData.gender)).toBeInTheDocument();
    mockCharacterData?.created &&
      expect(screen.getByText(mockCharacterData.created)).toBeInTheDocument();

    const imageElement = screen.getByAltText("alt");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockCharacterData.image);

    const closeButton = screen.getByText("close");
    fireEvent.click(closeButton);

    expect(closeModal).toHaveBeenCalled();
  });
});
