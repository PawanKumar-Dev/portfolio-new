"use client";

import { useRef, useState } from "react";
import Reveal from "./Reveal";

type IconName = "ledger" | "quill" | "bolt" | "bag" | "leaf" | "compass";

type Project = {
  index: string;
  title: string;
  kind: string;
  img: string;
  alt: string;
  icon: IconName;
  tint: string;
};

const projects: Project[] = [
  {
    index: "01",
    title: "Lumen Finance",
    kind: "Product platform",
    img: "/work/lumen.jpg",
    alt: "Rippled blue glass facade catching soft daylight",
    icon: "ledger",
    tint: "#5682f6",
  },
  {
    index: "02",
    title: "Field Notes",
    kind: "Editorial tooling",
    img: "/work/field.jpg",
    alt: "Aerial view of pale sand dunes with a winding ridge",
    icon: "quill",
    tint: "#d65bcf",
  },
  {
    index: "03",
    title: "Relay / OSS",
    kind: "Developer tooling",
    img: "/work/relay.jpg",
    alt: "Jagged mountain peaks rising through low cloud",
    icon: "bolt",
    tint: "#65d5f5",
  },
  {
    index: "04",
    title: "Atlas Commerce",
    kind: "Commerce platform",
    img: "/work/atlas.jpg",
    alt: "Minimal still life of pale sculptural objects on a plinth",
    icon: "bag",
    tint: "#f0533f",
  },
  {
    index: "05",
    title: "Bloom Health",
    kind: "Care product",
    img: "/work/bloom.jpg",
    alt: "Soft leaf shadows falling across a warm neutral wall",
    icon: "leaf",
    tint: "#7ccf3c",
  },
  {
    index: "06",
    title: "Northwind",
    kind: "Brand site",
    img: "/work/north.jpg",
    alt: "Abstract concrete architecture under an overcast sky",
    icon: "compass",
    tint: "#aab7ff",
  },
];

const ICON_PATHS: Record<IconName, string[]> = {
  ledger: [
    "M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6",
    "M12 2.5v3",
    "M12 18.5v3",
    "M2.5 12h3",
    "M18.5 12h3",
  ],
  quill: [
    "M4.5 19.5 5.6 15.9 15.4 6.1a2.3 2.3 0 0 0-3.2-3.2L2.4 12.7l1.1 4.8a1 1 0 0 0 1 1z",
    "M13.4 7.6l3 3",
  ],
  bolt: ["M13 2.5 5.3 13.2h5l-1 8.3 7.4-10.7h-5z"],
  bag: [
    "M5.8 8h12.4l.9 12.5H4.9z",
    "M8.8 10.2V6.8a3.2 3.2 0 0 1 6.4 0v3.4",
  ],
  leaf: [
    "M5.5 19.5C5.5 12 12 5.5 20 5.5c0 8-6.5 14.5-14.5 14.5z",
    "M5.5 19.5c2.5-5.5 6-9 10.5-11",
  ],
  compass: [
    "M12 3.2a8.8 8.8 0 1 0 0 17.6 8.8 8.8 0 0 0 0-17.6z",
    "M15.6 8.4l-1.9 5-5 1.9 1.9-5z",
  ],
};

function SlabIcon({ name, tint }: { name: IconName; tint: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={tint}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICON_PATHS[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

export default function Work() {
  const deckRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(0);
  const touchOpen = useRef(false);

  /* desktop: hovering a slab opens it (the reference opens on click with the
     same ~0.6s ease-out, preserved through .work-slab transitions) */
  const onSlabEnter = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType === "touch") return;
    setOpen(Number(e.currentTarget.dataset.i));
  };

  /* touch: first tap opens the slab, second tap follows the link */
  const onSlabClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (touchOpen.current) {
      touchOpen.current = false;
      return;
    }
    if (!window.matchMedia("(hover: none)").matches) return;
    e.preventDefault();
    touchOpen.current = true;
    setOpen(Number(e.currentTarget.dataset.i));
  };

  /* keyboard: focusing a slab opens it; tabbing off the deck resets it */
  const onDeckFocus = (e: React.FocusEvent<HTMLDivElement>) => {
    const link = (e.target as HTMLElement).closest<HTMLAnchorElement>(
      ".work-slab-link"
    );
    if (link?.dataset.i) {
      touchOpen.current = false;
      setOpen(Number(link.dataset.i));
    }
  };
  const onDeckBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (deckRef.current?.contains(e.relatedTarget as Node | null)) return;
    touchOpen.current = false;
  };

  return (
    <section className="work section-wrap" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <p className="section-number">01 / 04</p>
        <h2 id="work-title">Selected work</h2>
        <p className="section-lede">
          A considered mix of product strategy, interface craft, and resilient
          engineering.
          <span className="work-hint">Hover a project to open it</span>
        </p>
      </div>

      <div
        className="work-deck"
        ref={deckRef}
        onFocus={onDeckFocus}
        onBlur={onDeckBlur}
      >
        <ul className="work-row" aria-label="Selected projects">
          {projects.map((p, i) => (
            <Reveal
              as="li"
              className={`work-slab${i === open ? " is-active" : ""}`}
              delay={i * 70}
              key={p.index}
            >
              <a
                className="work-slab-link"
                href="#contact"
                data-i={i}
                aria-label={`${p.title} — ${p.kind}`}
                onPointerEnter={onSlabEnter}
                onClick={onSlabClick}
              >
                <span className="work-slab-media">
                  <img
                    src={p.img}
                    alt={p.alt}
                    width={867}
                    height={1300}
                    loading={i < 4 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </span>
                <span className="work-slab-scrim" aria-hidden="true" />
                <span className="work-slab-foot">
                  <span className="work-slab-badge">
                    <SlabIcon name={p.icon} tint={p.tint} />
                  </span>
                  <span className="work-slab-copy">
                    <span className="work-slab-title">{p.title}</span>
                    <span className="work-slab-sub">{p.kind}</span>
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
