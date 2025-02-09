// import React from "react";

// function LeftSide() {
//   const textStyle = new String(".textStyle", {
//     strings: ["Front-end Developer", "Coding Enthusiast"],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true,
//   });
//   return (
//     <>
//       <aside className="w-80 bg-[#1A1A19] p-6 rounded-xl">
//         {/* LeftSide : MePhoto & Name */}

//         <div className="flex flex-col justify-center items-center text-center ">
//           {/* Div : Photo */}
//           <div className="relative w-48 h-48 rounded-full  object-fill mb-4 ">
//             <img
//               src=" ./src/assets/myphoto.png "
//               alt="my-photo"
//               className="rounded-full "
//             />
//           </div>

//           <div className="flex flex-col items-center">
//             <h1
//               className={`text-2xl text-white font-bold textStyle ${textStyle} `}
//             >
//               Zanpadiya Chirag
//             </h1>
//             <p className="bg-[#262626] px-3 py-1 text-[12px] rounded-full font-semibold mt-2 text-[#A6A6A6]">
//               Software Engineer
//             </p>
//           </div>
//         </div>

//         {/* Leftside : Location icon and Email */}
//         <div className="flex flex-col space-y-4 mt-8">
//           {/* Email & Email Address */}
//           <div className="flex flex-row justify-center items-center gap-3 ">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="yellow"
//               stroke="currentColor"
//               stroke-width="2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               class="lucide lucide-mail w-4 h-4 md:w-5 md:h-5 text-primary"
//             >
//               <rect width="20" height="16" x="2" y="4" rx="2"></rect>
//               <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
//             </svg>

//             <span className="text-[#A6A6A6]">zanpadiyachirag123@gmail.com</span>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// }

// export default LeftSide;

import { useEffect, useRef } from "react";
import Typed from "typed.js";

function LeftSide() {
  const typedRef = useRef("null");

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Chirag Zanpadiya"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
      <aside className=" w-full md:w-80 bg-[#1A1A19] p-6 rounded-xl">
        {/* LeftSide : MePhoto & Name */}
        <div className="flex flex-row   md:flex-col item-start  md:justify-center items-center text-center">
          {/* Photo */}
          <div className="relative w-48 h-48 rounded-full object-fill mb-4">
            <img
              src="/assets/myphoto.png"
              alt="my-photo"
              className="rounded-full"
            />
          </div>

          {/* Name & Typing Effect */}
          <div className="flex flex-col ml-4 md:ml-0 items-center">
            <span
              ref={typedRef}
              className="text-2xl text-white font-bold min-h-[36px]"
            ></span>

            <p className="bg-[#262626] px-3 py-1 text-[12px] rounded-full font-semibold mt-0 text-[#A6A6A6]">
              Software Engineer
            </p>
          </div>
        </div>

        {/* Email & address Section */}
        <div className="flex flex-col items-start space-y-4 mt-8">
          {/* location emial  & text  */}
          <div className="flex flex-row justify-center  items-center gap-3">
            {/* Email Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="orange"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail w-4 h-4 md:w-6 md:h-6 text-primary"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <span className="text-[#A6A6A6]">zanpadiyachirag123@gmail.com</span>
          </div>

          {/* location icon & text  */}
          <div className="flex flex-row justify-center  items-center gap-3">
            {/* Email Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="orange"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin w-4 h-4 md:w-5 md:h-5 text-primary"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span className="text-[#A6A6A6]">Ahmedabad , Gujarat , India</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center items-center space-x-4 mt-6">
          {/* LinkedIn */}
          <div className="w-[40px] h-[40px] bg-[#262626] flex justify-center items-center rounded-xl">
            <a
              href="https://www.linkedin.com/in/chirag-zanpadiya-876694280/"
              target="_blank"
              className="text-white hover:text-orange-300"
            >
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
                className="lucide lucide-linkedin w-4 h-4 md:w-5 md:h-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
          {/* GitHub */}
          <div className="w-[40px] h-[40px] bg-[#262626] flex justify-center items-center rounded-xl">
            <a
              href="https://github.com/Chirag-Zanpadiya"
              target="_blank"
              className="text-white hover:text-orange-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none  "
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github w-4 h-4 md:w-5 md:h-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
          </div>

          {/* Leetcode */}
          <div className="w-[40px] h-[40px] bg-[#262626] flex justify-center items-center rounded-xl">
            <a
              href="https://leetcode.com/u/Mr_ZCA_0405/"
              target="_blank"
              className="text-white hover:text-orange-300"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                className="w-4 h-4 md:w-5 md:h-5"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"></path>
              </svg>
            </a>
          </div>

          {/* GFG */}

          <div className="w-[40px] h-[40px] bg-[#262626] flex justify-center items-center rounded-xl">
            <a
              href="https://www.geeksforgeeks.org/user/zanpadiya_0405/"
              target="_blank"
              className="text-white hover:text-orange-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 md:w-6 md:h-6"
              >
                <circle cx="12" cy="12" r="10" fill="none" />

                <text
                  x="12"
                  y="15"
                  fontSize="8"
                  fontFamily="sans-serif"
                  fill="white"
                  textAnchor="middle"
                >
                  GfG
                </text>
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

export default LeftSide;
