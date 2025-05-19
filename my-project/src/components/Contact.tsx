import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-16 px-6 text-center bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <p className="mb-6">Feel free to reach out via email:</p>
      <a
        href="mailto:your.email@example.com"
        className="inline-block px-6 py-3 bg-blue-600 rounded hover:bg-blue-700 transition"
      >
        your.email@example.com
      </a>
    </section>
  );
};

export default Contact;
