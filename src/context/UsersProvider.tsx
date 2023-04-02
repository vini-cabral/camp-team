import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
/** My Assets */
import { UserInterfaceClient } from "@/interfaces";

const initState: {
  usersPageNumGob: number;
  handleUsersPageNumGob: (id: number) => void;
  usersResultsListGob: UserInterfaceClient[][];
  handleUsersResultsListGob: (array: UserInterfaceClient[][]) => void;
  usersModalGob: UserInterfaceClient | null;
  handleUsersModalGob: (value: UserInterfaceClient | null) => void;
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
  const [usersModal, setUsersModal] = useState<UserInterfaceClient | null>(
    null
  );
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
        handleUsersResultsListGob: useCallback(
          (array: UserInterfaceClient[][]) => {
            setUsersResultsList(() => array);
          },
          []
        ),
        /** Modal */
        usersModalGob: useMemo(() => usersModal, [usersModal]),
        handleUsersModalGob: useCallback(
          (value: UserInterfaceClient | null) => setUsersModal(value),
          []
        ),
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}
