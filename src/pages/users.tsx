import Head from "next/head";
import { useQuery } from "react-query";
import { useCallback, useEffect, useState } from "react";
// My Assets:
import styles from "@/styles/pages/Users.module.sass";
import {
  PUB_MAX_PAGE,
  PUB_RESULTS,
  PUB_GOOGLE_FONTS_UBUNTU as googleFonts,
} from "@/env";
import { clientApi } from "@/services/client";
import useAppContext from "@/hooks/useAppContext";
import useUsersContext from "@/hooks/useUsersContext";
import { Card } from "@/templates";
import { FeedbackError } from "@/components";

export default function Users() {
  const { handleIsLoadingGob } = useAppContext();

  const {
    usersPageNumGob,
    handleUsersPageNumGob,
    usersResultsListGob,
    handleUsersResultsListGob,
  } = useUsersContext();

  const [pageNum, setPageNum] = useState(usersPageNumGob);

  const { data, isError, isLoading } = useQuery(["user-list", pageNum], () =>
    clientApi.getUsers(pageNum, "br", PUB_RESULTS)
  );

  useEffect(() => {
    handleIsLoadingGob(isLoading);
    if (data) {
      usersResultsListGob[pageNum - 1] = data.results;
      handleUsersResultsListGob(usersResultsListGob);
    }
    if (!isLoading) {
      handleUsersPageNumGob(pageNum);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handlePageNum = useCallback(() => setPageNum((prev) => prev + 1), []);

  if (isError && !isLoading) {
    return (
      <main
        className={`${styles["main"]} ${googleFonts.className}`}
        style={{ justifyContent: "center" }}
      >
        <FeedbackError>
          <h1>Ops :( algo deu errado!</h1>
          <p>Fique tranquilo, nosso time foi notificado!</p>
        </FeedbackError>
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
        {Array.isArray(usersResultsListGob) &&
          usersResultsListGob.length > 0 && (
            <section>
              <h1>Lista de Usuários</h1>
              <div className={styles["results"]}>
                {usersResultsListGob
                  .filter((el) => Array.isArray(el) && el.length > 0)
                  .map((results) =>
                    results.map((user) => (
                      <Card
                        key={`name:${user.id.name}-value:${user.id.value}`}
                        user={user}
                      />
                    ))
                  )}
              </div>
              {usersPageNumGob < PUB_MAX_PAGE && (
                <div className={`${styles["container-btn-load"]}`}>
                  <button className="init-card" onClick={handlePageNum}>
                    Carregar mais...
                  </button>
                </div>
              )}
            </section>
          )}
      </main>
    </>
  );
}
