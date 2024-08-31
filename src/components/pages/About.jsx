const contactstyle = {
  textAlign: "center",
  alignItems: "center",
  margin: "20px",
};
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


export default function About() {
  return (
    <div>
            <div style={contactstyle}>
         <img
          src="/images/about.png"
           style={{ width: "30%" }}
          alt="About Me"
           title="About Me"
        ></img>
       </div>
       <Container>
        <Row>
<Col>
      <img src="/images/hestrain aug 2023 headshot.jpeg" style={{width: "80%", margin: "20px", border:"solid cyan", borderRadius: "9px" }} alt="A blonde person with long hair and a colorful shirt smiling at the camera" title="Headshot"></img>
      </Col>
      <Col>
<Card style={{margin: "20px"}}>
      <p style={{margin:"20px"}}>
      <strong>HeatherEllen Strain</strong> <i>(she/they)</i> is queer and disabled artist currently working in currently living Tio'tia:ke (Montreal).</p>
      <p style={{margin:"20px"}}>
      With a background in Theatre Management, they are now pursuing web development.
      </p>
      </Card>
</Col>
        </Row>
       </Container>
    </div>
  );
}
