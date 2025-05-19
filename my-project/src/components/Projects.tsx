import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-neutral-950 py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <p className="text-sm uppercase tracking-widest text-neutral-500 text-center mb-3">
          What I’ve built
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Projects
        </h2>

        {/* Personal Projects */}
        <div className="mb-20">
          <h3 className="text-xl md:text-2xl font-semibold text-neutral-300 mb-8 border-b border-neutral-700 pb-2">
            Personal Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'ChaxBot',
                description:
                  'A chatbot that explains Canadian tax concepts using NLP and a custom Q&A model.',
                link: 'https://github.com/yourusername/chaxbot',
              },
              {
                title: 'Stock Predictor',
                description:
                  'ML-powered stock trend predictor using LSTM neural networks and historical data.',
                link: 'https://github.com/yourusername/stock-predictor',
              },
              {
                title: 'BlockchainPay',
                description:
                  'Ethereum-based payment app enabling smart contract transactions and wallet-to-wallet transfers.',
                link: 'https://github.com/yourusername/blockchainpay',
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-neutral-900 rounded-xl p-6 border border-neutral-800 hover:border-neutral-700 transition"
              >
                <h4 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-neutral-400 text-sm mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="text-blue-400 text-sm hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathon Projects */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-neutral-300 mb-8 border-b border-neutral-700 pb-2">
            Hackathon Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array(3)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-900 rounded-xl p-6 border border-neutral-800 hover:border-neutral-700 transition"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Hackathon Project {idx + 1}
                  </h4>
                  <p className="text-neutral-400 text-sm mb-4">
                    Describe your hackathon project briefly here. Include any awards, special tools used, or what problem it solved.
                  </p>
                  <a
                    href="#"
                    className="text-blue-400 text-sm hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
