import React from "react";
import logo from "../assets/logo-small.svg";

function NavBar() {
  return (
    <div className="nav-bar">
      <div id="logo">
        <img src={logo} className="logo-icon" alt="logo" />
        <h1 className="logo-title">roycedevhelp</h1>
      </div>
      <nav>
        <ul>
          <li>ABOUT</li>
          <li>COURSES</li>
          <li>SERVICES</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
