import React from "react";

function About() {
  return (
    <>
      <div className=" relative min-h-screen p-6 rounded-b-xl   bg-[#1A1A19] ">
        <div className="flex-col space-y-8 max-w-[750px]">
          <h1 className="text-3xl font-bold text-white">About Me</h1>

          <div className="relative h-[4px] w-[48px] rounded-xl  bg-orange-300"></div>

          <p className="text-[#A6A6A6]">
            Hi! I’m Chirag Zanpadiya, a frontend developer skilled in HTML, CSS,
            JavaScript, React.js, and Tailwind CSS. I specialize in building
            modern, responsive, and scalable web applications with a strong
            focus on UI/UX.
          </p>

          <p className="text-[#A6A6A6]">
            I’ve built interactive web applications with seamless API
            integrations, ensuring smooth performance and user experience. With
            a solid foundation in C++ and Data Structures & Algorithms (DSA), I
            write optimized and performance-driven code.
          </p>

          <p className="text-[#A6A6A6]">
            I’m always eager to learn, innovate, and collaborate on exciting
            projects. Let’s build something amazing together! 🚀
          </p>

          <h1 className="text-3xl font-bold text-white">What I'm doing</h1>
          <div className="relative h-[4px] w-[48px] rounded-xl  bg-orange-300"></div>
        
          <div className="flex flex-col md:flex-row  relative   gap-5">

          <div className="flex flex-col space-y-6 p-6 bg-[#262626] w-[200px] md:w-[450px] rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className=" bg-orange-300  rounded-full lucide lucide-code w-12 h-12 text-primary mb-4"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>

            <h3 className="text-white text-2xl font-semibold">
              Web Development
            </h3>

            <p className="text-[#A6A6A6]">
              Building fast, user-friendly websites with a focus on performance
              and design.
            </p>
          </div>

          <div className="flex flex-col space-y-6 p-6 bg-[#262626] w-[200px] md:w-[450px] rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="bg-blue-300 rounded-full w-12 h-12 text-primary mb-4"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 8v4l3 3"></path>
            </svg>

            <h3 className="text-white text-2xl font-semibold">
              Problem Solving
            </h3>

            <p className="text-[#A6A6A6]">
              Crafting efficient solutions through logic, algorithms, and
              structured thinking.
            </p>
          </div>



          </div>

        </div>
      </div>
    </>
  );
}

export default About;
