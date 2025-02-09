import React from "react";
import html from "/assets/html.svg"
import css from "/assets/css.svg"
import js from "/assets/javascript.svg"
import tailwincss from "/assets/tailwindcss.svg"
import cpp from "/assets/cpp.svg"
import rh from "/assets/react-hook-form.svg"
import git from "/assets/git.svg"
import java from "/assets/java.svg"
import react from "/assets/react.svg"
import vscode from "/assets/vscode.svg"
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
                src={html}
                alt="HTML Photo"
              />
            </div>

            {/* css icon */}
            <div className="sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] p-4 bg-[#262626] flex justify-center items-center rounded-2xl">
              <img
                className="w-[40px] h-[40px]"
                src={css}
                alt="CSS Photo"
              />
            </div>

            {/* tailwincss icon */}
            <div className="sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] p-4 bg-[#262626] flex justify-center items-center rounded-2xl">
              <img
                className="w-[40px] h-[40px]"
                src={tailwincss}
                alt="TailWind CSS Photo"
              />
            </div>

            {/* js icon */}
            <div className="sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] p-4 bg-[#262626] flex justify-center items-center rounded-2xl">
              <img
                className="w-[40px] h-[40px]"
                src={js}
                alt="JS Photo"
              />
            </div>

            {/* c++ icon */}
            <div className="sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] p-4 bg-[#262626] flex justify-center items-center rounded-2xl">
              <img
                className="w-[40px] h-[40px]"
                src={cpp}
                alt="C++ Photo"
              />
            </div>

            {/* react icon */}
            <div className="sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] p-4 bg-[#262626] flex justify-center items-center rounded-2xl">
              <img
                className="w-[40px] h-[40px]"
                src={rh}
                alt=""React-H00k-Form Photo
              />
            </div>

            {/* git icon */}
            <div className="sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] p-4 bg-[#262626] flex justify-center items-center rounded-2xl">
              <img
                className="w-[40px] h-[40px]"
                src={git}
                alt="Git Photo"
              />
            </div>

            {/* java icon */}
            <div className="sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] p-4 bg-[#262626] flex justify-center items-center rounded-2xl">
              <img
                className="w-[40px] h-[40px]"
                src= {java}
                alt="Java Photo"
              />
            </div>

            {/* react icon */}
            <div className="sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] p-4 bg-[#262626] flex justify-center items-center rounded-2xl">
              <img
                className="w-[40px] h-[40px]"
                src={react}
                alt="React Photo"
              />
            </div>

            {/* vscode icon */}
            <div className="sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] p-4 bg-[#262626] flex justify-center items-center rounded-2xl">
              <img
                className="w-[40px] h-[40px]"
                src={vscode}
                alt="VsCode Photo"
              />
            </div>
          </div>


        </div>

        
      </div>
    </>
  );
}

export default Skill;
