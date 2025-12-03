import React from 'react'
import reactLogo from '../assets/react.svg'

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
// NOTE: to avoid runtime 404s we only request icons for a curated set
// (some niche slugs like certain enterprise products sometimes 404 on the CDN).
const iconSlugs = {
  HTML: 'html5',
  JavaScript: 'javascript',
  React: 'react',
  Vite: 'vite',
  Git: 'git',
  GitHub: 'github',
  'Node.js': 'nodedotjs',
  Python: 'python',
  MongoDB: 'mongodb',
  mySQL: 'mysql',
  Dart: 'dart',
  Flutter: 'flutter',
}

function getIconUrl(skill) {
  if (skill === 'React') return reactLogo
  const slug = iconSlugs[skill]
  if (!slug) return null
  // use Simple Icons CDN; color omitted to use default
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
