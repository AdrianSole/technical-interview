"use client";

import styled from "@emotion/styled";
import { Pagination } from "../Pagination";
import { CharacterModal } from "../CharacterModal";
import { useState } from "react";
import { Character } from "src/api/types/Character";
import { getOnChangePage } from "src/utils/getOnChangePage";
import { PaginationInfo } from "src/api/types/PaginationInfo";
import { CharacterListProps } from "src/app/page";
import Image from "next/image";
import { getStar } from "src/utils/getStar";
import { FavCharacters } from "../FavCharacters";
import { useFav } from "../FavCharacterContext";

const ListContainer = styled("div")`
  display: flex;
  background-color: #76be2e;
  align-items: center;
  margin: 10px;
  margin-top: 20px;
`;

const List = styled("ul")`
  list-style: none;
  padding: 0;
  margin: 10px;
  background-color: #99e599;
  color: #423460;
  width: 100%;
`;

const ListItem = styled("li")`
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px;
  padding-left: 34px;
  &:hover {
    cursor: pointer;
    color: #f17b85;
    background-color: #423460;
  }
`;

const Fav = styled("div")`
  margin-right: 10px;
`;

export const CharacterList = ({
  listState,
  paginationState,
}: CharacterListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [characterModal, setCharacterModal] = useState<Character>();
  const [mainList, setMainList] = useState<Character[]>(listState);
  const [pagination, setPagination] = useState<PaginationInfo>(paginationState);
  const context = useFav();

  const onPrev = async () => {
    const prevURL = pagination.prev;
    if (prevURL !== null) {
      const res = await getOnChangePage(prevURL);
      setMainList(res.data.results);
      setPagination(res.data.info);
    }
  };

  const onNext = async () => {
    const nextURL = pagination.next;
    if (nextURL !== null) {
      const res = await getOnChangePage(nextURL);
      setMainList(res.data.results);
      setPagination(res.data.info);
    }
  };

  const closeModal = (modalState: boolean) => {
    setIsOpen(modalState);
  };

  return (
    <>
      {context.hasAnyFavorite && (
        <FavCharacters favList={context.favListState} />
      )}
      <ListContainer data-testid="listContainer">
        <List data-testid="list">
          {mainList?.map((characters) => (
            <ListItem data-testid="listItem" key={characters.id}>
              <Fav
                onClick={() =>
                  context.handleFavUnfav(characters.id, characters)
                }
              >
                <Image
                  src={context.addRemoveStar(characters)}
                  alt=""
                  width={15}
                />
              </Fav>
              <div
                onClick={() => {
                  setIsOpen(true);
                  setCharacterModal(characters);
                }}
              >
                {characters.name}
              </div>
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
