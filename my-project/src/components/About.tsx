import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full bg-neutral-950 text-white px-6 py-32">
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <p className="text-sm uppercase tracking-widest text-neutral-500 mb-3 text-center">
          Get to know me
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-10 leading-tight">
          About Me
        </h2>

        {/* Description */}
        <div className="text-neutral-400 text-lg md:text-xl leading-relaxed space-y-6 text-center">
          <p>
            I'm a Computer Science student at <span className="text-white font-medium">Simon Fraser University</span>, currently exploring the intersection of 
            <span className="text-white font-medium"> machine learning</span> and 
            <span className="text-white font-medium"> computational finance</span>.
          </p>
          <p>
            I enjoy building scalable systems, experimenting with intelligent algorithms, and diving into data to uncover meaningful insights. 
            My technical interests lie in back-end engineering, time series forecasting, and real-world ML applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
