import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <div
        className="header-image"
        style={{
          background: "black",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img
          src="/src/components/images/HEATHER.png"
          style={{ width: "90%" }}
          alt="HeatherEllen Strain"
          title="HeatherEllen Strain"
        ></img>
      </div>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/work">
          Work
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
        <Link className="nav-link" to="/resume">
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
