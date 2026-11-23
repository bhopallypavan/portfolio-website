
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

import pavanImage from "../assets/PAVAN.png";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-28 pb-16 bg-gradient-to-r from-black via-[#2d2d2d] to-black"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">

        {/* LEFT SIDE CONTENT */}
        <div className="w-full md:w-1/2 text-center md:text-left">

          <p className="text-base sm:text-lg text-gray-50 mb-3">
            Hello, I'm
          </p>

          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Pavan Kumar
          </h1>

          <h2 className="text-gray-50 text-xl sm:text-2xl lg:text-4xl font-semibold">
            I'm a{" "}
            <span className="text-purple-500">
              <TypeAnimation
                sequence={[
                  "Front-End Developer",
                  2000,
                  "Full-Stack Developer",
                  2000,
                  "React Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={60}
                repeat={Infinity}
              />
            </span>
          </h2>

          <p className="text-gray-400 mt-4 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            I'm an aspiring Full-Stack Developer passionate about
            building modern and responsive websites.
          </p>

          {/* SOCIAL MEDIA ICONS */}
          <div className="flex items-center justify-center md:justify-start gap-5 mt-6">

            <a
              href="https://www.linkedin.com/in/pavan-kumar-3b404032a /"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 text-2xl hover:text-purple-500 transition duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/bhopallypavan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-300 text-2xl hover:text-purple-500 transition duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.instagram.com/pavan_rock_114433/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-300 text-2xl hover:text-purple-500 transition duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>

          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">

            <a
              href="/pavan.resume.pdf"
              download
              className="px-5 sm:px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="px-5 sm:px-6 py-3 border border-purple-500 text-purple-400 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition duration-300"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* RIGHT SIDE PROFILE IMAGE */}
<div className="w-full md:w-1/2 flex justify-center items-center">
  <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] lg:w-96 lg:h-[500px]">

    {/* Purple-pink shape (offset slightly for a frame effect) */}
    <div
      className="absolute inset-0 translate-x-3 translate-y-3 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500"
      style={{ clipPath: "polygon(15% 0%, 85% 0%, 100% 12%, 100% 88%, 85% 100%, 15% 100%, 0% 88%, 0% 12%)" }}
    />

    {/* Photo clipped to the same shape */}
    <motion.img
      src={pavanImage}
      alt="Pavan Kumar"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="absolute inset-0 z-10 w-full h-full object-cover object-top"
      style={{ clipPath: "polygon(15% 0%, 85% 0%, 100% 12%, 100% 88%, 85% 100%, 15% 100%, 0% 88%, 0% 12%)" }}
    />
  </div>
</div>

      </div>
    </motion.div>
  );
};

export default Hero;
