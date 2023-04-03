import { useCallback, useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";
/** My Assets */
import styles from "@/components/BtnScrollUp/styles.module.sass";

const BtnScrollUp = () => {
  const [hide, setHide] = useState(true);

  useEffect(() => {
    function handleEvent() {
      if (window.pageYOffset > window.screen.height / 5) {
        setHide(() => false);
      } else {
        setHide(() => true);
      }
    }
    window.addEventListener("scroll", handleEvent);
    return () => {
      window.removeEventListener("scroll", handleEvent);
    };
  }, []);

  const handleClick = useCallback(
    () =>
      window.scroll({
        top: 0,
        behavior: "smooth",
      }),
    []
  );

  return (
    <button
      className={
        hide ? styles["btn-scroll-top-hide"] : styles["btn-scroll-top-show"]
      }
      onClick={handleClick}
    >
      <BiArrowToTop />
    </button>
  );
};

export default BtnScrollUp;
