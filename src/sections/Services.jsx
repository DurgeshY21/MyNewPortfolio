import React from 'react';
import Reveal from '../components/Reveal';

const Services = () => {
    const services = [
        {
            id: 1,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 18" />
                </svg>
            ),
            title: "Frontend Development",
            description: "Building complete high-performance websites with seamless API integration, responsive layouts, and scalable architecture using React.js and Next.js."
        },
        {
            id: 2,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
            ),
            title: "Web3 & dApp Integration",
            description: "Developing decentralized interfaces, integrating wallets (MetaMask), and connecting with Ethereum, BSC, and Tron networks."
        },
        {
            id: 3,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.077-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                </svg>
            ),
            title: "UI/UX Implementation",
            description: "Transforming complex designs into pixel-perfect, interactive user interfaces with smooth Framer Motion animations."
        }
    ];

    return (
        <section id="services" className="relative w-full py-20 md:px-6 max-w-7xl mx-auto flex flex-col items-center space-grotesk-font">

            {/* Section Header */}
            <div className="flex flex-col items-center mb-8 md:mb-16 space-y-4 text-center">
                <Reveal>
                    <div className="flex items-end gap-2">
                        <h2 className="text-5xl md:text-7xl font-black text-transparent select-none leading-none "
                            style={{ WebkitTextStroke: '2px #3b82f6' }}>
                            06
                        </h2>
                        <div className="flex flex-col">
                            <h2 className="text-2xl md:text-6xl font-bold text-white uppercase whitespace-nowrap">
                                SERVICES I PROVIDE
                            </h2>
                            <span className="block h-1 w-full bg-blue-600 mt-1 rounded-full"></span>
                        </div>
                    </div>
                </Reveal>
                <Reveal delay={0.1}>
                    <p className="text-gray-400 text-sm md:text-xl max-w-2xl font-light">
                        Tailored digital solutions to elevate your business.
                    </p>
                </Reveal>
            </div>

            {/* Services Grid - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:px-4">
                {services.map((service, index) => (
                    <Reveal key={service.id} delay={index * 0.2} className="h-full">
                        <div className="relative bg-[#111620] border border-gray-800 rounded-[2rem] p-8 overflow-hidden group hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.2)] h-full">

                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Decorative Number */}
                            <div className="absolute -right-2 md:-right-4 -top-2 md:-top-4 text-7xl md:text-9xl font-black text-white/5 z-0 group-hover:text-blue-600/10 transition-colors duration-500 select-none">
                                0{index + 1}
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="mb-4 md:mb-8 inline-flex p-3 md:p-4 rounded-2xl bg-[#0B0E14] border border-gray-800 group-hover:border-blue-500/30 group-hover:bg-blue-600/10 transition-colors duration-500 shadow-lg">
                                    <div className="group-hover:scale-110 transition-transform duration-500">
                                        {service.icon}
                                    </div>
                                </div>

                                <h3 className="text-lg md:text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed text-xs md:text-sm font-light text-base group-hover:text-gray-300 transition-colors duration-300">
                                    {service.description}
                                </p>
                            </div>

                            {/* Bottom Line Indicator */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-500"></div>

                        </div>
                    </Reveal>
                ))}
            </div>

        </section>
    );
};

export default Services;
