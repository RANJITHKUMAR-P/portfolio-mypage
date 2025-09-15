import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AiOutlineGithub, AiOutlineArrowLeft } from 'react-icons/ai';

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

// Sample project data (same as in Projects.jsx)
const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard. This project demonstrates my ability to create complex, full-featured web applications.",
    tags: ["top", "fullstack"],
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    image: { src: "/api/placeholder/400/300" },
    link: "https://example.com",
    github: "https://github.com",
    features: ["User authentication", "Payment processing", "Admin dashboard", "Product management", "Order tracking"]
  },
  {
    id: 2,
    name: "Task Management App",
    description: "A productivity app for managing tasks and projects with drag-and-drop functionality and real-time updates.",
    tags: ["top", "frontend"],
    technologies: ["React", "Redux", "CSS3", "Firebase"],
    image: { src: "/api/placeholder/400/300" },
    link: "https://example.com",
    github: "https://github.com",
    features: ["Drag and drop", "Real-time updates", "Task categories", "User profiles"]
  },
  // Add other projects with similar detail...
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Project not found</h1>
          <button 
            onClick={() => navigate('/projects')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate('/projects')}
          className="flex items-center text-zinc-200 hover:text-white mb-8"
        >
          <AiOutlineArrowLeft className="mr-2" /> Back to Projects
        </button>

        <div className="bg-zinc-900 rounded-lg overflow-hidden">
          <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">{project.name}</h1>
          </div>

          <div className="p-6">
            <p className="text-zinc-200 mb-6">{project.description}</p>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Key Features</h2>
              <ul className="list-disc list-inside text-zinc-200">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 mt-8">
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  <LiveIcon className="mr-2" /> Live Demo
                </a>
              )}
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded"
              >
                <AiOutlineGithub className="mr-2" /> View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;