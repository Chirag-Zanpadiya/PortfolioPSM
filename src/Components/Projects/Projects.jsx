import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

function Projects() {
  const projectDetails = [
    {
      title: "AutoBGOne",
      desc: "Auto-remove backgrounds from photos in just one click",
      gitRepo: "https://github.com/Chirag-Zanpadiya/AutoBGOne",
      livePreview: "https://auto-bg-one.vercel.app/",
      bgImg: "/assets/autobgone.png",
    },
    {
      title: "BlogVerse",
      desc: "A full-stack blog app to write, edit, and explore posts with rich content and clean UI.",
      gitRepo: "https://github.com/Chirag-Zanpadiya/blog-web-psm",
      livePreview: "Not Avaiable",
      bgImg: "/assets/blogweb.png",
    },
    {
      title: "Personal Portfolio",
      desc: "A Personal Portfolio To Show My Knowledge",
      gitRepo: "https://github.com/Chirag-Zanpadiya/PortfolioPSM",
      livePreview: "https://psmchiragportfolio.vercel.app/",
      bgImg: "/assets/port.png",
    },
  ];

  return (
    <>
      {projectDetails.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projectDetails.map((arr, idx) => (
            <div
              key={idx}
              className="group w-full h-auto overflow-hidden rounded-xl border 
                border-neutral-700 bg-[#1a1a1a] 
                transition-all duration-300 hover:border-yellow-500 
                hover:shadow-[0_0_20px_#facc15]/30"
            >
              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={arr.bgImg}
                  alt={arr.title}
                  className="h-full w-full object-cover transition-transform 
                    duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-white">
                <h3 className="text-lg font-semibold text-yellow-400">
                  {arr.title}
                </h3>
                <p className="mt-1 text-sm line-clamp-2">
                  {arr.desc}
                </p>

                {/* Buttons */}
                <div className="mt-4 flex flex-col sm:flex-row sm:gap-3 gap-2">
                  {arr.livePreview !== "Not Avaiable" && (
                    <Link
                      to={arr.livePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex justify-center items-center gap-2 rounded-full 
                        border border-yellow-400 px-4 py-2 text-sm font-medium text-white 
                        transition duration-200 hover:bg-yellow-400 
                        hover:text-black"
                    >
                      <ExternalLink size={16} />
                      Live Preview
                    </Link>
                  )}
                  {arr.gitRepo && (
                    <Link
                      to={arr.gitRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex justify-center items-center gap-2 rounded-full 
                        border border-yellow-400 px-4 py-2 text-sm font-medium text-white 
                        transition duration-200 hover:bg-yellow-400 
                        hover:text-black"
                    >
                      <Github size={16} />
                      Source Code
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Projects;
