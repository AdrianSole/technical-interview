import "@/styles/reset.css";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import { CharacterList } from "src/components/CharacterList";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CharacterList />
      <Component {...pageProps} />
    </>
  );
}
