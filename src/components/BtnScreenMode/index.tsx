import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
// My Assets:
import { BtnCoreToggle } from "..";
import useScreenModeContext from "@/hooks/useScreenModeContext";

export default function BtnScreenMode() {
  const { screenModeGob, handleScreenModeGob } = useScreenModeContext();
  return (
    <BtnCoreToggle
      name="Screen Mode"
      handleToggle={handleScreenModeGob}
      toggle={screenModeGob === "dark" ? false : true}
    >
      <BsFillSunFill />
      <MdDarkMode />
    </BtnCoreToggle>
  );
}
