import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import PortfolioCard from "../UI/Card/Portfolio";


const contactstyle = {
  textAlign: "center",
};

export default function Work() {
  return (
    <Container>
      <div style={{textAlign:"center"}}>
        <img
          src="/images/portfolio5.png"
          style={{ width: "30%" }}
          alt="Portfolio"
          title="Portfolio"
        ></img>
      </div>
      <PortfolioCard></PortfolioCard>
    </Container>
  );
}
