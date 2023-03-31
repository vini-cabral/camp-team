import Image from "next/image";
import { FaMars, FaVenus } from "react-icons/fa";
/** My Assets */
import { UserInterface } from "@/interfaces";
import useAppContext from "@/hooks/useAppContext";
import useUsersContext from "@/hooks/useUsersContext";
import styles from "@/templates/Card/styles.module.sass";
import { StyledCard } from "./styles";

const Card = ({ user }: { user: UserInterface }) => {
  const { handleShowModalGob } = useAppContext();
  const { handleUsersModalGob } = useUsersContext();

  return (
    <StyledCard className={styles["card"]}>
      {user.gender === "male" ? <FaMars /> : <FaVenus />}
      <Image src={user.picture.thumbnail} alt={""} width={100} height={100} />
      <h3>{`${user.name.first} ${user.name.last}`}</h3>
      <p>
        {new Intl.DateTimeFormat("pt-BR").format(
          new Date(user.registered.date)
        )}
      </p>
      <p>{user.phone}</p>
      <button
        onClick={() => {
          handleShowModalGob();
          handleUsersModalGob(user);
        }}
      >
        View
      </button>
    </StyledCard>
  );
};

export default Card;
