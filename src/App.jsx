import './App.css'
import About from './components/about/About'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import Qualifications from './components/qualifications/Qualifications'

function App() {

  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
      </main>
    </>
  )
}

export default App
