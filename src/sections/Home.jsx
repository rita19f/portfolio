import React from 'react'
import Section from '../components/Section.jsx'

const Home = () => {
  const avatarSrc =
    'data:image/svg+xml;charset=utf-8,' +
    encodeURIComponent(`<?xml version="1.0" encoding="UTF-8"?>
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#7f5af0"/>
      <stop offset="1" stop-color="#f97316"/>
    </linearGradient>
    <radialGradient id="bg" cx="0.25" cy="0.2" r="0.9">
      <stop offset="0" stop-color="#111827"/>
      <stop offset="1" stop-color="#020617"/>
    </radialGradient>
  </defs>
  <rect width="512" height="512" rx="256" fill="url(#bg)"/>
  <circle cx="256" cy="206" r="84" fill="rgba(255,255,255,0.12)"/>
  <path d="M120 430c22-86 86-128 136-128s114 42 136 128" fill="rgba(255,255,255,0.12)"/>
  <circle cx="256" cy="256" r="220" fill="none" stroke="url(#g)" stroke-width="10" opacity="0.7"/>
</svg>`)

  return (
    <Section id="top">
      <div className="home">
        <div className="home-left">
          <img className="avatar" src={"/img/photo.jpg"} alt="Your Name avatar" />
        </div>

        <div className="home-right">
          <h1 className="home-title">
            Hi, I&apos;m <strong>Rita</strong>.
          </h1>
          <p className="home-intro">
            I am a graduate student from UC San Diego, majoring in Data science. 
            I received my B.S. degree from Sun Yat-sen University.
            I am passionate about <strong>machine learning</strong>, <strong>game development</strong>, and <strong>computer graphics</strong>.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default Home


