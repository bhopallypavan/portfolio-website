
import React from "react";
import { motion } from "framer-motion";
import pavanImage1 from "../assets/pavan2.png";
import { FaLightbulb, FaPaintBrush, FaCode } from "react-icons/fa";

const features = [
  {
    icon: <FaLightbulb />,
    title: "Innovative",
    description:
      "I love creating unique solutions to complex problems with cutting-edge technologies.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Design Oriented",
    description:
      "Beautiful design and user experience are at the heart of everything I create.",
  },
  {
    icon: <FaCode />,
    title: "Clean Code",
    description:
      "I write maintainable, efficient code following best practices and modern patterns.",
  },
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="min-h-screen bg-black text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16"
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-16">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          About <span className="text-purple-700">Me</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Get to know more about my background and passion.
        </p>

        {/* About Content */}
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">

          {/* About Image */}
          <div className="w-full md:w-5/12 flex justify-center">

            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
              src={pavanImage1}
              alt="Pavan Kumar"
              className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] h-auto object-contain rounded-2xl"
            />

          </div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full md:w-7/12"
          >

            <div className="rounded-2xl p-2 sm:p-4 md:p-6">

              <h2 className="text-white text-2xl sm:text-3xl font-semibold text-center md:text-left py-2 mb-3">
                My Journey
              </h2>

              <p className="text-gray-300 mb-6 leading-7 text-sm sm:text-base">
                I'm an aspiring full-stack developer passionate about
                creating modern, responsive, and user-friendly web
                applications. My journey started with learning HTML
                and CSS, and I've continued developing my skills in
                JavaScript, React, and Tailwind CSS to build
                interactive and engaging websites.
              </p>

              <p className="text-gray-300 mb-8 leading-7 text-sm sm:text-base">
                When I'm not coding, I enjoy exploring new technologies,
                working on personal projects, and improving my
                problem-solving skills. I believe in continuous learning
                and staying up to date with modern web development
                practices to turn creative ideas into meaningful
                digital solutions.
              </p>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                    }}
                    className="bg-[#2d2d2d] text-white rounded-2xl p-5 sm:p-6
                    border border-transparent
                    hover:border-purple-500
                    transition-colors duration-300 cursor-pointer"
                  >

                    {/* Icon */}
                    <div className="text-purple-500 text-3xl sm:text-4xl mb-4">
                      {feature.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-3">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm sm:text-base leading-6">
                      {feature.description}
                    </p>

                  </motion.div>
                ))}

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default About;
