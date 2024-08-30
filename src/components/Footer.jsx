// TODO: Add a comment explaining how we are able to extract the key value pairs from props
import React from "react";
import Mailto from "react-mailto-link";

const Email = () => {
  return <Mailto email="hestrain@gmail.com" obfuscated={true} />;
};

const footerstyle = {
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "space-around",
  color: "aqua",
}

const listItemStyle = {
  listStyleType: "none"
}
const iconstyle = {
  width: "10%"
}

function Footer({ currentPage, handlePageChange }) {
  return (
    <footer>
    <ul className="" style={footerstyle}>
    <li className="footer-item"style={listItemStyle}>
< Email />         
<a href='${Email}'> </a> <img src="/src/components/images/gmail.webp" style={iconstyle} alt="email" title="email"></img>
      </li>
      <li className="footer-item" style={listItemStyle}>
        <a
          href="https://www.linkedin.com/in/hestrain"target="_blank"
        >
                    <img src="/src/components/images/linkedin.png" style={iconstyle} alt="linkedin" title="linkedin"></img>
        </a>
      </li>
      <li className="footer-item"style={listItemStyle}>
        <a
          href="https://github.com/hestrtain"target="_blank"
        >
          <img src="/src/components/images/github.png" style={iconstyle} alt="github" title="github"></img>
        </a>
      </li>
    </ul>
    </footer>
  );
}

export default Footer;
