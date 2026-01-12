import { Link } from "react-router";
import "./Navbar.css";
import About from "../../pages/About";
import HomePage from "../../pages/HomePage";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>

        <li className="nav-item">
          <button aria-expanded="false">Apps</button>
          <ul className="sub-menu" aria-label="Apps">
            <li><a href="#">Chat</a></li>
            <li><a href="#">Email</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
        