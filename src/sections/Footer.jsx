
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#231f1f] text-white border-t border-gray-800 px-4 sm:px-6 md:px-16 py-8">

      <div className="max-w-6xl mx-auto">

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">
              Pavan<span className="text-purple-500">.</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              Aspiring Full-Stack Developer
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-400">
            <a href="#home" className="hover:text-purple-500 transition">
              Home
            </a>
            <a href="#about" className="hover:text-purple-500 transition">
              About
            </a>
            <a href="#skills" className="hover:text-purple-500 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-purple-500 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-purple-500 transition">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 text-xl text-gray-400">
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-purple-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-purple-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:bhopallypavankumar@gmail.com"
              aria-label="Email"
              className="hover:text-purple-500 transition"
            >
              <FaEnvelope />
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-xs sm:text-sm text-center">
            © {currentYear} Pavan Kumar. All rights reserved.
          </p>

          {/* Back to Top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-500 transition"
          >
            Back to Top
            <FaArrowUp />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
