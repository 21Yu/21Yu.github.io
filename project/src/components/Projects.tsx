import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-neutral-950 py-24 px-6 text-white font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <p className="text-sm uppercase tracking-widest text-neutral-500 text-center mb-3">
          What I’ve built
        </p>
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-16 leading-tight">
          Projects
        </h2>

        {/* Personal Projects */}
        <div className="mb-20">
          <h3 className="text-xl md:text-2xl font-semibold text-neutral-300 mb-8 border-b border-neutral-700 pb-2">
            Personal Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Autonomous Line-Following Robot',
                description:
                  'Developed a Python-based LEGO EV3 robot using PID control to follow colored paths and detect obstacles. Tuned PID gains for smooth, accurate navigation.',
                link: 'https://github.com/21Yu/ev3-line-follower',
              },
              {
                title: 'ML Rent Price Predictor',
                description:
                  'Built a machine learning pipeline using XGBoost and Pandas to predict rental prices from 13k+ real estate records. Engineered features and tuned the model for high accuracy (R² = 0.74).',
                link: 'https://github.com/21Yu/FairRent',
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-neutral-900 rounded-xl p-6 border border-neutral-800 hover:border-green-600 transition-colors"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-neutral-400 text-sm mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-green-500 text-sm hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathon / Devpost */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-neutral-300 mb-8 border-b border-neutral-700 pb-2">
            Hackathons
          </h3>
          <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800 hover:border-green-600 transition-colors text-center">
            <p className="text-neutral-400 mb-4">
              Check out all my hackathon projects and experiences on my Devpost profile.
            </p>
            <a
              href="https://devpost.com/12DevYu"
              className="text-green-500 text-sm hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Devpost Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
