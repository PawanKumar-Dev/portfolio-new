import Reveal from "./Reveal";

type SkillCard = {
  num: string;
  name: string;
  desc: string;
  pin: "green" | "pink" | "blue" | "lime";
  bgTint: "green" | "pink" | "yellow" | "cyan" | "orange" | "blue" | "purple";
  badge: "figma" | "next" | "react" | "ai" | "node" | "tailwind" | "notion" | "linkedin";
  angle?: number;
};

const SKILLS: SkillCard[] = [
  {
    num: "01",
    name: "Figma & UI/UX",
    desc: "Design scalable design systems, interactive prototypes, and modern polished user interfaces.",
    pin: "green",
    bgTint: "green",
    badge: "figma",
    angle: -1.8,
  },
  {
    num: "02",
    name: "Next.js & React 19",
    desc: "Build ultra-fast, server-rendered web applications with Turbopack and modern app architecture.",
    pin: "pink",
    bgTint: "pink",
    badge: "next",
    angle: 1.2,
  },
  {
    num: "03",
    name: "TypeScript & Core",
    desc: "Type-safe robust frontends and backend APIs with clean, reliable architecture.",
    pin: "green",
    bgTint: "cyan",
    badge: "react",
    angle: 2.1,
  },
  {
    num: "04",
    name: "AI & Modern Tools",
    desc: "Integrate LLMs, AI workflows, and automate engineering tasks with precision.",
    pin: "blue",
    bgTint: "cyan",
    badge: "ai",
    angle: -1.5,
  },
  {
    num: "05",
    name: "Node & Databases",
    desc: "Architect performant APIs, PostgreSQL queries, and resilient cloud backend services.",
    pin: "lime",
    bgTint: "yellow",
    badge: "node",
    angle: 0.8,
  },
  {
    num: "06",
    name: "Tailwind & Motion",
    desc: "Craft bespoke responsive styling, micro-animations, and 60fps buttery-smooth interactions.",
    pin: "blue",
    bgTint: "orange",
    badge: "tailwind",
    angle: -2.0,
  },
  {
    num: "07",
    name: "System Architecture",
    desc: "End-to-end documentation, roadmaps, task pipelines, and high-velocity shipping workflows.",
    pin: "pink",
    bgTint: "purple",
    badge: "notion",
    angle: 1.6,
  },
  {
    num: "08",
    name: "Direction & Delivery",
    desc: "Collaborate directly with founders and teams to take ideas from zero to production launch.",
    pin: "green",
    bgTint: "green",
    badge: "linkedin",
    angle: -0.9,
  },
];

function SkillBadge({ type }: { type: SkillCard["badge"] }) {
  if (type === "figma") {
    return (
      <svg viewBox="0 0 38 57" width="24" height="34" aria-hidden="true">
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
      </svg>
    );
  }
  if (type === "next") {
    return (
      <div className="skill-logo-box skill-logo-dark">
        <span className="skill-logo-text">N</span>
      </div>
    );
  }
  if (type === "react") {
    return (
      <svg viewBox="-11.5 -10.23174 23 20.46348" width="32" height="30" fill="none" stroke="#00D8FE" strokeWidth="1" aria-hidden="true">
        <circle cx="0" cy="0" r="2.05" fill="#00D8FE" />
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </svg>
    );
  }
  if (type === "ai") {
    return (
      <div className="skill-logo-box skill-logo-ai">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      </div>
    );
  }
  if (type === "node") {
    return (
      <div className="skill-logo-box skill-logo-blue">
        <span className="skill-logo-text">JS</span>
      </div>
    );
  }
  if (type === "tailwind") {
    return (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#38BDF8" aria-hidden="true">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    );
  }
  if (type === "notion") {
    return (
      <div className="skill-logo-box skill-logo-bordered">
        <span className="skill-logo-text">N</span>
      </div>
    );
  }
  return (
    <div className="skill-logo-box skill-logo-in">
      <span className="skill-logo-text">in</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="skills section-wrap" id="skills" aria-labelledby="skills-title">
      <div className="skills-board-container">
        {/* Board Header styled after Cheatsheet title */}
        <div className="skills-cheatsheet-head">
          <p className="section-number">02 / 04</p>
          <h2 id="skills-title" className="skills-cheatsheet-title">
            Engineering &amp; Design <span className="skills-highlight-green">Toolbox</span> for <span className="skills-highlight-purple">Production</span>
          </h2>
          <p className="skills-cheatsheet-lede">
            Core stack and execution toolkit — fine-tuned for speed, visual clarity, and durable products.
          </p>
        </div>

        {/* Pinned Memo Cards Grid */}
        <div className="skills-pinned-grid">
          {SKILLS.map((s, i) => (
            <Reveal
              as="div"
              key={s.num}
              delay={i * 60}
              className={`skill-memo-card skill-tint-${s.bgTint}`}
              style={{ "--card-rot": `${s.angle || 0}deg` } as React.CSSProperties}
            >
              {/* Pushpin at top center */}
              <div className={`skill-pushpin skill-pin-${s.pin}`} aria-hidden="true">
                <div className="pushpin-head" />
                <div className="pushpin-shadow" />
              </div>

              {/* Top row: Number and Tool Logo badge */}
              <div className="skill-card-header">
                <span className={`skill-num-pill skill-num-${s.bgTint}`}>{s.num}</span>
                <div className="skill-badge-wrapper">
                  <SkillBadge type={s.badge} />
                </div>
              </div>

              {/* Title & Description */}
              <div className="skill-card-body">
                <h3 className="skill-title">{s.name}</h3>
                <p className="skill-desc">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

