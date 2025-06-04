import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "../../features/theme/themeSlice";

import { useEffect } from "react";
function Header() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    console.log("current Mode", mode);
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <>
      <header className="relative  rounded-t-xl bg-[#1A1A19]  flex-col justify-center">
        <nav className="  flex  justify-center md:justify-between p-4">
          <ul className="flex flex-row font-medium flex-wrap md:space-x-14 lg:mt-0">
            <li>
              <NavLink
                to="/"
                // yaha pe ap dekh sakte hai ki classes callback fns me likhi hai
                className={({ isActive }) =>
                  `block py-2 font-semibold   pr-4 pl-3 transition-all  ${
                    isActive ? "text-orange-300" : "text-[#A6A6A6]"
                  }   border-gray-50  lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Skill"
                // yaha pe ap dekh sakte hai ki classes callback fns me likhi hai
                className={({ isActive }) =>
                  `block py-2 text-[#A6A6A6] pr-4 pl-3 transition-all  ${
                    isActive ? "text-orange-300" : "text-[#A6A6A6]"
                  }   border-gray-50  lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                }
              >
                Skill
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Projects"
                // yaha pe ap dekh sakte hai ki classes callback fns me likhi hai
                className={({ isActive }) =>
                  `block py-2 text-[#A6A6A6] pr-4 pl-3 transition-all  ${
                    isActive ? "text-orange-300" : "text-[#A6A6A6]"
                  }   border-gray-50  lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                }
              >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Resume"
                // yaha pe ap dekh sakte hai ki classes callback fns me likhi hai
                className={({ isActive }) =>
                  `block py-2 text-[#A6A6A6] pr-4 pl-3  transition-all  ${
                    isActive ? "text-orange-300" : "text-[#A6A6A6]"
                  }   border-gray-50  lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                }
              >
                Resume
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Contact"
                // yaha pe ap dekh sakte hai ki classes callback fns me likhi hai
                className={({ isActive }) =>
                  `block py-2 text-[#A6A6A6] pr-4 pl-3 transition-all  ${
                    isActive ? "text-orange-300" : "text-[#A6A6A6]"
                  }   border-gray-50  lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <button
            onClick={() => dispatch(toggleTheme())}
            className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition-all"
          >
            {mode === "light" ? "🌙 Dark" : "☀️ Light"} Mode
          </button>
        </nav>

        <div className="h-[1px] w-full  bg-[#a6a6a635] "></div>
      </header>
    </>
  );
}

export default Header;
