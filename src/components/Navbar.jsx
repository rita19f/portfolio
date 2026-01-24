import React from 'react'

const Navbar = () => {
  return (
    <header id="top" className="navbar">
      <div className="container navbar-inner">
        <div className="navbar-brand">Rita Wu</div>
        <nav className="navbar-links">
          <a href="#top">About Me</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar


