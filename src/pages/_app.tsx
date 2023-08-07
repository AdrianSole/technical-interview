import "@/styles/reset.css";
import type { AppProps } from "next/app";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
