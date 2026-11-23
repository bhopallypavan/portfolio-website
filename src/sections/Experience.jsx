
import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Personal Projects",
    duration: "2026 - Present",
    description:
      "Building responsive and interactive web applications using React.js and Tailwind CSS. Practicing component-based development, routing, animations, and API integration.",
    icon: <FaBriefcase />,
  },
  {
    role: "Web Development Project",
    company: "THARA Orphanage Management System",
    duration: "2026",
    description:
      "Developed an orphanage management system interface with an admin dashboard, login pages, and management sections using React.js and Tailwind CSS.",
    icon: <FaGraduationCap />,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16"
        >
          My <span className="text-purple-500">Experience</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-purple-500 ml-4 sm:ml-6 md:ml-10">

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative ml-7 sm:ml-9 md:ml-10 mb-10 md:mb-12 last:mb-0"
            >

              {/* Timeline Icon */}
              <div className="absolute -left-[45px] sm:-left-[53px] md:-left-[57px] top-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm sm:text-base">
                {item.icon}
              </div>

              {/* Experience Card */}
              <div className="bg-[#151515] p-4 sm:p-5 md:p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition duration-300">

                <span className="text-purple-400 text-xs sm:text-sm">
                  {item.duration}
                </span>

                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                  {item.role}
                </h3>

                <h4 className="text-gray-400 text-sm sm:text-base mt-1 mb-3 sm:mb-4">
                  {item.company}
                </h4>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;
