import React from "react";
import Nav from "../UI/Nav";
import { Container } from "react-bootstrap";

export default function Error() {
  return (
    <>
      <Nav />
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
            fontSize: "medium",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          Choose a tab above to go back to safety
        </p>
      </Container>
    </>
  );
}
