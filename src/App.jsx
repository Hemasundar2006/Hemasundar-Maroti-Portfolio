import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-dark-900">
      {/* Animated Background */}
      <div className="fixed inset-0 moving-bg opacity-20"></div>
      
      {/* Particle System */}
      <ParticleBackground />
      
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App