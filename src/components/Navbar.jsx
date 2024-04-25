import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <div className="nav container-1">
      <div className="pixer">
        {" "}
        <h4>Pixer</h4>
      </div>

      <div className="pag">
        {" "}
        <Link className="link" to="/">
          Bosh sahifa
        </Link>
        <Link className="link" to="/about">
          Xizmatlar
        </Link>
        <Link className="link" to="/create">
          Portfolio
        </Link>
        <Link className="link" to="/create">
          Jamoa
        </Link>
        <Link className="link" to="/create">
          Blog
        </Link>
        <Link className="link" to="/create">
          Kontaktlar
        </Link>
        <a className="tel" href="">
          +998 90 921 37 11
        </a>
      </div>
    </div>
  );
}

export default Navbar;
