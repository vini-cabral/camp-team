import React from "react";
/** My Assets */
import styles from "@/components/BackgroundModal/styles.module.sass";

export default function BackgroundModal({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <div className={styles["back-ground-modal"]}>{children}</div>;
}
