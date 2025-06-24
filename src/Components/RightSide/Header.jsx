// import React from "react";
// import { NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// import { toggleTheme } from "../../features/theme/themeSlice";

// import { useEffect } from "react";
// function Header() {
//   const dispatch = useDispatch();
//   const mode = useSelector((state) => state.theme.mode);

//   useEffect(() => {
//     console.log("current Mode", mode);
//     if (mode === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [mode]);

//   return (
//     <>
//       <header className="relative  rounded-t-xl bg-[#1A1A19]  flex-col justify-center">
//         <nav className="  flex  justify-center md:justify-between p-4">
//           <ul className="flex flex-row font-medium flex-wrap md:space-x-14 lg:mt-0">
//             <li>
//               <NavLink
//                 to="/"
//                 // yaha pe ap dekh sakte hai ki classes callback fns me likhi hai
//                 className={({ isActive }) =>
//                   `block py-2 font-semibold   pr-4 pl-3 transition-all  ${
//                     isActive ? "text-orange-300" : "text-[#A6A6A6]"
//                   }   border-gray-50  lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
//                 }
//               >
//                 About
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/Skill"
//                 // yaha pe ap dekh sakte hai ki classes callback fns me likhi hai
//                 className={({ isActive }) =>
//                   `block py-2 text-[#A6A6A6] pr-4 pl-3 transition-all  ${
//                     isActive ? "text-orange-300" : "text-[#A6A6A6]"
//                   }   border-gray-50  lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
//                 }
//               >
//                 Skill
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/Projects"
//                 // yaha pe ap dekh sakte hai ki classes callback fns me likhi hai
//                 className={({ isActive }) =>
//                   `block py-2 text-[#A6A6A6] pr-4 pl-3 transition-all  ${
//                     isActive ? "text-orange-300" : "text-[#A6A6A6]"
//                   }   border-gray-50  lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
//                 }
//               >
//                 Projects
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/Resume"
//                 // yaha pe ap dekh sakte hai ki classes callback fns me likhi hai
//                 className={({ isActive }) =>
//                   `block py-2 text-[#A6A6A6] pr-4 pl-3  transition-all  ${
//                     isActive ? "text-orange-300" : "text-[#A6A6A6]"
//                   }   border-gray-50  lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
//                 }
//               >
//                 Resume
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/Contact"
//                 // yaha pe ap dekh sakte hai ki classes callback fns me likhi hai
//                 className={({ isActive }) =>
//                   `block py-2 text-[#A6A6A6] pr-4 pl-3 transition-all  ${
//                     isActive ? "text-orange-300" : "text-[#A6A6A6]"
//                   }   border-gray-50  lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
//                 }
//               >
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//           <button
//             onClick={() => dispatch(toggleTheme())}
//             className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition-all"
//           >
//             {mode === "light" ? "🌙 Dark" : "☀️ Light"} Mode
//           </button>
//         </nav>

//         <div className="h-[1px] w-full  bg-[#a6a6a635] "></div>
//       </header>
//     </>
//   );
// }

// export default Header;


import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/theme/themeSlice";
import { Menu, X } from "lucide-react";

function Header() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const navLinks = [
    { name: "About", path: "/" },
    { name: "Skill", path: "/Skill" },
    { name: "Projects", path: "/Projects" },
    { name: "Resume", path: "/Resume" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <header
      className="relative rounded-t-xl z-50
      bg-gradient-to-br from-[#ffffff] via-[#e0f2ff] to-[#ffe4e6] 
      dark:bg-[#1A1A19] dark:bg-none text-[#1a202c] dark:text-white 
      transition-all duration-500"
    >
      <nav className="flex items-center justify-between px-4 py-4 md:px-8">
        {/* Hamburger + Logo area */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <span className="text-xl font-bold">Portfolio</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition-all px-2 py-1 rounded-lg ${
                    isActive
                      ? "text-orange-400"
                      : "text-[#4B5563] dark:text-[#A6A6A6] hover:text-black dark:hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={() => dispatch(toggleTheme())}
          className="ml-auto md:ml-0 px-4 py-2 text-sm rounded 
          bg-gray-200 dark:bg-gray-700 
          text-black dark:text-white transition-all"
        >
          {mode === "light" ? "🌙 Dark" : "☀️ Light"} Mode
        </button>
      </nav>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col items-start gap-4 px-4 pb-4 transition-all duration-300">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full">
              <NavLink
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block w-full py-2 px-3 rounded-md ${
                    isActive
                      ? "text-orange-400"
                      : "text-[#4B5563] dark:text-[#A6A6A6] hover:text-black dark:hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}

      {/* Divider Line */}
      <div className="h-[1px] w-full bg-[#a6a6a640] dark:bg-[#ffffff10]" />
    </header>
  );
}

export default Header;
