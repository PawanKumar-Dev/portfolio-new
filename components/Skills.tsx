"use client";

import { useRef, useState, useCallback, type MouseEvent } from "react";
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

const PIN_PALETTES: Record<
  CardColor,
  {
    glow: string;
    shadow: string;
    baseDark: string;
    baseMid: string;
    baseLight: string;
    stemDark: string;
    stemLight: string;
    headDark: string;
    headMid: string;
    headLight: string;
    highlight: string;
  }
> = {
  green: {
    glow: "rgba(34, 197, 94, 0.55)",
    shadow: "rgba(5, 46, 22, 0.45)",
    baseDark: "#052e16",
    baseMid: "#15803d",
    baseLight: "#4ade80",
    stemDark: "#14532d",
    stemLight: "#22c55e",
    headDark: "#166534",
    headMid: "#22c55e",
    headLight: "#86efac",
    highlight: "#ffffff",
  },
  coral: {
    glow: "rgba(225, 29, 72, 0.55)",
    shadow: "rgba(76, 5, 25, 0.45)",
    baseDark: "#4c0519",
    baseMid: "#be123c",
    baseLight: "#fb7185",
    stemDark: "#881337",
    stemLight: "#f43f5e",
    headDark: "#9f1239",
    headMid: "#e11d48",
    headLight: "#fda4af",
    highlight: "#ffffff",
  },
  cyan: {
    glow: "rgba(13, 148, 136, 0.55)",
    shadow: "rgba(4, 47, 46, 0.45)",
    baseDark: "#042f2c",
    baseMid: "#0f766e",
    baseLight: "#2dd4bf",
    stemDark: "#115e59",
    stemLight: "#14b8a6",
    headDark: "#134e4a",
    headMid: "#0d9488",
    headLight: "#5eead4",
    highlight: "#ffffff",
  },
  teal: {
    glow: "rgba(2, 132, 199, 0.55)",
    shadow: "rgba(8, 47, 73, 0.45)",
    baseDark: "#082f49",
    baseMid: "#0369a1",
    baseLight: "#38bdf8",
    stemDark: "#075985",
    stemLight: "#0284c7",
    headDark: "#0c4a6e",
    headMid: "#0284c7",
    headLight: "#7dd3fc",
    highlight: "#ffffff",
  },
  yellow: {
    glow: "rgba(202, 138, 4, 0.55)",
    shadow: "rgba(66, 32, 6, 0.45)",
    baseDark: "#422006",
    baseMid: "#a16207",
    baseLight: "#fde047",
    stemDark: "#713f12",
    stemLight: "#ca8a04",
    headDark: "#854d0e",
    headMid: "#eab308",
    headLight: "#fef08a",
    highlight: "#ffffff",
  },
  navy: {
    glow: "rgba(37, 99, 235, 0.55)",
    shadow: "rgba(15, 23, 42, 0.45)",
    baseDark: "#0f172a",
    baseMid: "#1d4ed8",
    baseLight: "#60a5fa",
    stemDark: "#1e3a8a",
    stemLight: "#2563eb",
    headDark: "#1e40af",
    headMid: "#3b82f6",
    headLight: "#93c5fd",
    highlight: "#ffffff",
  },
  pink: {
    glow: "rgba(192, 38, 211, 0.55)",
    shadow: "rgba(59, 7, 100, 0.45)",
    baseDark: "#3b0764",
    baseMid: "#a21caf",
    baseLight: "#f472b6",
    stemDark: "#701a75",
    stemLight: "#c026d3",
    headDark: "#86198f",
    headMid: "#d946ef",
    headLight: "#f0abfc",
    highlight: "#ffffff",
  },
  lime: {
    glow: "rgba(101, 163, 13, 0.55)",
    shadow: "rgba(26, 46, 5, 0.45)",
    baseDark: "#1a2e05",
    baseMid: "#4d7c0f",
    baseLight: "#a3e635",
    stemDark: "#365314",
    stemLight: "#65a30d",
    headDark: "#3f6212",
    headMid: "#84cc16",
    headLight: "#bef264",
    highlight: "#ffffff",
  },
};

