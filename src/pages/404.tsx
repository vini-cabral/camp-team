import { PUB_GOOGLE_FONTS_UBUNTU as googleFonts } from "@/env";
import styles from "@/styles/pages/404.module.sass";

export default function Custom404() {
  return (
    <main className={`${styles["main"]} ${googleFonts.className}`}>
      <section>
        <h1>404 - Page Not Found</h1>
      </section>
    </main>
  );
}
