import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full bg-neutral-950 text-white px-6 py-32 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <p className="text-sm uppercase tracking-widest text-neutral-500 mb-3 text-center">
          Get to know me
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-10 leading-tight text-white">
          About Me
        </h2>

        {/* Description */}
        <div className="max-w-2xl mx-auto text-neutral-400 text-lg md:text-xl leading-relaxed space-y-6 text-center">
          <p>
            I’m currently pursuing a <span className="text-white font-medium">BSc in Computer Science at Simon Fraser University</span> with a focus on <span className="text-white font-medium">machine learning</span>, <span className="text-white font-medium">data processing</span>,
            and <span className="text-white font-medium">low-level system programming</span>. 
            My projects involve training ML models, analyzing datasets, 
            and building software that interacts closely with hardware or system-level resources.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
