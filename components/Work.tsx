import Reveal from "./Reveal";
export default function Work() {
  return (
    <section className="work section-wrap" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <p className="section-number">01 / 04</p>
        <h2 id="work-title">Selected work</h2>
        <p className="section-lede">A considered mix of product strategy, interface craft, and resilient engineering.</p>
      </div>
      <div className="work-list">
        <Reveal as="a" href="#contact" className="project project-featured">
          <div className="project-art art-lumen"><span className="art-label">Lumen</span><span className="art-scan">/ 2024</span><div className="orb"></div></div>
          <div className="project-meta"><p className="project-kind">01 — Product platform</p><h3>Lumen Finance</h3><p>A calmer operating system for independent finance teams.</p><span className="project-link">View case study ↗</span></div>
        </Reveal>
        <Reveal as="a" href="#contact" className="project">
          <div className="project-art art-field"><span className="art-label">Field Notes</span><div className="grid-mark"></div></div>
          <div className="project-meta"><p className="project-kind">02 — Editorial tooling</p><h3>Field Notes</h3><p>Making a small publisher feel limitless.</p><span className="project-link">View case study ↗</span></div>
        </Reveal>
        <Reveal as="a" href="#contact" className="project">
          <div className="project-art art-mesh"><span className="art-label">/ relay</span><div className="mesh-line"></div></div>
          <div className="project-meta"><p className="project-kind">03 — Developer tooling</p><h3>Relay / OSS</h3><p>Infrastructure that gets out of the way.</p><span className="project-link">View case study ↗</span></div>
        </Reveal>
      </div>
    </section>
  );
}
