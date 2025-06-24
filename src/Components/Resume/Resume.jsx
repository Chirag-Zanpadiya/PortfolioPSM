import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";

const educationData = [
  {
    id: "edu-1",
    year: "2019 - 2020",
    title: "Class X | GSEB",
    institution: "D.A. Vidhyamandir Dhandhuka",
    score: "PER: 80%",
  },
  {
    id: "edu-2",
    year: "2020 - 2022",
    title: "Class XII | GSEB",
    institution: "B.A.P.S Gondal Gurukul , Rajkot",
    score: "PER: 78%",
  },
  {
    id: "edu-3",
    year: "2022 - 2026",
    title: "B.Tech",
    institution: "Government Engineering College Gandhinagar Sector 28",
    score: "CGPA: 8.26(till 5th SEM)",
  },
];

function Resume() {
  return (
    <section className="bg-white dark:bg-[#1A1A19] py-16 px-4 sm:px-8 transition-colors duration-500">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Section Heading */}
        <div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            My professional journey and skills
          </p>
        </div>

        {/* Sub-heading */}
        <div className="flex items-center gap-3">
          <FaGraduationCap className="text-yellow-500 text-xl" />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-yellow-300">
            Education
          <div className="relative h-[4px] w-[48px] rounded-xl bg-orange-300"></div>
          </h3>
        </div>

        {/* Cards */}
        {educationData.map((edu) => {
          const ref = useRef(null);
          const inView = useInView(ref, { once: true, amount: 0.5 });

          return (
            <motion.div
              key={edu.id}
              ref={ref}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white dark:bg-[#2a2a2a] rounded-xl shadow-md p-6 border-l-4 border-yellow-500 hover:shadow-yellow-400/40 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-1 text-sm text-yellow-600 dark:text-yellow-400">
                <BsCalendarDate />
                <span>{edu.year}</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {edu.title}
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {edu.institution}
              </p>
              <div className="mt-2 inline-block px-3 py-0.5 bg-yellow-600 text-white text-xs rounded-full font-semibold">
                🎓 {edu.score}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Resume;
