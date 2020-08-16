import React from "react";
import Nav from 'react-bootstrap/Nav'
import DropdownProfile from "./dropdown-profile"

function NavbarUser() {
    return (
      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link eventKey="link-1">Futsal</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Football</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <DropdownProfile />
        </Nav.Item>
      </Nav>
    );
  }

export default NavbarUser;
