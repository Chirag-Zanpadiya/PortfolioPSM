import React from "react";
import passwordimg from "../../../public/assets/resume.png";
import { Link } from "react-router-dom";

function Resume() {
  const handleDownload = () => {
    const fileUrl =
      "https://drive.google.com/file/d/1Ll092w-etKxG6Pg2A4AnXt_DfMFE6VX4/view?usp=drive_link"; // Replace with your resume URL
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "Chirag_Resume.pdf"); // Suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className=" overflow-y-hidden relative rounded-lg overflow-hidden group border border-gray-700 mt-4  bg-gray-900">
        {/* Image with zoom effect */}
        <div className="h-full overflow-hidden">
          <img
            src={passwordimg} // Make sure this is a valid path or import
            alt="Utopia Technology"
            className=" w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 opacity-50"
          />
        </div>

        {/* Overlay for readability */}
        <div className="absolute inset-0  bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300"></div>

        {/* Text content */}

        {/* Button */}
        <div className="relative w-full p-4 flex justify-between items-center">
          <Link className="bg-black text-white  px-4 py-1 rounded-lg border hover:cursor-pointer  border-gray-700 hover:bg-[#FFBF03] font-semibold hover:text-black transition">
            <button className="hover:cursor-pointer" onClick={handleDownload}>
              Resume
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Resume;
