import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import dexImage from '../assets/dex.png';
import Reveal from '../components/Reveal';
import {
    Wallet,
    TrendingUp,
    ShieldCheck,
    Zap,
    Repeat,
    Cpu,
    Layout,
    Key,
    CheckCircle2,
    Rocket,
    ArrowRightLeft
} from 'lucide-react';

const DexCaseStudy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#0B0E14] text-white selection:bg-blue-500/30 overflow-hidden relative">
            <Navbar />

            {/* Background Glow Effects - Blue Theme */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>
            </div>

            <main className="pt-32 pb-20 px-6 max-w-[1100px] mx-auto space-grotesk-font relative z-10">

                {/* Header Section */}
                <div className="text-center mb-20 space-y-8">
                    <Reveal width="100%">
                        <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 mb-6 drop-shadow-2xl">
                            DEX Swap Interface
                        </h1>
                    </Reveal>

                    <Reveal width="100%">
                        <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
                            A high-performance <span className="text-blue-400 font-semibold">decentralized exchange</span> interface offering seamless token swaps, liquidity pool management, and real-time market charts.
                        </p>
                    </Reveal>

                    <Reveal width="100%">
                        <div className="pt-8 flex justify-center">
                            <a href="#" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white font-bold rounded-full transition-all duration-300 border border-blue-500/30 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                                <ArrowRightLeft className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                <span className="tracking-widest uppercase text-sm">Launch App</span>
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
                        <img src={dexImage} alt="DEX Interface Hero" className="w-full h-auto transform transition-transform duration-1000 group-hover:scale-[1.02]" />
                    </div>
                </Reveal>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-24">
                    {[
                        { label: "TYPE", value: "DeFi Application", icon: <Wallet className="w-6 h-6 text-blue-400" /> },
                        { label: "CATEGORY", value: "Fintech / Trading", icon: <TrendingUp className="w-6 h-6 text-green-400" /> },
                        { label: "SECURITY", value: "Audited", icon: <ShieldCheck className="w-6 h-6 text-blue-400" /> },
                        { label: "STACK", value: "React • Socket.io • Thirdweb", icon: <Zap className="w-6 h-6 text-yellow-400" /> }
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
                                <Repeat className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">The Future of Trading</span>
                            </h2>

                            <div className="grid md:grid-cols-2 gap-12 text-gray-400 leading-relaxed font-light text-lg relative z-10 text-left">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <span className="w-2 h-8 bg-blue-500 rounded-full"></span> Overview
                                    </h3>
                                    <p className="mb-6">
                                        Built a <strong className="text-white">decentralized exchange frontend</strong> supporting swap, bridge, multichain, and cross-chain transactions.
                                    </p>
                                    <ul className="space-y-3 list-disc pl-4 marker:text-blue-500">
                                        <li>Implemented bridge and swap pairs across <strong className="text-white">Ethereum, BSC, and Tron</strong> using chain IDs for seamless integration.</li>
                                        <li>Integrated WebSocket for <strong className="text-white">real-time transaction status updates</strong> and swap confirmations.</li>
                                    </ul>
                                </div>

                                <div className="bg-[#0B0E14]/50 p-8 rounded-2xl border border-gray-800/30">
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <Cpu className="w-6 h-6 text-blue-400" /> Tech Stack
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            { name: "React.js", desc: "Frontend Framework" },
                                            { name: "Tailwind CSS", desc: "Styling System" },
                                            { name: "Socket.io", desc: "Real-time Updates" },
                                            { name: "Ether.js", desc: "EVM Interaction" },
                                            { name: "Thirdweb", desc: "Web3 SDK" },
                                            { name: "Tronweb", desc: "Tron Network" },
                                            { name: "Polluxweb", desc: "Pollux Chain" }
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
                            <div className="h-full bg-[#111620]/30 p-10 rounded-[2.5rem] border border-gray-800/30 hover:border-blue-500/30 transition-colors text-left">
                                <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                                    <Layout className="w-8 h-8 text-blue-400" /> My Role
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    I served as the <strong className="text-white">Frontend Developer</strong>, bridging the gap between complex smart contracts and a user-friendly frontend.
                                </p>
                                <ul className="space-y-4 text-gray-400">
                                    <li className="flex gap-4">
                                        <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold mt-1">1</span>
                                        <span>Integrated multi-wallet connection logic (MetaMask, WalletConnect).</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold mt-1">2</span>
                                        <span>Ensured accurate real-time price feeds and gas estimation.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold mt-1">3</span>
                                        <span>Collaborated with auditors to implement UI safety checks for high-risk txns.</span>
                                    </li>
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal width="100%" delay={0.2}>
                            <div className="h-full bg-[#111620]/30 p-10 rounded-[2.5rem] border border-gray-800/30 hover:border-blue-500/30 transition-colors">
                                <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                                    <Key className="w-8 h-8 text-blue-400" /> Key Features
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        "Instant token swaps (Auto-routing)",
                                        "Liquidity Pool Dashboard",
                                        "Real-time TradingView charts",
                                        "Slippage & Gas controls",
                                        "Transaction History"
                                    ].map((feature, i) => (
                                        <div key={i} className="group flex items-center gap-4 p-4 rounded-xl bg-[#0B0E14] border border-gray-800 hover:border-blue-500/50 transition-all cursor-default">
                                            <CheckCircle2 className="w-5 h-5 text-blue-500 group-hover:scale-125 transition-transform" />
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
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Challenges & Solutions</span>
                            </h3>

                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { title: "Slippage Control", desc: "Preventing users from losing money on volatile tokens.", solution: "Auto-slippage detection alerts" },
                                    { title: "TX Speed", desc: "Blockchain congestion making the UI feel slow.", solution: "Optimistic UI updates" },
                                    { title: "Wallet Support", desc: "Connecting diverse wallet providers.", solution: "Unified Web3Modal Adapter" }
                                ].map((item, i) => (
                                    <div key={i} className="bg-[#111620]/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all hover:-translate-y-2 group">
                                        <div className="text-4xl mb-6 opacity-30 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                                        <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                                        <p className="text-gray-500 text-sm mb-4 leading-relaxed">{item.desc}</p>
                                        <div className="pt-4 border-t border-gray-800">
                                            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Solution</span>
                                            <p className="text-gray-300 text-sm mt-1">{item.solution}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    {/* Outcome */}
                    <Reveal width="100%">
                        <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 p-10 md:p-16 rounded-[3rem] border border-blue-500/20 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

                            <Rocket className="w-16 h-16 md:w-20 md:h-20 text-blue-400 mx-auto mb-6" />
                            <h3 className="text-4xl font-black text-white mb-6">Project Outcome</h3>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                                The DEX interface facilitated over <span className="text-white font-bold">$1M in Beta Volume</span>. Users praised the <span className="text-blue-400">clean UI</span> and transparency, making decentralized trading accessible to beginners.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                {["Cross-Chain Bridge", "Limit Orders", "Portfolio Analytics"].map((tag, i) => (
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

export default DexCaseStudy;
