import React, { useState, useEffect } from 'react';
import Reveal from '../components/Reveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import C1 from '../assets/C1.png';
import C2 from '../assets/C2.jpg';
import C3 from '../assets/C3.jpg';
import C4 from '../assets/C4.jpg';

const certificates = [C1, C2, C3, C4];

const Accreditation = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-play logic
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current === certificates.length - 1 ? 0 : current + 1));
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setActiveIndex((current) => (current === certificates.length - 1 ? 0 : current + 1));
    };

    const prevSlide = () => {
        setActiveIndex((current) => (current === 0 ? certificates.length - 1 : current - 1));
    };

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

            {/* Right Content - Certificate Carousel */}
            <div className="flex-1 w-full max-w-xl">
                <Reveal delay={0.5} width='100%'>
                    <div className="relative group w-full aspect-[4/3] bg-gray-900/50 rounded-xl md:rounded-2xl border border-white/10 overflow-hidden shadow-2xl">

                        {/* Main Image */}
                        <div className="w-full h-full relative">
                            {certificates.map((cert, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform ${index === activeIndex
                                            ? 'opacity-100 translate-x-0 scale-100'
                                            : index < activeIndex
                                                ? 'opacity-0 -translate-x-full scale-95'
                                                : 'opacity-0 translate-x-full scale-95'
                                        }`}
                                >
                                    <img
                                        src={cert}
                                        alt={`Certificate ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60"></div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/40 text-white backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-blue-600 hover:scale-110 z-20 cursor-pointer"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/40 text-white backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-blue-600 hover:scale-110 z-20 cursor-pointer"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Dot Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20">
                            {certificates.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`h-1.5 md:h-2 rounded-full transition-all duration-500 cursor-pointer ${index === activeIndex
                                            ? 'w-6 md:w-8 bg-blue-500 shadow-[0_0_10px_2px_rgba(59,130,246,0.5)]'
                                            : 'w-1.5 md:w-2 bg-gray-500/50 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Certificate Info Overlay */}
                        <div className="absolute bottom-8 md:bottom-12 left-6 md:left-8 z-10 transform transition-all duration-500 bg-black/30 backdrop-blur-md px-4 py-2 rounded-lg border border-white/5">
                            <p className="text-white text-sm md:text-lg font-bold tracking-wide">
                                Certificate {activeIndex + 1} <span className="text-blue-400">/ {certificates.length}</span>
                            </p>
                        </div>

                    </div>
                </Reveal>
            </div>

        </section>
    );
};

export default Accreditation;
