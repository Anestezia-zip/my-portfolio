import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Education from './sections/Education'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto relative'>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Education />
      <Contact />
    </main>
  )
}

export default App