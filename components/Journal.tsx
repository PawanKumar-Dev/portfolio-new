import Reveal from "./Reveal";

type Note = {
  kind: string;
  date: string;
  disp: string;
  t: string;
  tint: "azure" | "night" | "sand" | "teal" | "rose" | "sky";
  wide?: boolean;
  img: string;
};

const NOTES: Note[] = [
  { kind: "Product thinking", date: "2024-10-12", disp: "12.10.24", t: "The quiet power of a good default", tint: "azure", wide: true, img: "/work/lumen.jpg" },
  { kind: "Shipping well", date: "2024-07-03", disp: "03.07.24", t: "Shipping less, but shipping it well", tint: "night", img: "/work/north.jpg" },
  { kind: "Inclusive design", date: "2024-02-19", disp: "19.02.24", t: "Notes on designing for the edge", tint: "sand", img: "/work/field.jpg" },
  { kind: "Performance", date: "2023-11-28", disp: "28.11.23", t: "What eighty milliseconds actually feel like", tint: "teal", img: "/work/bloom.jpg" },
  { kind: "Tooling", date: "2023-09-05", disp: "05.09.23", t: "A small case for boring databases", tint: "rose", img: "/work/atlas.jpg" },
  { kind: "Writing", date: "2023-06-21", disp: "21.06.23", t: "Writing docs that people actually read", tint: "sky", wide: true, img: "/work/relay.jpg" },
];

export default function Journal() {
  return (
    <section className="journal section-wrap" id="blog" aria-labelledby="blog-title">
      <div className="journal-head">
        <p className="section-number">03 / 04</p>
        <h2 id="blog-title">From the blog.</h2>
        <p className="journal-lede">
          Small observations on making digital things clearer, kinder, and more durable.
        </p>
      </div>

      <ul className="journal-bento" aria-label="Recent articles">
        {NOTES.map((n, i) => (
          <Reveal
            as="li"
            key={n.t}
            delay={i * 65}
            className={`journal-card journal-tint-${n.tint}${n.wide ? " journal-card--wide" : ""}`}
          >
            <span className="journal-card-media" aria-hidden="true">
              <img src={n.img} alt="" width={867} height={1300} loading="lazy" decoding="async" />
            </span>
            <span className="journal-card-tint" aria-hidden="true" />
            <span className="journal-card-glare" aria-hidden="true" />

            <a className="journal-card-link" href="#contact">
              <span className="journal-card-meta">
                <span className="journal-card-tag">{n.kind}</span>
                <time dateTime={n.date}>{n.disp}</time>
              </span>

              <span className="journal-card-body">
                <h3 className="journal-card-title">{n.t}</h3>
                <span className="journal-card-cta">
                  <span>Read</span>
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
