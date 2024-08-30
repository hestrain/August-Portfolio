import ContactForm from "./form/ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Mailto from "react-mailto-link";

const Email = () => {
  return <Mailto email="hestrain@gmail.com" obfuscated={true} />;
};

const contactstyle = {
  textAlign: "center",
  alignItems: "center",
  marginBottom: "20px",
};

const listItemStyle = {
  listStyleType: "none",
};

export default function Contact() {
  return (
    <div>
      <div style={contactstyle}>
        {" "}
        <img
          src="/src/components/images/contactlinks2.png"
          style={{ width: "50%" , marginTop:"20px"}} alt="Contact Me" title="Contact Me"
        ></img>
      </div>
      <h1 style={contactstyle}>Links</h1>
      <div style={contactstyle}>
        <li style={listItemStyle}>
          {" "}
          <Email />
        </li>
        <li style={listItemStyle}>
          <a href="https://github.com/hestrtain" target="_blank">
            Github
          </a>
        </li>
        <li style={listItemStyle}>
          {" "}
          <a href="https://www.linkedin.com/in/hestrain" target="_blank">
            LinkedIn
          </a>
        </li>
        <li style={listItemStyle}> somethign else idk lol</li>
      </div>
      <div style={{ marginTop: "30px" }}>
        <ContactForm />
      </div>
      <br></br>
    </div>
  );
}
