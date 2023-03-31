import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
/** My Assets */
import { UserInterface } from "@/interfaces";

const initState: {
  usersPageNumGob: number;
  handleUsersPageNumGob: (id: number) => void;
  usersResultsListGob: UserInterface[][];
  handleUsersResultsListGob: (array: UserInterface[][]) => void;
  usersModalGob: UserInterface | null;
  handleUsersModalGob: (value: UserInterface | null) => void;
} = {
  usersPageNumGob: 1,
  handleUsersPageNumGob: () => {},
  usersResultsListGob: [],
  handleUsersResultsListGob: () => {},
  usersModalGob: null,
  handleUsersModalGob: () => {},
};

export const UsersContext = createContext<typeof initState>(initState);

export default function UsersProvider({ children }: { children: ReactNode }) {
  const [usersPageNum, setUsersPageNum] = useState(initState.usersPageNumGob);
  const [usersResultsList, setUsersResultsList] = useState(
    initState.usersResultsListGob
  );
  const [usersModal, setUsersModal] = useState<UserInterface | null>(null);
  return (
    <UsersContext.Provider
      value={{
        /** Section id */
        usersPageNumGob: useMemo(() => usersPageNum, [usersPageNum]),
        handleUsersPageNumGob: useCallback(
          (id: number) => setUsersPageNum(() => id),
          []
        ),
        /** Section list */
        usersResultsListGob: useMemo(
          () => usersResultsList,
          [usersResultsList]
        ),
        handleUsersResultsListGob: useCallback((array: UserInterface[][]) => {
          setUsersResultsList(() => array);
        }, []),
        /** Modal */
        usersModalGob: useMemo(() => usersModal, [usersModal]),
        handleUsersModalGob: useCallback(
          (value: UserInterface | null) => setUsersModal(value),
          []
        ),
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}
