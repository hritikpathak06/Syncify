import React from "react";
import Header from "../../components/Header/Header";
import "./Layout.scss"

const Layout = ({ children }) => {
  return (
    <div className="layout">
    <div className="sub__layout">
    <div className="left__layout">
      <Header />
    </div>
    <div className="right__layout">
      {children}
    </div>
    </div>
    </div>
  );
};

export default Layout;
