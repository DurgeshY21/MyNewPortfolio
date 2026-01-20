import React from 'react';

const GetInTouch = () => {
    const contactInfo = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-cyan-400">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
            ),
            title: "EMAIL ME",
            details: ["durgesh.yadav@example.com"]
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-cyan-400">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 4.5V4.5z" clipRule="evenodd" />
                </svg>
            ),
            title: "CALL ME",
            details: ["+91 6306495920"]
        }
    ];

    return (
        <section id="contact" className="relative w-full pt-16 pb-6 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-between min-h-screen">

            <div className="w-full flex flex-col items-center">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white uppercase mb-2 inline-block relative">
                        GET IN TOUCH
                        <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-16 h-1.5 bg-blue-500 rounded-full"></span>
                    </h2>
                </div>

                <p className="text-gray-400 text-lg mb-16 max-w-2xl text-center">
                    Let's work together to create something great. <br /> Contact me today and let's get started.
                </p>

                {/* Contact List */}
                <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl justify-center mt-8">
                    {contactInfo.map((item, index) => (
                        <div key={index} className="flex-1 bg-[#111620] border border-gray-800/50 p-8 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/30 transition-all duration-300 group flex flex-col items-center text-center shadow-lg hover:shadow-blue-900/10">
                            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:border-blue-500/50 group-hover:scale-110 transition-all duration-300">
                                <div className="text-blue-400 w-7 h-7">
                                    {item.icon}
                                </div>
                            </div>
                            <h4 className="text-lg font-bold text-white uppercase tracking-widest mb-3">{item.title}</h4>
                            <div className="flex flex-col gap-1">
                                {item.details.map((line, i) => (
                                    <p key={i} className="text-gray-300 text-base md:text-lg font-medium tracking-wide">
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Area */}
            <div className="w-full mt-24 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider ml-1">DURGESH YADAV © 2024</span>
                </div>

                <div className="flex items-center gap-8">
                    <a href="https://linkedin.com/in/durgeshyadav" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-gray-500 uppercase hover:text-blue-400 transition-colors">LinkedIn</a>
                    <a href="https://github.com/durgeshyadav" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-gray-500 uppercase hover:text-blue-400 transition-colors">GitHub</a>
                    <a href="https://twitter.com/durgeshyadav" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-gray-500 uppercase hover:text-blue-400 transition-colors">Twitter</a>
                </div>
            </div>

        </section >
    );
};

export default GetInTouch;
