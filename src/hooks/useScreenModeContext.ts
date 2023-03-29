import { useContext } from "react";
// My Assets:
import { ScreenModeContext } from "@/context/ScreenModeProvider";

const useScreenModeContext = () => useContext(ScreenModeContext);

export default useScreenModeContext;
