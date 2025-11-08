import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/eslogo.svg";
import ContactCard from "./ContactCard";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="nav-container">
        {/* Logo Section */}
        <div className="nav-logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Links Wrapper */}
        <div className={`links-wrapper ${isMenuOpen ? 'open' : ''}`}>
          {/* Navigation Links */}
          <div className="nav-links">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>home</NavLink>
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>about</NavLink>
            <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>projects</NavLink>
          </div>

          {/* Contact Button */}
          <div className="nav-button">
            <button 
              className="contact-btn"
              onClick={() => setIsContactOpen(true)}
            >
              Get in touch
            </button>
          </div>
        </div>
      </nav>
      
      <ContactCard 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}

export default Navbar;
