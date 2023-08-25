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
  const [fav, setFav] = useState<boolean[]>([]);
  const [favList, setFavList] = useState<Character[]>([]);

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

  const isFav = (character: Character) => {
    return favList.some((char) => char.id === character.id);
  };

  const handleFavUnFav = (id: number, character: Character) => {
    const updatedFav = [...fav];
    updatedFav[id] = !updatedFav[id];
    setFav(updatedFav);

    //
    if (isFav(character)) {
      const updatedFavList = favList.filter((char) => char.id !== character.id);
      setFavList(updatedFavList);
      {console.log(`Father: ${favList}`)}
    } else {
      setFavList([...favList, character]);
    }
  };

  const hasAnyFavorite = fav.some((value) => value);

  return (
    <>
      {hasAnyFavorite && <FavCharacters favList={favList} />}
      <ListContainer>
        <List>
          {mainList?.map((characters) => (
            <ListItem data-testid="listItem" key={characters.id}>
              <Fav onClick={() => handleFavUnFav(characters.id, characters)}>
                <Image src={getStar(fav[characters.id])} alt="" width={15} />
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
