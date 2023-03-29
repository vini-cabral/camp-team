import Head from "next/head";
// My Assets:
import styles from "@/styles/pages/Home.module.sass";
import { PUB_GOOGLE_FONTS_UBUNTU as googleFonts } from "@/env";

export default function Home() {
  return (
    <>
      <Head>
        <title>Camp Team - Página Inicial</title>
        <meta
          name="description"
          content="Camp Team - Application Home Page."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles["main"]} ${googleFonts.className}`}>
        <section>
          <h1>Hello World!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, aperiam dolorem odio quisquam harum ab pariatur et sunt, 
            ad nam ea, non voluptas corrupti atque illum fuga nesciunt! Explicabo, quae!
          </p>
        </section>
      </main>
    </>
  );
}
