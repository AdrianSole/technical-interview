import styled from "@emotion/styled";
import { Pagination } from "../Pagination";
import { useCharacterList } from "../CharacterContext";
import { CharacterModal } from "../CharacterModal";
import { useState } from "react";
import { Character } from "src/api/types/Character";

const ListContainer = styled("div")`
  display: flex;
  background-color: #40e0d0;
  align-items: center;
  margin: 10px;
`;

const List = styled("ul")`
  list-style: none;
  padding: 0;
  margin: 10px;
  background-color: #fff;
  width: 100%;
`;

const ListItem = styled("li")`
  display: flex;
  align-items: center;
  position: relative;
  padding: 5px;
  padding-left: 34px;
  margin: 10px;
  &:hover {
    cursor: pointer;
    background-color: #d3d3d3;
    color: blue;
  }
`;

export const CharacterList = () => {
  const context = useCharacterList();
  const [isOpen, setIsOpen] = useState(false);
  const [characterModal, setCharacterModal] = useState<Character>();

  const closeModal = (modalState: boolean) => {
    setIsOpen(modalState);
  }

  return (
    <>
      <ListContainer>
        <List>
          {context.listState?.map((characters) => (
            <ListItem
              data-testid="listItem"
              key={characters.id}
              onClick={() => {
                setIsOpen(true);
                setCharacterModal(characters);
              }}
            >
              {characters.name}
            </ListItem>
          ))}
        </List>
        {isOpen && (
          <CharacterModal characterData={characterModal} isOpen={isOpen} closeModal={closeModal} />
        )}
        <Pagination onPrev={context.onPrev} onNext={context.onNext} />
      </ListContainer>
    </>
  );
};
