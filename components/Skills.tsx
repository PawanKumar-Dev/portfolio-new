import Reveal from "./Reveal";

type CardColor = "green" | "coral" | "cyan" | "teal" | "yellow" | "navy" | "pink" | "lime";

type SkillCard = {
  num: string;
  name: string;
  desc: string;
  color: CardColor;
  badge: "figma" | "unblast" | "google-ai" | "chatgpt" | "behance" | "pexels" | "notion" | "linkedin";
  rot: number; // degrees
  dy?: number; // vertical stagger offset
};

const SKILLS_ROW_1: SkillCard[] = [
  {
    num: "01",
    name: "Figma",
    desc: "Design projects and assets for a standout UX/UI portfolio.",
    color: "green",
    badge: "figma",
    rot: -5.5,
    dy: 6,
  },
  {
    num: "02",
    name: "Unblast",
    desc: "Supports with Free PSD Mockups, top Graphics, and Fonts to boost creativity.",
    color: "coral",
    badge: "unblast",
    rot: -0.8,
    dy: -4,
  },
  {
    num: "03",
    name: "Google AI Studio",
    desc: "Boosts research and streamlines UX design with AI tools.",
    color: "cyan",
    badge: "google-ai",
    rot: 6.2,
    dy: 10,
  },
];

const SKILLS_ROW_2: SkillCard[] = [
  {
    num: "04",
    name: "Gemini & ChatGPT",
    desc: "Assists designers in research, creativity, and accelerating workflows.",
    color: "teal",
    badge: "chatgpt",
    rot: -3.8,
    dy: -2,
  },
  {
    num: "05",
    name: "Behance",
    desc: "Showcase portfolio and let the audience explore your creative brilliance.",
    color: "yellow",
    badge: "behance",
    rot: 1.5,
    dy: -6,
  },
  {
    num: "06",
    name: "Pexels",
    desc: "Offers a collection of free, royalty-free, and copyright free stock images.",
    color: "navy",
    badge: "pexels",
    rot: 4.8,
    dy: 8,
  },
];

const SKILLS_ROW_3: SkillCard[] = [
  {
    num: "07",
    name: "Notion",
    desc: "Helps designers organize notes, tasks, and assets for smooth collaboration.",
    color: "pink",
    badge: "notion",
    rot: -2.8,
    dy: 0,
  },
  {
    num: "08",
    name: "Linkedin",
    desc: "Showcase your portfolio to highlight your expertise and creativity.",
    color: "lime",
    badge: "linkedin",
    rot: 2.2,
    dy: 2,
  },
];

function ToolBadge({ type }: { type: SkillCard["badge"] }) {
  if (type === "figma") {
    return (
      <svg viewBox="0 0 38 57" width="26" height="38" aria-hidden="true">
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
      </svg>
    );
  }
  if (type === "unblast") {
    return (
      <div className="sheet-badge-square sheet-badge-black">
        <span className="sheet-badge-un">un</span>
      </div>
    );
  }
  if (type === "google-ai") {
    return (
      <svg viewBox="0 0 44 44" width="36" height="36" aria-hidden="true" fill="none">
        {/* Playful butterfly / Google AI Studio sparkle logo */}
        <path
          d="M22 22C22 13 14 6 7 11C0 16 7 24 22 22Z"
          fill="#3B82F6"
        />
        <path
          d="M22 22C22 13 30 6 37 11C44 16 37 24 22 22Z"
          fill="#1D4ED8"
        />
        <path
          d="M22 22C22 31 15 38 8 33C1 28 8 20 22 22Z"
          fill="#60A5FA"
        />
        <path
          d="M22 22C22 31 29 38 36 33C43 28 36 20 22 22Z"
          fill="#2563EB"
        />
      </svg>
    );
  }
  if (type === "chatgpt") {
    return (
      <div className="sheet-badge-square sheet-badge-openai">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2a4 4 0 0 1 4 4v1.5a4 4 0 0 1 2.5 1.5 4 4 0 0 1-.5 5.5l-1 .7v1.8a4 4 0 0 1-2 3.5 4 4 0 0 1-5 0l-1.5-1a4 4 0 0 1-3.5-.5 4 4 0 0 1-.5-5.5l1-.7V11a4 4 0 0 1 2-3.5A4 4 0 0 1 12 2z" />
          <path d="M12 8a4 4 0 0 0-4 4m4-4a4 4 0 0 1 4 4m-4-4v8m-4-4a4 4 0 0 0 4 4m-4-4l7 4m-7-4l7-4" />
        </svg>
      </div>
    );
  }
  if (type === "behance") {
    return (
      <div className="sheet-badge-square sheet-badge-blue">
        <span className="sheet-badge-text">Bē</span>
      </div>
    );
  }
  if (type === "pexels") {
    return (
      <div className="sheet-badge-pexels">
        <span className="pexels-text">pexels</span>
      </div>
    );
  }
  if (type === "notion") {
    return (
      <div className="sheet-badge-notion-cube">
        <svg viewBox="0 0 36 36" width="34" height="34" fill="none" aria-hidden="true">
          <path d="M6 10L18 4L30 10V26L18 32L6 26V10Z" fill="#FFFFFF" stroke="#111111" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M18 4V32M6 10L18 16L30 10" stroke="#111111" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M13 13.5V23L16 23.5V16.5L20 24L23 23.5V14L20 13.5V20.5L16 13L13 13.5Z" fill="#111111" />
        </svg>
      </div>
    );
  }
  return (
    <div className="sheet-badge-square sheet-badge-linkedin">
      <span className="sheet-badge-text">in</span>
    </div>
  );
}

