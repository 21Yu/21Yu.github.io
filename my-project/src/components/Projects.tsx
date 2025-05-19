import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-gray-800 py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-gray-700 rounded p-6 shadow text-white">
          <h3 className="text-xl font-semibold mb-2">Project One</h3>
          <p className="mb-4">A cool project that does amazing things.</p>
          <a
            href="#"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="bg-gray-700 rounded p-6 shadow text-white">
          <h3 className="text-xl font-semibold mb-2">Project Two</h3>
          <p className="mb-4">Another awesome project you should check out.</p>
          <a
            href="#"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="bg-gray-700 rounded p-6 shadow text-white">
          <h3 className="text-xl font-semibold mb-2">Project Three</h3>
          <p className="mb-4">A third project to showcase your skills.</p>
          <a
            href="#"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
