import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="contact section-wrap" id="contact" aria-labelledby="contact-title">
      <div className="contact-container">
        {/* Main curved slab with responsive stagger reveal */}
        <Reveal as="div" className="contact-slab">
          {/* Header row: title/copy on left, cut-out notch callout on right */}
          <div className="contact-head">
            <div className="contact-head-text">
              <span className="contact-eyebrow">04 / Get In Touch</span>
              <h2 id="contact-title">CONTACTS</h2>
              <p className="contact-copy">
                Have any questions or special requests? Feel free to reach out to our dedicated team.
              </p>
            </div>

            <div className="contact-callout">
              <div className="contact-callout-card">
                <span className="contact-status-dot" aria-hidden="true">
                  <span className="contact-status-pulse" />
                </span>
                <p>CONTACT US TODAY AND LET US MAKE YOUR NEXT PROJECT EXCEPTIONAL!</p>
              </div>
            </div>
          </div>

          {/* Floating interactive information cards */}
          <div className="contact-cards">
            {/* Card 1: Address */}
            <div className="contact-card">
              <div className="contact-card-top">
                <div className="contact-card-badge">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="contact-card-label">ADDRESS</span>
                </div>
              </div>
              <div className="contact-card-content">
                <p className="contact-card-value">New Delhi, 110001<br />India</p>
                <p className="contact-card-note">Available worldwide for remote collaborations</p>
              </div>
            </div>

            {/* Card 2: Phone & Email */}
            <div className="contact-card">
              <div className="contact-card-top">
                <div className="contact-card-badge">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="contact-card-label">DIRECT CONTACT</span>
                </div>
              </div>
              <div className="contact-card-content">
                <div className="contact-card-group">
                  <span className="contact-card-sublabel">Phone</span>
                  <a className="contact-card-link" href="tel:+919810000000">+91 98100 00000</a>
                </div>
                <div className="contact-card-group" style={{ marginTop: "12px" }}>
                  <span className="contact-card-sublabel">Email</span>
                  <a className="contact-card-link" href="mailto:hello@pawan.dev">hello@pawan.dev</a>
                </div>
              </div>
            </div>

            {/* Card 3: Socials */}
            <div className="contact-card">
              <div className="contact-card-top">
                <div className="contact-card-badge">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                  <span className="contact-card-label">OUR SOCIALS</span>
                </div>
              </div>
              <div className="contact-card-content">
                <div className="contact-socials-row">
                  <a
                    className="contact-social"
                    href="https://github.com/PawanKumar-Dev"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub profile"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                    </svg>
                  </a>
                  <a
                    className="contact-social"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram profile"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2.2" />
                      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2.2" />
                      <circle cx="18" cy="6" r="1.4" fill="currentColor" />
                    </svg>
                  </a>
                  <a
                    className="contact-social"
                    href="mailto:hello@pawan.dev"
                    aria-label="Send an email"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" strokeWidth="2" />
                      <polyline points="3,7 12,13 21,7" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive enquiry form */}
          <div className="contact-form-card">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}



