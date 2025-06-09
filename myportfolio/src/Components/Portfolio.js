import React, { useState, useEffect } from 'react';

// --- Utility Hook: useWindowDimensions ---
// A custom hook to get and update window dimensions on resize.
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0
    });

    useEffect(() => {
        // Only run if window is defined (for SSR compatibility)
        if (typeof window === 'undefined') return;

        // Handler to update dimensions
        function handleResize() {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty dependency array means this effect runs once on mount

    return windowDimensions;
}

// --- Lucide Icons (Inline SVG for simplicity) ---
// These are basic SVG representations for common icons.
// In a larger project, you might use a library like 'lucide-react' directly.
const IconGithub = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3c0-.49-.24-1.74-.7-2.32C18.17.61 17 2 17 2L15 2.2a2.38 2.38 0 0 0-2.38-2.38c-.22 0-.44.02-.65.07A2.38 2.38 0 0 0 9 0.22c-.22 0-.44.02-.65.07a2.38 2.38 0 0 0-2.38 2.38V3c0-.49-.24-1.74-.7-2.32C4.83.61 3.79 2 3.79 2L3 2.22A5.07 5.07 0 0 0 2.09 3c0-.49-.24-1.74-.7-2.32C.83.61 0 2 0 2C0 2.2 0 2.4 0 2.6V3c0 .49-.24 1.74-.7 2.32C-.17 6.39 0 7 0 7c0 .49-.24 1.74-.7 2.32C.83 10.39 2 11 2 11c0 .49-.24 1.74-.7 2.32C.83 14.39 2 15 2 15s.74 1.63 2.61 2.39a3.37 3.37 0 0 0 .94 2.61V22" stroke="currentColor" /><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c-1.4 0-1.6 2.2-1.6 2.2V18a4.8 4.8 0 0 0-1 3.2v-4c-1.4 0-1.6 2.2-1.6 2.2h-.4c-1.4 0-1.6 2.2-1.6 2.2V18c-1.4 0-1.6 2.2-1.6 2.2A4.8 4.8 0 0 0 4 18c-1.4 0-1.6 2.2-1.6 2.2V14a4.8 4.8 0 0 0-1 3.2V10c0-2.2 1.4-4 3.2-4h.4c-.4-1.6-.4-2.2-.4-3.2a4.8 4.8 0 0 0-1-3.2v-4c-1.4 0-1.6 2.2-1.6 2.2c-.4-1.6-.4-2.2-.4-3.2a4.8 4.8 0 0 0-1-3.2zM9 18a.6.6 0 0 1-.6-.6c0-.4.2-.6.6-.6s.6.2.6.6c0 .4-.2.6-.6.6zM15 18a.6.6 0 0 1-.6-.6c0-.4.2-.6.6-.6s.6.2.6.6c0 .4-.2.6-.6.6zM12 18a.6.6 0 0 1-.6-.6c0-.4.2-.6.6-.6s.6.2.6.6c0 .4-.2.6-.6.6z" /></svg>
);
const IconLinkedin = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);
const IconPhone = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.95-3.95A19.79 19.79 0 0 1 2 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);
const IconMail = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);

