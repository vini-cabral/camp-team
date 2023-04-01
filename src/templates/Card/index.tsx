import Image from "next/image";
import { FaMars, FaVenus } from "react-icons/fa";
/** My Assets */
import { UserInterface } from "@/interfaces";
import useAppContext from "@/hooks/useAppContext";
import useUsersContext from "@/hooks/useUsersContext";
import styles from "@/templates/Card/styles.module.sass";
import { StyledCard } from "./styles";
import { useCallback } from "react";

const Card = ({ user }: { user: UserInterface }) => {
  const { handleShowModalGob } = useAppContext();
  const { handleUsersModalGob } = useUsersContext();

  const handleInfo = useCallback(() => {
    handleShowModalGob();
    handleUsersModalGob(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledCard className={styles["card"]}>
      <span>{user.gender === "male" ? <FaMars /> : <FaVenus />}</span>
      <Image
        src={user.picture.large}
        alt={user.name.first}
        width={150}
        height={150}
        priority
      />
      <h3>{`${user.name.first} ${user.name.last}`}</h3>
      <p>{`${user.dob.age} ano${user.dob.age > 1 ? "s" : ""}`}</p>
      <p>{user.phone}</p>
      <button onClick={handleInfo}>Detalhes</button>
    </StyledCard>
  );
};

export default Card;
