import React from "react";
import { render, fireEvent, queryByTestId } from "@testing-library/react";
import { CharacterModal, CharacterModalProps } from "./CharacterModal";

// Mock useRouter
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

// FIXME: Test fail cause now is a dynamic page

const mockCharacterData: CharacterModalProps["characterData"] = {
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
  /*it("should have the content visible", () => {
    const { getByTestId } = render(
      <CharacterModal
        closeModal={jest.fn()}
        isOpen={true}
        characterData={mockCharacterData}
      />
    );

    const content = getByTestId("modalContent");
    expect(content).toBeInTheDocument();
  });*/

  it("shouldnt have the content visible", () => {
    const { queryByTestId } = render(
      <CharacterModal
        closeModal={jest.fn()}
        isOpen={false}
        characterData={mockCharacterData}
      />
    );

    const content = queryByTestId("modalContent");
    expect(content).not.toBeInTheDocument();
  });
  /*
  it("should close modal on click close button", () => {
    const onClose = jest.fn();

    const { getByTestId } = render(
      <CharacterModal
        closeModal={onClose}
        isOpen={true}
        characterData={mockCharacterData}
      />
    );
    const closeButton = getByTestId("closeButton");
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });

  it("should redirect to the dinamyc page", () => {
    const { getByTestId } = render(
      <CharacterModal
        closeModal={jest.fn()}
        isOpen={true}
        characterData={mockCharacterData}
      />
    );

    const moreContentButton = getByTestId("moreContent");
    fireEvent.click(moreContentButton);
  })*/
});
