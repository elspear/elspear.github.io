import './ProjectsPage.css';
import ProjectCard from '../components/ProjectCard';

function ProjectsPage() {
    const projects = [
        {
            title: "Web Portfolio",
            description: "My personal portfolio website built with React showcasing my development projects and skills",
            image: "/project-portfolio.png",
            technologies: ["React", "CSS", "JavaScript"],
            github: "https://github.com/yourusername/react-portfolio",
            demo: "https://your-portfolio-link.com"
        },
        {
            title: "PokePledge",
            description: "A full stack Pokemon themed crowdfunding web application. Backend built with Django & fronted with React",
            image: "/project-pokepledge.png",
            technologies: ["React", "CSS", "JavaScript"],
            github: "https://github.com/elspear/poke-pledge-frontend",
            demo: "https://pokepledge.netlify.app/"
        },
        {
            title: "Python Weather App",
            description: "A Python program that takes data from csv files and converts into a readable format. Visualised using Streamlit.",
            image: "/project-weather-app.png",
            technologies: ["Python"],
            github: "https://github.com/elspear/python_weather_project",
            demo: "https://python-weather-project-emma.streamlit.app/"
        },
        {
            title: "Wyrdl",
            description: "A terminal Wordle themed game written with Python, using Rich for beautiful formatting",
            video: "/project-wyrdl.mov",
            technologies: ["Python", "Rich"],
            github: "https://github.com/elspear/wyrdl-game",
            demo: "https://github.com/elspear/wyrdl-game"
        },
    ];

    return (
        <div className="projects-container">
            {/* Currently Working On Hero Section */}
            <div className="projects-hero">
                <h1>Current projects</h1>
                <p>Here's what I'm building and learning right now</p>
                <div className="current-projects">
                    <div className="current-project">
                        <h3>Save Point - A Sprint Retrospective Board</h3>
                        <p>Collaborative digital platform for agile teams to conduct real-time retrospectives. Features user authentication, live voting, and sprint feedback management for a client project.</p>
                        <p>wip: <a href="https://github.com/elspear/savepoint-demo" target="_blank" rel="noopener noreferrer">backend code</a></p>
                        <div className="tech-tags">
                            <span className="tech-tag">Django</span>
                            <span className="tech-tag">Python</span>
                            <span className="tech-tag">React</span>
                            <span className='tech-tag'>JavaScript</span>
                            <span className='tech-tag'>HTML</span>
                            <span className='tech-tag'>CSS</span>
                        </div>
                    </div>
                    <div className="current-project">
                        <h3>Road to React</h3>
                        <p>Expanding my React knowledge with <a href="https://www.roadtoreact.com/" target="_blank" rel="noopener noreferrer">"Road to React"</a> by Robin Wieruch</p>
                        <div className="tech-tags">
                            <span className="tech-tag">TypeScript</span>
                            <span className="tech-tag">React</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Completed Projects Section */}
            <div className="completed-projects-section">
                <h2>Completed Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={index}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;