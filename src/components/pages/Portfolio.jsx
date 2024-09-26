import Row from "react-bootstrap/Row";
import PortfolioCard from "../UI/Card/Portfolio";

export default function Home() {
  return (
    <div>
      <Row style={{ height: "100px" }}></Row>
      <h1 id="Portfolio">Portoflio</h1>
      <PortfolioCard />
      <Row style={{ height: "100px" }}></Row>
    </div>
  );
}