function PushPin({ color }: { color: CardColor }) {
  const p = PIN_PALETTES[color] || PIN_PALETTES.green;
  const id = `pin-${color}`;

  return (
    <div className="cheatsheet-pushpin" aria-hidden="true">
      <svg
        viewBox="0 0 68 68"
        width="56"
        height="56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pushpin-svg"
      >
        <defs>
          {/* Paper cast shadow blur */}
          <filter id={`${id}-glowBlur`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5.5" />
          </filter>
          <filter id={`${id}-shadowBlur`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" />
          </filter>

          {/* Base flange radial gradient (steep high-angle bowl) */}
          <radialGradient id={`${id}-baseFlange`} cx="42%" cy="40%" r="58%">
            <stop offset="0%" stopColor={p.baseLight} />
            <stop offset="60%" stopColor={p.baseMid} />
            <stop offset="92%" stopColor={p.baseDark} />
            <stop offset="100%" stopColor={p.baseDark} />
          </radialGradient>

          {/* Waist cylindrical gradient */}
          <linearGradient id={`${id}-waistGrad`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={p.stemDark} />
            <stop offset="35%" stopColor={p.stemLight} />
            <stop offset="70%" stopColor={p.headLight} />
            <stop offset="100%" stopColor={p.stemDark} />
          </linearGradient>

          {/* Top cap dome (high-angle spherical view from above) */}
          <radialGradient id={`${id}-topCap`} cx="38%" cy="32%" r="62%">
            <stop offset="0%" stopColor={p.headLight} />
            <stop offset="38%" stopColor={p.headMid} />
            <stop offset="75%" stopColor={p.headDark} />
            <stop offset="100%" stopColor={p.baseDark} />
          </radialGradient>
        </defs>

        {/* 1. Translucent colored ambient glow pool on paper */}
        <circle cx="34" cy="34" r="26" fill={p.glow} filter={`url(${`#${id}-glowBlur`})`} />

        {/* 2. Direct contact drop shadow beneath pin */}
        <ellipse
          cx="34"
          cy="40"
          rx="18"
          ry="10"
          fill={p.shadow}
          filter={`url(${`#${id}-shadowBlur`})`}
        />

        {/* 3. Wide Circular Base Flange (The flared skirt pressed flat into paper) */}
        <circle cx="34" cy="34" r="20" fill={`url(${`#${id}-baseFlange`})`} />
        {/* Subtle glossy inner rim on base flange */}
        <circle
          cx="34"
          cy="34"
          r="19"
          stroke="rgba(255, 255, 255, 0.45)"
          strokeWidth="1.2"
          fill="none"
        />

        {/* 4. Conical/Hourglass Waist (Stem connecting base to cap) */}
        <path
          d="M 27 34 Q 30 26, 26 21 L 42 21 Q 38 26, 41 34 Z"
          fill={`url(${`#${id}-waistGrad`})`}
        />

        {/* 5. Top Circular Cap (Viewed from the top angle) */}
        {/* Underside bevel edge */}
        <circle cx="34" cy="22" r="13" fill={p.headDark} opacity="0.8" />
        {/* Main top cap face */}
        <circle cx="34" cy="20" r="12.5" fill={`url(${`#${id}-topCap`})`} />
        {/* Top cap rim line */}
        <circle
          cx="34"
          cy="20"
          r="12"
          stroke="rgba(255, 255, 255, 0.35)"
          strokeWidth="0.8"
          fill="none"
        />

        {/* 6. Realistic Glossy Specular Highlights (Top Left crescent) */}
        <ellipse
          cx="30"
          cy="16"
          rx="4.5"
          ry="2.5"
          transform="rotate(-28 30 16)"
          fill={p.highlight}
        />
        {/* Secondary soft reflection dot */}
        <circle cx="28" cy="18" r="1.4" fill="rgba(255, 255, 255, 0.85)" />

        {/* Flange glossy reflection at lower left */}
        <path
          d="M 19 36 A 17 17 0 0 0 28 49"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

function MemoCard({ card, delay, index }: { card: SkillCard; delay: number; index: number }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, active: false });

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Deeper 3D tilt angles (-18deg to +18deg)
    const tiltX = -((y - centerY) / centerY) * 18;
    const tiltY = ((x - centerX) / centerX) * 18;

    setTilt({ x: tiltX, y: tiltY, glareX: 50, glareY: 50, active: true });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt((prev) => ({ ...prev, x: 0, y: 0, active: false }));
  }, []);

  // Stagger idle floating speeds and offsets
  const floatDur = 4.8 + (index % 3) * 0.8;
  const floatDelay = (index * 0.5) % 3.2;

  return (
    <Reveal
      as="div"
      delay={delay}
      className="cheatsheet-card-wrapper"
      style={
        {
          "--card-rot": `${card.rot}deg`,
          "--card-dy": `${card.dy || 0}px`,
          "--float-dur": `${floatDur}s`,
          "--float-delay": `${floatDelay}s`,
        } as React.CSSProperties
      }
    >
      <div className="cheatsheet-card-float">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`cheatsheet-card card-color-${card.color} ${tilt.active ? "is-tilted" : ""}`}
          style={
            {
              transform: tilt.active
                ? `perspective(900px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) translateZ(16px)`
                : undefined,
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
        </div>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section className="skills cheatsheet-section" id="skills" aria-labelledby="skills-cheatsheet-title">
      <div className="cheatsheet-container">
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
              <MemoCard key={c.num} card={c} delay={i * 70} index={i} />
            ))}
          </div>

          {/* Row 2: Cards 04, 05, 06 */}
          <div className="cheatsheet-row row-3-cards row-middle">
            {SKILLS_ROW_2.map((c, i) => (
              <MemoCard key={c.num} card={c} delay={200 + i * 70} index={3 + i} />
            ))}
          </div>

          {/* Row 3: Cards 07, 08 (Centered 2 cards) */}
          <div className="cheatsheet-row row-2-cards row-bottom">
            {SKILLS_ROW_3.map((c, i) => (
              <MemoCard key={c.num} card={c} delay={400 + i * 70} index={6 + i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
