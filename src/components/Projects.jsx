import React from 'react'

export default function Projects() {
  return (
    <section id="projects" className="section projects reveal">
      <div className="container">
        <h1>Projects</h1>
        <div className="project-grid">
          <article className="project-card">
            <div className="placeholder">Vending Machine Manager</div>
            <p className="muted">For my final project for the Application Development (ADEV) module i took
              in year 1.2, I was tasked to create a full functional web application that could manage 
              vending machines on campus, alongside its items contained. The application also made use of
              mySQL to store data persistently. This project allowed me to learn more about the languages used
              which were HTML, CSS and JavaScript.
            </p>
            <div className="chips">
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">JavaScript</span>
            <span className="chip">mySQL</span>
          </div>
          </article>

          <article className="project-card">
            <div className="placeholder">Sustainability Application</div>
            <p className="muted">In year 2.2, I was tasked to create a working mobile application for my 
              Mobile Development (MBAP) module. The application was to promote sustainability. My application 
              that I made featured personalized eco-quests for users to complete, which would reward thme with points
              to redeem for eco-friendly products. This project helped me learn the basics of Dart and Flutter framework.
            </p>
            <div className="chips">
            <span className="chip">Dart</span>
            <span className="chip">Flutter</span>
            <span className="chip">Firebase</span>
          </div>
          </article>

          <article className="project-card">
            <div className="placeholder">Online food ordering system</div>
            <p className="muted">For my Cloud Applicaton Development (CADV) module in year 1.2, I had to make use
              of Amazon Web Services (AWS) to deploy a web application that allowed users to order food online from 
              different vendors on campus. This project helped me learn the basics of cloud computing and how to deploy web applications
              using AWS services. 
            </p>
            <div className="chips">
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">JavaScript</span>
            <span className="chip">AWS</span>
            <span className="chip">MySQL</span>
          </div>
          </article>
        </div>
      </div>
    </section>
  )
}
