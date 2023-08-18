import { Metadata } from "next";
import Head from "next/head";
import { CharacterList } from "src/components/CharacterList";
import { Character } from "src/api/types/Character";
import { PaginationInfo } from "src/api/types/PaginationInfo";
import * as characterService from "../api/services/CharacterService";

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
      <Head>
        <title>Rick & Morty Character List</title>
      </Head>
      <CharacterList listState={listState} paginationState={paginationState} />
    </>
  );
}