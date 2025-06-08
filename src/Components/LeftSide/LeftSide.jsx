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

// that my final code

// import { useEffect, useRef } from "react";
// import Typed from "typed.js";

// function LeftSide() {
//   const typedRef = useRef("null");

//   useEffect(() => {
//     const typed = new Typed(typedRef.current, {
//       strings: ["Chirag Zanpadiya"],
//       typeSpeed: 100,
//       backSpeed: 100,
//       backDelay: 1000,
//       loop: true,
//     });

//     return () => typed.destroy();
//   }, []);

//   return (
//     <>
//       <aside className=" w-full md:w-80 bg-[#1A1A19] p-6 rounded-xl">
//         {/* LeftSide : MePhoto & Name */}
//         <div className="flex flex-row   md:flex-col item-start  md:justify-center items-center text-center">
//           {/* Photo */}
//           <div className="relative w-48 h-48 rounded-full object-fill mb-4">
//             <img
//               src="/assets/myphoto.png"
//               alt="my-photo"
//               className="rounded-full"
//             />
//           </div>

//           {/* Name & Typing Effect */}
//           <div className="flex flex-col ml-4 md:ml-0 items-center">
//             <span
//               ref={typedRef}
//               className="text-2xl text-white font-bold min-h-[36px]"
//             ></span>

//             <p className="bg-[#262626] px-3 py-1 text-[12px] rounded-full font-semibold mt-0 text-[#A6A6A6]">
//               Software Engineer
//             </p>
//           </div>
//         </div>

//         {/* Email & address Section */}
//         <div className="flex flex-col items-start space-y-4 mt-8">
//           {/* location emial  & text  */}
//           <div className="flex flex-row justify-center  items-center gap-3">
//             {/* Email Icon */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="orange"
//               stroke="currentColor"
//               strokeWidth="1"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-mail w-4 h-4 md:w-6 md:h-6 text-primary"
//             >
//               <rect width="20" height="16" x="2" y="4" rx="2"></rect>
//               <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
//             </svg>
//             <span className="text-[#A6A6A6]">zanpadiyachirag123@gmail.com</span>
//           </div>

//           {/* location icon & text  */}
//           <div className="flex flex-row justify-center  items-center gap-3">
//             {/* Email Icon */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="orange"
//               stroke="currentColor"
//               strokeWidth="1"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-map-pin w-4 h-4 md:w-5 md:h-5 text-primary"
//             >
//               <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
//               <circle cx="12" cy="10" r="3"></circle>
//             </svg>
//             <span className="text-[#A6A6A6]">Ahmedabad , Gujarat , India</span>
//           </div>
//         </div>

//         {/* Social Media Links */}
//         <div className="flex justify-center items-center space-x-4 mt-6">
//           {/* LinkedIn */}
//           <div className="w-[40px] h-[40px] bg-[#262626] flex justify-center items-center rounded-xl">
//             <a
//               href="https://www.linkedin.com/in/chirag-zanpadiya-876694280/"
//               target="_blank"
//               className="text-white hover:text-orange-300"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-linkedin w-4 h-4 md:w-5 md:h-5"
//               >
//                 <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//                 <rect width="4" height="12" x="2" y="9"></rect>
//                 <circle cx="4" cy="4" r="2"></circle>
//               </svg>
//             </a>
//           </div>
//           {/* GitHub */}
//           <div className="w-[40px] h-[40px] bg-[#262626] flex justify-center items-center rounded-xl">
//             <a
//               href="https://github.com/Chirag-Zanpadiya"
//               target="_blank"
//               className="text-white hover:text-orange-300"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none  "
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-github w-4 h-4 md:w-5 md:h-5"
//               >
//                 <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
//                 <path d="M9 18c-4.51 2-5-2-7-2"></path>
//               </svg>
//             </a>
//           </div>

//           {/* Leetcode */}
//           <div className="w-[40px] h-[40px] bg-[#262626] flex justify-center items-center rounded-xl">
//             <a
//               href="https://leetcode.com/u/Mr_ZCA_0405/"
//               target="_blank"
//               className="text-white hover:text-orange-300"
//             >
//               <svg
//                 stroke="currentColor"
//                 fill="currentColor"
//                 strokeWidth="0"
//                 role="img"
//                 viewBox="0 0 24 24"
//                 className="w-4 h-4 md:w-5 md:h-5"
//                 height="1em"
//                 width="1em"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"></path>
//               </svg>
//             </a>
//           </div>

//           {/* GFG */}

//           <div className="w-[40px] h-[40px] bg-[#262626] flex justify-center items-center rounded-xl">
//             <a
//               href="https://www.geeksforgeeks.org/user/zanpadiya_0405/"
//               target="_blank"
//               className="text-white hover:text-orange-300"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="w-4 h-4 md:w-6 md:h-6"
//               >
//                 <circle cx="12" cy="12" r="10" fill="none" />

//                 <text
//                   x="12"
//                   y="15"
//                   fontSize="8"
//                   fontFamily="sans-serif"
//                   fill="white"
//                   textAnchor="middle"
//                 >
//                   GfG
//                 </text>
//               </svg>
//             </a>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// }

// export default LeftSide;

// that gpt code :
import { useEffect, useRef } from "react";
import Typed from "typed.js";

