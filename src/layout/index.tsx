import { ReactNode } from "react";
// My Assets:
import GlobalStyle from "@/styles/globals";
import { Footer, Header } from "@/templates";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <GlobalStyle hideBodyScrollbar={false} />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
