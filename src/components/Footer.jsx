function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">

                    <p>
                        © {currentYear} Ivan Beraun. Todos los derechos
                        reservados.
                    </p>

                    <a href="#inicio" aria-label="Volver al inicio">
                        <i className="bi bi-arrow-up"></i>
                    </a>

                </div>
            </div>
        </footer>
    )
}

export default Footer