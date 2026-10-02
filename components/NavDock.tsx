"use client";
import { useEffect, useRef } from "react";
const P = [
  ["M3 10.5 12 3l9 7.5", "M5 9.5V21h14V9.5", "M9.5 21v-6h5v6"],
  ["M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7", "M2.5 12.5h19"],
  ["M8 6 3 12l5 6", "m16 6 5 6-5 6", "m13 4-2 16"],
  ["M12 20h9", "M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"],
  ["M22 2 11 13", "M22 2 15 22l-4-9-9-4z"],
];
const L = [
  ["#top", "Home"],
  ["#work", "Work"],
  ["#skills", "Skills"],
  ["#journal", "Notes"],
  ["#contact", "Contact"],
];
export default function NavDock() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const dock = ref.current;
    if (!dock) return;
    const items = Array.from(dock.querySelectorAll("a.nav-item")) as HTMLAnchorElement[];
    let prev: HTMLAnchorElement | null = null;
    let touch = false;
    const sync = () => {
      const t = dock.querySelector(".nav-item.is-highlighted") as HTMLElement | null;
      if (!t) return;
      const dr = dock.getBoundingClientRect();
      const ic = (t.querySelector(".nav-icon") as HTMLElement) || t;
      const r = ic.getBoundingClientRect();
      dock.style.setProperty("--indicator-x", r.left - dr.left + r.width / 2 + "px");
    };
    const hi = () => {
      const s = items.find((i) => i.classList.contains("active"));
      const h = prev || s || items[0];
      items.forEach((i) => i.classList.toggle("is-highlighted", i === h));
      sync();
    };
    const clear = () => { prev = null; hi(); };
    const pd = (e: PointerEvent) => { touch = e.pointerType === "touch"; if (touch) clear(); };
    const kd = () => { touch = false; };
    document.addEventListener("pointerdown", pd);
    document.addEventListener("keydown", kd);
    const offs: Array<() => void> = [];
    items.forEach((it) => {
      const pe = (e: PointerEvent) => { if (e.pointerType === "touch") return; prev = it; hi(); };
      const fi = () => { if (touch) return; prev = it; hi(); };
      it.addEventListener("pointerenter", pe as EventListener);
      it.addEventListener("focusin", fi);
      offs.push(() => { it.removeEventListener("pointerenter", pe as EventListener); it.removeEventListener("focusin", fi); });
    });
    dock.addEventListener("pointerleave", clear);
    const fo = (e: FocusEvent) => { if (!dock.contains(e.relatedTarget as Node)) clear(); };
    dock.addEventListener("focusout", fo);
    let ro: ResizeObserver | null = null;
    if ("ResizeObserver" in window) { ro = new ResizeObserver(sync); ro.observe(dock); items.forEach((i) => ro!.observe(i)); }
    window.addEventListener("resize", sync);
    hi();
    const setA = (h: string) => { items.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === h)); hi(); };
    let so: IntersectionObserver | null = null;
    const secs = ["top", "work", "skills", "journal", "contact"].map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    if (secs.length && "IntersectionObserver" in window) {
      so = new IntersectionObserver((es) => { const v = es.filter((e) => e.isIntersecting)[0]; if (v && v.target.id) setA("#" + v.target.id); }, { rootMargin: "-20% 0px -79% 0px", threshold: 0 });
      secs.forEach((s) => so!.observe(s));
    }
    return () => { document.removeEventListener("pointerdown", pd); document.removeEventListener("keydown", kd); offs.forEach((f) => f()); dock.removeEventListener("pointerleave", clear); dock.removeEventListener("focusout", fo); window.removeEventListener("resize", sync); ro?.disconnect(); so?.disconnect(); };
  }, []);
  return (
    <nav className="nav-dock" aria-label="Primary navigation" ref={ref}>
      {L.map((it, i) => (
        <a key={it[0]} className={"nav-item" + (i === 0 ? " active" : "")} href={it[0]}>
          <span className="nav-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{i === 1 && <rect x="2.5" y="7" width="19" height="13" rx="2.5" />}{P[i].map((d, j) => <path key={j} d={d} />)}</svg></span>
          <span className="nav-label">{it[1]}</span>
        </a>
      ))}
    </nav>
  );
}
