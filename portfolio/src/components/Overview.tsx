import { FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Overview() {
  return (
    <section id="overview" className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Computer Science student at SFU</p>
        <h1>I build thoughtful software for <span>real-world problems.</span></h1>
        <p className="hero-summary">
          I’m Yu Wu, a Software Systems student at Simon Fraser University interested in full-stack engineering,
          backend systems, and turning complex data into useful products.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <FaArrowDown aria-hidden="true" /></a>
          <a className="button button-secondary" href="https://www.linkedin.com/in/yuw2" target="_blank" rel="noreferrer">Let’s connect</a>
        </div>
        <div className="social-links" aria-label="Social profiles">
          <a href="https://github.com/21Yu" target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" /> GitHub</a>
          <a href="https://www.linkedin.com/in/yuw2" target="_blank" rel="noreferrer"><FaLinkedin aria-hidden="true" /> LinkedIn</a>
        </div>
      </div>
      <div className="hero-note" aria-label="Areas of interest">
        <div className="note-mark">YU<span>.</span></div>
        <p className="note-label">CURRENTLY EXPLORING</p>
        <p className="note-focus">Full-stack products<br />and reliable systems</p>
      </div>
    </section>
  );
}
