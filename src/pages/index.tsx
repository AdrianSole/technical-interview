import Head from "next/head";
import { CharacterList } from "src/components/CharacterList";
import { GetServerSideProps } from "next";
import { Character } from "src/api/types/Character";
import { PaginationInfo } from "src/api/types/PaginationInfo";
import * as characterService from "../api/services/CharacterService";

export interface CharacterListProps {
  listState: Character[];
  paginationState: PaginationInfo;
}

export default function Home({
  listState,
  paginationState,
}: CharacterListProps) {
  return (
    <>
      <Head>
        <title>Rick & Morty Character List</title>
      </Head>

      <CharacterList listState={listState} paginationState={paginationState} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  CharacterListProps
> = async () => {
  try {
    const res = await characterService.getCharacters();
    const { results, info } = res.data;
    return {
      props: {
        listState: results,
        paginationState: info,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        listState: [],
        paginationState: {},
      },
    };
  }
};
