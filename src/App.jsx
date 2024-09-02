import './App.css'
import Header from './components/Header'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'

function App() {

  return (
    <div className="">
      <Header />
      <main className=''>
        <Skills />
        <Projects />
        {/* <About /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
