import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

const App: React.FC = () => {
  return (
    <>
      <div className="font-sans" >
        <Navbar />
        <main className="font-sans"> {/* DO NOT use max-w or mx-auto here */}
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
