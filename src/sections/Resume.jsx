import React from 'react';

const Resume = () => {
    return (
        <section id="resume" className="w-full py-16 md:px-6 max-w-7xl mx-auto space-grotesk-font">
            {/* Main Card Container */}
            <div className="relative w-full bg-[#0B0E14] rounded-[2rem] p-6 md:p-16 overflow-hidden border border-white/5 group">

                {/* Top Gradient Border Effect */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>

                {/* Background Glow */}
                <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left Content */}
                    <div className="flex flex-col items-start space-y-6 max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight text-start">
                            Elevate Your Projects <br />
                            With My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Expertise</span>
                        </h2>

                        <p className="text-gray-400 text-sm md:text-xl max-w-2xl leading-relaxed text-start">
                            Experienced Frontend Developer ready to bring your ideas to life with clean code and modern UI.
                        </p>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                                <span className="text-xl">🏆</span>
                                <span className="text-gray-300 font-medium text-sm md:text-base">Top-tier Development</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                                <span className="text-yellow-400 text-lg">⚡</span>
                                <span className="text-gray-300 font-medium text-sm md:text-base">Fast Execution</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content / CTA */}
                    <div className="flex flex-col items-center gap-4 min-w-max">
                        <a href="https://drive.google.com/file/d/1pdyzhOYJLvS6UiS5RkqIWFXrLN1mynG7/view?usp=sharing" download className="group text-sm md:text-lg relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 hover:bg-cyan-300 text-black font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                            DOWNLOAD RESUME
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-y-1 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M12 12.75l-3-3m3 3 3-3m-3 3V3" />
                            </svg>
                        </a>
                        <span className="text-gray-500 text-xs md:text-sm font-medium tracking-wide">
                            Available for full-time & freelance
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Resume;
