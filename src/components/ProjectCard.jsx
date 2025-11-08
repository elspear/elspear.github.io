import './ProjectCard.css';

function ProjectCard({ title, description, image, technologies, github, demo }) {
    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-image" />
            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tech-stack">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                    ))}
                </div>
                <div className="project-links">
                    <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href={demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;