import { ReactNode } from "react";
import RiseLoader from "react-spinners/RiseLoader";
// My Assets:
import GlobalStyle from "@/styles/globals";
import { Footer, Header } from "@/templates";
import { BackgroundModal } from "@/components";
import useAppContext from "@/hooks/useAppContext";

const Layout = ({ children }: { children: ReactNode }) => {
  const { showModalGob, isLoadingGob } = useAppContext();
  return (
    <>
      <GlobalStyle hideBodyScrollbar={showModalGob} />
      <Header />
      {children}
      <Footer />
      {showModalGob && (
        <BackgroundModal>
          <h1>Modal</h1>
        </BackgroundModal>
      )}
      {isLoadingGob && (
        <BackgroundModal>
          <RiseLoader color={"#F5F5F5"} size={20} />
        </BackgroundModal>
      )}
    </>
  );
};

export default Layout;
