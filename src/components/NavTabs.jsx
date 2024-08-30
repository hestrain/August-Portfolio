import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar  } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';



function NavTabs() {
  return (
    <ul className="nav nav-tabs" style={{background: "#020300", 
    }}>
      <div
        className="header-image"
        style={{
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img
          src="/src/assets/images/HEATHER.png"
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
        </li>
        <li>
        <Link className="nav-link" to="/resume">
          Resume
        </Link>
      </li>
    </ul>
  );
}




export default NavTabs;