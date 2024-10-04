import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
const cardstyle = {
  padding: "10px",
  marginBottom: "15px",
  border: "solid 5px black",
  alignSelf: "center",
  fontFamily: "Arial, Helvetica, sans-serif",
  backgroundColor: "black",
  margin: "15px",
};

const linkStyle = {
  textDecoration: "none",
  color: "aliceBlue",
  fontWeight: "700",
  borderLeft: "2px solid aliceBlue",
  padding: "10px",
};

function Item(props) {
  return (
    <Container>
      <Row>
        {props.portfolio.map((project) => {
          const tools = project.tools;
          let projectImg = "";

          if (!project.gif) {
            projectImg = project.img;
          } else {
            projectImg = project.gif;
          }
           return (
            <Col md="6">
              <Card style={cardstyle} key={project.id}>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    style={{ border: "solid aliceBlue 1px",
                     }}
                    src={projectImg}
                    className="portfolioItem"
                  />
                  <Row>
                    <div style={{ height: "20px" }}></div>
                    <Card.Title style={{ fontWeight: "700" }}>
                      {project.title}
                    </Card.Title>
                  </Row>
                  <Card.Text style={{ fontSize: "medium" }}>
                    {project.description}
                  </Card.Text>
                  <Card.Text>
                    <p>
                      {tools.map((tool) => {
                        return <>{tool}, </>;
                      })}
                    </p>
                  </Card.Text>
                </Card.Body>
                <Card.Body style={{ fontSize: "medium" }}>
                  <Card.Link
                    href={project.repo}
                    target="_blank"
                    style={linkStyle}
                  >
                    <img
                      src="/images/github.png"
                      alt="github"
                      title="github"
                      className="footerImg"
                      style={{ width: "25px" }}
                    ></img>{" "}
                    Github
                  </Card.Link>
                  <Card.Link
                    href={project.live}
                    target="_blank"
                    style={linkStyle}
                  >
                    Live Site
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}


export default Item;