// --- Data Definitions ---
// Arrays holding skill and project data to be rendered dynamically.
const frontSkillsList = [
    { label: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { label: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { label: "Javascript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { label: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { label: "Redux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { label: "Material UI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
    { label: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { label: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { label: "Chakra-UI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chakraui/chakraui-original.svg" },
    { label: "React Native", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }, // React Native shares React icon typically
    { label: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }, // For design skills
    { label: "Github", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { label: "NPM", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
    { label: "Yarn", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" },
];

const backSkillsList = [
    { label: "Node JS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { label: "Express JS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { label: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { label: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
];

const projectsList = [

    {
        label: "Weather App",
        imgSrc: "../../public/images/FoodApp.png", // Placeholder image
        src: "https://boring-turing-d1946b.netlify.app/",
        githubSrc: "https://github.com/Shreyansh051/Mini-Weather-",
        description: "A responsive weather application built with vanilla JavaScript, HTML, and CSS, providing current and 7-day forecasts.",
        stack: ["HTML", "JavaScript", "CSS"],
    },
    {
        label: "Ajio Clone",
        imgSrc: "../../public/images/FoodApp.png", // Placeholder image
        src: "https://rad-wisp-02436f.netlify.app/",
        githubSrc: "https://github.com/Shreyansh051/AJIO_CLONE",
        description: "A collaborative e-commerce clone of Ajio.com, featuring full functionality and responsive design, emphasizing DOM manipulation skills.",
        stack: ["HTML", "CSS", "JavaScript", "Material-UI", "Bootstrap"],
    },
    {
        label: "Food Website",
        imgSrc: "../../public/images/FoodApp.png", // Placeholder image
        src: "https://peaceful-lamarr-51e4cf.netlify.app/",
        githubSrc: "https://github.com/Shreyansh051/Mini-Food-app",
        description: "A small food ordering website demonstrating basic order processing and number generation.",
        stack: ["JavaScript", "HTML", "CSS"],
    },
    {
        label: "Movie Searching Website",
        imgSrc: "../../public/images/FoodApp.png", // Placeholder image
        src: "https://jolly-poitras-83abc7.netlify.app/",
        githubSrc: "https://github.com/Shreyansh051/Mini-Movies-Searching-Website",
        description: "A movie search application utilizing debouncing for efficient API calls and closure for data handling.",
        stack: ["JavaScript", "CSS", "HTML"],
    },
    {
        label: "Freshly Clone",
        imgSrc: "../../public/images/FoodApp.png", // Placeholder image
        src: "https://friendly-wing-3ca4d4.netlify.app/",
        githubSrc: "https://github.com/Shreyansh051/Freshly_Project_clone",
        description: "My first group project, a clone of Freshly (US-based food delivery), focusing on planning and menu page development.",
        stack: ["CSS", "HTML", "JavaScript", "Material-UI", "Bootstrap"],
    },
];

// --- Components ---

// Navbar component for navigation with responsive toggle.
const Navbar = () => {
    const navItems = [
        { label: "Home", id: "home" },
        { label: "Skills", id: "skills" },
        { label: "Projects", id: "projects" },
        { label: "Contact", id: "contact" },
    ];

    // Function to smoothly scroll to a section by its ID.
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // State to manage the mobile navigation menu's open/close status.
    const [isOpen, setIsOpen] = useState(false);
    // State to manage if the navbar should have a shadow (e.g., on scroll)
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const handleScroll = () => {
            if (window.scrollY > 50) { // Add shadow after scrolling 50px
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full bg-zinc-950 bg-opacity-95 backdrop-blur-lg z-50 rounded-b-xl transition-all duration-300 ease-in-out ${scrolled ? 'shadow-2xl border-b border-violet-700' : 'shadow-none'}`}>
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <a href="#home" onClick={() => scrollToSection('home')} className="flex items-center space-x-2 text-white text-2xl font-bold rounded-lg p-2 hover:bg-zinc-800 transition duration-300 transform hover:scale-105">
                    <img src="https://placehold.co/40x40/0F172A/E2E8F0?text=S" alt="Logo" className="h-9 w-9 rounded-full shadow-md border-2 border-violet-600" />
                    <span className="font-extrabold text-violet-400">Shreyansh</span>
                </a>

                {/* Mobile Toggle Button */}
                <button
                    className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400 text-zinc-200 transition-transform duration-300 hover:scale-110"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                    </svg>
                </button>

                {/* Navigation Links (responsive visibility) */}
                <div className={`${isOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row md:items-center md:space-x-8 mt-4 md:mt-0 w-full md:w-auto`}>
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => { scrollToSection(item.id); setIsOpen(false); }} // Close menu on click
                            className="block px-4 py-2 text-zinc-300 hover:text-violet-300 hover:bg-zinc-700 rounded-lg transition duration-300 text-center md:text-left text-lg font-medium tracking-wide transform hover:scale-105"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

// SkillCard component to display individual skills.
const SkillCard = ({ src, skillName }) => {
    return (
        <div className="flex flex-col items-center justify-center p-6 m-4 bg-zinc-800 rounded-2xl shadow-xl transition-all transform hover:scale-105 duration-300 ease-in-out border border-zinc-700 hover:border-violet-600 group relative overflow-hidden">
            {/* Subtle background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-700 to-fuchsia-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl animate-spin-slow"></div>
            <img
                className="h-16 w-16 md:h-20 md:w-20 object-contain mb-3 rounded-full bg-zinc-700 p-2 shadow-inner z-10 transform group-hover:scale-110 transition-transform duration-300"
                src={src}
                alt={`${skillName} icon`}
                title={skillName}
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/64x64/334155/fff?text=?" }} // Fallback image on error
            />
            <p className="text-zinc-200 text-base md:text-lg font-medium text-center mt-2 z-10 group-hover:text-violet-300 transition-colors duration-300">{skillName}</p>
        </div>
    );
};

// ProjectCard component to display individual project details.
const ProjectCard = ({ project }) => {
    return (
        <div className="bg-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center transition-all transform hover:scale-[1.01] duration-500 ease-in-out border border-zinc-700 hover:border-violet-600 group hover:shadow-3xl hover:translate-y-[-5px] animate-fade-in-up">
            <div className="lg:w-1/2 w-full relative overflow-hidden">
                <a href={project.src} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
                    <img
                        className="w-full h-56 md:h-72 lg:h-full object-cover object-center lg:rounded-l-2xl lg:rounded-tr-none rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
                        src={project.imgSrc}
                        alt={project.label}
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/334155/fff?text=Project+Image" }} // Fallback image
                    />
                    {/* Overlay for hover effect */}
                    <div className="absolute inset-0 bg-violet-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-xl font-bold scale-0 group-hover:scale-100 transition-transform duration-300">View Project</span>
                    </div>
                </a>
            </div>
            <div className="lg:w-1/2 w-full p-8 flex flex-col justify-between">
                <div>
                    <h3 className="text-3xl font-extrabold text-violet-400 mb-3 leading-tight animate-fade-in-up delay-200">{project.label}</h3>
                    {project.description && (
                        <p className="text-zinc-300 text-lg mb-5 leading-relaxed animate-fade-in-up delay-300">{project.description}</p>
                    )}
                    <div className="flex flex-wrap gap-2 mb-6 animate-fade-in-up delay-400">
                        {project.stack?.map((tech, index) => (
                            <span key={index} className="bg-violet-700 text-violet-100 text-sm font-semibold px-3 py-1 rounded-full shadow-md transition-all duration-300 hover:bg-violet-600 hover:scale-105">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in-up delay-500">
                    <button
                        onClick={() => window.open(project.src, "_blank")}
                        className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-75 flex-grow text-lg"
                    >
                        See Live
                    </button>
                    {project.githubSrc && (
                        <button
                            onClick={() => window.open(project.githubSrc, "_blank")}
                            className="bg-zinc-700 hover:bg-zinc-600 text-zinc-200 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-75 flex-grow text-lg"
                        >
                            Source Code
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};


// --- Main Portfolio Component ---
// This component encapsulates the entire portfolio layout and content.
const App = () => { // Renamed from 'Portfolio' to 'App' for export
    // useWindowDimensions is included but not directly used in the JSX here,
  
    const [flipped, setFlipped] = useState(false);
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-200 font-inter antialiased overflow-x-hidden relative">
            {/* Global Styles and Keyframes for animations */}
            <style>{`
                html {
                    scroll-behavior: smooth;
                }
                body {
                    font-family: 'Inter', sans-serif;
                }
                /* Fade-in animation for sections */
                .fade-in-section {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                }
                .fade-in-section.is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* Background blob animations */
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.3, 0.9);
                }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-1500 { animation-delay: 1.5s; }
                .animation-delay-3000 { animation-delay: 3s; }
                .animation-delay-2500 { animation-delay: 2.5s; }

                /* Character slide-in for hero text */
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                    opacity: 0; /* Ensure it starts hidden */
                }
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-400 { animation-delay: 0.4s; }
                .delay-500 { animation-delay: 0.5s; }
                .delay-600 { animation-delay: 0.6s; }
                .delay-700 { animation-delay: 0.7s; }

                /* Staggered text reveal for words */
                .staggered-text-word {
                    display: inline-block;
                    opacity: 0;
                    transform: translateY(20px);
                    animation: fadeInUp 0.6s ease-out forwards;
                }

                /* Slide-in from left/right/down for headers */
                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideInRight {
                    from { opacity: 0; transform: translateX(50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideInDown {
                    from { opacity: 0; transform: translateY(-50px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; opacity: 0; }
                .animate-slide-in-right { animation: slideInRight 0.8s ease-out forwards; opacity: 0; }
                .animate-slide-in-down { animation: slideInDown 0.8s ease-out forwards; opacity: 0; }
                
                /* Spin animation for background glow */
                @keyframes spinSlow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spinSlow 15s linear infinite;
                }
            `}</style>

            {/* Navbar */}
            <Navbar />

            {/* Function to add intersection observer for fade-in effect */}
            {/* This ensures sections animate only when they become visible */}
            <ScrollRevealWrapper>
                {/* Home Section */}
                <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-zinc-950 to-zinc-900">
                    {/* Subtle background glow/blob */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                    <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-around space-y-12 md:space-y-0 md:space-x-16 z-10">
                        <div className="text-center md:text-left max-w-lg">
                            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                                {/* Split text into spans for individual word animation */}
                                {"Hello, I'm ".split(' ').map((word, index) => (
                                    <span key={`hello-word-${index}`} className="staggered-text-word" style={{ animationDelay: `${0.1 * index}s` }}>
                                        {word}{index < "Hello, I'm ".split(' ').length - 1 ? '\u00A0' : ''}
                                    </span>
                                ))}
                                <span className="text-violet-400 drop-shadow-lg">
                                    {"Shreyansh.".split(' ').map((word, index) => (
                                        <span key={`name-word-${index}`} className="staggered-text-word" style={{ animationDelay: `${0.1 * (index + "Hello, I'm ".split(' ').length)}s` }}>
                                            {word}{index < "Shreyansh.".split(' ').length - 1 ? '\u00A0' : ''}
                                        </span>
                                    ))}
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed mb-8 animate-fade-in-up delay-300">
                                I am always enthusiastic about developing websites and web applications. I like to talk about new technologies, *and crafting intuitive user experiences with beautiful design*.
                            </p>
                            <div className="flex justify-center md:justify-start space-x-6 mb-10 animate-fade-in-up delay-500">
                                <a
                                    href="https://github.com/Shreyansh051"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-violet-400 hover:text-violet-300 transition-colors duration-300 rounded-full p-3 hover:bg-zinc-800 transform hover:scale-110 shadow-md ring-2 ring-violet-600 hover:ring-violet-400"
                                    aria-label="GitHub Profile"
                                >
                                    <IconGithub className="w-9 h-9 md:w-10 md:h-10" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/shreyansh-21b181215/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-violet-400 hover:text-violet-300 transition-colors duration-300 rounded-full p-3 hover:bg-zinc-800 transform hover:scale-110 shadow-md ring-2 ring-violet-600 hover:ring-violet-400"
                                    aria-label="LinkedIn Profile"
                                >
                                    <IconLinkedin className="w-9 h-9 md:w-10 md:h-10" />
                                </a>
                            </div>
                            <button
                                onClick={() => window.open("https://docs.google.com/document/d/1Bf2R72H6uI-XkPj1Q8xXg6B4B5b8a6a6/export?format=pdf", "_blank")} // Placeholder resume link
                                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-75 text-lg animate-fade-in-up delay-700"
                            >
                                View Resume
                            </button>
                        </div>
                        <div className="md:w-1/3 w-2/3 max-w-xs md:max-w-sm hidden md:block animate-fade-in-right delay-400">
                            {/* Flip container with 3D perspective */}
                            <div
                                className="relative mx-auto perspective"
                                style={{ width: '350px', height: '350px' }}
                                onMouseEnter={() => setFlipped(true)}
                                onMouseLeave={() => setFlipped(false)}
                                onClick={() => setFlipped(!flipped)} // Optional: remove if only hover
                            >
                                <div
                                    className={`relative w-full h-full transition-transform duration-700 ease-in-out preserve-3d ${flipped ? 'rotate-y-180' : ''}`}
                                >
                                    {/* Common Styles */}
                                    {[{
                                        src: "../images/Shreyansh.png",
                                        alt: "Real Image",
                                        rotate: ""
                                    }, {
                                        src: "../images/Shreyanshai.png",
                                        alt: "AI Avatar",
                                        rotate: "rotate-y-180"
                                    }].map(({ src, alt, rotate }, i) => (
                                        <div
                                            key={i}
                                            className={`absolute inset-0 rounded-full border-4 border-violet-600 shadow-2xl overflow-hidden backface-hidden ${rotate}`}
                                        >
                                            <img
                                                src={src}
                                                alt={alt}
                                                className="w-full h-full object-cover"
                                                style={{
                                                    filter: 'brightness(105%) contrast(110%)',
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900 relative">
                    {/* Subtle background glow/blob */}
                    <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-1500"></div>
                    <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-rose-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-3000"></div>

                    <div className="container mx-auto z-10 relative">
                        <h2 className="text-5xl font-extrabold text-center mb-16 text-violet-400 drop-shadow-lg animate-slide-in-down">
                            <span className="bg-zinc-800 px-6 py-3 rounded-2xl shadow-xl border border-zinc-700">My Skills</span>
                        </h2>

                        <div className="mb-16">
                            <h3 className="text-4xl font-bold text-center mb-10 text-zinc-300 animate-slide-in-left delay-200">
                                Front End & Mobile Development
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 justify-items-center">
                                {frontSkillsList.map((s) => (
                                    <SkillCard key={s.label} src={s.src} skillName={s.label} />
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold text-center mb-10 text-zinc-300 animate-slide-in-right delay-200">
                                Back End
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 justify-items-center">
                                {backSkillsList.map((s) => (
                                    <SkillCard key={s.label} src={s.src} skillName={s.label} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800">
                    <div className="container mx-auto">
                        <h2 className="text-5xl font-extrabold text-center mb-16 text-violet-400 drop-shadow-lg animate-slide-in-down">
                            <span className="bg-zinc-900 px-6 py-3 rounded-2xl shadow-xl border border-zinc-700">My Projects</span>
                        </h2>
                        <div className="grid grid-cols-1 gap-16">
                            {projectsList.map((proj) => (
                                <ProjectCard key={proj.label} project={proj} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 relative overflow-hidden">
                    {/* Subtle background glow/blob */}
                    <div className="absolute top-1/3 left-0 w-80 h-80 bg-fuchsia-700 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2500"></div>
                    <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-indigo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>

                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-16 md:space-y-0 md:space-x-20 text-center md:text-left z-10">
                        <div className="max-w-xl animate-fade-in-left">
                            <h2 className="text-6xl md:text-7xl font-extrabold text-violet-400 leading-tight mb-8 drop-shadow-lg">
                                {/* Staggered text for emphasis */}
                                {"Let's ".split(' ').map((word, index) => (
                                    <span key={`lets-word-${index}`} className="staggered-text-word" style={{ animationDelay: `${0.1 * index}s` }}>
                                        {word}{index < "Let's ".split(' ').length - 1 ? '\u00A0' : ''}
                                    </span>
                                ))}
                                <br />
                                {"Work ".split(' ').map((word, index) => (
                                    <span key={`work-word-${index}`} className="staggered-text-word" style={{ animationDelay: `${0.1 * (index + "Let's ".split(' ').length)}s` }}>
                                        {word}{index < "Work ".split(' ').length - 1 ? '\u00A0' : ''}
                                    </span>
                                ))}
                                <br />
                                {"Together!".split(' ').map((word, index) => (
                                    <span key={`together-word-${index}`} className="staggered-text-word" style={{ animationDelay: `${0.1 * (index + "Let's ".split(' ').length + "Work ".split(' ').length)}s` }}>
                                        {word}{index < "Together!".split(' ').length - 1 ? '\u00A0' : ''}
                                    </span>
                                ))}
                            </h2>
                            <p className="text-xl text-zinc-300 leading-relaxed mb-10 animate-fade-in-up delay-300">
                                One of my favorite things about developing web applications is the variety in projects. So if you want to collaborate or have some work for me, get in touch and tell me what you have in mind. — I can’t wait to hear all about it!
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-5 animate-fade-in-up delay-500">
                                <a
                                    href="tel:8435093856"
                                    className="inline-flex items-center bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold py-4 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 group ring-2 ring-violet-600 hover:ring-violet-400"
                                >
                                    <IconPhone className="w-6 h-6 mr-3 text-violet-400 group-hover:text-white transition-colors duration-300" />
                                    <span className="text-lg">8435093856</span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/shreyansh-21b181215/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold py-4 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 group ring-2 ring-violet-600 hover:ring-violet-400"
                                    aria-label="LinkedIn Profile"
                                >
                                    <IconLinkedin className="w-6 h-6 mr-3 text-violet-400 group-hover:text-white transition-colors duration-300" />
                                    <span className="text-lg">LinkedIn</span>
                                </a>
                                <a
                                    href="https://github.com/Shreyansh051"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold py-4 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 group ring-2 ring-violet-600 hover:ring-violet-400"
                                    aria-label="GitHub Profile"
                                >
                                    <IconGithub className="w-6 h-6 mr-3 text-violet-400 group-hover:text-white transition-colors duration-300" />
                                    <span className="text-lg">GitHub</span>
                                </a>
                                <a
                                    href='mailto:shreyanshgupta148@gmail.com?subject="Hello !"'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold py-4 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 group ring-2 ring-violet-600 hover:ring-violet-400"
                                >
                                    <IconMail className="w-6 h-6 mr-3 text-violet-400 group-hover:text-white transition-colors duration-300" />
                                    <span className="text-lg">Mail</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollRevealWrapper>

            {/* Footer */}
            <footer className="bg-zinc-900 text-center py-10 text-zinc-500 text-sm border-t border-zinc-800">
                <p>&copy; {new Date().getFullYear()} Shreyansh. All rights reserved.</p>
            </footer>
        </div>
    );
};

// ScrollRevealWrapper component to apply fade-in effect on scroll
const ScrollRevealWrapper = ({ children }) => {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        // Optional: Unobserve after first intersection if animation should only run once
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.1 // Trigger when 10% of the element is visible
            }
        );

        // Apply to all direct section children
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            section.classList.add('fade-in-section'); // Add base class
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return <>{children}</>;
};

// Export the App component as default
export default App;
