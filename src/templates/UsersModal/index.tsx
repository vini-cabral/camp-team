import Image from "next/image";
import { useCallback, useMemo } from "react";
import { IoClose } from "react-icons/io5";
/** My Assets */
import useAppContext from "@/hooks/useAppContext";
import useUsersContext from "@/hooks/useUsersContext";
import styles from "@/templates/UsersModal/styles.module.sass";
import { StyledUserInfo } from "./styles";

const UsersModal = () => {
  const { handleHideModalGob } = useAppContext();
  const { handleUsersModalGob, usersModalGob } = useUsersContext();

  const handleClose = useCallback(() => {
    handleHideModalGob();
    handleUsersModalGob(null);
  }, [handleHideModalGob, handleUsersModalGob]);

  const personalDetails = useMemo(() => {
    return (
      usersModalGob && [
        ["Nome", `${usersModalGob.name.first} ${usersModalGob?.name.last}`],
        [
          "Gênero",
          `${usersModalGob.gender === "female" ? "Feminino" : "Masculino"}`,
        ],
        ["User", `${usersModalGob.username}`],
        ["CPF", `${usersModalGob.id.value}`],
        [
          "Data de nascimento",
          `${new Intl.DateTimeFormat("pt-BR").format(
            new Date(usersModalGob.dob.date)
          )}`,
        ],
        [
          "Idade",
          `${usersModalGob.dob.age} ano${usersModalGob.dob.age > 1 ? "s" : ""}`,
        ],
        [
          "Data de registro",
          `${new Intl.DateTimeFormat("pt-BR").format(
            new Date(usersModalGob.registered.date)
          )}`,
        ],
      ]
    );
  }, [usersModalGob]);

  const contactInfo = useMemo(() => {
    return (
      usersModalGob && [
        ["Email", `${usersModalGob.email}`],
        ["Telefone", `${usersModalGob.phone}`],
        ["Cell", `${usersModalGob.cell}`],
      ]
    );
  }, [usersModalGob]);

  const address = useMemo(() => {
    return (
      usersModalGob && [
        ["Cidade", `${usersModalGob.location.city}`],
        [
          "Rua",
          `${usersModalGob.location.street.name}, Número ${usersModalGob.location.street.number}`,
        ],
        ["Estado", `${usersModalGob.location.state}`],
        ["Código postal", `${usersModalGob.location.postcode}`],
        ["País", `${usersModalGob.location.country}`],
      ]
    );
  }, [usersModalGob]);

  return (
    usersModalGob &&
    personalDetails &&
    contactInfo &&
    address && (
      <StyledUserInfo className={`${styles["user-info"]} shadow`}>
        <div className={styles["user-info__close"]}>
          <button onClick={handleClose}>
            <IoClose />
          </button>
        </div>
        <div className={styles["user-info__avatar"]}>
          <Image
            src={usersModalGob.picture.large}
            alt={usersModalGob.name.first}
            width={200}
            height={200}
            priority
          />
          <h3>{`${usersModalGob.name.title}. ${usersModalGob.name.last}`}</h3>
          <h4>{`${usersModalGob.location.city}, ${usersModalGob.location.country}`}</h4>
        </div>
        <div>
          <h5>Dados pessoais</h5>
          {personalDetails.map((item) => (
            <p key={item[0]}>
              {`${item[0]}:`} <strong>{item[1]}</strong>
            </p>
          ))}
        </div>
        <div>
          <h5>Contato</h5>
          {contactInfo.map((item) => (
            <p key={item[0]}>
              {`${item[0]}:`} <strong>{item[1]}</strong>
            </p>
          ))}
        </div>
        <div>
          <h5>Endereço</h5>
          {address.map((item) => (
            <p key={item[0]}>
              {`${item[0]}:`} <strong>{item[1]}</strong>
            </p>
          ))}
        </div>
        <div className={styles["user-info__container-btn"]}>
          <button onClick={handleClose}>Fechar</button>
        </div>
      </StyledUserInfo>
    )
  );
};

export default UsersModal;
