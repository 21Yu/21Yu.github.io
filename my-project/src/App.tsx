import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="font-sans pt-16"> {/* DO NOT use max-w or mx-auto here */}
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
