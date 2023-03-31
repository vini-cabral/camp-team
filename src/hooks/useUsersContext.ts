import { useContext } from "react";
/** My Assets */
import { UsersContext } from "@/context/UsersProvider";

const useUsersContext = () => useContext(UsersContext);

export default useUsersContext;
