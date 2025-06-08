// import React from "react";
// import Header from "./Header";
// import { Outlet, Route, RouterProvider } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import About from "../About/About";
// import LeftSide from "../LeftSide/LeftSide";
// LeftSide;
// function RightSideMain() {
//   return (
//     <>
//       <div className="flex-1 bg-black   flex flex-col">
//         <Header />
//         <div className="flex-1 ">
//           <Outlet />
//         </div>
//       </div>
//     </>
//   );
// }

// export default RightSideMain;



// that gpt : 

// import React from "react";
// import Header from "./Header";
// import { Outlet } from "react-router-dom";

// function RightSideMain() {
//   return (
//     <div className="flex-1 bg-[#fdf6e3] text-[#073642] dark:bg-[#0a0a0a] dark:text-[#f5f5f5] flex flex-col transition-colors duration-300">
//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <div className="flex-1 p-4 bg-[#eee8d5] dark:bg-[#121212] overflow-auto rounded-t-2xl shadow-inner">
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default RightSideMain;



// new code :: 
import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function RightSideMain() {
  return (
    <div className="flex flex-1 flex-col bg-[#fdf6e3] text-[#073642] dark:bg-[#0a0a0a] dark:text-[#f5f5f5] transition-colors duration-300 min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-[#eee8d5] dark:bg-[#121212] p-4 md:p-6 rounded-t-2xl shadow-inner transition-all duration-300">
        <Outlet />
      </div>
    </div>
  );
}

export default RightSideMain;
