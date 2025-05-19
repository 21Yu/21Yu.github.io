import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-6 text-center bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="mb-6">Feel free to reach out via email or connect with me:</p>

      <a
        href="mailto:your.email@example.com"
        className="inline-block mb-8 px-6 py-3 bg-blue-600 rounded hover:bg-blue-700 transition"
      >
        your.email@example.com
      </a>

      <div className="flex justify-center gap-8 text-3xl">
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default Contact;
