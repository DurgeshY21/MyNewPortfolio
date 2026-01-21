import React from 'react';

const Skills = () => {

    return (
        <section id="skills" className="relative w-full py-20 md:px-6 max-w-7xl mx-auto flex flex-col items-center space-grotesk-font">

            {/* Section Header */}
            <div className="flex flex-col items-center mb-8 md:mb-16 space-y-4 text-center">
                <div className="flex items-end gap-4">
                    <h2 className="text-5xl md:text-7xl font-black text-transparent select-none leading-none "
                        style={{ WebkitTextStroke: '2px #3b82f6' }}>
                        05
                    </h2>
                    <div className="flex flex-col">
                        <h2 className="text-3xl md:text-6xl font-black text-white uppercase whitespace-nowrap">
                            MY SKILLS
                        </h2>
                        <span className="block h-1 w-full bg-blue-600 mt-1 rounded-full"></span>
                    </div>
                </div>
                <p className="text-gray-400 text-sm md:text-xl max-w-2xl font-light">
                    My technical stack and expertise
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">

                {/* Card 1: Frontend & Javascript */}
                <div className="bg-[#111620] border border-gray-800 rounded-[2rem] p-6 md:p-8 hover:border-blue-500/30 transition-colors duration-300">
                    <div className="flex items-center gap-2 md:gap-3 mb-8 text-white font-bold tracking-wide uppercase">
                        <span className="text-blue-400 text-sm md:text-xl text-start text-nowrap">&lt;/&gt;</span>
                        FRONTEND & JAVASCRIPT
                    </div>

                    <div className="space-y-6">
                        {[
                            { name: 'JAVASCRIPT / TYPESCRIPT', width: '90%' },
                            { name: 'REACT.JS', width: '95%' },
                            { name: 'NEXT.JS', width: '85%' },
                            { name: 'REDUX TOOLKIT', width: '90%' }
                        ].map((skill) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-2">
                                    <span className="text-xs md:text-sm font-bold text-gray-300 uppercase">{skill.name}</span>
                                    <span className="text-xs md:text-sm font-bold text-blue-400">{skill.width}</span>
                                </div>
                                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-400 rounded-full animate-progress origin-left" style={{ width: skill.width }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Card 2: Web3 & Blockchain */}
                <div className="bg-[#111620] border border-gray-800 rounded-[2rem] p-6 md:p-8 hover:border-blue-500/30 transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-10 text-white font-bold tracking-wide uppercase">
                        <span className="text-blue-400 text-sm md:text-xl">❖</span>
                        WEB3 & BLOCKCHAIN
                    </div>

                    <div className="flex justify-around items-center">
                        {[
                            { name: 'ETHEREUM', pct: 75 },
                            { name: 'BSC', pct: 70 },
                            { name: 'WEB3.JS', pct: 80 }
                        ].map((skill) => (
                            <div key={skill.name} className="flex flex-col items-center gap-4">
                                <div className="relative h-14 md:h-24 w-14 md:w-24">
                                    {/* Circle Background */}
                                    <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                                        <path
                                            className="text-gray-800"
                                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                        />
                                        <path
                                            className="text-blue-400 animate-circle-progress"
                                            strokeDasharray="100, 100"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            style={{ "--target-offset": 100 - skill.pct }}
                                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                    </svg>
                                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xs md:text-xl font-bold">
                                        {skill.pct}%
                                    </span>
                                </div>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Card 3: Styling & Design */}
                <div className="bg-[#111620] border border-gray-800 rounded-[2rem] p-6 md:p-8 hover:border-blue-500/30 transition-colors duration-300">
                    <div className="flex items-center gap-2 md:gap-3 mb-8 text-white font-bold tracking-wide uppercase">
                        <span className="text-blue-400 text-sm md:text-xl">🎨</span>
                        STYLING & DESIGN
                    </div>

                    <div className="space-y-6">
                        {[
                            { name: 'HTML5 / CSS3', width: '95%' },
                            { name: 'TAILWIND CSS', width: '90%' },
                            { name: 'FRAMER MOTION', width: '85%' }
                        ].map((skill) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-2">
                                    <span className="text-xs md:text-sm font-bold text-gray-300 uppercase">{skill.name}</span>
                                    <span className="text-xs md:text-sm font-bold text-blue-400">{skill.width}</span>
                                </div>
                                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-400 rounded-full animate-progress origin-left" style={{ width: skill.width }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Card 4: Tools & Real-time */}
                <div className="bg-[#111620] border border-gray-800 rounded-[2rem] p-6 md:p-8 hover:border-blue-500/30 transition-colors duration-300">
                    <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8 text-white font-bold tracking-wide uppercase">
                        <span className="text-blue-400 text-sm md:text-xl text-start text-nowrap">⚡</span>
                        TOOLS & REAL-TIME
                    </div>

                    <div className="space-y-4 md:space-y-6">
                        {[
                            'WebSocket & Socket.IO',
                            'Git / GitHub',
                            'Firebase & Appwrite',
                            'Vercel & Docker'
                        ].map((tool) => (
                            <div key={tool} className="flex items-center gap-4 group">
                                <div className="h-8 md:h-10 w-8 md:w-10 rounded-full bg-cyan-900/20 flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 md:w-5 h-4 md:h-5 text-cyan-400 group-hover:text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                                <span className="text-sm md:text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">{tool}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <style>{`
        @keyframes progress {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
        }
        .animate-progress {
            animation: progress 1.5s ease-out forwards;
        }
        @keyframes circle-draw {
            from { stroke-dashoffset: 100; }
            to { stroke-dashoffset: var(--target-offset, 0); }
        }
        .animate-circle-progress {
             stroke-dashoffset: 100; /* Start hidden */
             animation: circle-draw 2s ease-out forwards;
        }
      `}</style>

        </section>
    );
};

export default Skills;
