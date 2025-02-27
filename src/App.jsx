import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollDown from './components/ScrollDown'

function App() {

  return (
    <>
      <div className='h-auto bg-gradient-to-br from-themelight via-themedark to-themelight'>
        <ScrollDown />
        <Navbar />
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}

export default App
