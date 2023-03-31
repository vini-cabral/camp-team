import Head from "next/head";
import { AiOutlineTeam } from "react-icons/ai";
// My Assets:
import styles from "@/styles/pages/Home.module.sass";
import { PUB_GOOGLE_FONTS_UBUNTU as googleFonts } from "@/env";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Camp Team - Página Inicial</title>
        <meta name="description" content="Camp Team - Application Home Page." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles["main"]} ${googleFonts.className}`}>
        <section>
          <h1>Bem vindo ao Acampamento!</h1>
          <p>Para visualizar a lista de usuários clique no botão abaixo.</p>
          <button
            onClick={() =>
              router.push(
                {
                  pathname: "/users",
                },
                undefined,
                { scroll: false }
              )
            }
          >
            <span>
              <AiOutlineTeam />
            </span>
            <span>Lista de Usuários</span>
          </button>
        </section>
      </main>
    </>
  );
}
