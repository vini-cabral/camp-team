import React from "react";
/** My Assets */
import styles from "@/components/BackGroundModal/styles.module.sass";
import useAppContext from "@/hooks/useAppContext";

export default function BackGroundModal({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { handleHideModalGob } = useAppContext();
  return (
    <div onClick={handleHideModalGob} className={styles["back-ground-modal"]}>
      {children}
    </div>
  );
}
