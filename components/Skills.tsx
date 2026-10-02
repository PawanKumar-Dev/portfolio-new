export default function Skills() {
  const rows = ["Product direction", "TypeScript / React", "Node / PostgreSQL", "Design systems", "Cloud architecture"];
  return (
    <section className="skills section-wrap" id="skills" aria-labelledby="skills-title">
      <div className="section-heading compact"><p className="section-number">02 / 04</p><h2 id="skills-title">Capabilities</h2></div>
      <div className="skills-grid">
        <p className="skills-statement">One senior pair of hands from the first useful question to the final deploy.</p>
        <ul className="skills-list">
          {rows.map((r, i) => (
            <li key={r}><span>{String(i + 1).padStart(2, "0")}</span> {r} <b>↗</b></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
