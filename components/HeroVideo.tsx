"use client";
import { useEffect, useRef } from "react";
export default function HeroVideo() {
  const lightRef = useRef<HTMLVideoElement | null>(null);
  const darkRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const light = lightRef.current;
    const dark = darkRef.current;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const play = (v: HTMLVideoElement | null) => {
      if (!v || reduce) return;
      try { v.muted = true; } catch { /* noop */ }
      let r: Promise<void> | undefined;
      try { r = v.play(); } catch { return; }
      if (r && r.catch) {
        r.catch(() => {
          const retry = () => {
            try { v.muted = true; } catch { /* noop */ }
            try { const a = v.play(); if (a && a.catch) a.catch(() => {}); } catch { /* noop */ }
          };
          document.addEventListener("pointerdown", retry, { once: true });
          document.addEventListener("keydown", retry, { once: true });
        });
      }
    };
    const sync = (darkMode: boolean) => {
      if (!light || !dark) return;
      light.classList.toggle("is-active", !darkMode);
      dark.classList.toggle("is-active", darkMode);
      light.setAttribute("aria-hidden", darkMode ? "true" : "false");
      dark.setAttribute("aria-hidden", darkMode ? "false" : "true");
      if (darkMode) { light.pause(); play(dark); }
      else { dark.pause(); play(light); }
    };
    const cur = document.documentElement.getAttribute("data-theme") === "dark";
    sync(cur);
    const onTheme = (e: Event) => {
      const d = (e as CustomEvent).detail as { dark: boolean } | undefined;
      sync(d ? !!d.dark : document.documentElement.getAttribute("data-theme") === "dark");
    };
    window.addEventListener("pawan-theme-change", onTheme);
    const obs = new MutationObserver(() => sync(document.documentElement.getAttribute("data-theme") === "dark"));
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => { window.removeEventListener("pawan-theme-change", onTheme); obs.disconnect(); };
  }, []);
  return (
    <>
      <video ref={lightRef} id="hero-video" className="hero-video hero-video-light is-active" autoPlay muted loop playsInline poster="/assets/hero-portfolio.png" aria-label="Pastel portfolio workspace animation from Pawan's portfolio">
        <source src="/assets/hero-portfolio.mp4" type="video/mp4" />
        <img src="/assets/hero-portfolio.png" alt="Pastel portfolio workspace with a retro computer, pinned notes, and illustrated characters" />
      </video>
      <video ref={darkRef} id="hero-video-dark" className="hero-video hero-video-dark" muted loop playsInline autoPlay preload="metadata" poster="/assets/hero-portfolio-dark.webp" aria-hidden="true" tabIndex={-1}>
        <source src="/assets/hero-portfolio-dark.mp4" type="video/mp4" />
      </video>
    </>
  );
}
