import React from 'react';
import projectsThree from '../assets/poxscan.png';
import projectsFour from '../assets/dex.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "POXSCAN EXPLORER",
            category: "BLOCKCHAIN / WEB3",
            description: "A comprehensive blockchain explorer tailored for the PoxScan network, featuring real-time transaction tracking, block visualization, and validator metrics.",
            tags: ["REACT.JS", "REDUX", "TAILWIND"],
            image: projectsThree
        },
        {
            id: 2,
            title: "DEX SWAP INTERFACE",
            category: "DEFI / TRADING",
            description: "A high-performance decentralized exchange interface offering seamless token swaps, liquidity pool management, and real-time market charts.",
            tags: ["NEXT.JS", "WEB3", "ETHERS"],
            image: projectsFour
        }
    ];

    return (
        <section id="projects" className="relative w-full py-32 px-6 max-w-[1400px] mx-auto flex flex-col items-center">

            {/* Section Header */}
            <div className="flex flex-col items-center mb-32 space-y-4 text-center">
                <h2 className="text-[10vw] md:text-[8rem] leading-none font-black text-transparent opacity-10 select-none absolute top-20 left-1/2 -translate-x-1/2 -z-10"
                    style={{ WebkitTextStroke: '2px #ffffff' }}>
                    WORKS
                </h2>
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter relative z-10">
                    SELECTED <span className="text-blue-500">PROJECTS</span>
                </h2>
                <div className="h-1 w-24 bg-blue-500 rounded-full mt-4"></div>
            </div>

            {/* Projects List - Zig Zag Layout */}
            <div className="flex flex-col gap-32 w-full">
                {projects.map((project, index) => (
                    <div key={project.id}
                        className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                        {/* Image Side */}
                        <div className="flex-1 w-full group perspective">
                            <div className="relative rounded-[2rem] overflow-hidden border border-gray-800 bg-[#111620] shadow-2xl transition-all duration-700 transform group-hover:scale-[1.02] group-hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)]">
                                {/* Image */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="flex-1 flex flex-col items-start space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="text-blue-500 font-bold text-lg">0{index + 1}</span>
                                <span className="h-px w-12 bg-gray-700"></span>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">{project.category}</span>
                            </div>

                            <h3 className="text-4xl md:text-6xl font-black text-white uppercase leading-[0.9] tracking-tight hover:text-blue-400 transition-colors cursor-pointer">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-3 pt-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-4 py-2 rounded-full border border-gray-800 bg-[#0B0E14] text-xs font-bold text-gray-300 uppercase tracking-wider hover:border-blue-500 hover:text-white transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="pt-8">
                                <button className="group relative px-8 py-3 bg-white text-black font-bold uppercase tracking-wider rounded-full overflow-hidden hover:bg-blue-500 hover:text-white transition-colors duration-300">
                                    <span className="relative z-10 flex items-center gap-2">
                                        View Case Study
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                    </span>
                                </button>
                            </div>

                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
};

export default Projects;
