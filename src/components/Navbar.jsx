import Logo from "../assets/logo.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <nav className="nav-wrapper">
        {/* Div 1 - Logo */}
        <div className="nav-logo">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>

        {/* Div 2 - Navigation Links */}
        <div className="nav-links">
            <a href="/" className={window.location.pathname === "/" ? "active" : ""}>home</a>
            <a href="#about" className={window.location.pathname === "/about" ? "active" : ""}>about</a>
            <a href="#projects" className={window.location.pathname === "/projects" ? "active" : ""}>projects</a>
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
