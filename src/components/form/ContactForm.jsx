import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from "react";
import { Form } from 'react-bootstrap';

function ContactForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "Ycee80e4e-01b7-4d09-a5eb-4d412292a354");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <Button className='contactBtn' onClick={handleShow}>
        Contact Me 
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton className='lightBG'>
          <Modal.Title>Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className='lightBG' >
      <form onSubmit={onSubmit} className='contactForm'>
        <label for="cName">Name</label>
        <input id="cName" style={{color:"black"}} type="text" name="name" required/>
        <label for="cEmail">Email Address</label>
        <input id="cEmail" type="email" name="email" required/>
        <label for="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button className="contactBtn submitBtn" type="submit">Submit Form</button>

      </form>
      <span>{result}</span>

    </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactForm;