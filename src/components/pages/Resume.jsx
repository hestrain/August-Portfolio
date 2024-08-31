import {Container} from "react-bootstrap";
import {Card} from "react-bootstrap";
import { Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Button} from "react-bootstrap";
import ResumeModal from "../UI/Modal"

export default function Resume() {
  return(
    <Container style={{margin: "10px"}}>
      <div style={{ textAlign:"center", margin: "10px"}}>
        <img
          src="/images/Picture2.svg"
          alt="Resume"
          style={{ width:"60%" }}
          title="Resume"
        ></img>
      </div>
      <Row>
        <Col>
    <Card>
    <Card.Header>My Resume</Card.Header>

    <Card.Body>
      <Button variant="primary" href="https://drive.google.com/file/d/1weWgiDG53lFc1APFjC1xHj1LRHHSjYJW/view?usp=sharing" target="_blank">Download PDF From Google Drive</Button>
    </Card.Body>
  </Card>
  </Col>
  <Col>
  <Card>
      <Card.Header>Technical Skills</Card.Header>
      <Card.Body>
      <Card.Title>Coding Related</Card.Title>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL,
              Express, React, Node, Handlebars, jQuery, Bootstrap{' '}
          </p>
          <Card.Title>Other</Card.Title>

          <p>
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
