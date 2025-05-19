import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;
