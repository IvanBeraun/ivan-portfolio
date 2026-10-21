import { useState } from 'react'

function ProjectCard({ project }) {
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    const imageCount = project.images?.length ?? 0
    const hasImages = imageCount > 0
    const hasMultipleImages = imageCount > 1

    function showPreviousImage() {
        setActiveImageIndex((currentIndex) =>
            (currentIndex - 1 + imageCount) % imageCount
        )
    }

    function showNextImage() {
        setActiveImageIndex((currentIndex) =>
            (currentIndex + 1) % imageCount
        )
    }

    return (
        <article className="project-card">

            {hasImages && (
                <div className="project-gallery">
                    <div className="project-gallery-viewport">

                        <img
                            className="project-gallery-image"
                            src={project.images[activeImageIndex]}
                            alt={`Captura ${activeImageIndex + 1} de ${project.name}`}
                            loading="lazy"
                        />

                        {hasMultipleImages && (
                            <>
                                <button
                                    type="button"
                                    className="project-gallery-arrow project-gallery-arrow--previous"
                                    onClick={showPreviousImage}
                                    aria-label={`Ver captura anterior de ${project.name}`}
                                >
                                    <i className="bi bi-chevron-left" aria-hidden="true"></i>
                                </button>

                                <button
                                    type="button"
                                    className="project-gallery-arrow project-gallery-arrow--next"
                                    onClick={showNextImage}
                                    aria-label={`Ver captura siguiente de ${project.name}`}
                                >
                                    <i className="bi bi-chevron-right" aria-hidden="true"></i>
                                </button>

                                <div
                                    className="project-gallery-indicators"
                                    aria-label={`Capturas de ${project.name}`}
                                >
                                    {project.images.map((image, index) => (
                                        <button
                                            key={image}
                                            type="button"
                                            className={`project-gallery-dot ${
                                                index === activeImageIndex
                                                    ? 'active'
                                                    : ''
                                            }`}
                                            onClick={() =>
                                                setActiveImageIndex(index)
                                            }
                                            aria-label={`Ver captura ${index + 1}`}
                                            aria-pressed={
                                                index === activeImageIndex
                                            }
                                        />
                                    ))}
                                </div>
                            </>
                        )}

                    </div>
                </div>
            )}

            <div className="project-card-content">

                <div className="project-card-header">
                    <span className="project-number">
                        {String(project.id).padStart(2, '0')}
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