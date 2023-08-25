import { Metadata } from "next";
import { CharacterList } from "src/components/CharacterList";
import { Character } from "src/api/types/Character";
import { PaginationInfo } from "src/api/types/PaginationInfo";
import * as characterService from "../api/services/CharacterService";
import { FavCharacterProvider } from "src/components/FavCharacterContext";

export const metadata: Metadata = {
  title: "Rick & Morty Character List",
};

export interface CharacterListProps {
  listState: Character[];
  paginationState: PaginationInfo;
}

export default async function Home({
  listState,
  paginationState,
}: CharacterListProps) {
  const res = await characterService.getCharacters();
  const { results, info } = res.data;
  listState = results;
  paginationState = info;

  return (
    <>
      <FavCharacterProvider>
        <CharacterList
          listState={listState}
          paginationState={paginationState}
        />
      </FavCharacterProvider>
    </>
  );
}
