function ProjectCard({ project }) {
    return (
        <article className="project-card">
            <div className="project-card-content">

                <div className="project-card-header">
                    <span className="project-number">
                        0{project.id}
                    </span>

                    <div className="project-links">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`GitHub de ${project.name}`}
                        >
                            <i className="bi bi-github"></i>
                        </a>

                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Demo de ${project.name}`}
                        >
                            <i className="bi bi-box-arrow-up-right"></i>
                        </a>
                    </div>
                </div>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                    {project.technologies.map((technology) => (
                        <span key={technology}>
                            {technology}
                        </span>
                    ))}
                </div>

            </div>
        </article>
    )
}

export default ProjectCard