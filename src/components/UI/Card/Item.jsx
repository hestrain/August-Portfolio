import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
const cardstyle = {
  padding: "10px",
  marginBottom: "15px",
  border: "solid 2px black",
  alignSelf: "center",
  fontFamily:"Arial, Helvetica, sans-serif"
};

const linkStyle = {
  textDecoration: "none",
  color: "navy",
  fontWeight:"700",
  borderLeft:"2px solid blue",
  padding:"10px"

}

function Item(props) {
  return (
    <Container >
      <Row>
       {props.portfolio.map((project) => {
         return(
    <Card style={cardstyle} key={project.id} >
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{project.kind}</Card.Subtitle>
        <Card.Img variant="bottom" src={project.img} />
        <h5>Description</h5>
        <Card.Text style={{fontSize:"medium"}}>
          {project.description}
        </Card.Text>
        <h5>Tools Used</h5>
        <Card.Text>{project.tools}</Card.Text>
      </Card.Body>
      <Card.Body style={{fontSize:"medium"}}>
        <Card.Link href={project.repo} target="_blank" style={linkStyle}>Github Repo</Card.Link>
        <Card.Link href={project.live} target="_blank" style={linkStyle}>Live Site</Card.Link>
      </Card.Body>
    </Card>
        )
       })}
       </Row>
    </Container>
  );
}

export default Item;