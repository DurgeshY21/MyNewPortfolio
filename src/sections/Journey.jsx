import React from 'react';

const Journey = () => {
    return (
        <section id="journey" className="relative w-full py-20 md:px-6 max-w-7xl mx-auto flex flex-col items-center">

            {/* Section Header */}
            <div className="flex flex-col items-center mb-8 md:mb-16 space-y-4 text-center">
                <div className="flex items-end gap-4">
                    <h2 className="text-5xl md:text-7xl font-black text-transparent select-none leading-none "
                        style={{ WebkitTextStroke: '2px #3b82f6' }}>
                        03
                    </h2>
                    <div className="flex flex-col">
                        <h2 className="text-3xl md:text-6xl font-black text-white uppercase whitespace-nowrap">
                            MY JOURNEY
                        </h2>
                        <span className="block h-1 w-full bg-blue-600 mt-1 rounded-full"></span>
                    </div>
                </div>
                <p className="text-gray-400 text-sm md:text-xl max-w-2xl font-light">
                    A timeline of my professional growth and education
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">

                {/* Education Card */}
                <div className="bg-[#111620] border border-gray-800 rounded-[2rem] p-6 md:p-8 hover:border-blue-500/30 transition-colors duration-300">
                    {/* Card Title */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-1.5 h-5 md:h-8 bg-blue-500 rounded-full"></div>
                        <h3 className="text-[16px] md:text-2xl font-bold text-white uppercase tracking-wide text-start text-nowrap">
                            ACADEMIC QUALIFICATION
                        </h3>
                    </div>

                    {/* Timeline Container */}
                    <div className="relative">
                        {/* Timeline Item 1 */}
                        <div className="relative pl-8 pb-12 border-l-2 border-cyan-500/30 last:pb-0">
                            {/* Ring Dot */}
                            <span className="absolute left-[-9px] top-1 h-4 md:h-5 w-4 md:w-5 rounded-full border-4 border-blue-400 bg-[#111620] shadow-[0_0_10px_rgba(34,211,238,0.6)]"></span>

                            <h4 className="text-sm md:text-xl font-bold text-white mb-1 text-start">
                                Chandra Shekhar Azad University, Kanpur, UP
                            </h4>
                            <p className="text-blue-400 font-semibold text-xs md:text-sm mb-3 text-start">2023</p>
                            <p className="text-gray-300 text-xs md:text-lg font-medium text-start">
                                Bachelor of Technology in Computer Science
                            </p>
                            <p className="text-gray-500 mt-1 text-start text-xs md:text-[16px]">GPA: 8.50 / 10.00</p>
                        </div>

                        {/* Timeline Item 2 */}
                        <div className="relative pl-8">
                            {/* Ring Dot */}
                            <span className="absolute left-[-9px] top-1 h-4 md:h-5 w-4 md:w-5 rounded-full border-4 border-blue-400 bg-[#111620] shadow-[0_0_10px_rgba(34,211,238,0.6)]"></span>

                            <h4 className="text-sm md:text-xl font-bold text-white mb-1 text-start">
                                Bright Angels Intermediate College, Kanpur, UP
                            </h4>
                            <p className="text-blue-400 font-semibold text-xs md:text-sm mb-3 text-start">2018</p>
                            <p className="text-gray-300 text-xs md:text-lg font-medium text-start">
                                Intermediate
                            </p>
                            <p className="text-gray-500 mt-1 text-start text-xs md:text-[16px]">Percentage: 87.5</p>
                        </div>
                    </div>
                </div>

                {/* Experience Card */}
                <div className="bg-[#111620] border border-gray-800 rounded-[2rem] p-6 md:p-8 hover:border-blue-500/30 transition-colors duration-300">
                    {/* Card Title */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-1.5 h-5 md:h-8 bg-blue-500 rounded-full"></div>
                        <h3 className="text-[16px] md:text-2xl font-bold text-white uppercase tracking-wide">
                            EXPERIENCE
                        </h3>
                    </div>

                    {/* Timeline Item 1 */}
                    <div className="relative pl-8">
                        {/* Ring Dot */}
                        <span className="absolute left-[-9px] top-1 h-5 w-5 rounded-full border-4 border-blue-400 bg-[#111620] shadow-[0_0_10px_rgba(34,211,238,0.6)]"></span>

                        <h4 className="text-[16x] md:text-xl font-bold text-white mb-1 text-start">
                            Giichi IT Solutions Pvt Ltd
                        </h4>
                        <p className="text-blue-400 font-semibold text-xs md:text-sm mb-4 text-start">
                            June 2024 – Present | Frontend Developer
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {['React.js', 'Next.js', 'Redux', 'TypeScript', 'Web3'].map((tech) => (
                                <span key={tech} className="px-3 py-1 text-[10px] md:md:text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-md">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Bullet Points */}
                        <ul className="space-y-3">
                            <li className="flex gap-3 text-gray-400 text-xs md:text-base leading-relaxed text-start">
                                <span className="text-gray-600 ">•</span>
                                Developed DEX frontend for real-time asset swapping and liquidity management.
                            </li>
                            <li className="flex gap-3 text-gray-400 text-xs md:text-base leading-relaxed text-start">
                                <span className="text-gray-600">•</span>
                                Engineered a real-time trading platform with low-latency data updates and charting tools.
                            </li>
                            <li className="flex gap-3 text-gray-400 text-xs md:text-base leading-relaxed text-start">
                                <span className="text-gray-600">•</span>
                                Built PoXScan Explorer for transparent blockchain transaction tracking.
                            </li>
                            <li className="flex gap-3 text-gray-400 text-xs md:text-base leading-relaxed text-start">
                                <span className="text-gray-600">•</span>
                                Designed and deployed Telegram Mini App for seamless on-the-go user engagement.
                            </li>
                            <li className="flex gap-3 text-gray-400 text-xs md:text-base leading-relaxed text-start">
                                <span className="text-gray-600">•</span>
                                Created a staking platform for secure asset delegation and yield optimization.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Journey;
