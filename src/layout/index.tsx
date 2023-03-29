import { ReactNode } from "react";
// My Assets:
import GlobalStyle from "@/styles/globals";
import { Footer, Header } from "@/templates";
import { BackGroundModal } from "@/components";
import useAppContext from "@/hooks/useAppContext";

const Layout = ({ children }: { children: ReactNode }) => {
  const { showModalGob } = useAppContext();
  return (
    <>
      <GlobalStyle hideBodyScrollbar={showModalGob} />
      {showModalGob && <BackGroundModal>Loading...</BackGroundModal>}
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
