import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import React, { useState, } from "react";
import ReactCardFlip from "react-card-flip";

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
          let x = 1;
            const [flip, setFlip] = useState(false);

          return (
            <Col md="6" key={project.id}>
              <ReactCardFlip isFlipped={flip} flipDirection="vertical">
              <Card className="portfolioCard" key={project.id}>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    style={{ border: "solid aliceBlue 1px" }}
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

                  {tools.map((tool) => {
                    x++;
                    return (
                      <div className="langList" key={x}>
                        {tool},{" "}
                      </div>
                    );
                  })}
                </Card.Body>
                <Card.Body style={{ fontSize: "medium" }}>
                  <Card.Link
                    href={project.repo}
                    target="_blank"
                    className="portfolioLink"
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
                    className="portfolioLink"
                  >
                    Live Site
                  </Card.Link>
                  <button className="flipbtn" onClick={() => setFlip(!flip)}>
          Flip for more info
        </button>
                </Card.Body>
              </Card>
              <Card>
              <button className="flipbtn" onClick={() => setFlip(!flip)}>              
              Flip for more info
              </button>
              </Card>
              </ReactCardFlip>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Item;
