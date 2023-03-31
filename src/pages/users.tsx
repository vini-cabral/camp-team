import Head from "next/head";
import { useQuery } from "react-query";
import { useEffect } from "react";
// My Assets:
import styles from "@/styles/pages/Users.module.sass";
import { PUB_GOOGLE_FONTS_UBUNTU as googleFonts } from "@/env";
import { services } from "@/services";
import useAppContext from "@/hooks/useAppContext";
import useUsersContext from "@/hooks/useUsersContext";
import { Card } from "@/templates";

export default function Users() {
  const { handleIsLoadingGob } = useAppContext();

  const {
    usersPageNumGob,
    handleUsersPageNumGob,
    usersResultsListGob,
    handleUsersResultsListGob,
  } = useUsersContext();

  const { data, isError, isLoading } = useQuery(
    ["user-list", usersPageNumGob],
    () => services.getUsers(usersPageNumGob, "br")
  );

  useEffect(() => {
    handleIsLoadingGob(isLoading);
    if (data) {
      usersResultsListGob[usersPageNumGob - 1] = data.results;
      handleUsersResultsListGob(usersResultsListGob);
    }
    if (isError) {
      handleUsersPageNumGob(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading, isError]);

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
        <meta name="description" content="Camp Team - Application User List." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles["main"]} ${googleFonts.className}`}>
        <section>
          <h1>Lista de Usuários</h1>
          <div className={styles["results"]}>
            {usersResultsListGob.map((results) =>
              results.map((user) => (
                <Card
                  key={`name:${user.id.name}-value:${user.id.value}`}
                  user={user}
                />
              ))
            )}
          </div>
          <div className={`${styles["container-btn-load"]}`}>
            <button
              className="init-card"
              onClick={() => handleUsersPageNumGob(usersPageNumGob + 1)}
            >
              Carregar mais...
            </button>
          </div>
        </section>
      </main>
    </>
  );
}