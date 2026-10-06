function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">

                <a className="navbar-brand fw-bold" href="#inicio">
                    Portafolio
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Abrir navegación"
                >
                    <i className="bi bi-list"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a className="nav-link" href="#inicio">
                                Inicio
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#sobre-mi">
                                Sobre mí
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#proyectos">
                                Proyectos
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#habilidades">
                                Habilidades
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#contacto">
                                Contacto
                            </a>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar