import React from "react";
import Footer from "../Footer";
import HeaderContainer from "../../containers/HeaderContainer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <HeaderContainer />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
