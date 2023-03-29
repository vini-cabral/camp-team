import "styled-components";
// My Assets:
import { ScreenModeType } from "@/types";

export type StdColorsType = {
  primary: string;
  secondary: string;
  aux: string;
  dark: string;
  light: string;
  danger: string;
  warning: string;
  success: string
};

export type ColorsType = {
  background01: string;
  background02: string;
  title: string;
  text01: string;
  text02: string;
};

export type TransitionDurationType = "0s" | "300ms";

declare module "styled-components" {
  export interface DefaultTheme {
    name: ScreenModeType;
    transitionDuration: TransitionDurationType;
    stdColors: StdColorsType;
    colors: ColorsType;
  }
}
