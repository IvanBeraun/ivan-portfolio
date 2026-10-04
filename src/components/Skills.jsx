import skills from '../data/skills'

function Skills() {
    return (
        <section id="habilidades" className="skills-section">
            <div className="container">

                <div className="section-heading">
                    <p className="section-label">Tecnologías</p>
                    <h2>Habilidades</h2>
                </div>

                <div className="row g-4">
                    {skills.map((skill) => (
                        <div className="col-md-6" key={skill.category}>
                            <div className="skill-card">

                                <div className="skill-card-header">
                                    <i className={`bi ${skill.icon}`}></i>
                                    <h3>{skill.category}</h3>
                                </div>

                                <div className="skill-list">
                                    {skill.technologies.map((technology) => (
                                        <span key={technology}>
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Skills