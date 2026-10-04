import ContactForm from "./ContactForm";

const channels = [
  { label: "Email", value: "hello@pawan.dev", href: "mailto:hello@pawan.dev", note: "Best for briefs and files" },
  { label: "GitHub", value: "PawanKumar-Dev", href: "https://github.com/PawanKumar-Dev", note: "Code, issues, experiments" },
  { label: "Call", value: "+91 98100 00000", href: "tel:+919810000000", note: "Tue–Thu, 15:00–18:00 IST" },
];

export default function Contact() {
  return (
    <section className="contact section-wrap" id="contact" aria-labelledby="contact-title">
      <p className="section-number">04 / 04</p>
      <div className="contact-inner">
        <header className="contact-head">
          <p className="eyebrow">Now booking autumn projects</p>
          <h2 id="contact-title">
            Have a hard problem?
            <em>Let&apos;s make it useful.</em>
          </h2>
          <p className="contact-copy">
            Tell me what you&apos;re building, what&apos;s getting in the way, and where you want to
            go next. One reply, no pitch deck.
          </p>
        </header>

        <div className="contact-body">
          <aside className="contact-panel" aria-label="Availability and direct contact">
            <p className="contact-status">
              <span className="contact-status-dot" aria-hidden="true" />
              Booking from October
            </p>
            <ul className="contact-channels">
              {channels.map((c) => (
                <li key={c.label}>
                  <a className="contact-channel" href={c.href}>
                    <span className="contact-channel-label">{c.label}</span>
                    <span className="contact-channel-value">{c.value}</span>
                    <span className="contact-channel-note">{c.note}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="contact-foot">Replies within one working day · Delhi + remote</p>
          </aside>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
