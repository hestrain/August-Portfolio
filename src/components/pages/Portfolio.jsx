import Row from "react-bootstrap/Row";
import PortfolioCard from "../UI/Card/Portfolio";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Row style={{ height: "100px" }}></Row>
      <Row>
        <Container>
          <Row>
            
      <h1 id="Portfolio" className="sectionHeading">Portoflio</h1>
      <PortfolioCard />
          </Row>

        </Container>
      </Row>
      <Row style={{ height: "100px" }}></Row>
    </div>
  );
}
