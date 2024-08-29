import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavTabs() {
  return (
    <ul className="nav nav-tabs">
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
    </ul>
  );
}

export default NavTabs;
