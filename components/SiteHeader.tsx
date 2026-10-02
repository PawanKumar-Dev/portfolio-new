import NavDock from "./NavDock";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Pawan, home">
        <svg viewBox="0 0 300 400" width="52" height="70" role="img" aria-label="Pawan logo">
          <defs>
            <linearGradient id="logoArchDark" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3d3d42" /><stop offset=".45" stopColor="#232326" /><stop offset="1" stopColor="#0b0b0d" /></linearGradient>
            <linearGradient id="logoArchLight" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f4f3ff" /><stop offset=".55" stopColor="#c9c7e8" /><stop offset="1" stopColor="#8f8db0" /></linearGradient>
            <linearGradient id="logoBolt" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#ff5a5a" /><stop offset=".55" stopColor="#e23237" /><stop offset="1" stopColor="#a5121a" /></linearGradient>
            <linearGradient id="logoBoltDark" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#e23237" /><stop offset="1" stopColor="#8f0e14" /></linearGradient>
          </defs>
          <path className="logo-arch-dark" fill="url(#logoArchDark)" d="M38 22 L178 22 C236 22 272 56 265 118 C259 176 220 212 152 212 L118 212 L138 152 L168 152 C192 152 208 140 211 118 C214 96 201 82 175 82 L72 82 Z" />
          <path className="logo-arch-light" fill="url(#logoArchLight)" d="M38 22 L178 22 C236 22 272 56 265 118 C259 176 220 212 152 212 L118 212 L138 152 L168 152 C192 152 208 140 211 118 C214 96 201 82 175 82 L72 82 Z" />
          <path fill="url(#logoBolt)" d="M96 96 L192 96 L148 252 L192 252 L148 282 L96 282 L44 282 L84 156 Z" />
          <path fill="#ffffff" opacity=".22" d="M96 96 L132 96 L92 252 L44 252 L84 156 L96 96 Z" />
          <path fill="url(#logoBoltDark)" d="M112 252 L192 252 L148 282 L62 378 L92 252 Z" />
        </svg>
      </a>
      <NavDock />
      <div className="header-tools">
        <ThemeToggle />
        <a className="nav-contact" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}
