import { Ubuntu } from "next/font/google";
/** My Assets: */
import { LinkType, ScreenModeType } from "@/types";

/** Google Fonts */
export const PUB_GOOGLE_FONTS_UBUNTU = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

/** Api Random User Generator: https://randomuser.me/ */
export const PUB_RANDOMUSER_URL = "https://randomuser.me/api/1.4/";

export const PUB_RANDOMUSER_NAT = [
  "AU",
  "BR",
  "CA",
  "CH",
  "DE",
  "DK",
  "ES",
  "FI",
  "FR",
  "GB",
  "IE",
  "IN",
  "IR",
  "MX",
  "NL",
  "NO",
  "NZ",
  "RS",
  "TR",
  "UA",
  "US",
];

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
    name: "Iníco",
    href: "/",
  },
];
