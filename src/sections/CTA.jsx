import React from 'react';

const CTA = () => {
    return (
        <section className="relative w-full py-24 md:px-6 overflow-hidden">
            {/* Background Glow Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center z-10 relative">

                {/* Available Badge */}
                <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-gray-300 text-[10px] md:text-xs font-bold tracking-widest uppercase">Available for projects</span>
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl md:text-7xl font-black text-white tracking-tight mb-6 leading-[1.1]">
                    LET'S BUILD SOMETHING <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">AMAZING</span> TOGETHER
                </h2>

                {/* Subtext */}
                <p className="text-gray-400 text-sm md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
                    Transform your ideas into reality with expert development. Get a free consultation and project estimate within 24 hours.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-12 w-full max-w-4xl mx-auto mb-8 md:mb-16 border-y border-white/5 py-6 md:py-12">
                    <div className="flex flex-col items-center justify-center p-4">
                        <span className="text-2xl md:text-4xl md:text-5xl font-bold text-white mb-2">50+</span>
                        <span className="text-gray-500 text-[10px] md:text-xs font-bold tracking-widest uppercase text-nowrap">Projects</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 md:border-x border-white/5">
                        <span className="text-2xl md:text-4xl md:text-5xl font-bold text-white mb-2">5+</span>
                        <span className="text-gray-500 text-[10px] md:text-xs font-bold tracking-widest uppercase text-nowrap">Years Exp</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4">
                        <span className="text-2xl md:text-4xl md:text-5xl font-bold text-white mb-2">100%</span>
                        <span className="text-gray-500 text-[10px] md:text-xs font-bold tracking-widest uppercase text-nowrap">Satisfaction</span>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row items-center gap-6 mb-12 w-full md:w-auto">
                    <a href="#contact" className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full text-white font-bold text-sm md:text-lg transition-all hover:scale-105 w-full md:w-auto flex items-center justify-center gap-2">
                        START YOUR PROJECT
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </a>

                    <a href="#contact" className="group px-8 py-4 bg-transparent border border-white/10 rounded-full text-white font-bold text-sm md:text-lg hover:bg-white/5 transition-all w-full md:w-auto flex items-center justify-center">
                        SCHEDULE A CALL
                    </a>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
                    <div className="flex items-center gap-2">
                        <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-gray-400 text-xs font-bold tracking-wider uppercase">Free Consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-gray-400 text-xs font-bold tracking-wider uppercase">24hr Response</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-gray-400 text-xs font-bold tracking-wider uppercase">No Commitment</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CTA;
