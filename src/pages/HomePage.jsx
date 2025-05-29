import React from 'react'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Header from '../components/Header'
import ScrollToTop from '../components/ScrollToTop'
import ScrollDown from '../components/ScrollDown'

function HomePage() {
  return (
    <div className='h-auto'>
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <ScrollDown />
      <ScrollToTop />
    </div>
  )
}

export default HomePage