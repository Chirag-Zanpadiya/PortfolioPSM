// import { Globe } from "lucide-react";
// import { Server } from "lucide-react";
// import { Database } from "lucide-react";
// import { Cpu } from "lucide-react";
// import { Settings } from "lucide-react";
// import { Code } from "lucide-react";
// import { Shield } from "lucide-react";
// function Skill() {
//   const frontedTech = [
//     {
//       alt: "HTML5",
//     },
//     {
//       alt: "CSS3",
//     },
//     {
//       alt: "JavaScript",
//     },
//     {
//       alt: "TailWind CSS",
//     },

//     {
//       alt: "ReactJs",
//     },

//     {
//       alt: "Redux",
//     },
//     {
//       alt: "Framer Motion",
//     },
//   ];
//   const BackendTech = [
//     {
//       alt: "NodeJs",
//     },
//     {
//       alt: "ExpressJs",
//     },
//     {
//       alt: "Mongoose",
//     },
//   ];
//   const DataBasesTech = [
//     {
//       alt: "MongoDB",
//     },
//   ];
//   const DevOpsTech = [
//     {
//       alt: "Vercel",
//     },
//     {
//       alt: "Render",
//     },
//   ];
//   const ToolTech = [
//     {
//       alt: "VS Code",
//     },
//     {
//       alt: "GitHub",
//     },
//     {
//       alt: "Postman",
//     },
//     {
//       alt: "npm/yarn/pnpm",
//     },
//     {
//       alt: "Vite",
//     },
//   ];
//   const ProgrammingLanguage = [
//     {
//       alt: "CPP",
//     },
//     {
//       alt: "JavaScript",
//     },
//     {
//       alt: "Python",
//     },
//   ];
//   const SecurityTech = [
//     {
//       alt: "Clerk",
//     },
//     {
//       alt: "HTTPs",
//     },
//     {
//       alt: "CORS",
//     },
//     {
//       alt: "JWT",
//     },
//   ];
//   return (
//     <>
//       <div className=" relative min-h-screen p-6 rounded-b-xl  bg-[#1A1A19] ">
//         <div className="flex flex-col  space-y-8">
//           <h1 className="text-3xl font-bold text-white ">My Skills</h1>
//           <div className="relative h-[4px] w-[48px] rounded-xl  bg-orange-300"></div>

//           {/* fronted Development */}
//           <div className="flex items-center gap-4 bg-[#1a1a1a] text-white p-0 rounded-lg w-fit">
//             {/* Icon with circular background */}
//             <div
//               className="w-10 h-10 rounded-full bg-[#ffb109c1]  flex items-center justify-center"
//             >
//               <Globe className="text-white w-5 h-5" />
//             </div>

//             {/* Text */}
//             <span className="text-lg font-semibold">Frontend Development</span>
//           </div>
//           <div className="flex flex-row flex-wrap  gap-6 ">
//             {frontedTech.length > 0 &&
//               frontedTech.map((arr, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-white rounded-full 
//                  border border-yellow-700/20 shadow-inner shadow-yellow-500/10
//                  transform transition-all duration-300 hover:scale-105 hover:bg-yellow-900/40"
//                 >
//                   <span className="text-sm font-medium">{arr.alt}</span>
//                   <span className="relative flex h-3 w-3">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
//                   </span>
//                 </div>
//               ))}
//           </div>

//           {/* Backend Development */}
//           <div className="flex items-center gap-4 bg-[#1a1a1a] text-white p-0 rounded-lg w-fit">
//             {/* Icon with circular background */}
//             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-700 to-yellow-500 flex items-center justify-center">
//               <Server className="text-white w-5 h-5" />
//             </div>

//             {/* Text */}
//             <span className="text-lg font-semibold">Backend Development</span>
//           </div>
//           <div className="flex flex-row flex-wrap  gap-6 ">
//             {BackendTech.length > 0 &&
//               BackendTech.map((arr, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-white rounded-full 
//                  border border-yellow-700/20 shadow-inner shadow-yellow-500/10
//                  transform transition-all duration-300 hover:scale-105 hover:bg-yellow-900/40"
//                 >
//                   <span className="text-sm font-medium">{arr.alt}</span>
//                   <span className="relative flex h-3 w-3">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
//                   </span>
//                 </div>
//               ))}
//           </div>

