// TODO: Add a comment explaining how we are able to extract the key value pairs from props
import React from "react";
import Mailto from "react-mailto-link";

const Email = () => {
  return <Mailto email="hestrain@gmail.com" obfuscated={true} />;
};

const mailto = Email;

const footerstyle = {
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "space-around",
  background: "#020300",
  position: "relative",
  top: "96%",
  yIndex: "1px",
  width: "100%"
};

const listItemStyle = {
  listStyleType: "none",
};
const iconstyle = {
  width: "10%",
  backgroundColor: "white",
  borderRadius: "9px"
};

function Footer({ currentPage, handlePageChange }) {
  return (
    <footer>
      <ul className="" style={footerstyle}>
        <li className="footer-item" style={listItemStyle}>
              <a href="mailto:someone@example.com" target="_blank"><img
                src="/src/assets/images/gmail.webp"
                style={iconstyle}
                alt="email"
                title="email"
              ></img></a>
              {/* <Email /> */}
        </li>
        <li className="footer-item" style={listItemStyle}>
          <a href="https://www.linkedin.com/in/hestrain" target="_blank">
            <img
              src="/src/assets/images/linkedin.png"
              style={iconstyle}
              alt="linkedin"
              title="linkedin"
            ></img>
          </a>
        </li>
        <li className="footer-item" style={listItemStyle}>
          <a href="https://github.com/hestrtain" target="_blank">
            <img
              src="/src/assets/images/github.png"
              style={iconstyle}
              alt="github"
              title="github"
            ></img>
          </a>
        </li>
      </ul>
    </footer>
  );
}

// function Footer (){
// return (
//   <Navbar sticky="bottom" bg="light" data-bs-theme="light">
//         <Container>
//           <Nav className="me-auto">
//             <Nav.Link href="https://github.com/hestrtain"target="_blank">
//             {/* <img
//               src="/src/components/images/github.png"
//               style={iconstyle}
//               alt="github"
//               title="github"
//             ></img> */}
//             github
//             </Nav.Link>
//             <Nav.Link href="#con">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//   </Navbar>
//   )

// }

export default Footer;
