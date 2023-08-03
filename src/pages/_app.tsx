import "@/styles/reset.css";
import type { AppProps } from "next/app";
import { CharacterList } from "src/components/CharacterList";
import { CharacterProvider } from "src/components/CharacterContext";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <CharacterProvider>
          <CharacterList />
        </CharacterProvider>
      </main>
      <Footer />
      <Component {...pageProps} />
    </>
  );
}
