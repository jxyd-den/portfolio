import React from 'react'
import reactLogo from '../assets/react.svg'
import css3Icon from '../assets/css3.svg'
import awsIcon from '../assets/amazonaws.svg'
import powerbiIcon from '../assets/microsoftpowerbi.svg'
import knimeIcon from '../assets/knime.svg'
import githubWhite from '../assets/github-white.svg'

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Vite',
  'Git',
  'GitHub',
  'Node.js',
  'Python',
  'AWS',
  'MongoDB',
  'mySQL',
  'AWS Services',
  'KNIME',
  'PowerBI',
  'Dart',
  'Flutter',
  'Cisco Packet Tracer',
]

// map friendly skill names to Simple Icons slugs where available
// keep a broad mapping but route some known problematic slugs to a different CDN
const iconSlugs = {
  HTML: 'html5',
  CSS: 'css3',
  JavaScript: 'javascript',
  React: 'react',
  Vite: 'vite',
  Git: 'git',
  GitHub: 'github',
  'Node.js': 'nodedotjs',
  Python: 'python',
  AWS: 'amazonaws',
  MongoDB: 'mongodb',
  mySQL: 'mysql',
  'AWS Services': 'amazonaws',
  KNIME: 'knime',
  PowerBI: 'microsoftpowerbi',
  Dart: 'dart',
  Flutter: 'flutter',
}

function getIconUrl(skill) {
  if (skill === 'React') return reactLogo
  // prefer local icons for items we saved locally
  const localMap = {
    CSS: css3Icon,
    AWS: awsIcon,
    'AWS Services': awsIcon,
    PowerBI: powerbiIcon,
    KNIME: knimeIcon,
    GitHub: githubWhite,
  }

  if (localMap[skill]) return localMap[skill]

  const slug = iconSlugs[skill]
  if (!slug) return null

  // Some slugs have had intermittent 404s on the simpleicons.org CDN
  // (css3, amazonaws, microsoftpowerbi, knime). Use unpkg as a fallback
  const useUnpkg = ['css3', 'amazonaws', 'microsoftpowerbi', 'knime']
  if (useUnpkg.includes(slug)) {
    return `https://unpkg.com/simple-icons@latest/icons/${slug}.svg`
  }

  // default to the simpleicons.org CDN for most icons
  return `https://cdn.simpleicons.org/${slug}`
}

export default function About() {
  return (
    <section id="about" className="section about reveal">
      <div className="container">
        <h1>About me</h1>
        <p>
          I'm a Year 2 Diploma of Information Technology student at
          Temasek Polytechnic. Being in year 2, I specialize in DevOps, Full
          stack web development, Internet of Things (IoT) and Cloud Computing.
          I enjoy building small web experiences, learning new coding
          languages, and exploring different areas of technology.
        </p>
        <div className="skills">
          <h2>Technical skills and technologies</h2>
          <div className="chips">
            {skills.map((s) => {
              const icon = getIconUrl(s)
              return (
                <span className="chip" key={s}>
                  {icon ? (
                    <img
                      src={icon}
                      alt=""
                      aria-hidden="true"
                      className="chip-icon"
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                  ) : null}
                  {s}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
