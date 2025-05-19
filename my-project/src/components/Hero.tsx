const Hero = () => {
    return (
      <section className="w-full min-h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Jane Doe</h1>
        <p className="text-lg max-w-xl px-4">
          I’m a front-end developer specializing in React and Tailwind CSS.
        </p>
        <a
          href="#projects"
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          View My Work
        </a>
      </section>
    );
  };
  
  export default Hero;
  