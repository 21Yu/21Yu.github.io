export default function Navbar() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <a className="wordmark" href="#overview" aria-label="Yu Wu, home">YW<span>.</span></a>
      <ul>
        <li><a href="#overview">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
      </ul>
      <a className="nav-contact" href="https://www.linkedin.com/in/yuw2" target="_blank" rel="noreferrer">Contact <span aria-hidden="true">↗</span></a>
    </nav>
  );
}
