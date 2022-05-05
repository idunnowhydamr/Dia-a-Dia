import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import icon from '../../Images/icon.svg'

import "bootswatch/dist/litera/bootstrap.min.css";
import { A, LinkTo} from "../../Elements/HeaderElements";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

import "../../CSS/style.css"

export const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const abrirCerrar = () => {
    setDropdown(!dropdown);
  };
   

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="row d-flex flex-row bg-dark"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbar-nav col-md-3 justify-content-center align-items-center">
          <LinkTo to="/Progress">
            <A>Progreso</A>
          </LinkTo>
        </Nav>
        <Nav className="navbar-nav col-md-3 justify-content-center align-items-center">
          <LinkTo to="/Graphics">
            <A>Graficos</A>
          </LinkTo>
        </Nav>
        <div className="d-none d-sm-none d-xs-none d-md-block p-0">
  
        </div>
        <Nav className="navbar-nav col-md-3 justify-content-center align-items-center">
          <LinkTo to="/Calendar">
            <A>Recordatorios</A>
          </LinkTo>
        </Nav>
        <Nav className="navbar-nav col-md-3 justify-content-center align-items-center">
          <Dropdown isOpen={dropdown} toggle={abrirCerrar}>
            <DropdownToggle caret>Perfil</DropdownToggle>
            <DropdownMenu>
              <LinkTo to="/User">
                <DropdownItem>Mi cuenta</DropdownItem>
              </LinkTo>
              <DropdownItem divider />
              <DropdownItem>Cerrar Sesion</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
