import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <p className="eyebrow">HAVE A ROLE OR PROJECT IN MIND?</p>
        <h2>Let’s build something useful<span>.</span></h2>
        <p>I’m looking for software engineering co-op opportunities in Vancouver.</p>
        <a className="button button-primary" href="https://www.linkedin.com/in/yuw2" target="_blank" rel="noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Yu Wu</span>
        <div>
          <a href="https://github.com/21Yu" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/yuw2" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
        <a href="#overview">Back to top ↑</a>
      </div>
    </footer>
  );
}
