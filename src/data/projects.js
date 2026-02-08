const projectsData = [
  {
    id: 'project-one',
    title: 'Metal Grass',
    description: 'Metal Real-Time Grass Rendering',
    image: '/img/Metal_Grass.png',
    link: 'https://github.com/rita19f/metal-grass-wind-sheen',
    order: 1,
  },
  {
    id: 'project-two',
    title: 'ZENITH',
    description: 'LLM‑driven Embodied‑AI Navigation System.',
    image: '/img/LLM_Nav.jpg',
    link: 'https://github.com/rita19f/Embodied-AI-Nav',
    order: 2,
  },

  {
    id: 'project-three',
    title: 'SmartPrice',
    description: 'High-performance inference microservice.',
    image: '/img/SmartPrice.jpg',
    link: 'https://github.com/rita19f/SmartPrice',
    order: 3,
  },
]

// Sort projects by order field before exporting
export const PROJECTS = [...projectsData].sort((a, b) => a.order - b.order)

