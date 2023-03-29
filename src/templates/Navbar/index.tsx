import Link from "next/link";
import { useCallback, useEffect, useReducer } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// My Assets:
import { StyledLi } from "./styles";
import styles from "@/templates/Navbar/styles.module.sass";
import { BtnCoreToggle, BtnScreenMode } from "@/components";
import { LinkType } from "@/types";

type StateType = {
  initClick: boolean;
  toggle: boolean;
  cssClass: string;
};

const initState: StateType = {
  initClick: false,
  toggle: false,
  cssClass: `${styles["navbar__links"]}`,
};

type ActionType = {
  type:
    | "INIT_CLICK"
    | "TOGGLE"
    | "CLOSE"
    | "DROPDOWN_TRANSITION"
    | "DROPDOWN"
    | "LINKS_TRANSITION"
    | "LINKS";
};

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "INIT_CLICK":
      return { ...state, initClick: true };
    case "TOGGLE":
      return { ...state, toggle: !state.toggle };
    case "CLOSE":
      return { ...state, toggle: false };
    case "DROPDOWN_TRANSITION":
      return {
        ...state,
        cssClass: `${styles["navbar__links--dropdown"]} ${styles["transition"]}`,
      };
    case "DROPDOWN":
      return { ...state, cssClass: `${styles["navbar__links--dropdown"]}` };
    case "LINKS_TRANSITION":
      return {
        ...state,
        cssClass: `${styles["navbar__links"]} ${styles["transition"]}`,
      };
    case "LINKS":
      return { ...state, cssClass: `${styles["navbar__links"]}` };
    default:
      return state;
  }
}

type PropsType = {
  paths: LinkType[];
};

export default function Navbar({ paths }: PropsType) {
  const [{ initClick, toggle, cssClass }, dispatch] = useReducer(
    reducer,
    initState
  );

  const handleClickToggle = useCallback(() => {
    !initClick && dispatch({ type: "INIT_CLICK" });
    dispatch({ type: "TOGGLE" });
  }, [initClick]);

  const handleClickClose = useCallback(() => dispatch({ type: "CLOSE" }), []);

  useEffect(() => {
    if (!initClick) return;
    toggle
      ? dispatch({ type: "DROPDOWN_TRANSITION" })
      : dispatch({ type: "LINKS_TRANSITION" });
    const id = setTimeout(() => {
      toggle ? dispatch({ type: "DROPDOWN" }) : dispatch({ type: "LINKS" });
    }, 1000);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["navbar__btns"]}>
        <BtnCoreToggle
          name="Menu"
          toggle={toggle}
          handleToggle={handleClickToggle}
        >
          <AiOutlineClose />
          <AiOutlineMenu />
        </BtnCoreToggle>
        <BtnScreenMode />
      </div>
      <ul className={cssClass}>
        {paths.map((el) => (
          <StyledLi key={el.href}>
            <Link scroll={false} href={el.href} onClick={handleClickClose}>
              {el.name}
            </Link>
          </StyledLi>
        ))}
      </ul>
    </nav>
  );
}
