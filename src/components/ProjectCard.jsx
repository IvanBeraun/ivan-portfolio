import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

function ProjectCard({ project }) {
    const [activeImageIndex, setActiveImageIndex] = useState(0)
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)

    const galleryButtonRef = useRef(null)
    const closeButtonRef = useRef(null)

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

    useEffect(() => {
        if (!isLightboxOpen) return

        const previousOverflow = document.body.style.overflow

        document.body.style.overflow = 'hidden'

        function handleKeyDown(event) {
            if (event.key === 'Escape') {
                setIsLightboxOpen(false)
            }

            if (hasMultipleImages && event.key === 'ArrowRight') {
                event.preventDefault()
                showNextImage()
            }

            if (hasMultipleImages && event.key === 'ArrowLeft') {
                event.preventDefault()
                showPreviousImage()
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        closeButtonRef.current?.focus()

        return () => {
            document.removeEventListener('keydown', handleKeyDown)

            document.body.style.overflow = previousOverflow
            galleryButtonRef.current?.focus()
        }
    }, [isLightboxOpen, hasMultipleImages])

    return (
        <>
            <article className="project-card">

                {hasImages && (
                    <div className="project-gallery">
                        <div className="project-gallery-viewport">

                            <button
                                ref={galleryButtonRef}
                                type="button"
                                className="project-gallery-open"
                                onClick={() => setIsLightboxOpen(true)}
                                aria-label={`Ampliar capturas de ${project.name}`}
                            >
                                <img
                                    className="project-gallery-image"
                                    src={project.images[activeImageIndex]}
                                    alt={`Captura ${activeImageIndex + 1} de ${project.name}`}
                                    loading="lazy"
                                />

                                <span className="project-gallery-zoom-hint">
                                    <i
                                        className="bi bi-zoom-in"
                                        aria-hidden="true"
                                    />
                                    Ampliar
                                </span>
                            </button>

                            {hasMultipleImages && (
                                <>
                                    <button
                                        type="button"
                                        className="project-gallery-arrow project-gallery-arrow--previous"
                                        onClick={showPreviousImage}
                                        aria-label={`Ver captura anterior de ${project.name}`}
                                    >
                                        <i className="bi bi-chevron-left" />
                                    </button>

                                    <button
                                        type="button"
                                        className="project-gallery-arrow project-gallery-arrow--next"
                                        onClick={showNextImage}
                                        aria-label={`Ver captura siguiente de ${project.name}`}
                                    >
                                        <i className="bi bi-chevron-right" />
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
                                <i className="bi bi-github" />
                            </a>

                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Demo de ${project.name}`}
                            >
                                <i className="bi bi-box-arrow-up-right" />
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

            {isLightboxOpen && hasImages && createPortal(
                <div
                    className="project-lightbox-backdrop"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <section
                        className="project-lightbox-dialog"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={`project-lightbox-title-${project.id}`}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <header className="project-lightbox-header">
                            <div>
                                <h2
                                    id={`project-lightbox-title-${project.id}`}
                                >
                                    {project.name}
                                </h2>

                                <p>Galería del proyecto</p>
                            </div>

                            <button
                                ref={closeButtonRef}
                                type="button"
                                className="project-lightbox-close"
                                onClick={() => setIsLightboxOpen(false)}
                                aria-label="Cerrar galería"
                            >
                                <i className="bi bi-x-lg" />
                            </button>
                        </header>

                        <div className="project-lightbox-stage">

                            {hasMultipleImages && (
                                <button
                                    type="button"
                                    className="project-lightbox-nav project-lightbox-previous"
                                    onClick={showPreviousImage}
                                    aria-label="Ver imagen anterior"
                                >
                                    <i className="bi bi-chevron-left" />
                                </button>
                            )}

                            <img
                                className="project-lightbox-image"
                                src={project.images[activeImageIndex]}
                                alt={`Captura ${activeImageIndex + 1} de ${project.name}`}
                            />

                            {hasMultipleImages && (
                                <button
                                    type="button"
                                    className="project-lightbox-nav project-lightbox-next"
                                    onClick={showNextImage}
                                    aria-label="Ver imagen siguiente"
                                >
                                    <i className="bi bi-chevron-right" />
                                </button>
                            )}

                        </div>

                        <footer className="project-lightbox-footer">
                            <span
                                className="project-lightbox-counter"
                                aria-live="polite"
                            >
                                {activeImageIndex + 1} / {imageCount}
                            </span>

                            {hasMultipleImages && (
                                <div
                                    className="project-lightbox-indicators"
                                    aria-label="Seleccionar captura"
                                >
                                    {project.images.map((image, index) => (
                                        <button
                                            key={image}
                                            type="button"
                                            className={`project-lightbox-dot ${
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
                            )}

                            <span className="project-lightbox-hint">
                                Usa ← y → para navegar · Esc para cerrar
                            </span>
                        </footer>

                    </section>
                </div>,
                document.body
            )}
        </>
    )
}

export default ProjectCard