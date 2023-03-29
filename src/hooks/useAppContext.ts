import { useContext } from "react";
/** My Assets */
import { AppContext } from "@/context/AppProvider";

const useAppContext = () => useContext(AppContext);

export default useAppContext;
