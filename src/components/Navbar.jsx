import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ContactCard from "./ContactCard";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className={`nav-container ${isVisible ? '' : 'nav-hidden'}`}>
        <div className="nav-logo">
          <Link to="/" onClick={() => scrollToSection('home')}>
            <span className="logo-text">ES</span>
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className="nav-links">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>about</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>projects</a>
        </div>

        <div className="nav-button">
          <button 
            className="contact-btn"
            onClick={() => setIsContactOpen(true)}
          >
            Get in touch
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>about</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>projects</a>
          <button 
            className="contact-btn"
            onClick={() => setIsContactOpen(true)}
          >
            Get in touch
          </button>
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
