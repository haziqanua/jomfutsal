import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarDefault from './navbar-default';
import NavbarUser from './navbar-user';

function Navibar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
      <Navbar.Brand href="#home">
      <img
        alt=""
        src="./"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Futbol Fanatik
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        <NavbarDefault />
        <NavbarUser />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navibar;
