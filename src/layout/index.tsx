import { ReactNode } from "react";
// My Assets:
import { Footer, Header } from "@/templates";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
