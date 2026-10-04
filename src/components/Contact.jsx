function Contact() {
    return (
        <section id="contacto" className="contact-section">
            <div className="container">
                <div className="contact-content">

                    <div className="section-heading">
                        <h2>Contacto</h2>
                    </div>

                    <p className="contact-description">
                        Si desea conocer más sobre mis proyectos o conversar
                        sobre alguna oportunidad, puede encontrarme en los
                        siguientes medios.
                    </p>

                    <div className="contact-links">

                        <a
                            href="https://github.com/IvanBeraun"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-link"
                        >
                            <i className="bi bi-github"></i>
                            <span>GitHub</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ivan-beraun-8078923b5/"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-link"
                        >
                            <i className="bi bi-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>

                        <a
                            href="mailto:ivanberaun07@gmail.com"
                            className="contact-link"
                        >
                            <i className="bi bi-envelope"></i>
                            <span>Correo electrónico</span>
                        </a>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact