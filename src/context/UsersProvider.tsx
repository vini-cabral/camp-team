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
  usersSectionIdGob: number;
  handleUsersSectionIdGob: (id: number) => void;
  usersSectionListGob: UserInterface[][];
  handleUsersSectionListGob: (array: UserInterface[][]) => void;
} = {
  usersSectionIdGob: 1,
  handleUsersSectionIdGob: () => {},
  usersSectionListGob: [],
  handleUsersSectionListGob: () => {},
};

export const UsersContext = createContext<typeof initState>(initState);

export default function UsersProvider({ children }: { children: ReactNode }) {
  const [usersSectionId, setUsersSectionId] = useState(
    initState.usersSectionIdGob
  );
  const [usersSectionList, setUsersSectionList] = useState(
    initState.usersSectionListGob
  );
  return (
    <UsersContext.Provider
      value={{
        /** Users section id */
        usersSectionIdGob: useMemo(() => usersSectionId, [usersSectionId]),
        handleUsersSectionIdGob: useCallback(
          (id: number) => setUsersSectionId(() => id),
          []
        ),
        /** Users section list */
        usersSectionListGob: useMemo(
          () => usersSectionList,
          [usersSectionList]
        ),
        handleUsersSectionListGob: useCallback((array: UserInterface[][]) => {
          setUsersSectionList(() => array);
        }, []),
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}
