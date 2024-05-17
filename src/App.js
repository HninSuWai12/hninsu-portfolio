import React from 'react'
import "./App.css";
import Hader from './components/header/Hader';
import Home from './components/home/Home';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Qualification from './components/qualifications/Qualification';
import Contact from './components/contact/Contact';
const App = () => {
  return (
    <div>
      <Hader/>
      <main className='main'>
      <Home />
      <About/>
      <Skill/>
      <Qualification/>
      <Contact/>
      </main>
    </div>
  )
}

export default App
