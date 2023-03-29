import React from "react";
/** My Assets */
import styles from "@/components/BackGroundModal/styles.module.sass";

export default function BackGroundModal({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <div className={styles["back-ground-modal"]}>{children}</div>;
}
