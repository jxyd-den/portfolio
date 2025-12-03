import React from 'react'
import linkedInImg from '../assets/LinkedIn.png'
import githubImg from '../assets/GitHub.png'
import xImg from '../assets/X.png'
import instaImg from '../assets/Instagram.png'

export default function Contact() {
  return (
    <section id="contact" className="section contact reveal">
      <div className="container">
        <h1>Contact Me</h1>
        <p>
          Business Email: <strong>jngaihz@gmail.com</strong>
        </p>
        <div className="socials">
          <a
            className="social-link"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedInImg} alt="LinkedIn" className="social-icon" />
          </a>

          <a
            className="social-link social-github"
            href="https://github.com/jxyd-den"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={githubImg} alt="GitHub" className="social-icon" />
          </a>

          <a
            className="social-link"
            href="https://x.com/t3m3pst"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <img src={xImg} alt="X / Twitter" className="social-icon" />
          </a>

          <a
            className="social-link"
            href="https://www.instagram.com/jxyd_den/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src={instaImg} alt="Instagram" className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  )
}
