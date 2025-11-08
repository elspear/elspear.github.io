import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <nav className="nav-wrapper">
        {/* Div 1 - Logo */}
        <div className="nav-logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        {/* Div 2 - Navigation Links */}
        <div className="nav-links">
            <NavLink to="/">home</NavLink>
            <NavLink to="/about">about</NavLink>
            <NavLink to="/projects">projects</NavLink>
        </div>

        {/* Div 3 - Contact Button */}
        <div className="nav-button">
          <button className="contact-btn">Get in touch!</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
