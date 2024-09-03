// TODO: Add a comment explaining how we are able to extract the key value pairs from props
import React from "react";
import "98.css"

// function Footer() {
//   return (
//     <>
//     <footer>
//     <div className="window" style="width: 300px">
//       <div className="title-bar">
//         <div className="title-bar-text">A Window With Stuff In It</div>
//         <div className="title-bar-controls">
//           <button aria-label="Minimize"></button>
//           <button aria-label="Maximize"></button>
//           <button aria-label="Close"></button>
//         </div>
//       </div>
//       <div className="window-body">
//         <p>There's so much room for activities!</p>
//       </div>
//     </div>
//     </footer>
//     </>
//   );
// }

const footerstyle = {
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "space-around",
  background: "#020300",
  position: "relative",
  top: "96%",
  yIndex: "1px",
  width: "100%",
  height: "70px",
  padding: "15px"
};

const listItemStyle = {
  listStyleType: "none",
  alignContent: "center",

};
const iconstyle = {
  width: "10%",
  backgroundColor: "white",
  borderRadius: "9px",
  alignContent: "center",

};

function Footer() {
  return (
    <footer style={{ alignContent: "center", justifyContent: "space-around" }}>
      <ul classNameName="" style={footerstyle}>
        <li classNameName="footer-item" style={listItemStyle}>
          <a href="mailto:someone@example.com" target="_blank">
            <img
              src="/images/gmail.webp"
              style={iconstyle}
              alt="email"
              title="email"
            ></img>
          </a>
          {/* <Email /> */}
        </li>
        <li classNameName="footer-item" style={listItemStyle}>
          <a href="https://www.linkedin.com/in/hestrain" target="_blank">
            <img
              src="/images/linkedin.png"
              style={iconstyle}
              alt="linkedin"
              title="linkedin"
            ></img>
          </a>
        </li>
        <li classNameName="footer-item" style={listItemStyle}>
          <a href="https://github.com/hestrtain" target="_blank">
            <img
              src="/images/github.png"
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

export default Footer;
