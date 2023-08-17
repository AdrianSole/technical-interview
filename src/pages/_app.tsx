import "@/styles/reset.css";
import type { AppProps } from "next/app";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import styles from "./App.module.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={styles.Container}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
