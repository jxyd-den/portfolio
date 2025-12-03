import React from 'react'

export default function Hackathon() {
  return (
    <section id="hackathons" className="section hackathons reveal">
      <div className="container">
        <h1>Hackathon Experiences</h1>
        <p>
          I havetaken part in several hackathons over the course of my 2 years at Temasek Polytechnic — forming small teams, rapid
          prototypes, and delivering demo-ready projects under tight deadlines.
        </p>

        <div className="project-grid">
          <div className="project-card">
            <h4>PolyFinTech 100 API</h4>
            <p className="muted">Role: UI/UX Designer</p>
            <div className="placeholder">Learned to collaborate across my team to work together
                alongside UBS to build a prototype for a smart wealth management solution
            </div>
          </div>

          <div className="project-card">
            <h4>Dell Innovate Dash</h4>
            <p className="muted">Role: UI/UX Designer</p>
            <div className="placeholder">Built a prototype solution for Singapore Cancer 
                Society (SCS) to drive personalized cancer awareness to encourage cancer screening.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
