import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 bg-neutral-950 bg-opacity-90 backdrop-blur-sm z-50 shadow-md"
      role="navigation"
      aria-label="Main navigation"
      style={{ fontFamily: 'Calibri, sans-serif' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-white font-semibold text-xl cursor-pointer select-none"
          aria-label="Homepage"
        >
          Overview
        </a>
        <div className="space-x-10 text-white text-sm md:text-base font-medium">
          <a
            href="#about"
            className="hover:text-green-300 transition-colors duration-300"
            aria-label="About section"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-green-300 transition-colors duration-300"
            aria-label="Projects section"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-green-300 transition-colors duration-300"
            aria-label="Contact section"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
