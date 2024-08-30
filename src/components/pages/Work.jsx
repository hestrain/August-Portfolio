import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import PortfolioCard from "../UI/Card/Portfolio";

const contactstyle = {
  textAlign: "center",
  marginBottom: "20px",
  marginTop: "20px",
};

export default function Work() {
  return (
    <Container>
      <div style={contactstyle}>
        <img
          src="/src/components/images/portfolio.png"
          style={{ width: "50%" }}
          alt="Portfolio"
          title="Portfolio"
        ></img>
      </div>
      <PortfolioCard></PortfolioCard>
    </Container>
  );
}
