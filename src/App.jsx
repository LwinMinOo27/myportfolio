import React from 'react'
import Navbar from './components/NavBar/navbar'
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects/projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App