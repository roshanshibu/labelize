import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Branding from "assets/Branding.svg";
import i_home from "assets/homeIcon.svg";
import i_image from "assets/imageIcon.svg";
import i_bell from "assets/bellIcon.svg";
import i_avatar from "assets/avatar.png";

const NavIcon = (props) => {
  return (
    <img
      src={props.icon}
      className={`navIcon ${props.hideMobile ? "hide-mobile" : ""}`}
      onClick={props.onClick ? props.onClick : null}
    />
  );
};

const Navbar = () => {
  return (
    <div className="navContainer">
      <img src={Branding} className="hide-mobile" />
      <div className="navIconContainer">
        <NavLink to="/">
          <NavIcon icon={i_home} />
        </NavLink>
        <NavLink to="/upload">
          <NavIcon icon={i_image} />
        </NavLink>
        <NavIcon icon={i_bell} hideMobile={true} />
        <NavLink to="/profile">
          <NavIcon icon={i_avatar} />
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