function PushPin({ color }: { color: CardColor }) {
  return (
    <div className={`cheatsheet-pushpin pin-color-${color}`} aria-hidden="true">
      {/* Soft contact shadow on paper below pushpin */}
      <div className="pushpin-paper-shadow" />

      {/* Pushpin assembly: translucent plastic thumbtack with flared cap and neck */}
      <div className="pushpin-body">
        {/* Top round cap */}
        <div className="pushpin-cap">
          <div className="pushpin-cap-shine" />
        </div>
        {/* Tapering neck / waist */}
        <div className="pushpin-waist" />
        {/* Flared bottom collar */}
        <div className="pushpin-collar">
          <div className="pushpin-collar-rim" />
        </div>
        {/* Tiny metal needle entering paper */}
        <div className="pushpin-point" />
      </div>
    </div>
  );
}

function MemoCard({ card, delay }: { card: SkillCard; delay: number }) {
  return (
    <Reveal
      as="div"
      delay={delay}
      className={`cheatsheet-card card-color-${card.color}`}
      style={
        {
          "--card-rot": `${card.rot}deg`,
          "--card-dy": `${card.dy || 0}px`,
        } as React.CSSProperties
      }
    >
      <PushPin color={card.color} />

      <div className="cheatsheet-card-inner">
        <div className="card-top-row">
          <span className="card-num">{card.num}</span>
          <div className="card-badge-wrap">
            <ToolBadge type={card.badge} />
          </div>
        </div>

        <h3 className="card-title">{card.name}</h3>
        <p className="card-desc">{card.desc}</p>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section className="skills cheatsheet-section" id="skills" aria-labelledby="skills-cheatsheet-title">
      <div className="cheatsheet-container">
        {/* Section Top Header matching image */}
        <div className="cheatsheet-brand-row">
          <div className="cheatsheet-brand-logo">
            <div className="brand-rings" aria-hidden="true">
              <span className="ring-dot dot-1" />
              <span className="ring-dot dot-2" />
              <span className="ring-dot dot-3" />
              <span className="ring-dot dot-4" />
            </div>
            <div className="brand-text">
              <span className="brand-title">DIGITAL</span>
              <span className="brand-subtitle">CONCEPTS</span>
            </div>
          </div>
        </div>

        <div className="cheatsheet-headline-wrap">
          <h2 id="skills-cheatsheet-title" className="cheatsheet-main-title">
            Ultimate UI/UX Portfolio<br />
            <span className="highlight-cheatsheet">Cheatsheet</span> for{" "}
            <span className="highlight-designers">Designers</span>
          </h2>
        </div>

        {/* Pinboard Area with connecting dashed loop & curved 3-3-2 memo rows */}
        <div className="cheatsheet-board">
          {/* Background curved dashed track connecting the pins */}
          <svg className="cheatsheet-dashed-svg" viewBox="0 0 1100 860" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M 50 360 C 20 180, 160 120, 260 145 C 420 175, 680 175, 840 145 C 960 120, 1080 200, 1060 380 C 1040 560, 940 700, 780 730 C 620 760, 480 760, 320 730 C 140 700, 60 520, 50 360 Z"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="2.5"
              strokeDasharray="9 9"
              strokeLinecap="round"
            />
          </svg>

          {/* Row 1: Cards 01, 02, 03 */}
          <div className="cheatsheet-row row-3-cards row-top">
            {SKILLS_ROW_1.map((c, i) => (
              <MemoCard key={c.num} card={c} delay={i * 70} />
            ))}
          </div>

          {/* Row 2: Cards 04, 05, 06 */}
          <div className="cheatsheet-row row-3-cards row-middle">
            {SKILLS_ROW_2.map((c, i) => (
              <MemoCard key={c.num} card={c} delay={200 + i * 70} />
            ))}
          </div>

          {/* Row 3: Cards 07, 08 (Centered 2 cards) */}
          <div className="cheatsheet-row row-2-cards row-bottom">
            {SKILLS_ROW_3.map((c, i) => (
              <MemoCard key={c.num} card={c} delay={400 + i * 70} />
            ))}
          </div>
        </div>

        {/* Footer info strip matching reference image */}
        <div className="cheatsheet-footer-strip">
          <a
            href="https://www.digitalconcepts.in"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-pill-link"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>www.digitalconcepts.in</span>
          </a>

          <a
            href="tel:+919830140672"
            className="footer-pill-link"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.78 14.07c-.24.68-1.39 1.3-1.92 1.38-.49.08-1.12.11-3.62-.92-2.98-1.23-4.9-4.27-5.05-4.47-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.29.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.69.52.26.61.88 2.15.96 2.31.08.16.13.35.03.55-.1.2-.15.33-.3.51-.15.18-.32.4-.46.54-.15.15-.31.31-.13.62.18.31.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.49 1.53.31.15.49.13.67-.08.18-.21.77-.9 1.02-1.25.26-.35.51-.29.86-.16.35.13 2.22 1.05 2.6 1.24.38.19.64.29.73.45.09.16.09.93-.15 1.61z" />
            </svg>
            <span>91 98301 40672</span>
          </a>
        </div>
      </div>
    </section>
  );
}
