import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"
import FormLogin from "./login-form"

function ModalLogin() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Log In
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body><FormLogin /></Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
          
        </Modal>
      </>
    );
}

// render(<Example />);

export default ModalLogin;