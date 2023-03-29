import { ReactNode } from "react";
// My Assets:
import { StyledSpan } from "./styles";
import styles from "@/components/BtnCoreToggle/styles.module.sass";

export default function BtnCoreToggle({
  name,
  children,
  toggle,
  handleToggle,
}: {
  name: string;
  children: ReactNode;
  toggle: boolean;
  handleToggle: () => void;
}) {
  return (
    <StyledSpan
      className={styles[toggle ? "state--on" : "state--off"]}
      onClick={handleToggle}
      title={name}
    >
      <>{children}</>
    </StyledSpan>
  );
}
