import styled from "@emotion/styled";
import { Pagination } from "../Pagination";
import { CharacterModal } from "../CharacterModal";
import { useState } from "react";
import { Character } from "src/api/types/Character";
import { CharacterListProps } from "@/pages/index";
import { getOnChangePage } from "src/utils/getOnChangePage";
import { PaginationInfo } from "src/api/types/PaginationInfo";

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

export const CharacterList = ({
  listState,
  paginationState,
}: CharacterListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [characterModal, setCharacterModal] = useState<Character>();
  const [mainList, setMainList] = useState<Character[]>(listState);
  const [pagination, setPagination] = useState<PaginationInfo>(paginationState);
  
  const onPrev = async () => {
    const prevURL = pagination.prev;
    if(prevURL!==null){
      const res = await getOnChangePage(prevURL);
      setMainList(res.data.results);
      setPagination(res.data.info);
    }
  }

  const onNext = async () => {
    const nextURL = pagination.next;
    if(nextURL!==null){
      const res = await getOnChangePage(nextURL);
      setMainList(res.data.results);
      setPagination(res.data.info);
    }
  }

  const closeModal = (modalState: boolean) => {
    setIsOpen(modalState);
  };

  return (
    <>
      <ListContainer>
        <List>
          {mainList?.map((characters) => (
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
          <CharacterModal
            characterData={characterModal}
            isOpen={isOpen}
            closeModal={closeModal}
          />
        )}
        <Pagination onPrev={onPrev} onNext={onNext} />
      </ListContainer>
    </>
  );
};
