import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import ScrollToTop from './components/ScrollToTop';
import PoxScanCaseStudy from './pages/PoxScanCaseStudy';
import DexCaseStudy from './pages/DexCaseStudy';
import ItsAnimatedCaseStudy from './pages/ItsAnimatedCaseStudy';
import './App.css';

const MainLayout = () => (
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

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/case-study/poxscan" element={<PoxScanCaseStudy />} />
        <Route path="/case-study/dex" element={<DexCaseStudy />} />
        <Route path="/case-study/its-animated" element={<ItsAnimatedCaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
