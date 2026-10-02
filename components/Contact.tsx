import ContactForm from "./ContactForm";
export default function Contact() {
  return (
    <section className="contact section-wrap" id="contact" aria-labelledby="contact-title">
      <p className="section-number">04 / 04</p>
      <div className="contact-inner">
        <p className="eyebrow">Now booking autumn projects</p>
        <h2 id="contact-title">Have a hard problem?<br /><em>Let&apos;s make it useful.</em></h2>
        <div>
          <p className="contact-copy">Tell me what you&apos;re building, what&apos;s getting in the way, and where you want to go next.</p>
          <ContactForm />
          <p className="contact-fallback">Prefer email? <a href="mailto:hello@pawan.dev">hello@pawan.dev <span aria-hidden="true">↗</span></a></p>
        </div>
      </div>
    </section>
  );
}
