
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaCloud,
  FaTools,
} from "react-icons/fa";

const skillsData = [
  {
    icon: <FaReact />,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "Creating robust server-side applications and RESTful APIs.",
    skills: ["Node.js", "Express.js"],
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    description:
      "Designing and managing databases for application data.",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Development",
    description:
      "Exploring tools for building cross-platform mobile applications.",
    skills: ["React Native", "Flutter"],
  },
  {
    icon: <FaCloud />,
    title: "Cloud & DevOps",
    description:
      "Learning application deployment and cloud technologies.",
    skills: ["AWS", "Docker"],
  },
  {
    icon: <FaTools />,
    title: "Tools & Technologies",
    description:
      "Essential tools I use in my development workflow.",
    skills: ["Git", "GitHub", "VS Code", "Figma"],
  },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="min-h-screen bg-black text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            My <span className="text-purple-500">Skills</span>
          </h2>

          <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Technologies and tools I use to build modern web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

          {skillsData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-[#2d2d2d] rounded-2xl p-5 sm:p-6
              min-h-[250px] border border-transparent
              hover:border-purple-500
              hover:shadow-lg hover:shadow-purple-500/20
              transition-all duration-300"
            >

              {/* Icon and Title */}
              <div className="flex items-center gap-4 sm:gap-5 mb-5">

                <div className="text-purple-500 text-4xl sm:text-5xl shrink-0">
                  {item.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-bold">
                  {item.title}
                </h3>

              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base leading-6 mb-5">
                {item.description}
              </p>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2">

                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#414141] text-white text-xs sm:text-sm
                    px-3 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
