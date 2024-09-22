import React, { useContext } from "react";

import logo from "../assets/logo.png";
import navflow from "../assets/nav-flow.png";

import "../css/HeadStyle.css";
import { NavBarContext } from "../context/NavBarContext";

function Head() {
  const navbarcontext = useContext(NavBarContext);
  function toggleNavBar() {
    if (!navbarcontext.NavValue) {
      navbarcontext.setNavValue(true);
    } else {
      navbarcontext.setNavValue(false);
    }
  }

  return (
    <div id="header">
      <img id="tao-logo" src={logo} alt="" />
      <div id="nav-flow" onClick={toggleNavBar}>
        <img id="nav-flow" src={navflow} alt="" />
      </div>
    </div>
  );
}

export default Head;
