import ContactForm from "./form/ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Mailto from "react-mailto-link";
import Card from "react-bootstrap/Card";
import { CardTitle, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const Email = () => {
  return <Mailto email="hestrain@gmail.com" obfuscated={true} />;
};

const contactstyle = {
  textAlign: "center",
  alignItems: "center",
  marginBottom: "10px",
      borderRadius: "9px",
    border: "2px #76E7CD solid",
    background: "#BCD2EE"
};


const titlestyle = {
  fontFamily: "sans-serif",
  fontWeight: "900",
  marginTop: "20px",
  fontSize: "30px",
  color: "2364AA"
}

export default function Contact() {
  return (
    <Container>
       <div style={{textAlign: "center"}}>
         {" "}
         <img
           src="/src/components/images/contactlinks2.png"
           style={{ width: "50%" , marginTop:"20px", marginBottom: "20px"}} alt="Contact Me" title="Contact Me"
         ></img>
       </div>
      <Row>
        <Col md="3">
          <Card style={contactstyle}> 
            <Card.Title style={titlestyle}>Links</Card.Title>
            <Card.Body>
            <ListGroup variant="flush" style={{borderRadius:"9px", border:"solid, 2px, #9C528B "}}>
              <ListGroup.Item style={{backgroundColor:"#76E7CD"}}>
              <img src="/../src/components/images/gmail.webp" style={{width: "30px"}}></img> <Email />
              </ListGroup.Item>
              <ListGroup.Item style={{backgroundColor:"#76E7CD"}}>
                <Card.Link
                  href="https://www.linkedin.com/in/hestrain"
                  target="_blank"
                >
                  <img src="/../src/components/images/linkedin.png" style={{width: "30px"}}></img> LinkedIn
                </Card.Link>
              </ListGroup.Item>
              <ListGroup.Item style={{backgroundColor:"#76E7CD"}}>
                <Card.Link href="https://github.com/hestrain" target="_blank">                  <img src="/../src/components/images/github.png" style={{width: "30px"}}></img> Github
                </Card.Link>
              </ListGroup.Item>
            </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={contactstyle}>
          <Card.Title style={titlestyle}>Or, use the form below</Card.Title>
          <Card.Body></Card.Body>
          <ContactForm />
        </Card>

        </Col>
      </Row>
    </Container>
  );
}
