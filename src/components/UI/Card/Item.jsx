import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
const cardstyle = {
  padding: "10px",
  marginBottom: "15px",
  border: "solid 2px cyan",
  alignSelf: "center",
};

function Item(props) {
  return (
    <Container>
      <Row>
       {props.portfolio.map((project) => {
         return(
          <Col md="6">
    <Card style={cardstyle} key={project.id}>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{project.kind}</Card.Subtitle>
        <Card.Img variant="bottom" src={project.img} />
        <Card.Text>
          {project.description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href={project.repo} target="_blank">Github Repo</Card.Link>
        <Card.Link href={project.live} target="_blank">Live Link</Card.Link>
      </Card.Body>
    </Card>
    </Col>
        )
       })}
       </Row>
    </Container>
  );
}

export default Item;