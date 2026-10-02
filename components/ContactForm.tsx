"use client";
import { useState } from "react";
type E = { name: string; email: string; message: string };
export default function ContactForm() {
  const [v, setV] = useState({ name: "", email: "", ptype: "", message: "" });
  const [errs, setErrs] = useState<E>({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [formMsg, setFormMsg] = useState("");
  const [isErr, setIsErr] = useState(false);
  const set = (k: string, val: string) => {
    setV((p) => ({ ...p, [k]: val }));
    setSent(false); setFormMsg("");
    validate({ ...v, [k]: val } as typeof v, true);
  };
  function validate(state: typeof v, live: boolean) {
    const e: E = { name: "", email: "", message: "" };
    const n = state.name.trim();
    const m = state.message.trim();
    if (!n) e.name = "Please enter your name.";
    if (!state.email.trim()) e.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(state.email.trim())) e.email = "Please enter a valid email address.";
    if (!m) e.message = "Please enter your message.";
    setErrs(e);
    if (!live) return !e.name && !e.email && !e.message;
    return !e.name && !e.email && !e.message;
  }
  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setSent(false);
    if (!validate(v, false)) { setIsErr(true); setFormMsg("Please correct the highlighted fields."); return; }
    setIsErr(false);
    setSent(true);
    setFormMsg("Thanks — your message is on its way.");
  };
  const fld = (kind: "name" | "email" | "message") => errs[kind] ? { "aria-invalid": true as const, "aria-describedby": "contact-" + kind + "-error" } : { "aria-invalid": false as const };
  return (
    <form id="contact-form" className={"contact-form" + (sent ? " is-submitted success" : "")} data-contact-form action="mailto:hello@pawan.dev" method="post" encType="text/plain" onSubmit={onSubmit} noValidate>
      <div>
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" required value={v.name} onChange={(e) => set("name", e.target.value)} {...fld("name")} />
        {errs.name && <span className="field-error" data-error-for="name" id="contact-name-error" role="alert">{errs.name}</span>}
      </div>
      <div>
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required value={v.email} onChange={(e) => set("email", e.target.value)} {...fld("email")} />
        {errs.email && <span className="field-error" data-error-for="email" id="contact-email-error" role="alert">{errs.email}</span>}
      </div>
      <div>
        <label htmlFor="contact-project">Project type</label>
        <select id="contact-project" name="project-type" required value={v.ptype} onChange={(e) => set("ptype", e.target.value)}>
          <option value="" disabled>Choose one</option>
          <option value="product">Product design and build</option>
          <option value="platform">Platform or backend work</option>
          <option value="consulting">Technical direction</option>
          <option value="other">Something else</option>
        </select>
      </div>
      <div>
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows={5} required value={v.message} onChange={(e) => set("message", e.target.value)} {...fld("message")} />
        {errs.message && <span className="field-error" data-error-for="message" id="contact-message-error" role="alert">{errs.message}</span>}
      </div>
      <button className="button button-primary" type="submit" disabled={sent} aria-disabled={sent}>{sent ? "Message sent" : <span>Send enquiry <span aria-hidden="true">↗</span></span>}</button>
      <p id="form-message" className="form-message" data-form-message data-success="Thanks — your message is on its way." role={isErr ? "alert" : "status"} aria-live="polite" hidden={!formMsg}>{formMsg || "Thanks — your message is on its way."}</p>
    </form>
  );
}
