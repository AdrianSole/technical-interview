import Head from "next/head";
import { CharacterList } from "src/components/CharacterList";
import { CharacterProvider } from "src/components/CharacterContext";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rick & Morty Character List</title>
      </Head>


      <main>
        <CharacterProvider>
          <CharacterList />
        </CharacterProvider>
      </main>
    </>
  );
}
