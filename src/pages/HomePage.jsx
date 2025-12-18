import { useState, useEffect } from 'react';
import "./HomePage.css";
import ProjectCard from '../components/ProjectCard';

function HomePage() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide indicator after scrolling 200px
      setShowScrollIndicator(window.scrollY < 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Save Point",
      description: "A real-time collaborative retrospective board enabling agile teams to capture feedback, vote on priorities, and track action items—all synced live across participants via WebSockets.",
      technologies: ["React", "Django REST Framework", "Django Channels", "PostgreSQL", "Redis", "WebSockets"],
      highlights: ["Async WebSocket Consumers", "Multi-Round Voting System", "Django Signals Automation"],
      features: [
        "Real-time card creation, editing, and column management",
        "Anonymous posting for psychological safety",
        "Action items with status tracking and assignee management"
      ],
      demo: "https://save-point.netlify.app/",
    },
    {
      title: "PokéPledge",
      description: "A full-stack Pokemon-themed crowdfunding platform where trainers create fundraisers for their Pokémon's wishes and supporters pledge to make them happen.",
      technologies: ["React", "Django REST Framework", "PostgreSQL"],
      highlights: ["PokeAPI Integration", "Django Signals", "Token Auth & Permissions"],
      features: [
        "Create, edit, and delete fundraisers with progress tracking",
        "User profiles with customizable avatars",
        "Live community stats dashboard"
      ],
      githubFrontend: "https://github.com/elspear/poke-pledge-frontend",
      githubBackend: "https://github.com/elspear/crowdfunding_backend",
      demo: "https://pokepledge.netlify.app/"
    },
    {
      title: "Web Portfolio",
      description: "My personal portfolio website built with React, featuring smooth scroll navigation, a custom project carousel, and responsive design.",
      technologies: ["React", "React Router", "CSS", "JavaScript"],
      highlights: ["Smooth Scroll Navigation", "Hide-on-Scroll Navbar", "3-Card Carousel"],
      features: [
        "Reusable ProjectCard component architecture",
        "Modal contact card with social links",
        "Mobile-first responsive layout"
      ],
      github: "https://github.com/elspear/elspear.github.io",
      demo: "https://www.emmaspear.dev/"
    },
    {
      title: "Python Weather App",
      description: "A Python weather data analyzer that parses CSV files and displays temperature statistics through an interactive Streamlit dashboard.",
      technologies: ["Python", "Streamlit", "Pandas"],
      highlights: ["CSV Parsing & Unit Conversion", "Statistical Analysis", "Streamlit Dashboard"],
      features: [
        "Sample dataset selector with instant loading",
        "Summary and daily breakdown views in tabs",
        "Fahrenheit to Celsius conversion with formatted output"
      ],
      github: "https://github.com/elspear/python_weather_project",
      demo: "https://python-weather-project-emma.streamlit.app/"
    },
    {
      title: "Wyrdl",
      description: "A terminal-based Wordle clone built with Python and Rich, featuring colorful feedback and word validation against a 10,000-word dictionary.",
      technologies: ["Python", "Rich"],
      highlights: ["Rich Terminal UI", "Dictionary Validation", "Adaptive Spacing"],
      features: [
        "Classic Wordle color feedback (green/yellow/gray)",
        "6 attempts to guess the 5-letter word",
        "Clean panel display with game state tracking"
      ],
      github: "https://github.com/elspear/wyrdle",
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="home-container">
      {/* Gradient Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="blob blob-4"></div>
      <div className="blob blob-5"></div>
      <div className="blob blob-6"></div>

      {/* ========== HERO SECTION ========== */}
      <section id="home" className="hero">
        <h1 className="hero-name">Emma Spear</h1>
        <h2 className="hero-title">Full Stack Developer</h2>
        <p className="hero-desc">
          I turn complex problems into clean, intuitive web applications.
          My dog, Hugo, supervises. He has absolutely no idea what's happening.
        </p>
        <div className="social-links">
          <a
            href="https://github.com/elspear"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/emma-spear-dev/"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a
            href="mailto:hello@emmaspear.dev"
            className="social-link"
            aria-label="Email"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Scroll Indicator */}
      <a 
        href="#projects" 
        className={`scroll-indicator ${showScrollIndicator ? '' : 'hidden'}`}
        onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById('projects');
          if (element) {
            const offsetTop = element.offsetTop - 100;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
          }
        }}
      >
        <span>View my work</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </a>

      {/* ========== ABOUT SECTION ========== */}
      <section id="about" className="about-section">
        <div className="section-header">
          <h2>About</h2>
        </div>
        
        {/* Three About Cards */}
        <div className="about-cards-row">
          <div className="about-card">
            <h3 className="about-card-title">What I Do</h3>
            <p>
              Full Stack developer building web applications with React and Django.
              <br /><br />
               I work across the entire stack—from backend
              architecture to frontend design—and I'm passionate about building tools that solve real problems.
            </p>
          </div>

          <div className="about-card">
            <h3 className="about-card-title">Background</h3>
            <p>
              I have transitioned from over a decade in pharmacy to tech, bringing strong problem solving skills and attention to detail.
              <br /> <br />
              She Codes Plus 2025 graduate and recipient of $10K Rio Tinto Scholarship.
            </p>
          </div>

          <div className="about-card">
            <h3 className="about-card-title">Next...</h3>
            <p>
              Deepening my expertise in databases and data architecure and strengthening my UI/UX design skills.
              <br /> <br />
               I will also be mentoring with She Codes, during their one day workshops and with the next plus cohort.
            </p>
          </div>
        </div>

        {/* Tech Skills Section */}
        <div className="skills-container">
          <div className="skills-category">
            <p className="skills-label">FRONTEND</p>
            <div className="skills-pills">
              <span className="tech-pill">React</span>
              <span className="tech-pill">JavaScript</span>
              <span className="tech-pill">HTML</span>
              <span className="tech-pill">CSS</span>
              <span className="tech-pill">WebSockets</span>
            </div>
          </div>

          <div className="skills-category">
            <p className="skills-label">BACKEND</p>
            <div className="skills-pills">
              <span className="tech-pill">Django DRF</span>
              <span className="tech-pill">PostgreSQL</span>
              <span className="tech-pill">Python</span>
            </div>
          </div>

          <div className="skills-category">
            <p className="skills-label">TOOLS & DEPLOYMENT</p>
            <div className="skills-pills">
              <span className="tech-pill">Git & GitHub</span>
              <span className="tech-pill">VS Code</span>
              <span className="tech-pill">Insomnia</span>
              <span className="tech-pill">Heroku</span>
              <span className="tech-pill">Netlify</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROJECTS SECTION ========== */}
      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2>My Work</h2>
        </div>

        {/* Projects Carousel */}
        <div className="carousel-wrapper">
          <div className="carousel-card" key={currentProject}>
            <ProjectCard {...projects[currentProject]} />
          </div>

          {/* Navigation - Arrows with Dots */}
          <div className="carousel-nav">
            <button className="carousel-btn" onClick={prevProject} aria-label="Previous project">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>

            <div className="carousel-dots">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentProject ? 'active' : ''}`}
                  onClick={() => setCurrentProject(index)}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button className="carousel-btn" onClick={nextProject} aria-label="Next project">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="carousel-counter">
          {currentProject + 1} / {projects.length}
        </div>

        {/* Footer Links */}
        <div className="projects-footer">
          <a href="https://www.linkedin.com/in/emma-spear-dev/" target="_blank" rel="noopener noreferrer" className="footer-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="https://github.com/elspear" target="_blank" rel="noopener noreferrer" className="footer-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
