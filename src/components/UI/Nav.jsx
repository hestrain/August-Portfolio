import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import ContactForm from "../form/ContactForm";

export default function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#top">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <ContactForm />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

