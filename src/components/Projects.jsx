import projects from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
    return (
        <section id="proyectos" className="projects-section">
            <div className="container">

                <div className="section-heading">
                    <p className="section-label">Mi trabajo</p>
                    <h2>Proyectos</h2>
                </div>

                <div className="row g-4">
                    {projects.map((project) => (
                        <div className="col-md-6" key={project.id}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Projects