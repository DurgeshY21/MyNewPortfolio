import React from 'react';
import Pic from '../assets/PIC.jpeg';

const Home = () => {
    return (
        <section id="home" className="relative space-grotesk-font w-full min-h-screen flex items-center justify-center pt-0 md:px-6 max-w-7xl mx-auto overflow-hidden">

            {/* Content Wrapper */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

                {/* Left Content - Left aligned */}
                <div className="flex flex-col items-start justify-start text-left space-y-4 md:space-y-8 z-10">
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-blue-400 text-[10px] md:text-xs font-semibold tracking-wider uppercase">Available for new projects</span>
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-1 flex flex-col items-start">
                        <h1 className="text-4xl md:text-8xl font-black text-white tracking-tight leading-[0.9]">
                            REACT
                        </h1>
                        <h1 className="text-4xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 tracking-tight leading-[0.9]">
                            FRONTEND
                        </h1>
                        <h1 className="text-4xl md:text-8xl font-black text-white tracking-tight leading-[0.9]">
                            DEVELOPER
                        </h1>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm md:text-lg max-w-lg leading-relaxed text-left">
                        Crafting well-designed, responsive, and high-performance user interfaces with a focus on modern web standards and exceptional user experience.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-4">
                        <a href="#projects" className="text-sm md:text-[16px] group px-4 md:px-8 py-2.5 md:py-3.5 rounded-full border border-blue-500/50 text-blue-400 font-semibold hover:bg-blue-500/10 transition-all flex items-center gap-2">
                            View My Work
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                        <a href="#contact" className="text-sm md:text-[16px] px-4 md:px-8 py-2.5 md:py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25 flex items-center gap-2">
                            Hire Me
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-300">
                                <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.914-.143z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center items-center z-10">
                    {/* Background Blob/Gradient Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>

                    <div className="relative w-full max-w-md aspect-square bg-gradient-to-b from-gray-200 to-gray-400 rounded-[2.5rem] overflow-hidden grayscale contrast-125 border-4 border-white/5 shadow-2xl">
                        {/* User Image */}
                        <img
                            src={Pic}
                            alt="Durgesh Yadav"
                            className="w-full h-full object-cover object-top"
                        />
                        {/* Overlay gradient to blend bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent opacity-60"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Home;