//           {/* DataBases */}
//           <div className="flex items-center gap-4 bg-[#1a1a1a] text-white p-0 rounded-lg w-fit">
//             {/* Icon with circular golden background */}
//             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-700 to-yellow-500 flex items-center justify-center">
//               <Database className="text-white w-5 h-5" />
//             </div>

//             {/* Text */}
//             <span className="text-lg font-semibold">Database Management</span>
//           </div>
//           <div className="flex flex-row flex-wrap  gap-6 ">
//             {DataBasesTech.length > 0 &&
//               DataBasesTech.map((arr, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-white rounded-full 
//                  border border-yellow-700/20 shadow-inner shadow-yellow-500/10
//                  transform transition-all duration-300 hover:scale-105 hover:bg-yellow-900/40"
//                 >
//                   <span className="text-sm font-medium">{arr.alt}</span>
//                   <span className="relative flex h-3 w-3">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
//                   </span>
//                 </div>
//               ))}
//           </div>

//           {/* Devops */}
//           <div className="flex items-center gap-4 bg-[#1a1a1a] text-white p-0 rounded-lg w-fit">
//             {/* Icon with circular golden background */}
//             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-700 to-yellow-500 flex items-center justify-center">
//               <Cpu className="text-white w-5 h-5" />
//             </div>

//             {/* Text */}
//             <span className="text-lg font-semibold">DevOps</span>
//           </div>
//           <div className="flex flex-row flex-wrap  gap-6 ">
//             {DevOpsTech.length > 0 &&
//               DevOpsTech.map((arr, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-white rounded-full 
//                  border border-yellow-700/20 shadow-inner shadow-yellow-500/10
//                  transform transition-all duration-300 hover:scale-105 hover:bg-yellow-900/40"
//                 >
//                   <span className="text-sm font-medium">{arr.alt}</span>
//                   <span className="relative flex h-3 w-3">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
//                   </span>
//                 </div>
//               ))}
//           </div>

//           {/* Tools And Enviroment */}
//           <div className="flex items-center gap-4 bg-[#1a1a1a] text-white p-0 rounded-lg w-fit">
//             {/* Icon with circular golden background */}
//             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-700 to-yellow-500 flex items-center justify-center">
//               <Settings className="text-white w-5 h-5" />
//             </div>

//             {/* Text */}
//             <span className="text-lg font-semibold">Tools & Environments</span>
//           </div>
//           <div className="flex flex-row flex-wrap  gap-6 ">
//             {ToolTech.length > 0 &&
//               ToolTech.map((arr, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-white rounded-full 
//                  border border-yellow-700/20 shadow-inner shadow-yellow-500/10
//                  transform transition-all duration-300 hover:scale-105 hover:bg-yellow-900/40"
//                 >
//                   <span className="text-sm font-medium">{arr.alt}</span>
//                   <span className="relative flex h-3 w-3">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
//                   </span>
//                 </div>
//               ))}
//           </div>

//           {/* Programmig Language */}
//           <div className="flex items-center gap-4 bg-[#1a1a1a] text-white p-0 rounded-lg w-fit">
//             {/* Icon with circular golden background */}
//             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-700 to-yellow-500 flex items-center justify-center">
//               <Code className="text-white w-5 h-5" />
//             </div>

//             {/* Text */}
//             <span className="text-lg font-semibold">Programming Language</span>
//           </div>
//           <div className="flex flex-row flex-wrap  gap-6 ">
//             {ProgrammingLanguage.length > 0 &&
//               ProgrammingLanguage.map((arr, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-white rounded-full 
//                  border border-yellow-700/20 shadow-inner shadow-yellow-500/10
//                  transform transition-all duration-300 hover:scale-105 hover:bg-yellow-900/40"
//                 >
//                   <span className="text-sm font-medium">{arr.alt}</span>
//                   <span className="relative flex h-3 w-3">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
//                   </span>
//                 </div>
//               ))}
//           </div>

