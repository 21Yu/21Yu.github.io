import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-16 px-6 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <p className="text-lg leading-relaxed max-w-3xl mx-auto text-center">
        I'm a Computer Science student at Simon Fraser University with a strong interest in machine learning, backend development, and working with data. 
        I enjoy building scalable systems, analyzing data to uncover insights, and exploring how intelligent algorithms can solve real-world problems.
        I also love working on clean, responsive front-end interfaces using React and Tailwind CSS.
        Outside of coding, you'll find me exploring new tech, reading, or hiking around beautiful BC.
      </p>
    </section>
  );
};

export default About;
