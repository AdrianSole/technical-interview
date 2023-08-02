import "@/styles/reset.css";
import type { AppProps } from "next/app";
import { CharacterList } from "src/components/CharacterList";
import { CharacterProvider } from "src/components/CharacterContext";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CharacterProvider>
        <Header />
        <main>
          <CharacterList />
        </main>
      </CharacterProvider>
      <Footer />
      <Component {...pageProps} />
    </>
  );
}
