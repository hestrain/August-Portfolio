import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";




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
          src="/public/images/HEATHER.png"
          style={{ maxHeight: "120px" }}
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