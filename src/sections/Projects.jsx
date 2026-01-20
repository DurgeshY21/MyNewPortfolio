import React from 'react';
import projectsThree from '../assets/poxscan.png';
import projectsFour from '../assets/dex.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "POXSCAN - BLOCKCHAIN EXPLORER",
            category: "LOVABLE (UI BUILDER)",
            date: "DECEMBER 13, 2024",
            tags: ["REACT.JS", "REDUX-PERSIST", "WEB3"],
            gradient: "from-[#F87171] to-[#FBBF24]",
            image: projectsThree
        },
        {
            id: 2,
            title: "DEX FRONTEND - SWAP INTERFACE",
            category: "HTML / WEB3",
            date: "JUNE 24, 2025",
            tags: ["NEXT.JS", "ETHERS.JS", "TAILWIND"],
            gradient: "from-[#C026D3] to-[#FACC15]",
            image: projectsFour
        }
    ];

    return (
        <section id="projects" className="relative w-full py-20 px-6 max-w-7xl mx-auto flex flex-col items-center">

            {/* Section Header */}
            <div className="flex flex-col items-center mb-16 space-y-2 text-center">
                <div className="relative">
                    <h2 className="text-8xl md:text-9xl font-black text-transparent opacity-30 select-none pb-4"
                        style={{ WebkitTextStroke: '2px #3b82f6' }}>
                        07
                    </h2>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                        <h2 className="text-4xl md:text-5xl font-black text-white uppercase whitespace-nowrap tracking-widest border-y-2 border-white/20 py-4 w-full">
                            LATEST PORTFOLIO
                        </h2>
                    </div>
                </div>
                <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide mt-4">
                    Innovative work for diverse clients.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full px-4 md:px-12">
                {projects.map((project) => (
                    <div key={project.id} className="flex flex-col gap-5 group cursor-pointer items-center">

                        {/* Image Card Container - Reduced padding and adjusted aspect ratio for smaller look */}
                        <div className={`relative w-full max-w-lg aspect-[16/11] rounded-[2rem] p-4 bg-gradient-to-br ${project.gradient} shadow-2xl overflow-hidden transition-transform duration-500 group-hover:-translate-y-2`}>

                            {/* Inner Image */}
                            <div className="w-full h-full rounded-[1.2rem] bg-gray-900 shadow-inner relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top"
                                />

                                {/* Tags Overlay */}
                                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 z-10">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2.5 py-0.5 bg-black/50 backdrop-blur-md rounded-full text-[9px] font-bold text-white uppercase tracking-wider border border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Icon Button Overlay */}
                                <div className="absolute bottom-3 right-3 h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110 z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-black">
                                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                    </svg>
                                </div>
                            </div>

                        </div>

                        {/* Project Info */}
                        <div className="flex flex-col gap-1 w-full max-w-lg px-2">
                            <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                                <span>{project.category}</span>
                                <span>{project.date}</span>
                            </div>
                            <h3 className="text-xl font-black text-white uppercase leading-tight group-hover:text-blue-500 transition-colors">
                                {project.title}
                            </h3>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
};

export default Projects;
