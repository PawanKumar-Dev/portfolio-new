"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealTag = "div" | "a" | "article" | "li";

export default function Reveal({
  children,
  className,
  delay,
  as = "div",
  href,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: RevealTag;
  href?: string;
}) {
  const ref = useRef<HTMLDivElement | HTMLAnchorElement | HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current as HTMLElement | null;
    if (!el) return;
    if (typeof delay === "number") {
      el.style.setProperty("--reveal-delay", `${delay}ms`);
    }
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      el.classList.add("is-visible", "revealed");
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible", "revealed");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  // Render the semantic element itself so grid/flex child selectors
  // (.work-row > .work-slab, .journal-list article) keep working.
  if (as === "a") {
    return (
      <a ref={ref as React.Ref<HTMLAnchorElement>} data-reveal className={className} href={href}>
        {children}
      </a>
    );
  }
  if (as === "article") {
    return (
      <article ref={ref as React.Ref<HTMLElement>} data-reveal className={className}>
        {children}
      </article>
    );
  }
  return (
    <div ref={ref as React.Ref<HTMLDivElement>} data-reveal className={className}>
      {children}
    </div>
  );
}
