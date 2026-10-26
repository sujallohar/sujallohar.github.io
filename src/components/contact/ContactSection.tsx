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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Silent discard for bots triggering the honeypot
    if (formData.honeypot) {
      setSubmitted(true);
      return;
    }

    setLoading(true);

    // Construct mailto link as resilient client-side fallback
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || "Engineering Inquiry: " + formData.name
    )}&body=${encodeURIComponent(
      "From: " + formData.name + " (" + formData.email + ")\n\n" + formData.message
    )}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 space-y-8">
      {/* Header */}
      <div className="space-y-2 border-b border-[var(--border-rule)] pb-4">
        <div className="text-[11px] font-mono text-[var(--accent-terracotta)] uppercase tracking-widest font-semibold">
          [§07 // DIRECT DISPATCH]
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[var(--text-primary)] tracking-tight">
          Secure Channels & Dispatch
        </h2>
        <p className="text-sm text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          I respond promptly to technical engineering inquiries, research collaboration proposals, and software internship opportunities.
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
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold border-b border-[var(--border-rule)] pb-2">
              [COMPOSE DIRECT DISPATCH]
            </div>

            {submitted ? (
              <div className="p-6 border border-[var(--accent-verdigris)] bg-[var(--bg-canvas)] text-center space-y-2 font-mono">
                <CheckIcon className="w-6 h-6 text-[var(--accent-verdigris)] mx-auto" />
                <h3 className="text-sm font-bold text-[var(--text-primary)]">
                  DISPATCH PREPARED
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  Your mail client has been opened with your pre-filled inquiry. You can also send directly to {personalInfo.email}.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs text-[var(--accent-terracotta)] hover:underline"
                >
                  ← Compose Another
                </button>
              </div>
            ) : (
              <>
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
                    Protected by Honeypot Verification
                  </span>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-5 py-2 text-xs font-mono font-medium bg-[var(--accent-terracotta)] text-white hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {loading ? "Transmitting..." : "Send Dispatch →"}
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
