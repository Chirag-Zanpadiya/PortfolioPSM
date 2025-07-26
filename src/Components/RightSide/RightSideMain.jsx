// // // import React from "react";
// // // import Header from "./Header";
// // // import { Outlet, Route, RouterProvider } from "react-router-dom";
// // // import { BrowserRouter as Router } from "react-router-dom";
// // // import About from "../About/About";
// // // import LeftSide from "../LeftSide/LeftSide";
// // // LeftSide;
// // // function RightSideMain() {
// // //   return (
// // //     <>
// // //       <div className="flex-1 bg-black   flex flex-col">
// // //         <Header />
// // //         <div className="flex-1 ">
// // //           <Outlet />
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // }

// // // export default RightSideMain;



// // // that gpt : 

// // // import React from "react";
// // // import Header from "./Header";
// // // import { Outlet } from "react-router-dom";

// // // function RightSideMain() {
// // //   return (
// // //     <div className="flex-1 bg-[#fdf6e3] text-[#073642] dark:bg-[#0a0a0a] dark:text-[#f5f5f5] flex flex-col transition-colors duration-300">
// // //       {/* Header */}
// // //       <Header />

// // //       {/* Main Content */}
// // //       <div className="flex-1 p-4 bg-[#eee8d5] dark:bg-[#121212] overflow-auto rounded-t-2xl shadow-inner">
// // //         <Outlet />
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default RightSideMain;



// // // new code :: 
// // import React from "react";
// // import Header from "./Header";
// // import { Outlet } from "react-router-dom";

// // function RightSideMain() {
// //   return (
// //     <div className="flex flex-1 flex-col bg-[#fdf6e3] text-[#073642] dark:bg-[#0a0a0a] dark:text-[#f5f5f5] transition-colors duration-300 min-h-screen">
// //       {/* Header */}
// //       <Header />

// //       {/* Main Content */}
// //       <div className="flex-1 overflow-auto bg-[#eee8d5] dark:bg-[#121212] p-4 md:p-6 rounded-t-2xl shadow-inner transition-all duration-300">
// //         <Outlet />
// //       </div>
// //     </div>
// //   );
// // }

// // export default RightSideMain;
// import React from "react";
// import Header from "./Header";
// import { Outlet } from "react-router-dom";
// import ChatBox from "../AIChatBot/ChatBox";

// function RightSideMain() {
//   return (
//     <div className="flex flex-1 flex-col min-h-screen transition-colors duration-300 
//       bg-gradient-to-br from-white via-[#e0f2ff] to-[#ffe4e6] 
//       dark:bg-[#1A1A19] dark:text-[#f5f5f5] text-[#1a202c] rounded-xl">
      
//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <div className="flex-1 overflow-auto p-4 md:p-6
//         bg-white/70 dark:bg-[#1A1A19] 
//         backdrop-blur-md text-[#1a202c] dark:text-[#f5f5f5] 
//         rounded-t-sm shadow-inner border border-[#dbeafe]/60 dark:border-[#27272a] 
//         transition-all duration-300 ">
//         <Outlet />
//         {/* <ChatBox/> */}
        
//       </div>
//     </div>
//   );
// }

// export default RightSideMain;


import  { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import ChatBox from "../AIChatBot/ChatBox";
import UserContext from "../../context/UserContext";

function RightSideMain() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="flex flex-1 flex-col min-h-screen transition-colors duration-300 
      bg-gradient-to-br from-white via-[#e0f2ff] to-[#ffe4e6] 
      dark:bg-[#1A1A19] dark:text-[#f5f5f5] text-[#1a202c] relative">
      
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-4 md:p-6
        bg-white/70 dark:bg-[#1A1A19] 
        backdrop-blur-md text-[#1a202c] dark:text-[#f5f5f5] 
        rounded-t-sm shadow-inner border border-[#dbeafe]/60 dark:border-[#27272a] 
        transition-all duration-300">
        <Outlet />
      </div>

      {/* Floating Chat Button */}
      {!showChat && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 group">
          {/* Tooltip Text */}
          <div className="bg-black text-gray text-sm px-3 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300">
            How can I help you?
          </div>

          {/* Circle Button */}
          <button
            onClick={() => setShowChat(true)}
            className="w-14 h-14 rounded-full dark:bg-[#1A1A19] dark:text-white text-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300"
            title="Chat with Assistant"
          >
            💬
          </button>
        </div>
      )}

      {/* Fullscreen Chat Box */}
      {showChat && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-[#181818] flex flex-col shadow-2xl transition-all duration-300">
          {/* Header / Close */}
          <div className="flex justify-between items-center px-4 py-3 bg-[#2563eb] text-white">
            <h2 className="text-lg font-semibold">AI Assistant</h2>
            <button
              onClick={() => setShowChat(false)}
              className="text-white text-xl font-bold hover:text-red-200"
            >
              ✕
            </button>
          </div>

          {/* Chat Component */}
          <div className="flex-1 overflow-auto p-4 bg-black">
            <UserContext>
            <ChatBox />
            </UserContext>
          </div>
        </div>
      )}
    </div>
  );
}

export default RightSideMain;
