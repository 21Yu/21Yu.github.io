import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav
      className="sticky top-0 left-0 right-0 bg-neutral-950 bg-opacity-90 backdrop-blur-sm z-50 shadow-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto py-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <a
          href="#"
          className="relative text-white text-sm md:text-base font-medium hover:text-green-600 transition-colors duration-300 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-green-600 hover:before:w-full before:transition-all before:duration-300"
          aria-label="Homepage"
        >
          Overview
        </a>
        <div className="space-x-6 text-white text-sm md:text-base font-medium flex flex-wrap justify-center md:justify-end">
          <a
            href="#about"
            className="relative hover:text-green-600 transition-colors duration-300 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-green-600 hover:before:w-full before:transition-all before:duration-300"
            aria-label="About section"
          >
            About
          </a>
          <a
            href="#skills"
            className="relative hover:text-green-600 transition-colors duration-300 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-green-600 hover:before:w-full before:transition-all before:duration-300"
            aria-label="Skills section"
          >
            Skills & Tools
          </a>
          <a
            href="#projects"
            className="relative hover:text-green-600 transition-colors duration-300 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-green-600 hover:before:w-full before:transition-all before:duration-300"
            aria-label="Projects section"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="relative hover:text-green-600 transition-colors duration-300 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-green-600 hover:before:w-full before:transition-all before:duration-300"
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
