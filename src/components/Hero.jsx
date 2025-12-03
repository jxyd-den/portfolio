import React from 'react'
import profileImg from '../assets/profileImg.png'

export default function Hero() {
  return (
    <section id="home" className="hero reveal">
      <div className="container hero-inner">
        <div className="profile-banner" aria-hidden="false">
          <img src={profileImg} alt="Jayden" className="profile-banner-img" />
        </div>
        <h1>
          Hi, I'm Jayden, a
          <span className="accent"> Year 2 IT Student!</span>
        </h1>
        <p className="lead">
          Currently studying Diploma of Information Technology at
          Temasek Polytechnic, i learn to build small web experiences and enjoy
          learning new frontend techniques and coding languages.
        </p>
        <div className="hero-cta">
          <a className="btn" href="#projects">
            View projects
          </a>
          <a className="btn ghost" href="#contact">
            Contact me
          </a>
        </div>
      </div>
    </section>
  )
}