function LeftSide() {
  const typedRef = useRef(null);

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

  const social = [
    {
      href: "https://www.linkedin.com/in/chirag-zanpadiya-876694280/",
      label: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6 1.1 6 0 4.88 0 3.5S1.1 1 2.48 1c1.38 0 2.5 1.12 2.5 2.5zM.5 8h4v13h-4V8zm7 0h3.6v1.79h.05c.5-.95 1.75-1.95 3.6-1.95 3.85 0 4.56 2.53 4.56 5.82v6.34h-4v-5.62c0-1.34-.03-3.06-1.86-3.06s-2.14 1.45-2.14 2.95v5.73h-4V8z" />
        </svg>
      ),
    },
    {
      href: "https://github.com/Chirag-Zanpadiya",
      label: "GitHub",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.94.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.26-1.68-1.26-1.68-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.64 1.24 3.29.94.1-.73.4-1.24.72-1.53-2.55-.29-5.23-1.27-5.23-5.64 0-1.25.45-2.28 1.17-3.08-.12-.28-.51-1.4.11-2.93 0 0 .96-.31 3.15 1.18a10.91 10.91 0 015.74 0c2.2-1.5 3.15-1.18 3.15-1.18.63 1.53.24 2.65.12 2.93.73.8 1.17 1.83 1.17 3.08 0 4.38-2.69 5.34-5.25 5.62.41.36.77 1.1.77 2.22v3.29c0 .31.21.68.8.56A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
        </svg>
      ),
    },
    {
      href: "https://leetcode.com/u/Mr_ZCA_0405/",
      label: "LeetCode",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 50 50" fill="currentColor">
          <path d="M38.64,15.52c-1.19-1.11-2.45-2.12-3.7-3.15c-0.69-0.58-1.42-0.84-2.34-0.5c-0.79,0.29-1.41,1.2-1.41,2.05c0,0.55,0.3,1.3,0.73,1.65c0.94,0.76,1.96,1.43,2.95,2.15c-0.28,0.24-0.48,0.43-0.68,0.61c-5.43,5.01-10.87,10.01-16.3,15.01c-0.96,0.89-1.3,1.89-0.98,3.09c0.26,1.02,1.38,1.81,2.52,1.81c0.61,0,1.31-0.26,1.8-0.64c0.74-0.58,1.41-1.26,2.09-1.91c4.51-4.37,9.02-8.75,13.53-13.12C38.87,20.97,40.65,17.42,38.64,15.52z M20.95,12.12c1.63-1.58,3.22-3.22,4.93-4.68c2.9-2.42,6.19-3.12,9.77-1.99c1.6,0.52,2.45,2.17,2.01,3.74c-0.42,1.47-1.89,2.47-3.38,2.12c-0.44-0.1-0.88-0.21-1.3-0.37c-1.33-0.49-2.49-0.27-3.57,0.61c-1.3,1.08-2.54,2.24-3.73,3.44c-0.87,0.88-1.57,0.89-2.45,0.01C22.48,14.13,21.75,13.17,20.95,12.12z M13.76,27.47c1.22-1.17,2.28-0.96,3.25,0.24c0.52,0.64,1.01,1.31,1.5,1.96c0.75,1,0.73,1.56-0.09,2.53c-1.38,1.6-2.77,3.19-4.24,4.71c-2.86,2.89-7.28,2.88-10.08,0.01c-2.94-3.02-2.92-7.35,0.1-10.28c2.6-2.55,5.19-5.12,7.78-7.68c1.06-1.05,2.2-1.04,3.19,0.02c0.98,1.05,0.96,2.13-0.05,3.15c-2.01,2.04-4.01,4.07-6.04,6.12c-0.53,0.54-1.01,1.12-1.49,1.65c-1.14,1.27-0.85,2.86,0.53,3.7c1.04,0.63,2.23,0.48,3.14-0.45C11.33,30.12,12.54,28.8,13.76,27.47z" />
        </svg>
      ),
    },
    {
      href: "https://www.geeksforgeeks.org/user/zanpadiya_0405/",
      label: "GFG",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" fill="white" />
          <text x="12" y="16" fontSize="8" fontFamily="Verdana" fill="currentColor" textAnchor="middle">GfG</text>
        </svg>
      ),
    },
  ];

  return (
    <aside className="w-full sm:w-96 max-w-full md:w-80 lg:w-96 p-6 mx-auto rounded-2xl shadow-xl bg-white dark:bg-[#1A1A19] text-gray-800 dark:text-gray-200 transition-all duration-500 border border-gray-100 dark:border-none">
      {/* Profile */}
      <div className="flex flex-col items-center text-center">
        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 shadow-md border border-gray-200 dark:border-gray-600">
          <img src="/assets/myphoto.png" alt="my-photo" className="object-cover w-full h-full" />
        </div>
        <span
          ref={typedRef}
          className="text-xl sm:text-2xl font-bold min-h-[36px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 text-transparent bg-clip-text"
        />
        <p className="bg-black dark:bg-[#3a1f13] px-3 py-1 text-xs sm:text-sm rounded-full font-semibold mt-1 text-white">
          Software Engineer
        </p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-start space-y-3 mt-6 text-sm sm:text-base">
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="M22 7L12.03 12.7a1.94 1.94 0 01-2.06 0L2 7" />
          </svg>
          <span>zanpadiyachirag123@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 01-1.2 0C9.5 20.2 4 15 4 10a8 8 0 0116 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>Ahmedabad, Gujarat, India</span>
        </div>
      </div>

      {/* Resume Button */}
      <div className="flex justify-center mt-6">
        <a
          href="/assets/PSMRESUME100_0405ZCATECHX.pdf"
          download
          className="w-full sm:w-auto text-center bg-black dark:bg-yellow-400 text-white dark:text-black px-4 py-2 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-yellow-400 dark:hover:bg-gray-700 transition-all duration-300"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l-4-4m4 4l4-4M12 4v8" />
          </svg>
          Download Resume
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
        {social.map(({ href, label, icon }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 bg-gray-100 dark:bg-[#333] flex justify-center items-center rounded-xl text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 transition-all duration-300"
          >
            {icon}
          </a>
        ))}
      </div>
    </aside>
  );
}

export default LeftSide;
