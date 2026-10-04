"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Project = {
  index: string;
  title: string;
  kind: string;
  stat: string;
  statIcon: "views" | "inquiries" | "saves";
  blurb: string;
  img: string;
  alt: string;
};

const projects: Project[] = [
  { index: "01", title: "Lumen Finance", kind: "Product platform", stat: "+230% views", statIcon: "views", blurb: "Skyline views and social-first rebrand.", img: "/work/lumen.jpg", alt: "Blue glass facade in daylight" },
  { index: "02", title: "Field Notes", kind: "Editorial tooling", stat: "3x more inquiries", statIcon: "inquiries", blurb: "Warm visuals and clarity for listings.", img: "/work/field.jpg", alt: "Pale sand dunes from above" },
  { index: "03", title: "Relay / OSS", kind: "Developer tooling", stat: "120K views, 6K saves", statIcon: "saves", blurb: "Cinematic tour + Instagram rollout.", img: "/work/relay.jpg", alt: "Mountain peaks through cloud" },
  { index: "04", title: "Atlas Commerce", kind: "Commerce platform", stat: "+180% checkouts", statIcon: "views", blurb: "Storefront speed, editorial polish.", img: "/work/atlas.jpg", alt: "Pale sculptural still life" },
  { index: "05", title: "Bloom Health", kind: "Care product", stat: "4.9 patient rating", statIcon: "inquiries", blurb: "Calm flows for bookings and care.", img: "/work/bloom.jpg", alt: "Leaf shadows on warm wall" },
  { index: "06", title: "Northwind", kind: "Brand site", stat: "90K views, 4K saves", statIcon: "saves", blurb: "Brand story told in one scroll.", img: "/work/north.jpg", alt: "Concrete architecture" },
];

function StatIcon({ name }: { name: Project["statIcon"] }) {
  if (name === "views") return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" /><circle cx="12" cy="12" r="3" /></svg>
  );
  if (name === "inquiries") return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3.5 14.5 9l6 .6-4.5 4 1.3 5.9L12 16.2 6.7 19.5 8 13.6 3.5 9.6l6-.6z" /></svg>
  );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3.5h12V21l-6-4.2L6 21z" /></svg>
  );
}

export default function Work() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const stepRef = useRef(0);
  const rafRef = useRef(0);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(4);
  const [isNarrow, setIsNarrow] = useState(false);

  const measure = useCallback(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    // Desktop = static grid, no nested scroller: skip measuring entirely so
    // vertical page scroll has zero carousel cost.
    const narrow = window.matchMedia("(max-width: 900px)").matches;
    setIsNarrow(narrow);
    if (!narrow) return;
    const card = vp.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    const gap = parseFloat(getComputedStyle(vp).columnGap || "20") || 20;
    const step = card.offsetWidth + gap;
    if (!step) return;
    stepRef.current = step;
    const pages = Math.max(1, Math.round((vp.scrollWidth - vp.clientWidth) / step) + 1);
    setPageCount(pages);
    setPage((p) => Math.min(Math.max(0, Math.round(vp.scrollLeft / step)), pages - 1));
  }, []);

  const goTo = useCallback((n: number) => {
    const vp = viewportRef.current;
    const step = stepRef.current;
    if (!vp || !step) return;
    const next = Math.min(Math.max(0, n), pageCount - 1);
    vp.scrollTo({ left: next * step, behavior: "smooth" });
    setPage(next);
  }, [pageCount]);

  // rAF-throttled: setState at most once per frame, no layout reads inside.
  const onScroll = () => {
    // Desktop: no nested scroller exists, ignore entirely.
    if (!isNarrow) return;
    const vp = viewportRef.current;
    const step = stepRef.current;
    if (!vp || !step || rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      const v = viewportRef.current;
      if (!v) return;
      const p = Math.round(v.scrollLeft / step);
      setPage((prev) => {
        const next = Math.min(Math.max(0, p), pageCount - 1);
        return next === prev ? prev : next;
      });
    });
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    const t = window.setTimeout(measure, 400);
    // Re-measure once images settle (card width depends on loaded layout).
    window.addEventListener("load", measure);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
      window.clearTimeout(t);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [measure]);

  return (
    <section className="work section-wrap" id="work" aria-labelledby="work-title">
      <div className="work-gallery-head">
        <p className="work-eyebrow">Featured</p>
        <h2 id="work-title" className="work-gallery-title">
          Top-performing
          <span className="work-gallery-title-accent">work gallery</span>
        </h2>
      </div>

      <div className="work-gallery">
        <div className="work-viewport" ref={viewportRef} onScroll={isNarrow ? onScroll : undefined} role={isNarrow ? "region" : undefined} aria-label={isNarrow ? "Selected projects carousel" : undefined} tabIndex={isNarrow ? 0 : undefined}>
          <ul className="work-track" aria-label="Selected projects">
            {projects.slice(0, isNarrow ? projects.length : 3).map((p, i) => (
              <li className="work-card" key={p.index}>
                <a href="#contact" className="work-card-link" data-card aria-label={`${p.title} — ${p.kind}`}>
                  <span className="work-card-media" aria-hidden="true">
                    <img src={p.img} alt="" width={867} height={1300} loading={i < 3 ? "eager" : "lazy"} decoding="async" />
                  </span>
                  <span className="work-card-scrim" aria-hidden="true" />
                  <span className="work-card-overlay">
                    <span className="work-card-stat"><StatIcon name={p.statIcon} />{p.stat}</span>
                    <span className="work-card-title">{p.title}</span>
                    <span className="work-card-blurb">{p.blurb}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {isNarrow && (
        <>
        <button type="button" className="work-arrow work-arrow-prev" onClick={() => goTo(page - 1)} disabled={page === 0} aria-label="Previous projects">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.5 5.5 8 12l6.5 6.5" /></svg>
        </button>
        <button type="button" className="work-arrow work-arrow-next" onClick={() => goTo(page + 1)} disabled={page >= pageCount - 1} aria-label="Next projects">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9.5 5.5 16 12l-6.5 6.5" /></svg>
        </button>

        <div className="work-dots" role="tablist" aria-label="Project pages">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button key={i} type="button" role="tab" aria-selected={i === page} aria-label={`Go to page ${i + 1}`} className={`work-dot${i === page ? " is-active" : ""}`} onClick={() => goTo(i)} />
          ))}
        </div>
        </>
        )}
      </div>
    </section>
  );
}
