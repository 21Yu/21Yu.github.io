import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-neutral-950 text-neutral-400 py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
        <p>© {new Date().getFullYear()} YU WU. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
