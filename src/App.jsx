import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './sections/Home.jsx'
import Experience from './sections/Experience.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
