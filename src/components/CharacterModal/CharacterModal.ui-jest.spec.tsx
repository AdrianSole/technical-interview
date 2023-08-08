import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CharacterModal, CharacterModalProps } from './CharacterModal';

// Mock useRouter
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

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

describe('CharacterModal', () => {
  it('should render name', () => {
    const closeModal = jest.fn();
    const { getByText } = render(
      <CharacterModal
        modalIsOpen={true}
        closeModal={closeModal}
        modalData={mockCharacterData}
      />
    );

    expect(getByText(mockCharacterData.name)).toBeInTheDocument();
  });

  it('should render status', () => {
    const closeModal = jest.fn();
    const { getByText } = render(
      <CharacterModal
        modalIsOpen={true}
        closeModal={closeModal}
        modalData={mockCharacterData}
      />
    );

    expect(getByText(mockCharacterData.status)).toBeInTheDocument();
  });

  it('should render species', () => {
    const closeModal = jest.fn();
    const { getByText } = render(
      <CharacterModal
        modalIsOpen={true}
        closeModal={closeModal}
        modalData={mockCharacterData}
      />
    );

    expect(getByText(mockCharacterData.species)).toBeInTheDocument();
  });

  it('should render gender', () => {
    const closeModal = jest.fn();
    const { getByText } = render(
      <CharacterModal
        modalIsOpen={true}
        closeModal={closeModal}
        modalData={mockCharacterData}
      />
    );

    expect(getByText(mockCharacterData.gender)).toBeInTheDocument();
  });

  it('should render created', () => {
    const closeModal = jest.fn();
    const { getByText } = render(
      <CharacterModal
        modalIsOpen={true}
        closeModal={closeModal}
        modalData={mockCharacterData}
      />
    );

    expect(getByText(mockCharacterData.created)).toBeInTheDocument();
  });

  it('should render image', () => {
    const closeModal = jest.fn();
    const { getByAltText } = render(
      <CharacterModal
        modalIsOpen={true}
        closeModal={closeModal}
        modalData={mockCharacterData}
      />
    );

    expect(getByAltText("alt")).toBeInTheDocument();
    expect(getByAltText("alt")).toHaveAttribute("src", mockCharacterData.image);
  });

  it('calls closeModal when close button is clicked', () => {
    const closeModal = jest.fn();
    const { getByText } = render(
      <CharacterModal
        modalIsOpen={true}
        closeModal={closeModal}
        modalData={mockCharacterData}
      />
    );

    fireEvent.click(getByText('close'));
    expect(closeModal).toHaveBeenCalled();
  });

 
});
