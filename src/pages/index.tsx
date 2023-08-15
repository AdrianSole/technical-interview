import Head from "next/head";
import { CharacterList } from "src/components/CharacterList";
import { CharacterProvider } from "src/components/CharacterContext";
import { GetServerSideProps } from "next";
import { Character } from "src/api/types/Character";
import { PaginationInfo } from "src/api/types/PaginationInfo";
import * as characterService from "../api/services/CharacterService";


interface CharacterListProps {
  listState: Character[];
  paginationState: PaginationInfo;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Rick & Morty Character List</title>
      </Head>

      <CharacterProvider>
        <CharacterList />
      </CharacterProvider>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<CharacterListProps> = async () => {
  try {
    const cache = localStorage.getItem('cacheList');
    if (cache) {
      const { results, info } = JSON.parse(cache);

      return {
        props: {
          listState: results,
          paginationState: info,
        },
      };
    } else {
      const res = await characterService.getCharacters();
      const { results, info } = res.data;

      localStorage.setItem('cacheList', JSON.stringify(res.data));

      return {
        props: {
          listState: results,
          paginationState: info,
        },
      };
    }
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        listState: [],
        paginationState: {},
      },
    };
  }
};