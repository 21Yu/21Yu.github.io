const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-neutral-950 text-white flex items-center justify-center px-6 md:px-20">
      <div className="max-w-2xl text-center">
        <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
          Computer Science @ SFU
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white mb-6">
          Hi, I'm <span className="text-green-600">YU WU</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
          I’m a Computer Science student passionate about <span className="text-white font-medium">machine learning</span>, <span className="text-white font-medium">data-driven applications</span>, and <span className="text-white font-medium">systems programming</span>. 
          I enjoy building intelligent systems, working with data, and exploring new areas of technology.
        </p>
      </div>
    </section>
  );
};

export default Hero;
