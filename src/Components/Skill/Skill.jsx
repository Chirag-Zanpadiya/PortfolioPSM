import React from "react";

function Skill() {
  return (
    <>
      <div className=" relative min-h-screen p-6 rounded-b-xl  bg-[#1A1A19] ">


        <div className="flex flex-col  space-y-8">
          <h1 className="text-3xl font-bold text-white ">My Skills</h1>
          <div className="relative h-[4px] w-[48px] rounded-xl  bg-orange-300"></div>

          {/* div for the skills icon */}

          <div className="flex flex-row flex-wrap  gap-6 ">
            {/* html icon */}
            <div className=" sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] p-4 bg-[#262626] flex justify-center items-center rounded-2xl">
              <img
                className="w-[40px] h-[40px]"
                src="../../../public/assets/html.svg"
                alt=""
              />
            </div>

            {/* css icon */}
            <div className="sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] p-4 bg-[#262626] flex justify-center items-center rounded-2xl">
              <img
                className="w-[40px] h-[40px]"
                src="../../../public/assets/css.svg"
                alt=""
              />
            </div>

            {/* tailwincss icon */}
            <div className="sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] p-4 bg-[#262626] flex justify-center items-center rounded-2xl">
              <img
                className="w-[40px] h-[40px]"
                src="../../../public/assets/tailwindcss.svg"
                alt=""
              />
            </div>

            {/* js icon */}
            <div className="sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] p-4 bg-[#262626] flex justify-center items-center rounded-2xl">
              <img
                className="w-[40px] h-[40px]"
                src="../../../public/assets/javascript.svg"
                alt=""
              />
            </div>

            {/* c++ icon */}
            <div className="sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] p-4 bg-[#262626] flex justify-center items-center rounded-2xl">
              <img
                className="w-[40px] h-[40px]"
                src="../../../public/assets/cpp.svg"
                alt=""
              />
            </div>

            {/* react icon */}
            <div className="sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] p-4 bg-[#262626] flex justify-center items-center rounded-2xl">
              <img
                className="w-[40px] h-[40px]"
                src="../../../public/assets/react-hook-form.svg"
                alt=""
              />
            </div>

            {/* git icon */}
            <div className="sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] p-4 bg-[#262626] flex justify-center items-center rounded-2xl">
              <img
                className="w-[40px] h-[40px]"
                src="../../../public/assets/git.svg"
                alt=""
              />
            </div>

            {/* java icon */}
            <div className="sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] p-4 bg-[#262626] flex justify-center items-center rounded-2xl">
              <img
                className="w-[40px] h-[40px]"
                src="../../../public/assets/java.svg"
                alt=""
              />
            </div>

            {/* java icon */}
            <div className="sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] p-4 bg-[#262626] flex justify-center items-center rounded-2xl">
              <img
                className="w-[40px] h-[40px]"
                src="../../../public/assets/react.svg"
                alt=""
              />
            </div>

            {/* vscode icon */}
            <div className="sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] p-4 bg-[#262626] flex justify-center items-center rounded-2xl">
              <img
                className="w-[40px] h-[40px]"
                src="../../../public/assets/vscode.svg"
                alt=""
              />
            </div>
          </div>


        </div>

        
      </div>
    </>
  );
}

export default Skill;
