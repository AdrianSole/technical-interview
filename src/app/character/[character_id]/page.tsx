"use client";

import Head from "next/head";
import { Character } from "src/api/types/Character";
import { CharacterPage } from "src/components/CharacterPage";
import * as characterFilterService from "../../../api/services/CharacterFilterService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Character Details",
};

export interface CharacterDetailsProps {
  characterData: Character | null;
}

export default async function character_id(
  {
    params,
  }: {
    params: { character_id: number };
  },
  { characterData }: CharacterDetailsProps 
) {
  const id = Number(params?.character_id);
  const res = await characterFilterService.getCharactersFilteredByID(id);
  characterData = res?.data || null;

  return (
    <>
      <Head>
        <title>{characterData?.name}</title>
      </Head>
      <CharacterPage characterData={characterData} />
    </>
  );
}