export const EXPERIENCE = [
  {
    id: 'dexmate-2026',
    title: 'Software Engineer Intern',
    company: 'Dexmate AI',
    start: '2026-06',
    end: '2026-09',
    bullets: [
      'Built the Cowork agent for the Physical AI platform, automating the robot-learning lifecycle from teleoperation data collection through annotation, training, and policy evaluation; engineered per-step context management for long-horizon workflows by dynamically loading relevant schemas from 70+ tools.',
      'Built an agent evaluation harness with 200+ state-conditioned tasks and a human-calibrated LLM judge, scoring retrieval, planning, and tool-call correctness at the trajectory level; used the resulting failure taxonomy to prioritize fixes across agent releases.',
      'Post-trained a Qwen-based agent planner with SFT and DPO on corrected examples and preference pairs mined from agent evaluation failures, improving tool-selection accuracy from 57% to 82%.',
    ],
  },
  {
    id: 'hao-ai-lab-2026',
    title: 'Research Assistant',
    company: 'UC San Diego - Hao AI Lab',
    start: '2026-01',
    end: 'Present',
    bullets: [
      'Designed multimodal benchmark tasks and curated samples for world models in collaboration with Unity, assessing physical reasoning and geometric consistency.',
      'Built a scalable evaluation framework for multimodal world models, combining simulator-derived physical GT with VLM-based judging for batch evaluation and cross-model analysis; work submitted to ICLR 2027.',
    ],
  },
  {
    id: 'tencent-2023',
    title: 'Game Developer',
    company: 'Tencent',
    start: '2023-08',
    end: '2024-09',
    bullets: [
      'Designed the algorithmic logic for runtime entity interactions, defining configurable thresholds and priority rules to ensure consistent collision feedback in congested scenarios.',
      'Optimized character rendering by designing novel, procedural LOD tiers that required zero new art assets, increasing on-screen character capacity by 150% while maintaining a stable 60 FPS.',
      'Coordinated weekly with external partners including Nintendo and The Pokémon Company to align product requirements and ensure consistency with global brand standards.',        
    ],
  },
  {
    id: '4399game-2022-2024',
    title: 'Game Developer',
    company: '4399 Games',
    start: '2020-09',
    end: '2023-07',
    bullets: [
      'Implemented core mechanics for the prototype, specifically scripting combat logic and character state transitions using a hybrid of C++ and Blueprints.',
      'Defined decision rules and dynamic difficulty for AI teammate auto-fill in games, partnered with engineers to tune bot parameters using player/context features, reducing abandon rate.',
    ],
  },
]

