import React, { useState } from 'react'
import Section from '../components/Section.jsx'
import { PROJECTS } from '../data/projects.js'

const ProjectItem = ({ project }) => {
  const [imageError, setImageError] = useState(false)
  const imageSrc = project.image ? `${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}` : null

  return (
    <article className="project-item">
      <div className="project-image">
        {imageSrc && !imageError ? (
          <img
            src={imageSrc}
            alt={project.title}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="project-image-placeholder" />
        )}
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <a href={project.link} className="project-button" target="_blank" rel="noreferrer">
          View Project
        </a>
      </div>
    </article>
  )
}

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="projects-list">
        {PROJECTS.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}

export default Projects


