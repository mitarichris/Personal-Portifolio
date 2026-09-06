import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'
import Process from './components/Process'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import KimChat from './components/KimChat'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Skills />
        <Process />
        <Certifications />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <KimChat />
    </>
  )
}

export default App