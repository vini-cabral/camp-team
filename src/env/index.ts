import { Ubuntu } from "next/font/google";
/** My Assets: */
import { LinkType, ScreenModeType } from "@/types";

/** Google Fonts */
export const PUB_GOOGLE_FONTS_UBUNTU = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

/** Api Users */
export const PUB_RESULTS = 3;

export const PUB_MAX_PAGE = 3;

/** App Screen Mode (Init) */
export const PUB_SCREEN_MODE: ScreenModeType = "light";

/** App Links */
export const PUB_LINK_AUTHOR: LinkType = {
  name: "Vinícius Cabral",
  href: "https://github.com/vini-cabral/",
};

export const PUB_LINK_REPO: LinkType = {
  name: "Camp Team",
  href: "https://github.com/vini-cabral/camp-team",
};

export const PUB_APP_ROUTES: LinkType[] = [
  {
    name: "Início",
    href: "/",
  },
  {
    name: "Usuários",
    href: "/users",
  },
];
