import React from "react";
import "./css/SideBar.css"
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu right {...props}>
      <a className="menu-item" href="/toa">
        Terms of Agreement
      </a>

      <a className="menu-item" href="/about-me">
        About Me
      </a>

      <a className="menu-item" href="/preparation">
        How to Prepare
      </a>

      <a className="menu-item" href="/services">
        Services
      </a>
    </Menu>
  );
};