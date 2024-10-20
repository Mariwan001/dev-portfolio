import React from 'react'
import BlurBackground from './components/BlurBackground'
import Navbar from './components/Navbar'
import Hero from './components/Heros'
import Projects from './components/Projects'
import Abouts from './components/Abouts'
import Experience from './components/Experience'
import Testimonial from './components/Testimonial'
import Contacts from './components/Contacts'

const App = () => {
  return (
    <>
    <BlurBackground />
    <Navbar />
    <main className='antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10'>
        <Navbar />
        <Hero />
        <Projects />
        <Abouts />
        <Experience />
        <Testimonial />
        <Contacts />
    </main>
    </>
  )
}

export default App