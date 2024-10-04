import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Row } from "react-bootstrap";

export default function Footer() {
  return (
    <div>
      <Navbar expand="lg" className="bg-dark body-tertiary" fixed="sticky">
        <Row>

        <Navbar.Brand
          style={{ fontSize: "small", color: "antiquewhite", margin: "10px" }}
        >
          © HeatherEllen Strain 2024
        </Navbar.Brand>
        </Row>
        <div className="align">
          <a
            href="https://github.com/hestrtain"
            target="_blank"
            className="footerLink"
          >
            <img
              src="/images/githubBlack.webp"
              alt="github"
              title="github"
              className="footerImg"
            ></img>
          </a>

          <a
            href="mailto:hestrain@gmail.com"
            target="_blank"
            className="footerLink"
          >
            <img
              src="/images/mail.png"
              alt="email"
              title="email"
              className="footerImg"
              style={{backgroundColor:"white"}}
            ></img>
          </a>

          <a
            href="https://www.linkedin.com/in/hestrain"
            target="_blank"
            className="footerLink"
          >
            <img
              src="/images/LI-In-Bug.png"
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
