import React, { useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

// Import project images
import ecommerceImage from "../movie-img/Screenshot 2025-09-04 000747.png";
import netflixImage from "../movie-img/Screenshot 2025-09-04 001134.png";
import weatherImage from "../movie-img/Screenshot 2025-09-04 000620.png";
import restApiImage from "../movie-img/Screenshot 2025-08-20 152021.png";
import spotifyImage from "../movie-img/Screenshot 2025-09-04 000445.png";

// Custom Live Icon
const LiveIcon = () => (
  <svg 
    stroke="currentColor" 
    fill="none" 
    strokeWidth="2" 
    viewBox="0 0 24 24" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    height="1.2em" 
    width="1.2em" 
    xmlns="http://www.w3.org/2000/svg"
    className="text-blue-500"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="16"></line>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
);

// Project data with imported images
const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration",
    tags: ["top", "fullstack"],
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: ecommerceImage,
    link: "https://example.com",
    github: "https://github.com/RANJITHKUMAR-P/e-commerce-app"
  },
  {
    id: 2,
    name: "Netflix-Clone",
    description: "A Netflix clone built with React and TypeScript",
    tags: ["top", "frontend"],
    technologies: ["React", "TypeScript", "CSS3"],
    image: netflixImage,
    link: "https://example.com",
    github: "https://github.com/RANJITHKUMAR-P/Netflix-Clone"
  },
  {
    id: 3,
    name: "Weather Dashboard",
    description: "Real-time weather information application",
    tags: ["frontend"],
    technologies: ["React", "API Integration", "Chart.js"],
    image: weatherImage,
    link: "https://example.com",
    github: "https://github.com/RANJITHKUMAR-P/wheather-app"
  },
  {
    id: 5,
    name: "REST API Service",
    description: "Backend service with comprehensive API endpoints",
    tags: ["backend"],
    technologies: ["Node.js", "Express", "MongoDB"],
    image: restApiImage,
    link: "https://example.com",
    github: ""
  },
  {
    id: 6,
    name: "Spotify-Clone",
    description: "A Spotify clone application",
    tags: ["android","top"],
    technologies: ["React Native", "Firebase", "Health APIs"],
    image: spotifyImage,
    link: "https://example.com",
    github: "https://github.com/RANJITHKUMAR-P/spotify-final"
  }
];

const filters = [
  { id: "top", name: "Top Projects" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "android", name: "Android" },
  { id: "fullstack", name: "Full Stack" }
];

const Projects = () => {
    const [selectedTag, setSelectedTag] = useState("top");
    const [projectData, setProjectData] = useState(projects.filter((p) => p.tags.includes("top")));
    const navigate = useNavigate();

    const filterHandler = (tag) => {
        setSelectedTag(tag);
        let filteredProjects = [];
        if (tag === "top") {
            filteredProjects = projects.filter((p) => p.tags.includes(tag));
        } else {
            filteredProjects = projects.filter((p) => p.tags.includes(tag));
        }
        setProjectData(filteredProjects);
    };

    const handleProjectClick = (projectId) => {
        navigate(`/project/${projectId}`);
    };
    
    return (
        <div
            id="Projects"
            className="w-full md:py-[20px] bg-black relative overflow-hidden min-h-screen"
        >
            <section className="md:px-16 px-8 py-20">
                {/* SECTION HEADING START */}
                <div className="mt-8 mb-10 relative">
                    <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald uppercase mb-10 text-[#f6f6f6]">
                        <h2 className="text-center text-2xl pt-8 text-zinc-200 font-display sm:text-6xl md:text-5xl mt-2 font-bold tracking-tight md:text-center">
                            Projects
                        </h2>
                    </div>
                    <div className="text-[18px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] md:text-center text-start mx-auto text-zinc-200">
                        I take great pleasure in developing cutting-edge real-life
                        applications across various categories. Feel free to explore my
                        portfolio, categorized into frontend, backend, and Android apps.
                        Your valuable feedback on these projects would be highly appreciated.
                    </div>
                </div>
                {/* SECTION HEADING END */}

                {/* FILTER TAGS START */}
                <div className="flex justify-start md:justify-center gap-[10px] mb-[50px] overflow-auto">
                    {filters.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-[#252525] py-[10px] px-[17px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] cursor-pointer whitespace-nowrap ${selectedTag === item.id ? "bg-[#f6f6f6] text-black" : ""
                                }`}
                            onClick={() => filterHandler(item.id)}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
                {/* FILTER TAGS START */}

                {/* PROJECTS GRID START */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((item, index) => {
                        return (
                            <div 
                                key={index} 
                                className="flex flex-col gap-4 bg-zinc-900 p-4 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
                                onClick={() => handleProjectClick(item.id)}
                            >
                                <div className="bg-black aspect-video overflow-hidden md:hover:scale-105 md:duration-200 rounded-md">
                                    <img 
                                        src={item.image} 
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <section className="flex justify-between px-2 items-center">
                                        <div className="text-[12px] md:text-[16px] 2xl:text-[18px] leading-[24px] 2xl:leading-[32px] hover:text-zinc-300 text-center font-medium">
                                            {item.name}
                                        </div>
                                        <div className="flex flex-row gap-4 text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] hover:text-zinc-300 text-center">
                                            <div>
                                                {item.link && (
                                                    <a 
                                                        target="_blank" 
                                                        rel="noreferrer" 
                                                        href={item.link} 
                                                        className="flex flex-row gap-1 hover:cursor-pointer hover:scale-105"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <p className="md:text-sm text-xs text-blue-500">Live</p>
                                                        <LiveIcon />
                                                    </a>
                                                )}
                                            </div>
                                            <div 
                                                className="hover:cursor-pointer hover:scale-105"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <a className="hover:text-white" href={item.github} target="_blank" rel="noreferrer">
                                                    <AiOutlineGithub size={20}></AiOutlineGithub>
                                                </a>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* PROJECTS GRID END */}
            </section>
        </div>
    );
}

export default Projects;