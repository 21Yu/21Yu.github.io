import React from 'react';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiCplusplus, SiOpenai } from 'react-icons/si';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 px-6 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto text-center text-5xl">
        <div className="flex flex-col items-center">
          <FaReact className="text-cyan-400 hover:text-cyan-300 transition" />
          <span className="text-base mt-2">React</span>
        </div>
        <div className="flex flex-col items-center">
          <FaNodeJs className="text-green-500 hover:text-green-400 transition" />
          <span className="text-base mt-2">Node.js</span>
        </div>
        <div className="flex flex-col items-center">
          <FaPython className="text-yellow-300 hover:text-yellow-200 transition" />
          <span className="text-base mt-2">Python</span>
        </div>
        <div className="flex flex-col items-center">
          <SiCplusplus className="text-blue-400 hover:text-blue-300 transition" />
          <span className="text-base mt-2">C++</span>
        </div>
        <div className="flex flex-col items-center">
          <SiOpenai className="text-purple-400 hover:text-purple-300 transition" />
          <span className="text-base mt-2">ChatGPT</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
