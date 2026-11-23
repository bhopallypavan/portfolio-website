import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/90 backdrop-blur-sm text-white shadow-lg">

      <div className="flex items-center justify-between py-5 px-6 md:px-16">

        {/* Logo */}
        <a href="#home" className="text-2xl md:text-3xl font-bold">
          Pavan<span className="text-purple-500">Kumar</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-lg text-white/80 transition duration-300 hover:text-purple-500 group"
            >
              {link.name}

              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

        </div>

        {/* Desktop Hire Me */}
        <a
          href="#contact"
          className="hidden md:block bg-purple-700 px-5 py-2 rounded-full hover:bg-purple-900 transition"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-white hover:text-purple-500 transition"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#111111] px-6 pb-6 pt-2">

          <div className="flex flex-col space-y-5">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg text-white/80 hover:text-purple-500 transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-purple-700 text-center px-5 py-3 rounded-full hover:bg-purple-900 transition"
            >
              Hire Me
            </a>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;