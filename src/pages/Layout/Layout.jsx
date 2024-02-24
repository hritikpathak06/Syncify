import React from "react";
import Header from "../../components/Header/Header";
import "./Layout.scss";
import Drawer from "../../components/Drawer/Drawer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="sub__layout">
        <div className="left__layout">
          <div className="left__layout__header">
            <Header />
          </div>
          <div className="left__layout__drawer">
            <Drawer />
          </div>
        </div>
        <div className="right__layout">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
