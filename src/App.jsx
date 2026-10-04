import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />

                <About />

                <Projects />

                <section id="habilidades">
                    <h2>Habilidades</h2>
                </section>

                <section id="contacto">
                    <h2>Contacto</h2>
                </section>
            </main>
        </>
    )
}

export default App