import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FavCharacters } from "./FavCharacters"; // Asegúrate de tener la ruta correcta

// Simular el contexto personalizado
jest.mock("../FavCharacterContext", () => ({
  useFav: () => ({
    removeFav: jest.fn(),
  }),
}));

describe("FavCharacters", () => {
  const mockFavList = [
    {
      id: 1,
      name: "Character 1",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      image: "character1.jpg",
      url: "url1",
      created: "2023-08-25",
    },
    {
      id: 2,
      name: "Character 2",
      status: "Dead",
      species: "Alien",
      type: "Martian",
      gender: "Female",
      image: "character2.jpg",
      url: "url2",
      created: "2023-08-24",
    },
  ];

  it("should render fav characters correctly", () => {
    const { getByTestId } = render(<FavCharacters favList={mockFavList} />);
    const favList = getByTestId("favList");

    expect(favList).toBeInTheDocument();
  });
});
