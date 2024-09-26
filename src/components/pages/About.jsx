const contactstyle = {
      textAlign: "center",
      alignItems: "center",
};
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import PortfolioCard from "../UI/Card/Portfolio";

export default function Home() {
      return (
            <div >
                  <Row style={{ height: "100px" }}>

                  </Row>
                  <Container >
                        <Row >
                              <Col md="4">
                                    <img src="/images/hestrain aug 2023 headshot.jpeg" style={{ width: "50%", border: "solid black 2px", borderRadius: "5px" }} alt="A blonde person with long hair and a colorful shirt smiling at the camera" title="Headshot"></img>
                                    <Card style={{ margin: "5px", }}>
                                          <p style={{ margin: "10px", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "medium" }}>
                                                Hello! I am <strong>HeatherEllen Strain</strong> <i>(she/they),</i> a queer and disabled artist & developer currently working and living in Tio'tia:ke (Montreal).</p>
                                          <p style={{ margin: "10px", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "medium" }}>
                                                I am a Full Stack web developer leveraging a background in theatre management. <br></br><br></br>
                                                I recently earned a certificate in Full Stack Web Development from the University of Toronto Coding Boot Camp.
                                                <br></br><br></br>
                                                My strengths include explaining concepts to the non-technically-minded, building efficient systems, and breaking down big ideas into achievable goals.
                                                <br></br>
                                                I am skilled at managing large scale productions, leading a team, and working under pressure.
                                          </p>
                                    </Card>
                              </Col>
                              <Col md="8">
                                    <h1 id="Portfolio">Portoflio</h1>
                                    <PortfolioCard />
                              </Col>
                        </Row>
                  </Container>
                  <Row style={{ height: "100px" }}></Row>
            </div>
      );
}
