export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="contact-footer-bar">
        <div className="contact-footer-brand">
          <span className="contact-brand-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="var(--blue)">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </span>
          <span className="contact-brand-name">pawan</span>
        </div>

        <nav className="contact-footer-nav" aria-label="Footer quick navigation">
          <a href="#top">About me</a>
          <a href="#work">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#blog">Articles</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="contact-footer-copy">
          <span>Copyright {year}</span>
        </div>
      </div>
    </footer>
  );
}


