import Reveal from "./Reveal";
const NOTES = [
  { kind: "Product thinking", date: "2024-10-12", disp: "12.10.24", t: "The quiet power of a good default", p: "How a few thoughtful choices can make a complex product feel immediately useful." },
  { kind: "Shipping well", date: "2024-07-03", disp: "03.07.24", t: "Shipping less, but shipping it well", p: "A practical case for smaller releases, tighter feedback loops, and better care." },
  { kind: "Inclusive design", date: "2024-02-19", disp: "19.02.24", t: "Notes on designing for the edge", p: "What constraints, overlooked users, and real-world conditions teach us about craft." },
];
export default function Journal() {
  return (
    <section className="journal section-wrap" id="blog" aria-labelledby="blog-title">
      <div className="section-heading"><p className="section-number">03 / 04</p><h2 id="blog-title">From the blog</h2><p className="section-lede">Small observations on making digital things clearer, kinder, and more durable.</p></div>
      <div className="journal-list">
        {NOTES.map((n) => (
          <Reveal as="article" key={n.t}>
            <a href="#contact">
              <div><p className="project-kind">{n.kind}</p><time dateTime={n.date}>{n.disp}</time></div>
              <div><h3>{n.t}</h3><p>{n.p}</p></div>
              <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
