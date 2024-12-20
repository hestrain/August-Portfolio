import { Container } from "react-bootstrap";
import Footer from "../Footer"
import React, { useState} from "react";

export default function Error() {
  const [flip, setFlip] = useState(false);
  return (
    <>
      <Container style={{ height: "100px" }}></Container>
      <Container>
        <p>
          <h1>404 ERROR: </h1>
        </p>
        <br></br>
        <p>
          <h3>Page Not Found</h3>
        </p>
        <p
          style={{
            fontSize: "x-large",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          <a href="/">
          Click here to go back to safety
          </a>
        </p>
               </Container>
      <div style={{height:"200px"}}></div>
      <Footer />
    </>
  );
}
