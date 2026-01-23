import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import poxscanImage from '../assets/poxscan.png';
import Reveal from '../components/Reveal';

const PoxScanCaseStudy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#0B0E14] text-white selection:bg-blue-500/30 overflow-hidden relative">
            <Navbar />

            {/* Background Glow Effects */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]"></div>
            </div>

            <main className="pt-32 pb-20 px-6 max-w-[1100px] mx-auto space-grotesk-font relative z-10">

                {/* Header Section */}
                <div className="text-center mb-20 space-y-8">
                    <Reveal width="100%">
                        <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 mb-6 drop-shadow-2xl">
                            PoxScan Explorer
                        </h1>
                    </Reveal>

                    <Reveal width="100%">
                        <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
                            A comprehensive blockchain explorer tailored for the PoxScan network, featuring <span className="text-blue-400 font-semibold">real-time transaction tracking</span>, block visualization, and validator metrics.
                        </p>
                    </Reveal>

                    <Reveal width="100%">
                        <div className="pt-8 flex justify-center">
                            <a href="#" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white font-bold rounded-full transition-all duration-300 border border-blue-500/30 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                                <span className="text-xl group-hover:scale-110 transition-transform duration-300">🔍</span>
                                <span className="tracking-widest uppercase text-sm">Live Explorer</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </a>
                        </div>
                    </Reveal>
                </div>

                {/* Hero Image */}
                <Reveal width="100%">
                    <div className="mb-24 rounded-[2rem] overflow-hidden border border-gray-800/50 bg-[#111620]/50 backdrop-blur-sm shadow-2xl relative group">
                        <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                        <img src={poxscanImage} alt="PoxScan Explorer Hero" className="w-full h-auto transform transition-transform duration-1000 group-hover:scale-[1.02]" />
                    </div>
                </Reveal>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-24">
                    {[
                        { label: "TYPE", value: "Blockchain Explorer", icon: "🔗" },
                        { label: "CATEGORY", value: "Web3 / Infrastructure", icon: "🌐" },
                        { label: "STATUS", value: "Live", icon: "🟢" },
                        { label: "STACK", value: "React • Redux • Tailwind", icon: "⚡" }
                    ].map((stat, index) => (
                        <Reveal key={index} delay={index * 0.1} width="100%">
                            <div className="h-full bg-[#111620]/40 backdrop-blur-md p-8 rounded-2xl border border-gray-800/50 hover:border-blue-500/50 hover:bg-[#111620]/60 transition-all duration-300 flex flex-col items-center text-center group">
                                <div className="w-14 h-14 bg-blue-900/20 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {stat.icon}
                                </div>
                                <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">{stat.label}</span>
                                <span className="font-bold text-lg text-gray-200">{stat.value}</span>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Content Sections */}
                <div className="space-y-24">

                    {/* Overview */}
                    <Reveal width="100%">
                        <section className="bg-gradient-to-br from-[#111620] to-[#0B0E14] p-8 md:p-12 rounded-[2.5rem] border border-gray-800/50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]"></div>

                            <h2 className="text-3xl md:text-5xl font-bold mb-8 flex items-center gap-4 relative z-10">
                                <span className="text-blue-400">🔍</span>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Navigating the Blockchain</span>
                            </h2>

                            <div className="grid md:grid-cols-2 gap-12 text-gray-400 leading-relaxed font-light text-lg relative z-10">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <span className="w-2 h-8 bg-blue-500 rounded-full"></span> Overview
                                    </h3>
                                    <p className="mb-6">
                                        <strong className="text-white">PoxScan Explorer</strong> serves as the window into the PoxScan network. It demystifies complex blockchain data, translating raw hashes and hex code into readable, actionable insights for users and developers alike.
                                    </p>
                                    <p>
                                        My role was to architect a frontend that could handle the high velocity of a live blockchain without compromising on speed or usability.
                                    </p>
                                </div>

                                <div className="bg-[#0B0E14]/50 p-8 rounded-2xl border border-gray-800/30">
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <span className="text-purple-400">⚡</span> Tech Stack
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            { name: "React.js", desc: "Core Frontend Framework" },
                                            { name: "Redux Toolkit", desc: "Global State Management" },
                                            { name: "Tailwind CSS", desc: "Utility-First Styling" },
                                            { name: "REST API", desc: "Data Fetching Layer" }
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center justify-between border-b border-gray-800 pb-2 last:border-0 last:pb-0">
                                                <span className="text-white font-medium">{item.name}</span>
                                                <span className="text-xs text-gray-500 uppercase tracking-wider">{item.desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </Reveal>

                    {/* Features & Role */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <Reveal width="100%">
                            <div className="h-full bg-[#111620]/30 p-10 rounded-[2.5rem] border border-gray-800/30 hover:border-blue-500/30 transition-colors">
                                <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                                    <span className="text-pink-400">🎨</span> My Role
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    I led the <strong className="text-white">frontend architecture</strong>, focusing on performance optimizations for large datasets.
                                </p>
                                <ul className="space-y-4 text-gray-400">
                                    <li className="flex gap-4">
                                        <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold mt-1">1</span>
                                        <span>Designed re-usable data table components with virtualization.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold mt-1">2</span>
                                        <span>Implemented real-time WebSocket connections for live block feeds.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-sm font-bold mt-1">3</span>
                                        <span>Collaborated with backend engineers to optimize API response structures.</span>
                                    </li>
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal width="100%" delay={0.2}>
                            <div className="h-full bg-[#111620]/30 p-10 rounded-[2.5rem] border border-gray-800/30 hover:border-yellow-500/30 transition-colors">
                                <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                                    <span className="text-yellow-400">🔑</span> Key Features
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        "Real-time transaction tracking",
                                        "Detailed block & validator analytics",
                                        "Interactive hashrate charts",
                                        "Universal search (Hash, Block, Address)",
                                        "Dark mode native interface"
                                    ].map((feature, i) => (
                                        <div key={i} className="group flex items-center gap-4 p-4 rounded-xl bg-[#0B0E14] border border-gray-800 hover:border-blue-500/50 transition-all cursor-default">
                                            <span className="text-blue-500 group-hover:scale-125 transition-transform">✦</span>
                                            <span className="text-gray-300 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Challenges */}
                    <Reveal width="100%">
                        <div className="relative">
                            <div className="absolute left-1/2 -top-10 -translate-x-1/2 w-1/2 h-full bg-blue-500/5 blur-[100px] -z-10"></div>
                            <h3 className="text-3xl md:text-5xl font-bold text-center mb-16">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">Challenges & Solutions</span>
                            </h3>

                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { title: "Real-time Data", desc: "Handling frequent updates without UI lag.", solution: "Optimized Redux state & Memoization" },
                                    { title: "Data Visualization", desc: "Making raw hex data readable.", solution: "Created custom parsers & clean UI layouts" },
                                    { title: "Search Speed", desc: "Instant results for millions of records.", solution: "Implemented client-side caching strategies" }
                                ].map((item, i) => (
                                    <div key={i} className="bg-[#111620]/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-orange-500/30 transition-all hover:-translate-y-2 group">
                                        <div className="text-4xl mb-6 opacity-30 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                                        <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                                        <p className="text-gray-500 text-sm mb-4 leading-relaxed">{item.desc}</p>
                                        <div className="pt-4 border-t border-gray-800">
                                            <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">Solution</span>
                                            <p className="text-gray-300 text-sm mt-1">{item.solution}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    {/* Outcome */}
                    <Reveal width="100%">
                        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-10 md:p-16 rounded-[3rem] border border-blue-500/20 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

                            <span className="text-6xl mb-6 block">🚀</span>
                            <h3 className="text-4xl font-black text-white mb-6">Project Outcome</h3>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                                PoxScan Explorer allows <span className="text-white font-bold">thousands of users</span> to verify transactions daily with <span className="text-green-400">99.9% uptime</span>. It has become the trusted source of truth for the entire ecosystem.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                {["Wallet Connectivity", "Validator Dashboard", "NFT Gallery"].map((tag, i) => (
                                    <span key={i} className="px-6 py-2 rounded-full border border-gray-700 bg-black/30 text-sm text-gray-400 font-medium">
                                        Soon: {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                </div>
            </main>
        </div>
    );
};

export default PoxScanCaseStudy;
