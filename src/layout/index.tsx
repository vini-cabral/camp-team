import { ReactNode } from "react";
import RiseLoader from "react-spinners/RiseLoader";
// My Assets:
import GlobalStyle from "@/styles/globals";
import { Footer, Header } from "@/templates";
import { BackGroundModal } from "@/components";
import useAppContext from "@/hooks/useAppContext";

const Layout = ({ children }: { children: ReactNode }) => {
  const { showModalGob, isLoadingGob } = useAppContext();
  return (
    <>
      <GlobalStyle hideBodyScrollbar={showModalGob} />
      {showModalGob && (
        <BackGroundModal>
          {isLoadingGob && <RiseLoader color={"#F5F5F5"} size={20} />}
        </BackGroundModal>
      )}
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
