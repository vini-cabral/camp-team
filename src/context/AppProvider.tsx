import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
// My Assets:
import ScreenModeProvider from "./ScreenModeProvider";

const initState: {
  showModalGob: boolean;
  handleShowModalGob: () => void;
  handleHideModalGob: () => void;
} = {
  showModalGob: false,
  handleShowModalGob: () => {},
  handleHideModalGob: () => {},
};

export const AppContext = createContext<typeof initState>(initState);

export default function AppProvider({ children }: { children: ReactNode }) {
  const [showModal, setShowModal] = useState(initState.showModalGob);
  return (
    <AppContext.Provider
      value={{
        showModalGob: useMemo(() => showModal, [showModal]),
        handleShowModalGob: useCallback(() => setShowModal(() => true), []),
        handleHideModalGob: useCallback(() => setShowModal(() => false), []),
      }}
    >
      <ScreenModeProvider>{children}</ScreenModeProvider>
    </AppContext.Provider>
  );
}
