import './ProjectsPage.css';
import ProjectCard from '../components/ProjectCard';

function ProjectsPage() {
    const projects = [
        {
            title: "Project 1",
            description: "Description of project 1",
            image: "/path-to-image.jpg",
            technologies: ["React", "CSS", "JavaScript"],
            github: "https://github.com/yourusername/project1",
            demo: "https://demo-link.com"
        },
        // Add more projects as needed
    ];

    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        {...project}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;