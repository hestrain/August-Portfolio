import ContactForm from "../form/ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Mailto from "react-mailto-link";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import {Button} from "react-bootstrap";
import ResumeModal from "../UI/Modal"

const Email = () => {
  return <Mailto email="hestrain@gmail.com" obfuscated={true} />;
};

const contactstyle = {
  textAlign: "center",
  alignItems: "center",
  marginBottom: "10px",
      borderRadius: "9px",
    border: "2px black solid",
    background: "aliceBlue",
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
      <Row style={{height:"100px"}}></Row>
      <h1>Resume & Contact</h1>

      <Container style={{margin: "10px"}}>
      <Row>
          {/* technical skills card */}
  <Card>
      <Card.Header style={{fontSize:"large", fontFamily:"Arial, Helvetica, sans-serif"}}>Technical Skills</Card.Header>
      <Card.Body>
      <Card.Title style={{borderBottomWidth:'', fontFamily:"Arial, Helvetica, sans-serif"}}> Coding Related</Card.Title>
        <blockquote className="blockquote mb-0">
          <p style={{ fontFamily:"Arial, Helvetica, sans-serif"}}>
            {' '}
            JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL,
              Express, React, Node, Handlebars, jQuery, Bootstrap{' '}
          </p>
          <Card.Title style={{ fontFamily:"Arial, Helvetica, sans-serif", }}>Other</Card.Title>

          <p style={{ fontFamily:"Arial, Helvetica, sans-serif"}}>
            {' '}
            Photoshop, Microsoft Office, Google Suite, Qlab, ETC Element &
            ETC Express lighting boards, Vectorworks{' '}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
        {/* resume card */}
        
    <Card style={{marginTop:"10px"}}>
    <Card.Header style={{fontSize:"large", fontFamily:"Arial, Helvetica, sans-serif"}}>My Resume</Card.Header>

    <Card.Body>

<div style={{textAlign:"center"}}>
      <Button href="https://drive.google.com/file/d/1weWgiDG53lFc1APFjC1xHj1LRHHSjYJW/view?usp=sharing" target="_blank" style={{ fontFamily:"Arial, Helvetica, sans-serif"}}>Download PDF From Google Drive</Button>
      <ResumeModal/>
</div>
    </Card.Body>
  </Card>


    </Row>
  </Container>
  <Row style={{display:"flex", alignContent:"center", justifyContent:"center",}}>
        {/* contact links */}
        <Col md="4">
          <Card style={contactstyle}> 
            <Card.Title style={titlestyle}>Contact Links</Card.Title>
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
        {/* contact form */}
        <Col md="8">
        <Card style={contactstyle}>
          <Card.Title style={titlestyle}>Or, contact me directly with the form below</Card.Title>

          <ContactForm />
        </Card>

        </Col>
      </Row>

      <Row style={{height:"100px"}}></Row>
    </Container>
  );
}
