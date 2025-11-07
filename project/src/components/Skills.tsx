import React from 'react';
import { FaPython, FaLinux } from 'react-icons/fa';
import { SiC, SiCplusplus } from 'react-icons/si';

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="w-full py-24 px-6 bg-neutral-950 text-white font-sans"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Label */}
        <p className="text-sm uppercase tracking-widest text-neutral-500 mb-3">
          What I Use
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-12 leading-tight">
          Skills & Tools
        </h2>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
          {/* C */}
          <div className="flex flex-col items-center">
            <SiC className="text-red-500 text-4xl hover:text-red-400 transition-colors" />
            <span className="text-sm mt-2 text-neutral-400">C</span>
          </div>

          {/* C++ */}
          <div className="flex flex-col items-center">
            <SiCplusplus className="text-blue-400 text-4xl hover:text-blue-300 transition-colors" />
            <span className="text-sm mt-2 text-neutral-400">C++</span>
          </div>

          {/* Python */}
          <div className="flex flex-col items-center">
            <FaPython className="text-yellow-300 text-4xl hover:text-yellow-200 transition-colors" />
            <span className="text-sm mt-2 text-neutral-400">Python</span>
          </div>

          {/* Linux */}
          <div className="flex flex-col items-center">
            <FaLinux className="text-red-400 text-4xl hover:text-red-300 transition-colors" />
            <span className="text-sm mt-2 text-neutral-400">Linux</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
