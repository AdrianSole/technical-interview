import "@/styles/reset.css";
import type { AppProps } from "next/app";
import { CharacterList } from "src/components/CharacterList";
import { Header } from "src/components/Header";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <CharacterList />
      <Component {...pageProps} />
    </>
  );
}
