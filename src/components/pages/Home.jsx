import { Row } from "react-bootstrap";
import PortfolioCard from "../UI/Card/Portfolio";
import { Container } from "react-bootstrap";
import ContactForm from "../form/ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Mailto from "react-mailto-link";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import ResumeModal from "../UI/ResumeModal";

export default function Home() {
  return (
    <>
      {/* ---------------------   top section    ------------------------------ */}
      <div className="lightBG">
        <div id="top" style={{ height: "100px" }}></div>
        <div
          style={{
            margin: "15px",
            padding: "15px",
            alignContent: "center",
            textAlign: "center",
          }}
        >
          <img
            src="/images/headshot.jpeg"
            style={{
              maxWidth: "300px",
              borderRadius: "200px",
              border: "4px aliceBlue solid",
            }}
          ></img>
          <h1
            style={{ fontWeight: "800", paddingTop: "30px" }}
            className="introText"
          >
            HeatherEllen Strain
          </h1>
          <h3 className="introText">Web Developer / Production Manager</h3>
        </div>
        {/* -------------------------links sections ------------------------------------*/}
        <div style={{ marginTop: "40px", backgroundColor: "#2F585Cff" }}>
          <Row style={{ justifyContent: "center", textAlign: "center" }}>
            <a
              href="https://www.github.com/hestrain"
              target="blank"
              className="topLink"
            >
              Github
            </a>

            <a
              href="https://www.linkedin.com/in/hestrain"
              target="blank"
              className="topLink"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hestrain@gmail.com"
              target="blank"
              className="topLink"
            >
              Email
            </a>
          </Row>
        </div>
      </div>

      {/* ---------------------   about section    ------------------------------ */}
      <div id="about" style={{ height: "50px" }}></div>
      <div className="darkBG">
        <Row>
          <h1 className="sectionHeading">About Me</h1>
          <Row>
            <Col md="1"></Col>
            <Col>
              <div
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: "large",
                  padding: "15px",
                  margin: "15px ",
                }}
              >
                <p>
                  Hello! I am <strong>HeatherEllen Strain</strong>{" "}
                  <i>(she/they),</i> a production/stage manager currently working and living in Tio'tia:ke (Montreal).
                </p>
                <p>
                  I've always loved working with technology, having taken every programming course my high school offered. Out of high school I originally went into theatre because I loved programming lighting boards. Once I was at Concordia University, I found my stride in stage management, loving both building complex detailed paperwork, and being able to lead a team through to a final polished production. I've been working in the Montreal theatre scene for the last 10 years doing stage management and production coordination & management.
                </p>{" "}
                <p>
                  I found myself missing programming, and decided to re-pursue my original passion for technology and coding. Following this instinct, I recently earned a certificate in full stack web development from the University of Toronto Coding Boot Camp.
                </p>
                <p>
                  My strengths include explaining concepts to the non-technically-minded, building efficient systems, and breaking down big ideas into achievable goals.
                </p>
                <p>
                  I am skilled at managing large scale productions, leading a team, and working under pressure.
                </p>
              </div>
            </Col>
            <Col md="1"></Col>
          </Row>
        </Row>
      </div>
      {/* ---------------------   Portfolio section    ------------------------------ */}
      <div className="lightBG">
        <Row>
          <Container>
            <Row>
              <div id="portfolio" style={{ height: "50px" }}></div>

              <h1 className="sectionHeading introText">Portfolio</h1>
              <PortfolioCard />
            </Row>
          </Container>
        </Row>
      </div>
      {/* ---------------------   Resume Section    ------------------------------ */}
      <div id="resume" style={{ height: "50px" }}></div>
      <div className="darkBG">
        <h1 className="sectionHeading">Resume</h1>

        <Row
          style={{
            margin: "10px",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            href="https://drive.google.com/file/d/1ZJFVSKH9QPKfaS4IuwbIZfMDa2KNjuWj/view?usp=sharing"
            target="_blank"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              width: "40%",
              margin: "5px 20px",
            }}
            className="resumeLink"
          >
            Download from Google Drive
          </Button>

          <ResumeModal />
        </Row>
      </div>
      <Row style={{ height: "100px" }}></Row>
    </>
  );
}
