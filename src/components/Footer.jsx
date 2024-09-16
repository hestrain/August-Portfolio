import React from "react";
import "98.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Footer() {
  return (
    
    <div >
    <Navbar expand="lg" className="bg-dark body-tertiary" fixed="bottom">
        <Navbar.Brand style={{ fontSize: "small", color: "antiquewhite" , margin:"10px"}}>
          © HeatherEllen Strain 2024
          </Navbar.Brand>
      <div className="align">

        <a href="https://github.com/hestrtain" target="_blank" className="footerLink">
          <img
            src="/images/github.png"
            alt="github"
            title="github"
            className="footerImg"
            ></img>
        </a>

        <a href="mailto:hestrain@gmail.com" target="_blank" className="footerLink">
            <img
              src="/images/gmail.webp"
              alt="email"
              title="email"
              className="footerImg"
              
              ></img>
          </a>

          <a href="https://www.linkedin.com/in/hestrain" target="_blank" className="footerLink">
            <img
              src="/images/linkedin.png"
              alt="linkedin"
              title="linkedin"
              className="footerImg"
              
              ></img>
          </a>
        </div>
    </Navbar>
              </div>
  );
}