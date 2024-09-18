import {Container} from "react-bootstrap";
import {Card} from "react-bootstrap";
import { Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Button} from "react-bootstrap";
import ResumeModal from "../UI/Modal"

export default function Resume() {
  return(
    <Container style={{margin: "10px"}}>
      <div style={{ textAlign:"center"}}>
        <img
          src="/images/resume5.png"
          alt="Resume"
          style={{ width:"30%" }}
          title="Resume"
        ></img>
      </div>
      <Row>
        <Col>
    <Card>
    <Card.Header style={{fontSize:"large", fontFamily:"Arial, Helvetica, sans-serif"}}>My Resume</Card.Header>

    <Card.Body>
      <Button href="https://drive.google.com/file/d/1weWgiDG53lFc1APFjC1xHj1LRHHSjYJW/view?usp=sharing" target="_blank" style={{ fontFamily:"Arial, Helvetica, sans-serif"}}>Download PDF From Google Drive</Button>
    </Card.Body>
  </Card>
  </Col>
  <Col>
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
    </Col>
    </Row>
    <Row>
    <div style={{marginTop:"20px", textAlign:"center"}}>
<ResumeModal/>
    </div>
    </Row>
  </Container>
  )
}
