import Link from "next/link";
/** My Assets */
import { StyledHeader } from "./styles";
import styles from "@/templates/Header/styles.module.sass";
import { PUB_GOOGLE_FONTS_UBUNTU as googleFonts, PUB_APP_ROUTES } from "@/env";
import { Navbar } from "..";

const Header = () => {
  return (
    <StyledHeader className={`${styles["header"]} shadow`}>
      <div
        className={`${styles["header__container"]} ${googleFonts.className}`}
      >
        <Link href={"/"} className={styles["header__container__logo"]}>
          <strong>
            CAMP<span>TEAM</span>
          </strong>
        </Link>
        <Navbar paths={[...PUB_APP_ROUTES]} />
      </div>
    </StyledHeader>
  );
};

export default Header;
