import './ProjectCard.css';

function ProjectCard({ title, description, image, video, technologies, github, demo }) {
    return (
        <article className="project-card">
            <div className="project-image">
                {video ? (
                    <video 
                        src={video} 
                        alt={`${title} Demo`}
                        autoPlay 
                        loop 
                        muted
                        playsInline
                    />
                ) : (
                    <img src={image} alt={`${title} Screenshot`} />
                )}
            </div>
            <div className="project-content">
                <h2>{title}</h2>
                <p className="project-tags">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tag">{tech}</span>
                    ))}
                </p>
                <p className="project-description">
                    {description}
                </p>
                <div className="project-links">
                    {demo && (
                        <a href={demo} target="_blank" rel="noopener noreferrer" className="button">View Project</a>
                    )}
                    <a href={github} target="_blank" rel="noopener noreferrer" className="button button-outline">View Code</a>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;