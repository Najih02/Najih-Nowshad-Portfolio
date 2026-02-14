import ThreeBackground from './components/ThreeBackground'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <main className="bg-primary text-white selection:bg-accent-purple/30 selection:text-accent-cyan overflow-x-hidden cursor-none">
      <SmoothScroll />
      <CustomCursor />
      <ThreeBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}

export default App
