import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"
import FormSignUp from "./signup-form"

function ModalSignUp() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="info" onClick={handleShow}>
          Sign Up
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <FormSignUp />
            </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
          
        </Modal>
      </>
    );
}

export default ModalSignUp;