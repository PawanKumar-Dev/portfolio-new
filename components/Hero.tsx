import HeroVideo from "./HeroVideo";
export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Full-stack developer <span aria-hidden="true">/</span> Delhi + remote</p>
        <h1 id="hero-title">Ideas to life.<br /><em>End to end.</em></h1>
        <p className="hero-intro">Thoughtful interfaces. Reliable backends. I build web products that work beautifully, inside and out.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore the work <span aria-hidden="true">↘</span></a>
          <a className="text-link" href="#contact">Have a project in mind? <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <figure className="hero-visual">
        <HeroVideo />
      </figure>
      <div className="hero-foot"><span>Independent / end-to-end</span><span className="scroll-note">Scroll to explore <b aria-hidden="true">↓</b></span></div>
    </section>
  );
}
