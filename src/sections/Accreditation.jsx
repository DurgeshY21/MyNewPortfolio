import React from 'react';
import Reveal from '../components/Reveal';
import C1 from '../assets/C1.png';
import C2 from '../assets/C2.jpg';
import C3 from '../assets/C3.jpg';
import C4 from '../assets/C4.jpg';

const Accreditation = () => {
    return (
        <section id="accreditation" className="space-grotesk-font relative w-full py-20 md:px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start space-y-8">

                {/* Badge */}
                <Reveal>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                        <span>🏆</span>
                        Verified Credentials
                    </div>
                </Reveal>

                {/* Header */}
                <Reveal delay={0.1}>
                    <div className="relative">
                        <div className="flex items-center gap-4">
                            <h2 className="text-5xl md:text-7xl font-black text-transparent select-none leading-none "
                                style={{ WebkitTextStroke: '2px #3b82f6' }}>
                                02
                            </h2>
                            <div className="flex flex-col">
                                <h2 className="text-2xl md:text-5xl font-black text-white uppercase whitespace-nowrap">
                                    PROFESSIONAL <br />
                                    <span className="relative">
                                        ACCREDITATION
                                    </span>
                                </h2>
                                <span className="block h-1 w-full bg-blue-600 mt-1 rounded-full"></span>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Description */}
                <Reveal delay={0.2}>
                    <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-lg text-start">
                        Verified expertise in frontend development, demonstrating deep understanding and commitment to industry standards and best practices.
                    </p>
                </Reveal>

                {/* Buttons */}
                <Reveal delay={0.3}>
                    <div className="flex flex-wrap gap-4 md:gap-6">
                        <a href="#contact" className="px-6 md:px-8 py-3 md:py-4 text-xs md:text-[16px] rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold tracking-wide hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25">
                            CONTACT ME
                        </a>
                        <a href="#projects" className="px-6 md:px-8 py-3 md:py-4 text-xs md:text-[16px] rounded-full bg-[#111620] border border-gray-700 text-gray-300 font-bold tracking-wide hover:bg-gray-800 hover:text-white transition-colors">
                            VIEW PORTFOLIO
                        </a>
                    </div>
                </Reveal>

                {/* Stats */}
                <Reveal delay={0.4}>
                    <div className="flex gap-6 md:gap-28 pt-8 border-t-1 border-[#ffffff]/5">
                        <div>
                            <h4 className="text-xl md:text-3xl font-black text-white">5+</h4>
                            <p className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 uppercase tracking-wider mt-1">Certifications</p>
                        </div>
                        <div>
                            <h4 className="text-xl md:text-3xl font-black text-white">10+</h4>
                            <p className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 uppercase tracking-wider mt-1">Courses</p>
                        </div>
                        <div>
                            <h4 className="text-xl md:text-3xl font-black text-white">100%</h4>
                            <p className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 uppercase tracking-wider mt-1">Verified</p>
                        </div>
                    </div>
                </Reveal>

            </div>

            {/* Right Content - Certificate Grid */}
            <div className="flex-1 w-full max-w-xl">
                <Reveal delay={0.5} width='100%'>
                    <div className="grid grid-cols-2 gap-4 md:gap-6 w-full">
                        {[C1, C2, C3, C4].map((cert, index) => (
                            <div key={index} className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:z-10 hover:shadow-2xl border border-white/10 bg-gray-900/50">
                                {/* Glass sheen effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                                <img
                                    src={cert}
                                    alt={`Certificate ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>

        </section>
    );
};

export default Accreditation;
