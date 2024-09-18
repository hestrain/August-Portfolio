import ContactForm from "../form/ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Mailto from "react-mailto-link";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
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
    background: "#BCD2EE",
    minWidth:"200px",
margin:"10px",
padding:"15px",
fontFamily:"Arial, Helvetica, sans-serif"

};


const titlestyle = {
  fontFamily: "sans-serif",
  fontWeight: "900",
  marginTop: "20px",
  fontSize: "30px",
  color: "2364AA"
}

const iconstyle = {
  width: "30px",
  backgroundColor: "white",
  borderRadius: "9px",
  alignContent: "center",

};

export default function Contact() {
  return (
    <Container>
       <div style={{textAlign: "center"}}>
         {" "}
         <img
           src="/images/contact4.png"
           style={{ width: "30%"}} alt="Contact Me" title="Contact Me"
         ></img>
       </div>
      <Row style={{display:"flex", alignContent:"center", justifyContent:"center",}}>
        <Col md="4">
          <Card style={contactstyle}> 
            <Card.Title style={titlestyle}>Links</Card.Title>
            <Card.Body>
            <ListGroup variant="flush" style={{borderRadius:"9px", border:"solid, 2px, #9C528B ", fontSize:"medium"}}>
              <ListGroup.Item style={{}}>
              <img src="/images/gmail.webp" style={iconstyle}></img> <Email />
              </ListGroup.Item>
              <ListGroup.Item style={{}}>
                <Card.Link
                  href="https://www.linkedin.com/in/hestrain"
                  target="_blank"
                >
                  <img src="/images/linkedin.png" style={iconstyle}></img> LinkedIn
                </Card.Link>
              </ListGroup.Item>
              <ListGroup.Item style={{}}>
                <Card.Link href="https://github.com/hestrain" target="_blank">                  
                <img src="/images/github.png" style={iconstyle}></img> Github
                </Card.Link>
              </ListGroup.Item>
            </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md="8">
        <Card style={contactstyle}>
          <Card.Title style={titlestyle}>Or, use the form below</Card.Title>

          <ContactForm />
        </Card>

        </Col>
      </Row>
      <Row style={{height:"100px"}}></Row>
    </Container>
  );
}
