import React from "react";
import Dropdown from "react-bootstrap/Dropdown"

function DropdownProfile() {
    
    return (
        <Dropdown alignRight>
        <Dropdown.Toggle id="dropdown-custom-components">
          Haziq
        </Dropdown.Toggle>
    
        <Dropdown.Menu >
          <Dropdown.Item eventKey="1">My Profile</Dropdown.Item>
          <Dropdown.Item eventKey="2">My Booking</Dropdown.Item>
          <Dropdown.Item eventKey="3">Red-Orange</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
}

export default DropdownProfile;