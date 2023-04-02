import { ReactNode } from "react";
/** My Assets */
import { StyledDiv } from "./styles";
import styles from "@/components/FeedbackError/styles.module.sass";

const FeedbackError = ({ children }: { children: ReactNode }) => {
  return (
    <StyledDiv className={`${styles["feedback-error"]} shadow`}>
      {children}
    </StyledDiv>
  );
};

export default FeedbackError;
