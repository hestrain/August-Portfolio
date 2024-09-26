import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function About() {
  return (
    <div>
      <Row style={{ height: "100px" }}></Row>
      <Container>
        <Row>
          <h1>About Me</h1>
          <Row>
            <div
              style={{
                margin: "10px",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: "medium",
              }}
            >
              <p>
                Hello! I am <strong>HeatherEllen Strain</strong>{" "}
                <i>(she/they),</i> a queer and disabled artist & developer
                currently working and living in Tio'tia:ke (Montreal).
              </p>
              <p>
                I've always loved working with technology, having taken every
                programming course my high school offered. Out of high school I
                originally ent into Theatre because I loved programming Lighting
                Boards. Once I as at Concordia Univeristy, I found my stride in
                stage management, loving both building complex detailed
                paperwork, and being able to lead a team through to a final
                polished production. I've been working in the Montreal Theatre
                scene for the last 10 years doing Stage Management and
                Production Coordination & Management.
              </p>{" "}
              <p>
                I found myself missing programming, adn decided to re-pursue my
                original passion for technology and coding. Following this
                instinct, I recently earned a certificate in Full Stack Web
                Development from the University of Toronto Coding Boot Camp.
              </p>
              <p>
                My strengths include explaining concepts to the
                non-technically-minded, building efficient systems, and breaking
                down big ideas into achievable goals.
              </p>
              <p>
                I am skilled at managing large scale productions, leading a
                team, and working under pressure.
              </p>
            </div>
          </Row>
        </Row>
      </Container>

      <Row style={{ height: "100px" }}></Row>
    </div>
  );
}
