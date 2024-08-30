const contactstyle = {
  textAlign: "center",
  alignItems: "center",
  margin: "20px",
};
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <div>
            <div style={contactstyle}>
         <img
          src="/src/assets/images/about.png"
           style={{ width: "50%" }}
          alt="About Me"
           title="About Me"
        ></img>
       </div>
       <Container>
        <Row>
<Col>
      <img src="/src/assets/images/hestrain aug 2023 headshot.jpeg" style={{width: "80%", margin: "20px", border:"solid cyan", borderRadius: "9px" }} alt="A blonde person with white hair and a colorful shirt smiling at the camera" title="Headshot"></img>
      </Col>
      <Col>
      <p style={{margin: "20px"}}>
      HeatherEllen Strain (she/they) is queer and disabled artist currently working in currently living Tio'tia:ke (Montreal).<br></br>
      With a background in Theatre Management, they are now pursuing web development.
      </p>
</Col>
        </Row>
       </Container>
    </div>
  );
}
