import React from "react";
import HeaderContainer from "../../containers/HeaderContainer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <HeaderContainer />
      <div style={{ marginTop: "40px", padding: "10px 0" }}>{children}</div>
    </React.Fragment>
  );
};

export default Layout;
