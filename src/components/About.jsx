function About() {
    return (
        <section id="sobre-mi" className="about-section">
            <div className="container">
                <div className="section-heading">
                    <p className="section-label">Conóceme</p>
                    <h2>Sobre mí</h2>
                </div>

                <div className="row align-items-center g-5">
                    <div className="col-lg-7">
                        <p className="about-text">
                            Soy estudiante de Desarrollo de Software y me
                            interesa la creación de aplicaciones que resuelvan
                            problemas reales mediante la tecnología.
                        </p>

                        <p className="about-text">
                            Me gusta especialmente el desarrollo de aplicaciones
                            web, trabajar con diferentes tecnologías y aprender
                            mediante la creación de proyectos.
                        </p>

                        <p className="about-text">
                            Actualmente estoy construyendo proyectos para
                            fortalecer mis conocimientos y seguir desarrollándome
                            profesionalmente como desarrollador de software.
                        </p>
                    </div>

                    <div className="col-lg-5">
                        <div className="about-card">
                            <div className="about-card-item">
                                <i className="bi bi-code-slash"></i>
                                <div>
                                    <h3>Desarrollo</h3>
                                    <p>Aplicaciones web y software</p>
                                </div>
                            </div>

                            <div className="about-card-item">
                                <i className="bi bi-lightbulb"></i>
                                <div>
                                    <h3>Aprendizaje</h3>
                                    <p>Siempre buscando nuevos retos</p>
                                </div>
                            </div>

                            <div className="about-card-item">
                                <i className="bi bi-kanban"></i>
                                <div>
                                    <h3>Proyectos</h3>
                                    <p>Construcción de soluciones reales</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About