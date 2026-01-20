import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-0 md:px-8 py-6 max-w-7xl mx-auto w-full sticky top-0 z-50">
      {/* Navbar Background */}
      <div className="absolute inset-0 bg-[#0B0E14]/80 backdrop-blur-md -z-10"></div>

      {/* Logo */}
      <div className="flex items-center gap-2 z-50">
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
        </div>
        <span className="text-xl font-bold italic tracking-wide">
          DURGESH <span className="text-blue-500">YADAV</span>
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300 z-50">
        <li><a href="#home" className="hover:text-white transition-colors text-white">Home</a></li>
        <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
        <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
        <li><a href="#journey" className="hover:text-white transition-colors">Journey</a></li>
        <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
        <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
      </ul>

      {/* Desktop Social Icons */}
      <div className="hidden md:flex items-center gap-2 z-50">
        <a href="https://github.com/durgeshyadav" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-gray-800 transition-colors" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-400">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="https://twitter.com/durgeshyadav" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-gray-800 transition-colors" aria-label="Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-400">
            <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
          </svg>
        </a>
        <a href="https://linkedin.com/in/durgeshyadav" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-gray-800 transition-colors" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-400 ">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </a>
      </div>

      {/* Mobile Menu Button - Bump z-index */}
      <button
        className="md:hidden z-[60] p-2 text-white relative"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay - High Z-Index, ensure covering everything */}
      <div className={`fixed inset-0 bg-[#0B0E14] z-[55] flex flex-col items-center justify-center transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <ul className="flex flex-col items-center gap-8 text-2xl font-bold text-gray-300">
          <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500 transition-colors">Home</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500 transition-colors">About</a></li>
          <li><a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500 transition-colors">Skills</a></li>
          <li><a href="#journey" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500 transition-colors">Journey</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500 transition-colors">Projects</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500 transition-colors">Contact</a></li>
        </ul>

        {/* Mobile Social Icons */}
        <div className="flex items-center gap-6 mt-12">
          <a href="https://github.com/durgeshyadav" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-400">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://twitter.com/durgeshyadav" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-400">
              <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
            </svg>
          </a>
          <a href="https://linkedin.com/in/durgeshyadav" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-400 ">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
