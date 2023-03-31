import useAppContext from "@/hooks/useAppContext";
import useUsersContext from "@/hooks/useUsersContext";

const UsersModal = () => {
  const { handleHideModalGob } = useAppContext();
  const { handleUsersModalGob, usersModalGob } = useUsersContext();
  return (
    <div
      onClick={() => {
        handleHideModalGob();
        handleUsersModalGob(null);
      }}
    >
      {usersModalGob?.name.first}
    </div>
  );
};

export default UsersModal;
