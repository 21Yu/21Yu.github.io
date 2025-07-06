import React from 'react';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiCplusplus, SiOpenai } from 'react-icons/si';

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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-items-center">
          <div className="flex flex-col items-center">
            <FaReact className="text-cyan-400 text-4xl hover:text-cyan-300 transition-colors" />
            <span className="text-sm mt-2 text-neutral-400">React</span>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-green-500 text-4xl hover:text-green-400 transition-colors" />
            <span className="text-sm mt-2 text-neutral-400">Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <FaPython className="text-yellow-300 text-4xl hover:text-yellow-200 transition-colors" />
            <span className="text-sm mt-2 text-neutral-400">Python</span>
          </div>
          <div className="flex flex-col items-center">
            <SiCplusplus className="text-blue-400 text-4xl hover:text-blue-300 transition-colors" />
            <span className="text-sm mt-2 text-neutral-400">C++</span>
          </div>
          <div className="flex flex-col items-center">
            <SiOpenai className="text-purple-400 text-4xl hover:text-purple-300 transition-colors" />
            <span className="text-sm mt-2 text-neutral-400">ChatGPT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
