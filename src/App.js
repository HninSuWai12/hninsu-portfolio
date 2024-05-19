import React from 'react'
import "./App.css";
import Hader from './components/header/Hader';
import Home from './components/home/Home';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Qualification from './components/qualifications/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scroll/Scrollup';
import Project from './components/portfolio/Project';
const App = () => {
  return (
    <div>
      <Hader/>
      <main className='main'>
      <Home />
      <About/>
      <Skill/>
      <Project/>
      <Qualification/>
      <Contact/>
      
      </main>
      <Footer/>
      <Scrollup/>
    </div>
  )
}

export default App
