import React from 'react'
import Navbar from './components/NavBar/navbar'
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects/projects'

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Projects />
    </div>
  )
}

export default App