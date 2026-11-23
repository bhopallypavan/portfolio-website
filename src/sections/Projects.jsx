
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import ecommerceImg from "../assets/e-commerce.img.jpg";
import orphanageImg from "../assets/oms.img.png";
import portfolioImg from "../assets/portfolio.img.png";

const projects = [
  {
    title: "Personal Portfolio",
    description: "A responsive personal portfolio website showcasing my skills, experience and projects.",
    image: portfolioImg,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    demo: "#",
    github: "#",
  },
  {
    title: "Orphanage Management System",
    description: "A dashboard to manage children, donors and staff with an organized management interface.",
    image: orphanageImg,
    tech: ["React", "Tailwind CSS", "MongoDB"],
    demo: "",
    github: "#",
  },
  {
    title: "E-commerce Website",
    description: "An online shopping interface featuring product cards and a modern shopping layout.",
    image: ecommerceImg,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id="projects"
      className="min-h-screen bg-black text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            My <span className="text-purple-500">Projects</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mt-4">
            A selection of my recent projects and development work.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{duration: 0.6,delay: index * 0.15, }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-[#171717] rounded-2xl overflow-hidden
              border border-gray-800 hover:border-purple-500
              hover:shadow-lg hover:shadow-purple-500/20
              transition-all duration-300 flex flex-col"
            >

              {/* Project Image */}
              <div className="overflow-hidden h-48 sm:h-52 lg:h-56">

                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Project Details */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">

                <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base leading-6 mb-5">
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2 mb-6">

                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="bg-gray-800 text-gray-200
                      px-3 py-1.5 rounded-full text-xs sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* Project Buttons */}
                <div className="flex flex-wrap gap-3 mt-auto">

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-0 flex items-center justify-center gap-2
                    px-3 py-3 bg-purple-600 text-white text-sm sm:text-base
                    rounded-lg font-medium hover:bg-purple-700
                    transition duration-300"
                  >
                    Live Demo
                    <FaExternalLinkAlt className="text-xs" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-0 flex items-center justify-center gap-2
                    px-3 py-3 border border-purple-500 text-purple-400
                    text-sm sm:text-base rounded-lg font-medium
                    hover:bg-purple-600 hover:text-white
                    transition duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
