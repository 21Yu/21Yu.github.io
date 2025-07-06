import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 text-center bg-neutral-950 text-white font-sans">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-neutral-500 mb-3">
          Let’s Connect
        </p>
        <h2 className="text-3xl md:text-5xl font-semibold mb-8 leading-tight">
          Contact
        </h2>
        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-10">
          Feel free to reach out via email or connect with me on LinkedIn or GitHub.
        </p>

        <div className="flex justify-center gap-8 text-3xl mt-10">
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-400 transition-transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
