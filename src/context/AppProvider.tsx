import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { QueryClient, QueryClientProvider } from "react-query";
// My Assets:
import ScreenModeProvider from "./ScreenModeProvider";
import UsersProvider from "./UsersProvider";

const initState: {
  showModalGob: boolean;
  handleShowModalGob: () => void;
  handleHideModalGob: () => void;
  isLoadingGob: boolean;
  handleIsLoadingGob: (bool: boolean) => void;
} = {
  showModalGob: false,
  handleShowModalGob: () => {},
  handleHideModalGob: () => {},
  isLoadingGob: false,
  handleIsLoadingGob: () => {},
};

export const AppContext = createContext<typeof initState>(initState);

const queryClient = new QueryClient();

export default function AppProvider({ children }: { children: ReactNode }) {
  const [showModal, setShowModal] = useState(initState.showModalGob);
  const [isLoading, setIsLoading] = useState(initState.isLoadingGob);
  return (
    <AppContext.Provider
      value={{
        /** Modal */
        showModalGob: useMemo(() => showModal, [showModal]),
        handleShowModalGob: useCallback(() => setShowModal(() => true), []),
        handleHideModalGob: useCallback(() => setShowModal(() => false), []),
        /** Loading */
        isLoadingGob: useMemo(() => isLoading, [isLoading]),
        handleIsLoadingGob: useCallback(
          (bool: boolean) => setIsLoading(() => bool),
          []
        ),
      }}
    >
      <UsersProvider>
        <QueryClientProvider client={queryClient}>
          <ScreenModeProvider>{children}</ScreenModeProvider>
        </QueryClientProvider>
      </UsersProvider>
    </AppContext.Provider>
  );
}
