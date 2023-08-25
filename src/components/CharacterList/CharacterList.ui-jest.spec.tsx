// Importa las bibliotecas necesarias
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CharacterList } from "./CharacterList"; 

// Mock de los props del componente
const mockListState = [
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

const mockPaginationState = {
  count: 100,
  pages: 10,
  next: "https://api.example.com/characters?page=2",
  prev: "",
};

describe("CharacterList Component", () => {
  it("renders character list items", () => {
    const {getByTestId} = render(
      <CharacterList
        listState={mockListState}
        paginationState={mockPaginationState}
      />
    );

    const listContainer = getByTestId("listContainer");
    expect(listContainer).toBeInTheDocument();
      
  });

  it("opens character modal on item click", () => {
    render(
      <CharacterList
        listState={mockListState}
        paginationState={mockPaginationState}
      />
    );

    // Simula el clic en un elemento de la lista para abrir el modal
    const listItem = screen.getByTestId("listItem");
    fireEvent.click(listItem);

    // Verifica que el modal se abra
    const modal = screen.getByTestId("characterModal");
    expect(modal).toBeInTheDocument();
  });
});
