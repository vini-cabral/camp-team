import { PUB_GOOGLE_FONTS_UBUNTU as googleFonts } from "@/env";
import { FeedbackError } from "@/components";
import styles from "@/styles/pages/404.module.sass";

export default function Custom404() {
  return (
    <main className={`${styles["main"]} ${googleFonts.className}`}>
      <FeedbackError>
        <h1>Erro 404!</h1>
        <p>Página indisponível.</p>
      </FeedbackError>
    </main>
  );
}
