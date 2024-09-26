const contactstyle = {
      textAlign: "center",
      alignItems: "center",
};
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import PortfolioCard from "../UI/Card/Portfolio";
import { Button } from "react-bootstrap";

export default function Home() {
      return (
            <div >
                  <Row style={{ height: "100px" }}>

                  </Row>
                  <Container >
                        <Button href="#Portfolio" style={{postiion:"sticky", top:"30px", left:"30px"}}>Jump To Portfolio</Button>
                        <Row >
                              <h1>About Me</h1>
                              <Row>

                                    <Col md="3">
                                          <img src="/images/hestrain aug 2023 headshot.jpeg" style={{ width: "100%", border: "solid black 2px", borderRadius: "5px", maxHeight: "300px", maxWidth: "300px" }} alt="A blonde person with long hair and a colorful shirt smiling at the camera" title="Headshot"></img>
                                    </Col>
                                    <Col md="9">
                                          <Card style={{ margin: "5px", }}>
                                                <div style={{ margin: "10px", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "13px" }}>
                                                      <p>

                                                            Hello! I am <strong>HeatherEllen Strain</strong> <i>(she/they),</i> a queer and disabled artist & developer currently working and living in Tio'tia:ke (Montreal).
                                                      </p>
                                                      <p>

                                                            I've alays loved orkig ith technology, having taken every programming course my high school offered.  
                                                            Out of high school I originally  ent into Theatre becuase I loved programming Lighting Boards. Once I as at Concordia Univeristy, I found my stride in stage management, loving both building complex detailed paperork, and being able to lead a team through to a final polished production. 
                                                            I've been working in the Montreal Thetare scene for the last 10 years doing Stage Mannagemant and Production Coordination & Mnanagement.
                                                      </p> <p>
I found myself missing programming, adn decided to re-persue my original passion for technology and coding. Folloing this instinct, 
                                                            I recently earned a certificate in Full Stack Web Development from the University of Toronto Coding Boot Camp.
                                                      </p>
                                                      <p>

                                                            My strengths include explaining concepts to the non-technically-minded, building efficient systems, and breaking down big ideas into achievable goals.
                                                      </p>
                                                      <p>
                                                            I am skilled at managing large scale productions, leading a team, and working under pressure.
                                                      </p>
                                                </div>
                                          </Card>
                                    </Col>
                              </Row>



                              <h1 id="Portfolio">Portoflio</h1>
                              <PortfolioCard />
                        </Row>
                  </Container>

                  <Row style={{ height: "100px" }}></Row>
            </div>
      );
}
