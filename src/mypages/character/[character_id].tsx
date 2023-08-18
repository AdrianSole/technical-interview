"use client";

import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Character } from "src/api/types/Character";
import { CharacterPage } from "src/components/CharacterPage";
import * as characterFilterService from "../../api/services/CharacterFilterService";

export interface CharacterDetailsProps {
  characterData: Character | null;
}

export default function character_id({ characterData }: CharacterDetailsProps) {
  return (
    <>
      <Head>
        <title>{characterData?.name}</title>
      </Head>
      <CharacterPage characterData={characterData} />
    </>
  );
}

export const getStaticProps: GetStaticProps<CharacterDetailsProps> = async ({
  params,
}) => {
  const id = Number(params?.character_id);
  const res = await characterFilterService.getCharactersFilteredByID(id);
  const characterData = res?.data || null;

  return {
    props: {
      characterData,
    },
  };
};

export const getStaticPaths: GetStaticPaths<{
  character_id: string;
}> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
