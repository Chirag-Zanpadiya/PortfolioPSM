import React, { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { Link } from "react-router-dom";

function Projects() {
  const projectDetails = [
    {
      title: "AutoBGOne",
      desc: "Auto-remove backgrounds from photos in just one click.",
      gitRepo: "https://github.com/Chirag-Zanpadiya/AutoBGOne",
      livePreview: "https://auto-bg-one.vercel.app/",
      bgImg: "/assets/autobgone.png",
      tech: {
        frontend: "React + TailwindCSS + CSS",
        backend: "Express.js + Node.js + MongoDB",
        deployment: "Vercel , Render",
      },
    },
    {
      title: "BlogVerse",
      desc: "A full-stack blog app to write, edit, and explore posts with rich content and clean UI.",
      gitRepo: "https://github.com/Chirag-Zanpadiya/blog-web-psm",
      livePreview: "Not Avaiable",
      bgImg: "/assets/blogweb.png",
      tech: {
        frontend: "React + TailwindCSS + CSS",
        backend: "Node.js + Express + MongoDB",
        deployment: "Vercel , Render",
      },
    },
    {
      title: "Personal Portfolio",
      desc: "A Personal Portfolio To Show My Knowledge",
      gitRepo: "https://github.com/Chirag-Zanpadiya/PortfolioPSM",
      livePreview: "https://psmchiragportfolio.vercel.app/",
      bgImg: "/assets/port.png",
      tech: {
        frontend: "React + TailwindCSS + CSS",
        backend: "",
        deployment: "Vercel",
      },
    },
  ];

  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      {/* Grid of Projects */}
      {projectDetails.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projectDetails.map((arr, idx) => (
            <div
              key={idx}
              onClick={() => setActiveProject(arr)}
              className="cursor-pointer group w-full h-auto overflow-hidden rounded-xl border 
                border-neutral-700 bg-[#1a1a1a] 
                transition-all duration-300 hover:border-yellow-500 
                hover:shadow-[0_0_20px_#facc15]/30"
            >
              {/* Image */}
              <div className="h-40 sm:h-44 overflow-hidden">
                <img
                  src={arr.bgImg}
                  alt={arr.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-white">
                <h3 className="text-lg font-semibold text-yellow-400">
                  {arr.title}
                </h3>
                <p className="mt-1 text-sm line-clamp-2">{arr.desc}</p>

                {/* Card Buttons */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {arr.livePreview !== "Not Avaiable" && (
                    <a
                      href={arr.livePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 border border-yellow-400 px-3 py-1.5 text-xs rounded-full hover:bg-yellow-400 hover:text-black transition"
                    >
                      <ExternalLink size={14} />
                      Live
                    </a>
                  )}
                  {arr.gitRepo && (
                    <a
                      href={arr.gitRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 border border-yellow-400 px-3 py-1.5 text-xs rounded-full hover:bg-yellow-400 hover:text-black transition"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div
            className="bg-white dark:bg-[#1a1a1a] text-black dark:text-white rounded-xl w-full max-w-2xl p-4 sm:p-6 
        relative shadow-2xl border border-yellow-500 max-h-[90vh] overflow-y-auto custom-scrollbar"
          >
            {/* Close button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-3 right-4 text-yellow-500 hover:text-red-500"
            >
              <X size={24} />
            </button>

            {/* Project Image */}
            <img
              src={activeProject.bgImg}
              alt={activeProject.title}
              className="rounded-md mb-4 w-full max-h-60 sm:max-h-64 object-cover"
            />

            {/* Title & Description */}
            <h2 className="text-2xl font-bold text-yellow-500 mb-2">
              {activeProject.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {activeProject.desc}
            </p>

            {/* Tech Stack Section */}
            <div className="mb-4">
              <h4 className="text-yellow-500 font-semibold text-sm">
                Tech Stack:
              </h4>

              {/* Frontend */}
              <div className="mt-2 text-sm">
                <p className="font-semibold">Frontend:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {activeProject.tech.frontend.split(" + ").map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-neutral-800 
                  border border-yellow-500 text-yellow-600 dark:text-yellow-300 
                  hover:bg-yellow-400 hover:text-black transition-transform transform hover:scale-105"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="mt-3 text-sm">
                <p className="font-semibold">Backend:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {activeProject.tech.backend !== "None" ? (
                    activeProject.tech.backend.split(" + ").map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-neutral-800 
                    border border-yellow-500 text-yellow-600 dark:text-yellow-300 
                    hover:bg-yellow-400 hover:text-black transition-transform transform hover:scale-105"
                      >
                        {item}
                      </span>
                    ))
                  ) : (
                    <span className="italic text-gray-400">None</span>
                  )}
                </div>
              </div>

              {/* Deployment */}
              <div className="mt-3 text-sm">
                <p className="font-semibold">Deployment:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {activeProject.tech.deployment
                    .split(", ")
                    .map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-neutral-800 
                  border border-yellow-500 text-yellow-600 dark:text-yellow-300 
                  hover:bg-yellow-400 hover:text-black transition-transform transform hover:scale-105"
                      >
                        {item}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              {activeProject.livePreview !== "Not Avaiable" && (
                <a
                  href={activeProject.livePreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-yellow-500 px-4 py-2 rounded-full 
              hover:bg-yellow-400 hover:text-black transition text-yellow-700 dark:text-yellow-300"
                >
                  <ExternalLink size={16} />
                  Live Preview
                </a>
              )}
              {activeProject.gitRepo && (
                <a
                  href={activeProject.gitRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-yellow-500 px-4 py-2 rounded-full 
              hover:bg-yellow-400 hover:text-black transition text-yellow-700 dark:text-yellow-300"
                >
                  <Github size={16} />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
