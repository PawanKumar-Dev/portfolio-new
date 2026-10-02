"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const projects = [
  {
    index: "01",
    title: "Lumen Finance",
    kind: "Product platform",
    blurb: "A calmer operating system for independent finance teams.",
    art: "art-lumen",
    label: "Lumen",
    scan: "/ 2024",
    decor: "art-orb",
  },
  {
    index: "02",
    title: "Field Notes",
    kind: "Editorial tooling",
    blurb: "Making a small publisher feel limitless.",
    art: "art-field",
    label: "Field Notes",
    scan: "",
    decor: "art-dots",
  },
  {
    index: "03",
    title: "Relay / OSS",
    kind: "Developer tooling",
    blurb: "Infrastructure that gets out of the way.",
    art: "art-mesh",
    label: "/ relay",
    scan: "",
    decor: "art-mesh-lines",
  },
];

export default function Work() {
  const [open, setOpen] = useState(0);

  return (
    <section className="work section-wrap" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <p className="section-number">01 / 04</p>
        <h2 id="work-title">Selected work</h2>
        <p className="section-lede">
          A considered mix of product strategy, interface craft, and resilient
          engineering.
          <span className="work-hint">Hover a project to preview</span>
        </p>
      </div>

      <div className="work-ledger">
        {projects.map((p, i) => (
          <Reveal key={p.index} as="div" className="ledger-slot" delay={i * 70}>
            <a
              className={`ledger-row${open === i ? " is-open" : ""}`}
              href="#contact"
              onPointerEnter={() => setOpen(i)}
              onFocus={() => setOpen(i)}
            >
              <span className="ledger-head">
                <span className="ledger-num">{p.index}</span>
                <span className="ledger-title">{p.title}</span>
                <span className="project-kind">{p.kind}</span>
                <span className="ledger-arrow" aria-hidden="true">↗</span>
              </span>

              <span className="ledger-drawer">
                <span className="ledger-drawer-clip">
                  <span className="ledger-drawer-inner">
                    <span className={`project-art ledger-art ${p.art}`}>
                      <span className="art-label">{p.label}</span>
                      {p.scan ? <span className="art-scan">{p.scan}</span> : null}
                      <span
                        className={`art-decor ${p.decor}`}
                        aria-hidden="true"
                      />
                      <span className="art-ghost" aria-hidden="true">
                        {p.index}
                      </span>
                    </span>

                    <span className="ledger-copy">
                      <span className="ledger-blurb">{p.blurb}</span>
                      <span className="project-link">View case study ↗</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
