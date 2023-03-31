import Head from "next/head";
import { useQuery } from "react-query";
import { useEffect } from "react";
// My Assets:
import styles from "@/styles/pages/Home.module.sass";
import { PUB_GOOGLE_FONTS_UBUNTU as googleFonts } from "@/env";
import { services } from "@/services";
import useAppContext from "@/hooks/useAppContext";
import useUsersContext from "@/hooks/useUsersContext";

export default function Home() {
  const { handleIsLoadingGob } = useAppContext();

  const {
    usersSectionIdGob,
    handleUsersSectionIdGob,
    usersSectionListGob,
    handleUsersSectionListGob,
  } = useUsersContext();

  const { data, isError, isLoading } = useQuery(
    ["user-list", usersSectionIdGob],
    () => services.getUsers(usersSectionIdGob, "br")
  );

  useEffect(() => {
    handleIsLoadingGob(isLoading);
    if (data) {
      usersSectionListGob[usersSectionIdGob - 1] = data.results;
      handleUsersSectionListGob(usersSectionListGob);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading]);

  if (isError && !isLoading) {
    return (
      <main
        className={`${styles["main"]} ${googleFonts.className}`}
        style={{ justifyContent: "center" }}
      >
        <h1>Ops :( algo deu errado!</h1>
        <p>Fique tranquilo nosso time foi notificado!</p>
      </main>
    );
  }

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
          <h1>Hello World!</h1>
          {usersSectionListGob.map((list) =>
            list.map((item) => (
              <div key={`name:${item.id.name}-value:${item.id.value}`}>
                <h3>{item.name.first}</h3>
              </div>
            ))
          )}
          <button
            className="init-card"
            style={{ color: "black" }}
            onClick={() => handleUsersSectionIdGob(usersSectionIdGob + 1)}
          >
            Add +
          </button>
        </section>
      </main>
    </>
  );
}
