import Head from "next/head";
import { useRouter } from "next/router";
import { CharacterPage } from "src/components/CharacterPage";

export default function CharacterDetails() {
  const router = useRouter();
  const id = Number(router.query.character_id);

  return (
    <>
      <Head>
        <title>Character Details</title>
      </Head>
      <CharacterPage id={id} />
    </>
  );
}
