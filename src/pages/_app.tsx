import "@/styles/reset.css";
import type { AppProps } from "next/app";
import { CharacterList } from "src/components/CharacterList";
import { CharacterProvider } from "src/components/CharacterContext";
import { Header } from "src/components/Header";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <CharacterProvider>
        <CharacterList />
      </CharacterProvider>
      <Component {...pageProps} />
    </>
  );
}
