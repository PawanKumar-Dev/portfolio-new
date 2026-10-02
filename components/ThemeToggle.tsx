"use client";

import { useEffect, useState } from "react";

const THEME_KEY = "pawan-portfolio-theme";

export function getTheme(): "dark" | "light" {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

export function applyTheme(theme: "dark" | "light", persist: boolean) {
  const dark = theme === "dark";
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  if (persist) {
    try {
      window.localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }
  window.dispatchEvent(
    new CustomEvent("pawan-theme-change", { detail: { dark } })
  );
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [toggling, setToggling] = useState(false);

  useEffect(() => {
    setDark(getTheme() === "dark");
    const onTheme = (e: Event) => {
      const detail = (e as CustomEvent).detail as { dark: boolean } | undefined;
      if (detail && typeof detail.dark === "boolean") setDark(detail.dark);
      else setDark(getTheme() === "dark");
    };
    window.addEventListener("pawan-theme-change", onTheme);
    return () => window.removeEventListener("pawan-theme-change", onTheme);
  }, []);

  useEffect(() => {
    if (!toggling) return;
    const timer = window.setTimeout(() => setToggling(false), 700);
    return () => window.clearTimeout(timer);
  }, [toggling]);

  function handleClick() {
    const next = getTheme() === "dark" ? "light" : "dark";
    applyTheme(next, true);
    setDark(next === "dark");
    // Replay the knob pop + burst ring on every flip.
    setToggling(false);
    requestAnimationFrame(() => setToggling(true));
  }

  return (
    <button
      className={`theme-toggle${toggling ? " is-toggling" : ""}`}
      id="theme-toggle"
      type="button"
      aria-pressed={dark}
      aria-label={dark ? "Use light mode" : "Use dark mode"}
      onClick={handleClick}
    >
      <span className="toggle-label toggle-label-day" aria-hidden="true">
        Day
      </span>
      <span className="toggle-label toggle-label-night" aria-hidden="true">
        Night
      </span>
      <span className="toggle-knob" aria-hidden="true">
        <span className="toggle-glyph toggle-glyph-sun">
          <svg
            viewBox="0 0 24 24"
            width="17"
            height="17"
            fill="none"
            stroke="#f7a80b"
            strokeWidth="2.4"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="4" fill="#f7a80b" stroke="none" />
            <path d="M12 1.8v3.1M12 19.1v3.1M1.8 12h3.1M19.1 12h3.1M4.6 4.6l2.2 2.2M17.2 17.2l2.2 2.2M19.4 4.6l-2.2 2.2M6.8 17.2l-2.2 2.2" />
          </svg>
        </span>
        <span className="toggle-glyph toggle-glyph-moon">
          <svg viewBox="0 0 24 24" width="15" height="15">
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              fill="#2b2b3c"
            />
            <path
              className="moon-star"
              d="M18.5 3.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"
              fill="#f4f3ff"
            />
          </svg>
        </span>
      </span>
    </button>
  );
}
