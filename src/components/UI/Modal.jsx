import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ResumeModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{background:"3CBBB1"}} onClick={handleShow}>
       Or, Click Me!
      </Button>

      <Modal  size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Full Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body> <iframe src="https://docs.google.com/document/d/1mFqj2ADuve63dSw5hCTL6esc20IDoPmeLhE4TTBtI_U/edit#heading=h.jl50kwavsrpr" style={{ width: '100%', height: '1000px' , textAlign:"center", alignself:"center"}}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

