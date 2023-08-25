import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { CharacterList } from "./CharacterList";

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

describe("CharacterList", () => {
  it("should render the component", async () => {
    const { getByTestId } = render(
      <CharacterList
        listState={mockListState}
        paginationState={mockPaginationState}
      />
    );
    const listContainer = getByTestId("listContainer");
    const list = getByTestId("list");

    expect(listContainer).toBeInTheDocument();
    expect(list).toBeInTheDocument();
  });
});
