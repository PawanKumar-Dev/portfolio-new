export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer"><span>© <span id="current-year">{year}</span> Pawan</span><span>Built with care, no templates.</span><a href="#top">Back to top ↑</a></footer>
  );
}
