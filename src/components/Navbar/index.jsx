import React from "react";
// import { Link } from "react-router-dom";
import { NavbarContainer, NavItem, NavSpacer } from "./styles";
import ProfessionalProjectionPage from "../ProfessionalProjectionPage";

const Navbar = () => {
  return (
    <>
      <NavSpacer></NavSpacer>
      <NavbarContainer>
        <NavItem to="/">INICIO</NavItem>
        <NavItem to="/cv">MI CURRICULUM</NavItem>
        <NavItem to="/proyeccion-profesional">PROYECCIÓN PROFESIONAL</NavItem>
        <NavItem to="/futuro">FUTURO</NavItem>
      </NavbarContainer>
    </>

  );
};

export default Navbar;
