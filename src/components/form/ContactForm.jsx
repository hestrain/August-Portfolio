import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from "react";
// npm install react-hook-form @web3forms/react
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";


function ContactForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {register, reset, handleSubmit} = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "cee80e4e-01b7-4d09-a5eb-4d412292a354";
const [userName, setUserName] = useState("");
  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Heathers Portfolio",
      subject: "New Contact Message from your Website",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

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
      <form onSubmit={handleSubmit(onSubmit)} className='contactForm'>
        <label for="cName">Name</label>
        <input id="cName" onChange={e => setUserName(e.target.value)} {...register("name", {required: true})} style={{color:"black"}} type="text" name="name" required/>
        <label for="cEmail">Email Address</label>
        <input id="cEmail" {...register("email", {required:true})} type="email" name="email" required/>
        <label for="message">Message</label>
        <textarea id="message" {...register("message", {required:true})} name="message" required></textarea>

        <button className="contactBtn submitBtn" type="submit">Submit Form</button>

      </form>
      <div>{result}</div>

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