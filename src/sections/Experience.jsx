import React from 'react'
import Section from '../components/Section.jsx'
import { EXPERIENCE } from '../data/experience.js'
import { formatTimeRange } from '../utils/dateFormat.js'

const Experience = () => {

  return (
    <Section id="experience" title="Experience">
      <div className="experience-timeline">
        <div className="experience-timeline-line" aria-hidden="true" />
        {EXPERIENCE.map((item) => (
          <div className="experience-row" key={item.id}>
            <div className="experience-time">{formatTimeRange(item.start, item.end)}</div>

            <div className="experience-axis" aria-hidden="true">
              <span className="experience-node" />
            </div>

            <article className="experience-content">
              <h3 className="experience-title">{item.title}</h3>
              <p className="experience-company">{item.company}</p>
              <ul className="experience-bullets">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Experience


