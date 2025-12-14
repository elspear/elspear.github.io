import './ProjectCard.css';

function ProjectCard({ title, description, technologies, highlights, features, github, githubFrontend, githubBackend, demo }) {
    return (
        <div className="card">
            <div className="accent"></div>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-desc">{description}</p>
                
                {highlights && highlights.length > 0 && (
                    <div className="highlights">
                        {highlights.map((highlight, index) => (
                            <span key={index} className="highlight">{highlight}</span>
                        ))}
                    </div>
                )}
                
                {features && features.length > 0 && (
                    <div className="features">
                        {features.map((feature, index) => (
                            <div key={index} className="feature">{feature}</div>
                        ))}
                    </div>
                )}
                
                <div className="tech-tags">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                    ))}
                </div>
                
                <div className="card-links">
                    {demo && (
                        <a href={demo} target="_blank" rel="noopener noreferrer" className="card-link">View Project →</a>
                    )}
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer" className="card-link">View Code →</a>
                    )}
                    {githubFrontend && (
                        <a href={githubFrontend} target="_blank" rel="noopener noreferrer" className="card-link">Frontend →</a>
                    )}
                    {githubBackend && (
                        <a href={githubBackend} target="_blank" rel="noopener noreferrer" className="card-link">Backend →</a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;