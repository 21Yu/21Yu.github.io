const groups = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS'] },
  { label: 'Frameworks', items: ['React', 'FastAPI', 'Node.js', 'Express'] },
  { label: 'Data & storage', items: ['PostgreSQL'] },
  { label: 'Tools & platforms', items: ['Git', 'Docker', 'Linux', 'GitHub Actions'] },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section section-shell">
      <div className="section-heading skills-heading">
        <p className="eyebrow">TOOLS I WORK WITH</p>
        <h2>A practical toolkit<span>.</span></h2>
        <p>My strongest interests are building across the stack and making backend services useful, clear, and dependable.</p>
      </div>
      <div className="skills-grid">
        {groups.map((group) => (
          <div className="skill-group" key={group.label}>
            <h3>{group.label}</h3>
            <div className="tag-list">
              {group.items.map((item) => <span className="tag" key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
