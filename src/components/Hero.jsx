function Hero() {
    return (
        <section id="inicio" className="hero-section">
            <div className="container">
                <div className="row align-items-center min-vh-100">

                    <div className="col-lg-8">
                        <p className="hero-greeting">
                            Hola, soy
                        </p>

                        <h1 className="hero-title">
                            Ivan Beraun
                        </h1>

                        <h2 className="hero-subtitle">
                            Desarrollador de Software
                        </h2>

                        <p className="hero-description">
                            Estudiante de Desarrollo de Software apasionado por
                            crear aplicaciones web y soluciones tecnológicas.
                        </p>

                        <div className="hero-buttons">
                            <a href="#proyectos" className="btn btn-primary">
                                <i className="bi bi-code-slash me-2"></i>
                                Ver mis proyectos
                            </a>

                            <a
                                href="https://github.com/IvanBeraun"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-outline-light"
                            >
                                <i className="bi bi-github me-2"></i>
                                GitHub
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero