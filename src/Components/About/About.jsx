// import React from "react";
// import { FiCode, FiCpu, FiCloud } from "react-icons/fi";
// function About() {
//   return (
//     <>
//       <section className="py-8 sm:py-20 md:py-8 px-6 sm:px-12 md:px-20 bg-[#121212] text-white">
//         {/* Tag */}
//         <div className="mb-4">
//           <span className="bg-yellow-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
//             MERN Stack Developer
//           </span>
//         </div>

//         {/* Main Heading */}
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white max-w-4xl">
//           Crafting <span className="text-yellow-400">digital experiences</span>
//           <br />
//           that make a <span className="text-white">difference</span>
//         </h1>

//         {/* Subtext */}
//         <p className="text-gray-400 mt-6 max-w-2xl text-base sm:text-lg">
//           I build modern web applications using the MERN stack to help
//           businesses grow and succeed in the digital world.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-wrap gap-4 mt-8">
//           <a
//             href="/projects"
//             className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-all"
//           >
//             View My Work
//             <span className="inline-block">→</span>
//           </a>
//           <a
//             href="/contact"
//             className="border border-gray-600 hover:border-white text-white px-6 py-3 rounded-lg font-semibold transition-all"
//           >
//             Get In Touch
//           </a>
//         </div>
//       </section>

//       <section
//         id="about"
//         className="px-6 sm:px-12 md:px-20 py-16 bg-[#121212] text-white"
//       >
//         <div className="max-w-4xl mx-auto">
//           {/* Section Heading */}
//           <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 relative inline-block">
//             About Me
//             <span className="block w-20 h-1 bg-yellow-400 mt-2 rounded"></span>
//           </h2>

//           {/* Text Container */}
//           <div className="bg-[#1a1a1a] p-6 sm:p-8 rounded-xl border border-[#2a2a2a] shadow-md space-y-5 text-gray-300">
//             <p>
//               Haan Ji, I’m <strong>Chirag Zanpadiya</strong>, a product-focused{" "}
//               <strong>MERN Stack Developer</strong> who enjoys building modern
//               web apps, especially SaaS tools and real-world solutions using{" "}
//               <strong>MongoDB, Express.js, React, and Node.js</strong>.
//             </p>

//             <p>
//               I've built and deployed over <strong>10+ full-stack apps</strong>,
//               including AI-powered tools, real-time chat apps, image
//               compressors, and dashboards. Some are public, others are internal
//               tools for clients and startups.
//             </p>

//             <p>
//               I'm currently learning <strong>Python</strong> to enhance my
//               backend development and scripting skills. I'm also focused on
//               improving my understanding of backend architecture and system
//               design.
//             </p>

//             <p>
//               Outside of coding, I enjoy sharing dev tips, trying new APIs, and
//               solving coding challenges on platforms like{" "}
//               <strong>LeetCode (400+ problems solved)</strong>.
//             </p>

//             <p>
//               🚀 Let’s connect if you’re hiring, building something exciting, or
//               just want to collaborate!
//             </p>
//           </div>
//         </div>
//       </section>
//       <section
//         id="services"
//         className="px-6 sm:px-12 md:px-20 py-16 bg-[#121212] text-white"
//       >
//         <div className="max-w-6xl mx-auto">
//           {/* Section Title */}
//           <h2 className="text-3xl sm:text-4xl font-extrabold mb-10">
//             What I'm doing
//             <span className="block w-24 h-1 bg-yellow-400 mt-2 rounded"></span>
//           </h2>

//           {/* Service Cards Grid */}
//           <div className="grid gap-6 md:grid-cols-3">
//             {/* Web Development */}
//             <div className="group bg-[#1a1a1a] p-6 rounded-xl border border-transparent hover:border-yellow-400 transform transition-all duration-300 hover:scale-105">
//               <div className="bg-[#2c2c2c] w-12 h-12 flex items-center justify-center rounded mb-4 text-yellow-400 text-2xl">
//                 <FiCode />
//               </div>
//               <h3 className="text-lg font-semibold mb-2 text-white">
//                 Web Development
//               </h3>
//               <p className="text-gray-400 text-sm">
//                 Development of modern, responsive and user-friendly websites
//                 with a focus on design & performance.
//               </p>
//             </div>

//             {/* Problem Solver */}
//             <div className="group bg-[#1a1a1a] p-6 rounded-xl border border-transparent hover:border-yellow-400 transform transition-all duration-300 hover:scale-105">
//               <div className="bg-[#2c2c2c] w-12 h-12 flex items-center justify-center rounded mb-4 text-yellow-400 text-2xl">
//                 <FiCpu />
//               </div>
//               <h3 className="text-lg font-semibold mb-2 text-white">
//                 Problem Solver
//               </h3>
//               <p className="text-gray-400 text-sm">
//                 Solving real-world problems with clean, efficient code and
//                 strong logical thinking (DSA + Projects).
//               </p>
//             </div>

//             {/* DevOps */}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default About;

// GPTCODE:
import React, { useRef, useState } from "react";
import { FiCode, FiCpu } from "react-icons/fi";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
function About() {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(smoothY, [0, 1], [10, -10]);
  const rotateY = useTransform(smoothX, [0, 1], [-10, 10]);

  const [latestX, setLatestX] = useState(0);
  const [latestY, setLatestY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    mouseX.set(x);
    mouseY.set(y);
    setLatestX(e.clientX - rect.left);
    setLatestY(e.clientY - rect.top);
  };

  return (
    <>
      {/* Intro Section */}
      <section
        className="py-10 sm:py-20 px-6 sm:px-12 md:px-20
          bg-white text-gray-900
          dark:bg-[#121212] dark:text-white
          transition-colors duration-700 ease-in-out"
      >
        <div className="mb-6">
          <span
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500
              text-black dark:text-white
              px-5 py-2 rounded-full text-sm font-semibold shadow-md
              dark:from-yellow-700 dark:to-yellow-600
              transition-colors duration-500"
          >
            MERN Stack Developer | Software Developer Engineering
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-4xl
            text-gray-900 dark:text-white
            transition-colors duration-700"
        >
          Bringing{" "}
          <span className="text-yellow-500 dark:text-yellow-400">
            ideas to life through clean
          </span>
          , modern web development.{" "}
        </h1>

        <p
          className="text-gray-700 dark:text-gray-400 mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed
            transition-colors duration-700"
        >
          I build modern web applications using the MERN stack to help
          businesses grow and succeed in the digital world.
        </p>

        <div className="flex flex-wrap gap-5 mt-12">
          <Link
            to="/Projects"
            className="bg-yellow-400 hover:bg-yellow-500 text-black dark:text-white font-semibold px-7 py-3 rounded-lg
              shadow-lg hover:shadow-yellow-400/40
              flex items-center gap-3
              transition-all duration-300 ease-in-out
              transform hover:scale-105"
          >
            View My Work <span className="text-xl">→</span>
          </Link>

          <Link
            to="/Contact"
            className="border border-gray-600 hover:border-yellow-400 text-gray-900 dark:text-white px-7 py-3 rounded-lg font-semibold
              transition-all duration-300 ease-in-out
              hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="px-6 sm:px-12 md:px-20 py-20 bg-white text-gray-900 dark:bg-[#121212] dark:text-white transition-colors duration-700 ease-in-out"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-16 text-gray-900 dark:text-white relative inline-block">
            About Me
            <span className="absolute left-0 w-28 h-1 rounded bg-gradient-to-r from-yellow-500 to-yellow-400 dark:from-yellow-400 dark:to-yellow-300 bottom-[-8px]" />
          </h2>

          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            style={{
              rotateX,
              rotateY,
              background: `radial-gradient(600px circle at ${latestX}px ${latestY}px, rgba(255,140,0,0.25), transparent 80%)`,
            }}
            className="relative bg-white/60 dark:bg-[#1a1a1a]/70 backdrop-blur-md border border-gray-200 dark:border-[#2a2a2a] rounded-xl p-8 sm:p-12 shadow-lg text-gray-800 dark:text-gray-300 space-y-6 transition-all duration-300 hover:cursor-pointer hover:scale-[1.02]"
          >
            <p>
              Haan Ji, I’m <strong>Chirag Zanpadiya</strong>, a product-focused{" "}
              <strong>MERN Stack Developer</strong> who enjoys building modern
              web apps, especially SaaS tools and real-world solutions using{" "}
              <strong>MongoDB, Express.js, React, and Node.js</strong>.
            </p>
            <p>
              I've built and deployed full-stack MERN apps, including real-world
              solutions like an AI Image Generator, Blog Platform, Trip Expense
              Splitter, and a Background Remover tool. I enjoy turning ideas
              into scalable, user-friendly tools — some are live, while others
              were built for startups or personal learning.
            </p>
            <p>
              I'm currently learning <strong>Python</strong> to enhance my
              backend development and scripting skills. I'm also focused on
              improving my understanding of backend architecture and system
              design.
            </p>
            <p>
              Outside of coding, I enjoy sharing dev tips, trying new APIs, and
              solving coding challenges on platforms like{" "}
              <strong>LeetCode (400+ problems solved)</strong>.
            </p>
            <p>
              🚀 Let’s connect if you’re hiring, building something exciting, or
              just want to collaborate!
            </p>
          </motion.div>
        </div>
      </section>
      {/* Services Section */}
      <section
        id="services"
        className="px-6 sm:px-12 md:px-20 py-20
          bg-white text-gray-900
          dark:bg-[#121212] dark:text-white
          transition-colors duration-700 ease-in-out"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-12
    text-gray-900 dark:text-white
    relative inline-block"
          >
            What I'm doing
            <span
              className="absolute left-0 w-28 h-1 rounded bg-gradient-to-r
      from-yellow-500 to-yellow-400 dark:from-yellow-400 dark:to-yellow-300
      bottom-[-8px]"
            />
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <FiCode />,
                title: "Web Development",
                desc: "Development of modern, responsive, and user-friendly websites with a focus on design & performance.",
              },
              {
                icon: <FiCpu />,
                title: "Problem Solver",
                desc: "Solving real-world problems with clean, efficient code and strong logical thinking (DSA + Projects).",
              },
            ].map((item, i) => {
              const ref = useRef(null);
              const mouseX = useMotionValue(0);
              const mouseY = useMotionValue(0);
              const smoothX = useSpring(mouseX, {
                stiffness: 100,
                damping: 20,
              });
              const smoothY = useSpring(mouseY, {
                stiffness: 100,
                damping: 20,
              });
              const rotateX = useTransform(smoothY, [0, 1], [10, -10]);
              const rotateY = useTransform(smoothX, [0, 1], [-10, 10]);
              const [latestX, setLatestX] = useState(0);
              const [latestY, setLatestY] = useState(0);

              const handleMouseMove = (e) => {
                const rect = ref.current.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                mouseX.set(x);
                mouseY.set(y);
                setLatestX(e.clientX - rect.left);
                setLatestY(e.clientY - rect.top);
              };

              return (
                <motion.div
                  key={i}
                  ref={ref}
                  onMouseMove={handleMouseMove}
                  style={{
                    rotateX,
                    rotateY,
                    background: `radial-gradient(500px circle at ${latestX}px ${latestY}px, rgba(255,140,0,0.25), transparent 80%)`,
                  }}
                  className="group bg-white/60 dark:bg-[#1a1a1a]/70 backdrop-blur-md
          rounded-xl border border-gray-200 dark:border-[#2a2a2a]
          shadow-lg p-8
          transition-transform duration-300 ease-in-out
          hover:scale-105 hover:border-yellow-400 cursor-pointer"
                >
                  <div
                    className="w-14 h-14 mb-6 flex items-center justify-center rounded-full
            bg-gradient-to-tr from-yellow-400 to-yellow-500
            text-white dark:from-yellow-500 dark:to-yellow-600
            text-3xl animate-pulse group-hover:animate-none"
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
