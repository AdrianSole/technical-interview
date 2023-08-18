import { Metadata } from "next";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import "@/styles/reset.css";
import styles from "./App.module.css";

export const metadata: Metadata = {
  title: "Rick & Morty Character List",
  description: "List of characters from the Rick & Morty API",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head />
        <body>
          <div className={styles.Container}>
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </>
  );
}
