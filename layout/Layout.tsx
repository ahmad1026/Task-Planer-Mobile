import React from "react";
import ButtomNavbar from "../components/Footer/ButtomNavbar";
import Header from "../components/header/Header";

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <ButtomNavbar />
    </>
  );
};

export default Layout;