//           {/* Security */}
//           <div className="flex items-center gap-4 bg-[#1a1a1a] text-white p-0 rounded-lg w-fit">
//             {/* Icon with circular golden background */}
//             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-700 to-yellow-500 flex items-center justify-center">
//               <Shield className="text-white w-5 h-5" />
//             </div>

//             {/* Text */}
//             <span className="text-lg font-semibold">Security</span>
//           </div>
//           <div className="flex flex-row flex-wrap  gap-6 ">
//             {SecurityTech.length > 0 &&
//               SecurityTech.map((arr, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-white rounded-full 
//                  border border-yellow-700/20 shadow-inner shadow-yellow-500/10
//                  transform transition-all duration-300 hover:scale-105 hover:bg-yellow-900/40"
//                 >
//                   <span className="text-sm font-medium">{arr.alt}</span>
//                   <span className="relative flex h-3 w-3">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
//                   </span>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Skill;



// theme mode code :: 
import { Globe, Server, Database, Cpu, Settings, Code, Shield } from "lucide-react";

function Skill() {
  const frontedTech = [
    { alt: "HTML5" },
    { alt: "CSS3" },
    { alt: "JavaScript" },
    { alt: "TailWind CSS" },
    { alt: "ReactJs" },
    { alt: "Redux" },
    { alt: "Framer Motion" },
  ];

  const BackendTech = [{ alt: "NodeJs" }, { alt: "ExpressJs" }, { alt: "Mongoose" }];
  const DataBasesTech = [{ alt: "MongoDB" }];
  const DevOpsTech = [{ alt: "Vercel" }, { alt: "Render" }];
  const ToolTech = [
    { alt: "VS Code" },
    { alt: "GitHub" },
    { alt: "Postman" },
    { alt: "npm/yarn/pnpm" },
    { alt: "Vite" },
  ];
  const ProgrammingLanguage = [
    { alt: "CPP" },
    { alt: "JavaScript" },
    { alt: "Python" },
  ];
  const SecurityTech = [
    { alt: "Clerk" },
    { alt: "HTTPs" },
    { alt: "CORS" },
    { alt: "JWT" },
  ];

  const renderSection = (Icon, title, data, lightHoverClass) => (
    <>
      <div className="flex items-center gap-4 bg-[#FFFFFF] dark:bg-[#1a1a1a] text-black dark:text-white p-0 rounded-lg w-fit">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-700 to-yellow-500 flex items-center justify-center">
          <Icon className="text-white w-5 h-5" />
        </div>
        <span className="text-lg font-semibold">{title}</span>
      </div>

      <div className="flex flex-row flex-wrap gap-6">
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full
              bg-[#FFFFFF] dark:bg-[#1a1a1a]
              text-black dark:text-white
              border border-yellow-700/20 shadow-inner shadow-yellow-500/10
              transform transition-all duration-300
              hover:scale-105
              ${lightHoverClass} dark:hover:bg-yellow-900/40
            `}
          >
            <span className="text-sm font-medium">{item.alt}</span>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
            </span>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="relative min-h-screen p-6 rounded-b-xl bg-[#FFFFFF] dark:bg-[#1A1A19]">
      <div className="flex flex-col space-y-8">
        <h1 className="text-3xl font-bold text-black dark:text-white">My Skills</h1>
        <div className="relative h-[4px] w-[48px] rounded-xl bg-orange-300"></div>

        {renderSection(Globe, "Frontend Development", frontedTech, "hover:bg-orange-100")}
        {renderSection(Server, "Backend Development", BackendTech, "hover:bg-green-100")}
        {renderSection(Database, "Database Management", DataBasesTech, "hover:bg-purple-100")}
        {renderSection(Cpu, "DevOps", DevOpsTech, "hover:bg-blue-100")}
        {renderSection(Settings, "Tools & Environments", ToolTech, "hover:bg-pink-100")}
        {renderSection(Code, "Programming Language", ProgrammingLanguage, "hover:bg-cyan-100")}
        {renderSection(Shield, "Security", SecurityTech, "hover:bg-red-100")}
      </div>
    </div>
  );
}

export default Skill;