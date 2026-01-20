import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import GetInTouch from './sections/GetInTouch';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <GetInTouch />
      </main>
    </div>
  );
}

export default App;
