import React, { useEffect } from 'react'
import './App.css'
import Blobs from './components/Blobs'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import CCA from './components/CCA'
import Hackathon from './components/Hackathon'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // simple scroll reveal using IntersectionObserver with staggered delays
    const reveals = Array.from(document.querySelectorAll('.reveal'))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    // apply a slightly longer staggered delay based on document order
    reveals.forEach((r, i) => {
      // increase multiplier so reveals are more relaxed (slower stagger)
      const delay = (i * 0.18).toFixed(2) + 's'
      // use CSS variable so transitions can use it
      r.style.setProperty('--reveal-delay', delay)
      io.observe(r)
    })

    // no decorative outline rotation needed (outline removed)

    return () => io.disconnect()
  }, [])

  return (
    <div className="app-root">
      <Blobs />
      <Header />
      <main>
  <Hero />
  <About />
  <CCA />
  <Hackathon />
  <Projects />
  <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
