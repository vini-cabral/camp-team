import { Ubuntu } from "next/font/google";
// My Assets:
import { LinkType, ScreenModeType } from "@/types";

export const PUB_GOOGLE_FONTS_UBUNTU = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const PUB_SCREEN_MODE: ScreenModeType = "light"

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
    name: "Iníco",
    href: "/",
  },
];
