import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';

const projects = [
  {
    number: '01', name: 'FairRent', type: 'Rental market research',
    description: 'Explore rental listings on an interactive map, compare neighborhood pricing, and see machine learning rent estimates.',
    contribution: 'Built a full-stack platform with listing filters, property details, rent predictions, neighborhood insights, and saved listings.',
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'XGBoost', 'Leaflet'],
    href: 'https://github.com/21Yu/FairRent', demo: 'https://fair-rent-five.vercel.app/',
  },
  {
    number: '02', name: 'OpenDeals', type: 'Shopping and price tracking',
    description: 'Search Google Shopping results, compare products, and keep useful finds in a personal saved list.',
    contribution: 'Built a full-stack app with account sign-in, product search and filters, saved items, price history, and price-drop notifications.',
    stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'SerpApi', 'Vercel Cron'],
    href: 'https://github.com/21Yu/OpenDeals', demo: 'https://open-deals.vercel.app',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section section-shell">
      <div className="section-heading">
        <p className="eyebrow">SELECTED WORK</p>
        <h2>Projects with a purpose<span>.</span></h2>
        <p>Small snapshots of the problems I like working on—and the tools I used to work through them.</p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-number">{project.number}</div>
            <div className="project-main">
              <p className="project-type">{project.type}</p>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-contribution"><strong>What I built</strong> {project.contribution}</p>
              <div className="tag-list" aria-label={`${project.name} technologies`}>
                {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
              </div>
            </div>
            <div className="project-links">
              <a className="project-link" href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.name} live demo`}>
                <span>Live demo</span><FaArrowUpRightFromSquare className="external-icon" aria-hidden="true" />
              </a>
              <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.name} source code on GitHub`}>
                <FaGithub aria-hidden="true" /><span>Source</span><FaArrowUpRightFromSquare className="external-icon" aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
