import { ReactNode } from "react";
// My Assets:
import ScreenModeProvider from "./ScreenModeProvider";

export default function AppProvider({ children }: { children: ReactNode }) {
  return <ScreenModeProvider>{children}</ScreenModeProvider>;
}
