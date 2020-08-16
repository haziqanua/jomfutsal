import React from "react";
import Nav from "react-bootstrap/Nav";
import ModalLogin from "../form/login-modal"
import ModalSignUp from "../form/signup-modal"

function NavbarDefault() {
  return (
    <Nav className="justify-content-end">
      <Nav.Item>
        <Nav.Link eventKey="link-1">Futsal</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Football</Nav.Link>
      </Nav.Item>
      <Nav.Item>
          <ModalLogin />
      </Nav.Item>
      <Nav.Item>
          <ModalSignUp />
      </Nav.Item>
    </Nav>
  );
}

export default NavbarDefault;
