import "./AboutPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ContactCard from "@/components/ContactCard";

function AboutPage() {

  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <div className="about-container">
      <div className="about-content-wrapper">
        
        {/* Main content area with two-column layout */}
        <div className="about-main-content">
          {/* Left Column - About */}
          <div className="about">
            <div className="about-content">
              <h3 className="about-content-title">What I Do</h3>
              <p>
                I build full stack applications with Python, Django, and React.
                My current project is a collaborative retrospective board with
                real-time interaction—the kind of tool where backend and
                frontend need to work seamlessly together.
              </p>

              <h3 className="about-content-title">Background</h3>
              <p>
                Before coding, I spent 10+ years managing pharmacy dispensaries,
                where accuracy, systems thinking, and calm problem-solving were
                essential. That background gives me a unique edge: I understand
                regulated environments, complex workflows, and how to build
                tools that reduce friction.
              </p>

             
            </div>

            

            
          </div>
          

          <div className="skills-column">
            <div className="skills-card">
              <h3 className="section-title">Frontend Development</h3>
              <ul>
                <li className="about-pill">React</li>
                <li className="about-pill">HTML</li>
                <li className="about-pill">CSS</li>
                <li className="about-pill">JavaScript</li>
              </ul>
            </div>

            <div className="skills-card">
              <h3 className="section-title">Backend Development</h3>
              <ul>
                <li>Python</li>
                <li>Django DRF</li>
                <li>Websockets</li>
              </ul>
            </div>

            <div className="skills-card">
              <h3 className="section-title">Development Tools</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Insomnia</li>
              </ul>
            </div>

            <div className="skills-card">
              <h3 className="section-title">Deployment</h3>
              <ul>
                <li>Heroku</li>
                <li>Netlify</li>
              </ul>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
}

export default AboutPage;
