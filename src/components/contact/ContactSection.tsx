import React, { useState } from "react";
import { personalInfo } from "../../data/personal";
import { GithubIcon, LinkedinIcon, CodeforcesIcon, CheckIcon } from "../ui/Icons";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "" // Anti-spam trap
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Silent discard for bots triggering the honeypot
    if (formData.honeypot) {
      setSubmitted(true);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/sujapanchal17@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `Engineering Inquiry from ${formData.name}`,
          message: formData.message,
          _captcha: "false",
          _template: "table"
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok || data.success === "true" || data.message) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
      } else {
        // Fallback to opening mailto if server rejects
        triggerMailtoFallback();
      }
    } catch (err) {
      // Network error or offline fallback
      triggerMailtoFallback();
    } finally {
      setLoading(false);
    }
  };

  const triggerMailtoFallback = () => {
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || "Engineering Inquiry: " + formData.name
    )}&body=${encodeURIComponent(
      "From: " + formData.name + " (" + formData.email + ")\n\n" + formData.message
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 space-y-8">
      {/* Header */}
      <div className="space-y-2 border-b border-[var(--border-rule)] pb-4">
        <div className="text-[11px] font-mono text-[var(--accent-terracotta)] uppercase tracking-widest font-semibold">
          [§07 // DIRECT DISPATCH]
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[var(--text-primary)] tracking-tight">
          Active Message Relay & Dispatch
        </h2>
        <p className="text-sm text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          The message relay below delivers your transmission directly to my inbox at {personalInfo.email}. All fields are actively monitored.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (5 cols): Verified Transmission Vectors */}
        <div className="lg:col-span-5 space-y-4">
          <div className="border border-[var(--border-rule)] bg-[var(--bg-surface)] p-6 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold border-b border-[var(--border-rule)] pb-2">
              [VERIFIED TRANSMISSION ENDPOINTS]
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div>
                <span className="text-[var(--text-muted)] block text-[10px]">PRIMARY DISPATCH:</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-bold text-[var(--text-primary)] hover:text-[var(--accent-terracotta)] hover:underline"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div>
                <span className="text-[var(--text-muted)] block text-[10px]">UNIVERSITY STATION:</span>
                <a
                  href={`mailto:${personalInfo.universityEmail}`}
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline"
                >
                  {personalInfo.universityEmail}
                </a>
              </div>

              <div>
                <span className="text-[var(--text-muted)] block text-[10px]">TELEPHONE LINK:</span>
                <span className="text-[var(--text-primary)] font-bold">
                  {personalInfo.phone}
                </span>
              </div>

              <div>
                <span className="text-[var(--text-muted)] block text-[10px]">CURRENT STATION:</span>
                <span className="text-[var(--text-primary)]">
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Network Coordinates */}
            <div className="pt-3 border-t border-[var(--border-rule)] flex flex-wrap gap-2 text-xs font-mono">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[var(--border-rule)] hover:border-[var(--text-primary)] text-[var(--text-primary)] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[var(--border-rule)] hover:border-[var(--text-primary)] text-[var(--text-primary)] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.codeforces}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[var(--border-rule)] hover:border-[var(--text-primary)] text-[var(--text-primary)] transition-colors"
              >
                <CodeforcesIcon className="w-3.5 h-3.5" />
                <span>Codeforces</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): Direct Transmission Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="border border-[var(--border-rule)] bg-[var(--bg-surface)] p-6 sm:p-8 space-y-4"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold border-b border-[var(--border-rule)] pb-2 flex justify-between items-center">
              <span>[COMPOSE DIRECT DISPATCH]</span>
              <span className="text-[10px] text-[var(--accent-verdigris)] font-bold">● RELAY ACTIVE</span>
            </div>

            {submitted ? (
              <div className="p-6 border border-[var(--accent-verdigris)] bg-[var(--bg-canvas)] text-center space-y-2 font-mono">
                <CheckIcon className="w-6 h-6 text-[var(--accent-verdigris)] mx-auto" />
                <h3 className="text-sm font-bold text-[var(--text-primary)]">
                  DISPATCH TRANSMITTED SUCCESSFULLY
                </h3>
                <p className="text-xs text-[var(--text-secondary)] max-w-md mx-auto">
                  Your message has been dispatched directly to {personalInfo.email}. I typically review and respond within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 inline-block px-3 py-1.5 text-xs text-[var(--accent-terracotta)] hover:underline border border-[var(--border-rule)]"
                >
                  ← Compose Another Message
                </button>
              </div>
            ) : (
              <>
                {errorMessage && (
                  <div className="p-3 border border-[var(--accent-terracotta)] bg-[var(--accent-subtle)] text-xs font-mono text-[var(--accent-terracotta)]">
                    {errorMessage}
                  </div>
                )}

                {/* Honeypot for bots */}
                <input
                  type="text"
                  name="company_website"
                  value={formData.honeypot}
                  onChange={e => setFormData({ ...formData, honeypot: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                  className="sr-only"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[var(--text-muted)] uppercase block" htmlFor="contact-name">
                      Name / Identification *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Jane Smith"
                      className="w-full px-3 py-2 text-xs font-mono bg-[var(--bg-canvas)] border border-[var(--border-rule)] text-[var(--text-primary)] focus:outline-hidden focus:border-[var(--accent-terracotta)]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[var(--text-muted)] uppercase block" htmlFor="contact-email">
                      Return Transmission Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-3 py-2 text-xs font-mono bg-[var(--bg-canvas)] border border-[var(--border-rule)] text-[var(--text-primary)] focus:outline-hidden focus:border-[var(--accent-terracotta)]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-[var(--text-muted)] uppercase block" htmlFor="contact-subject">
                    Dispatch Subject *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Distributed Systems Internship Opportunity"
                    className="w-full px-3 py-2 text-xs font-mono bg-[var(--bg-canvas)] border border-[var(--border-rule)] text-[var(--text-primary)] focus:outline-hidden focus:border-[var(--accent-terracotta)]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-[var(--text-muted)] uppercase block" htmlFor="contact-message">
                    Transmission Content *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide context regarding the position, project scope, or research inquiry..."
                    className="w-full px-3 py-2 text-xs font-mono bg-[var(--bg-canvas)] border border-[var(--border-rule)] text-[var(--text-primary)] focus:outline-hidden focus:border-[var(--accent-terracotta)] resize-y"
                  />
                </div>

                <div className="pt-2 flex justify-between items-center">
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    Direct Relay to sujapanchal17@gmail.com
                  </span>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-5 py-2 text-xs font-mono font-medium bg-[var(--accent-terracotta)] text-white hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {loading ? "Transmitting Dispatch..." : "Send Dispatch →"}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
