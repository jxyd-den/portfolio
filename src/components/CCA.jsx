import React from 'react'
import ccaImg from '../assets/CCA.png'

export default function CCA() {
  return (
    <section id="cca" className="section cca reveal">
      <div className="cca-container">
        <div className="cca-grid">
          <div className="cca-text">
            <h1>Co‑Curricular Activities</h1>
            <h2>TPAC — Temasek Polytechnic Adventure Club</h2>
            <p>
              I am an active member of TPAC, where I participate in outdoor
              activities such as hiking, camping, and team‑building exercises.
              Being part of this club has helped me develop leadership skills,
              teamwork, and a greater appreciation for nature. In my role as
              Assistant Honorary General Secretary I help organize events,
              manage communications, and coordinate logistics for club
              activities.
            </p>
          </div>

          <div className="cca-media" aria-hidden="false">
            <img src={ccaImg} alt="TPAC group photo" className="cca-img" />
          </div>
        </div>
      </div>
    </section>
  )
}
