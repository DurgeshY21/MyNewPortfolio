import React from 'react';

const Accreditation = () => {
    return (
        <section id="accreditation" className="relative w-full py-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start space-y-8">

                {/* Badge */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
                    <span>🏆</span>
                    Verified Credentials
                </div>

                {/* Header */}
                <div className="relative">
                    <div className="flex items-center gap-4">
                    <h2 className="text-6xl md:text-7xl font-black text-transparent select-none leading-none "
                        style={{ WebkitTextStroke: '2px #3b82f6' }}>
                        02
                    </h2>
                    <div className="flex flex-col">
                        <h2 className="text-4xl md:text-5xl font-black text-white uppercase whitespace-nowrap">
                            PROFESSIONAL <br />
                            <span className="relative">
                                ACCREDITATION
                                </span>
                        </h2>
                        <span className="block h-1 w-full bg-blue-600 mt-1 rounded-full"></span>
                    </div>
                </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-lg leading-relaxed max-w-lg text-start">
                    Verified expertise in frontend development, demonstrating deep understanding and commitment to industry standards and best practices.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-6">
                    <a href="#contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold tracking-wide hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25">
                        CONTACT ME
                    </a>
                    <a href="#projects" className="px-8 py-4 rounded-full bg-[#111620] border border-gray-700 text-gray-300 font-bold tracking-wide hover:bg-gray-800 hover:text-white transition-colors">
                        VIEW PORTFOLIO
                    </a>
                </div>

                {/* Stats */}
                <div className="flex gap-28 pt-8 border-t-1 border-[#ffffff]/5">
                    <div>
                        <h4 className="text-3xl font-black text-white">5+</h4>
                        <p className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 uppercase tracking-wider mt-1">Certifications</p>
                    </div>
                    <div>
                        <h4 className="text-3xl font-black text-white">10+</h4>
                        <p className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 uppercase tracking-wider mt-1">Courses</p>
                    </div>
                    <div>
                        <h4 className="text-3xl font-black text-white">100%</h4>
                        <p className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 uppercase tracking-wider mt-1">Verified</p>
                    </div>
                </div>

            </div>

            {/* Right Content - Certificate Card */}
            <div className="flex-1 w-full max-w-xl">
                <div className="relative w-full aspect-[4/3] bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">

                    {/* Decorative Background Pattern */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                    </div>

                    {/* Certificate Content */}
                    <div className="relative h-full flex flex-col justify-between">

                        {/* Top Row */}
                        <div className="flex justify-between items-start">
                            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                                <span className="text-emerald-500 font-bold text-xl">U</span>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest">Certificate no: UC-5cf87bd8-1e9c</p>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest">Reference Number: 0004</p>
                            </div>
                        </div>

                        {/* Main Text */}
                        <div className="mt-8">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Certificate of Completion</p>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-2">
                                The Modern Flexbox, Grid, Sass & Animations
                            </h3>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Developer Course
                            </h3>
                        </div>

                        {/* User Name */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-gray-800">Durgesh Yadav</h2>
                        </div>

                        {/* Footer */}
                        <div className="mt-auto pt-8 flex justify-between items-end border-t border-gray-100">
                            <div>
                                <p className="text-xs text-gray-500 font-semibold">Date: Feb. 5, 2024</p>
                                <p className="text-xs text-gray-500 font-semibold mt-1">Length: 48.5 total hours</p>
                            </div>

                            {/* Verification Icon */}
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-400">
                                    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.491 4.491 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Accreditation;
