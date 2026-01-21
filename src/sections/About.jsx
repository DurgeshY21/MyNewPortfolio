import React from 'react';

const About = () => {
    const skills = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-orange-400">
                    <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 002.576-2.576L8.279 5.044A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
                </svg>
            ),
            text: "Frontend Developer skilled in HTML5, CSS3, TailwindCSS, JavaScript, and modern frameworks like React.js and Next.js."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-400">
                    <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                    <path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
            ),
             text: "Passionate about UI/UX design, performance optimization, and building accessible, high-quality applications."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.202a.75.75 0 01-1.5 0v-.202c0-1.128 1.353-2.6 1.353-2.6.453-.396.453-1.034 0-1.43zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                </svg>
            ),
            text: "Specialized in React.js, Next.js, TypeScript, and modern state management tools like Redux and Zustand."
        },
          {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-400">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
            ),
            text: "Experienced in integrating REST APIs, handling asynchronous data, and managing application state efficiently."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-400">
                    <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.922-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
                </svg>
            ),
            text: "Enthusiastic about code refactoring, writing reusable components, maintainable clean codebases, and scalable state management using Redux Toolkit."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
                    <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.847.75.75 0 011.057-1.066 5.25 5.25 0 003.75 0 .75.75 0 11.536 1.408c.552.213 1.07.502 1.53.847v4.32c0 .327.278.586.6.544.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
                    <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z" clipRule="evenodd" />
                </svg>
            ),
            text: "Familiar with Web3 concepts, blockchain-based applications, and wallet integrations."
        }
    ];

    return (
        <section id="about" className="relative space-grotesk-font w-full py-20 md:px-6 max-w-7xl mx-auto flex flex-col items-start min-h-screen justify-center">

            {/* Header Section - Left Aligned */}
            <div className="flex flex-col items-center mb-16 space-y-4 text-center w-full">
                <div className="flex items-end gap-4">
                    <h2 className="text-5xl md:text-7xl font-black text-transparent select-none leading-none "
                        style={{ WebkitTextStroke: '2px #3b82f6' }}>
                        02
                    </h2>
                    <div className="flex flex-col">
                        <h2 className="text-3xl md:text-6xl text-white uppercase whitespace-nowrap font-black ">
                            ABOUT ME
                        </h2>
                        <span className="block h-1 w-full bg-blue-600 mt-1 rounded-full"></span>
                    </div>
                </div>
                <p className="text-gray-400 text-sm md:text-xl max-w-2xl font-light pl-2">
                    Experienced Frontend Developer, passionate about building high-quality web applications.
                </p>
            </div>

            {/* Main Grid Layout - 2 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">

                {/* Left Column - Empty Space for Future Image */}
                <div className="flex items-center justify-center min-h-[400px]">
                    {/* Placeholder or empty space */}
                </div>

                {/* Right Column - Content Card */}
                <div className="w-full bg-[#111620] border border-gray-800 rounded-2xl md:rounded-[2.5rem] p-4 md:p-8 shadow-2xl relative overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] -z-0"></div>

                    <div className="relative z-10 flex flex-col gap-8">

                        {/* Card Header */}
                        <div>
                            <h3 className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 tracking-wide uppercase mb-2 text-start ">
                                Durgesh Yadav <span className="">(Frontend Developer)</span>
                            </h3>
                            <p className="text-xs md:text-sm font-semibold text-gray-500 tracking-widest uppercase mb-6 text-start">
                                2+ Years of Experience
                            </p>
                            <div className="h-px w-full bg-gray-800"></div>
                        </div>

                        {/* Skills List */}
                        <div className="space-y-6">
                            {skills.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start group">
                                    <div className="mt-1 p-1.5 rounded-lg bg-gray-800/50 group-hover:bg-blue-500/10 transition-colors">
                                        {item.icon}
                                    </div>
                                    <p className="text-gray-300 text-xs md:text-[15px] leading-relaxed text-start">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-gray-800 my-2"></div>

                        {/* Contact Info */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                            <a href="tel:+919478629522" className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors group">
                                <div className="p-2 rounded-full bg-blue-600/10 group-hover:bg-blue-600/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
                                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="font-medium text-center text-xs md:text-[15px] text-nowrap">+91 6306495920</span>
                            </a>
                            <a href="mailto:durgesh.yadav@example.com" className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors group">
                                <div className="p-2 rounded-full bg-blue-600/10 group-hover:bg-blue-600/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
                                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                    </svg>
                                </div>
                                <span className="font-medium text-xs md:text-[15px]">durgeshy5226@gmail.com</span>
                            </a>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    );
};

export default About;
