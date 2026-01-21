import React from 'react';

const GetInTouch = () => {
    return (
        <section id="contact" className="space-grotesk-font relative w-full pt-20 px-4 md:px-12 max-w-7xl mx-auto flex flex-col justify-between min-h-[90vh] overflow-hidden">

            {/* Kinetic Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="w-full flex-grow flex flex-col justify-center items-center z-10 space-y-16 md:space-y-24">

                {/* Header - Subtle */}
                <div className="text-center">
                    <h2 className="text-xs md:text-base font-bold text-gray-400 tracking-[0.5em] uppercase mb-4">
                        Is it me you're looking for?
                    </h2>
                    <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mix-blend-overlay opacity-80 select-none">
                        Get In Touch
                    </h2>
                </div>

                {/* Massive Interactive Links */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 w-full">

                    {/* Email Item */}
                    <div className="group relative text-center cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                        <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-300 ease-out transform group-hover:scale-105">
                            EMAIL
                        </h3>
                        <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 absolute left-1/2 -translate-x-1/2 w-max">
                            <a href="mailto:durgesh.yadav@example.com" className="text-lg md:text-2xl font-medium text-gray-300 hover:text-white tracking-wide mt-6 inline-block border-b border-gray-600 hover:border-white pb-1 transition-colors">
                                durgesh.yadav@example.com
                            </a>
                        </div>
                    </div>

                    {/* Divider (Optional, visual separation) */}
                    <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-gray-700/50 to-transparent"></div>

                    {/* Call Item */}
                    <div className="group relative text-center cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                        <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 group-hover:from-purple-400 group-hover:to-pink-300 transition-all duration-300 ease-out transform group-hover:scale-105">
                            CALL
                        </h3>
                        <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 absolute left-1/2 -translate-x-1/2 w-max">
                            <a href="tel:+916306495920" className="text-lg md:text-2xl font-medium text-gray-300 hover:text-white tracking-wide mt-6 inline-block border-b border-gray-600 hover:border-white pb-1 transition-colors">
                                +91 6306495920
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Minimal Footer */}
            <div className="w-full pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-end md:items-center gap-6 z-10">
                <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest text-start">Designed & Built by</span>
                    <span className="text-sm font-bold text-white uppercase tracking-wider text-start">Durgesh Yadav © 2024</span>
                </div>

                <div className="flex items-center gap-8">
                    {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
                        <a
                            key={social}
                            href={`https://${social.toLowerCase()}.com/in/durgeshyadav`} /* Placeholder links, assuming consistent username */
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-gray-500 uppercase hover:text-white transition-colors relative group"
                        >
                            {social}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>
            </div>

        </section >
    );
};

export default GetInTouch;
