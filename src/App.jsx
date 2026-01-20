import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Resume from './sections/Resume';
import Journey from './sections/Journey';
import Accreditation from './sections/Accreditation';
import Skills from './sections/Skills';
import Services from './sections/Services';
import Projects from './sections/Projects';
import GetInTouch from './sections/GetInTouch';
import CTA from './sections/CTA';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <About />
        <Resume />
        <Journey />
        <Accreditation />
        <Skills />
        <Services />
        <Projects />
        <CTA />
        <GetInTouch />
      </main>
    </div>
  );
}

export default App;
