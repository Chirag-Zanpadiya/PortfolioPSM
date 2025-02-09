import React from "react";
import razorpaybg from "../../../public/assets/razorpay_background_img.jpg";
import passwordimg from "../../../public/assets/password.jpeg";
import githubavtar from "../../../public/assets/githubavtar.png";
import { Link } from "react-router-dom";
function Projects() {
  return (
    <>
      <div className=" relative min-h-screen p-6 rounded-b-xl  bg-[#1A1A19] ">
        <div className="flex flex-col  space-y-8">
          <h1 className="text-3xl font-bold text-white ">My Projects</h1>
          <div className="relative h-[4px] w-[48px] rounded-xl  bg-orange-300"></div>

          {/* div for the project icon */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {/* div for the project */}

            {/* first div start */}
            <div className="relative rounded-lg overflow-hidden group border border-gray-700  bg-gray-900">
              {/* Image with zoom effect */}
              <div className="h-52 overflow-hidden">
                <img
                  src={razorpaybg} // Make sure this is a valid path or import
                  alt="Razorpayphoto"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 opacity-50"
                />
              </div>

              {/* Overlay for readability */}
              <div className="absolute inset-0  bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300"></div>

              {/* Text content */}
              <div className="absolute inset-0 flex flex-col justify-center   px-4">
                <h1 className="text-white text-xl font-bold">
                  RazorPay Clone - TailwindCSS
                </h1>
                <p className="text-gray-300 mt-2 text-[8px] md:text-[14px]">
                  It showcases my skill in building visually appealing,
                  responsive web applications using TailwindCSS.
                </p>
              </div>

              {/* Button */}
              <div className="relative p-4 flex justify-between items-center">
                <button className="bg-black text-white px-4 py-1 rounded-lg border border-gray-700 hover:bg-[#FFBF03] font-semibold hover:text-black transition">
                  Open
                </button>

                <div className=" py-2 px-2 rounded-xl bg-[#ddd1d124] hover:bg-[#514527] ">
                  <Link to="https://github.com/Chirag-Zanpadiya/Razor_Pay_Clone_TailWind_CSS">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="hover:stroke-2 stroke-[#FFBF03] hover:stroke-[#FFBF03]"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-github w-5 h-5"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* first div end */}

            {/* second div start */}
            <div className="relative rounded-lg overflow-hidden group border border-gray-700  bg-gray-900">
              {/* Image with zoom effect */}
              <div className="h-52 overflow-hidden">
                <img
                  src={passwordimg} // Make sure this is a valid path or import
                  alt="Utopia Technology"
                  className=" w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 opacity-50"
                />
              </div>

              {/* Overlay for readability */}
              <div className="absolute inset-0  bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300"></div>

              {/* Text content */}
              <div className="absolute inset-0 flex flex-col justify-center overflow-hidden   px-4">
                <h1 className="text-white text-xl font-bold">
                  Password Generator
                </h1>
                <p className="text-gray-300 mt-2 text-[8px] md:text-[14px]">
                React-based Password Generator for secure, customizable passwordsS.
                </p>
              </div>

              {/* Button */}
              <div className="relative p-4 flex justify-between items-center">
                <button className="bg-black text-white px-4 py-1 rounded-lg border border-gray-700 hover:bg-[#FFBF03] font-semibold hover:text-black transition">
                  Open
                </button>

                <div className=" py-2 px-2 rounded-xl bg-[#ddd1d124] hover:bg-[#514527] ">
                  <Link to="https://github.com/Chirag-Zanpadiya/react-Series/tree/main/07passwordGenerator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="hover:stroke-2 stroke-[#FFBF03] hover:stroke-[#FFBF03]"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-github w-5 h-5"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* second div end */}

            {/* third div */}
            <div className="relative rounded-lg overflow-hidden group border border-gray-700  bg-gray-900">
              {/* Image with zoom effect */}
              <div className="h-52 overflow-hidden">
                <img
                  src={githubavtar} // Make sure this is a valid path or import
                  alt="Utopia Technology"
                  className=" w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 opacity-50"
                />
              </div>

              {/* Overlay for readability */}
              <div className="absolute inset-0  bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300"></div>

              {/* Text content */}
              <div className="absolute inset-0 flex flex-col justify-center overflow-hidden   px-4">
                <h1 className="text-white text-xl font-bold">
                Router-Powered Profile Viewer
                </h1>
                <p className="text-gray-300 mt-2 text-[8px] md:text-[14px]">
                A React app showcasing client-side routing with GitHub API integration to display user avatars and follower counts.
                </p>
              </div>

              {/* Button */}
              <div className="relative p-4 flex justify-between items-center">
                <button className="bg-black text-white px-4 py-1 rounded-lg border border-gray-700 hover:bg-[#FFBF03] font-semibold hover:text-black transition">
                  Open
                </button>

                <div className=" py-2 px-2 rounded-xl bg-[#ddd1d124] hover:bg-[#514527] ">
                  <Link to="https://github.com/Chirag-Zanpadiya/react-Series/tree/main/09_react_router_project/src">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="hover:stroke-2 stroke-[#FFBF03] hover:stroke-[#FFBF03]"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-github w-5 h-5"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* third div end*/}

            {/* grid end */}
          </div>

          {/* flex-col end  */}
        </div>
      </div>
    </>
  );
}

export default Projects;
