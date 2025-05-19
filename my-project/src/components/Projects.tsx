import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-gray-800 py-16 px-6 text-white">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

      {/* Personal Projects */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-6 border-b border-gray-600 pb-2">Personal Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ChaxBot */}
          <div className="bg-gray-700 rounded p-6 shadow">
            <h4 className="text-xl font-semibold mb-2">ChaxBot</h4>
            <p className="mb-4">
              A chatbot that explains Canadian tax concepts using NLP and a custom Q&A model.
            </p>
            <a
              href="https://github.com/yourusername/chaxbot"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>

          {/* Stock Predictor */}
          <div className="bg-gray-700 rounded p-6 shadow">
            <h4 className="text-xl font-semibold mb-2">Stock Predictor</h4>
            <p className="mb-4">
              ML-powered stock trend predictor using LSTM neural networks and historical data.
            </p>
            <a
              href="https://github.com/yourusername/stock-predictor"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>

          {/* BlockchainPay */}
          <div className="bg-gray-700 rounded p-6 shadow">
            <h4 className="text-xl font-semibold mb-2">BlockchainPay</h4>
            <p className="mb-4">
              Ethereum-based payment app enabling smart contract transactions and wallet-to-wallet transfers.
            </p>
            <a
              href="https://github.com/yourusername/blockchainpay"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Hackathon Projects */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 border-b border-gray-600 pb-2">Hackathon Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example Hackathon Project */}
          <div className="bg-gray-700 rounded p-6 shadow">
            <h4 className="text-xl font-semibold mb-2">Hackathon Project 1</h4>
            <p className="mb-4">
              Describe your hackathon project briefly here. Include any awards, special tools used, or what problem it solved.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>

          <div className="bg-gray-700 rounded p-6 shadow">
            <h4 className="text-xl font-semibold mb-2">Hackathon Project 1</h4>
            <p className="mb-4">
              Describe your hackathon project briefly here. Include any awards, special tools used, or what problem it solved.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>

          <div className="bg-gray-700 rounded p-6 shadow">
            <h4 className="text-xl font-semibold mb-2">Hackathon Project 1</h4>
            <p className="mb-4">
              Describe your hackathon project briefly here. Include any awards, special tools used, or what problem it solved.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>         

          {/* Add more hackathon cards here as needed */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
