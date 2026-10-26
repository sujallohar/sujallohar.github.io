import React, { useState } from "react";
import { certificationsList } from "../../data/certifications";
import { awardsList } from "../../data/awards";
import { CopyIcon, CheckIcon, ArrowUpRightIcon } from "../ui/Icons";

export const CredentialsSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyCredential = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="commendations" className="border-b border-[var(--border-rule)] py-12 sm:py-16 space-y-10">
      {/* Header */}
      <div className="space-y-2 border-b border-[var(--border-rule)] pb-4">
        <div className="text-[11px] font-mono text-[var(--accent-terracotta)] uppercase tracking-widest font-semibold">
          [§06 // VERIFIED COMMENDATIONS & CREDENTIALS]
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[var(--text-primary)] tracking-tight">
          Certifications & State Recognitions
        </h2>
        <p className="text-sm text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          Verifiable professional certifications and government recognitions in cybersecurity, cloud infrastructure, and distributed systems.
        </p>
      </div>

      {/* Part 1: Official Cloud & DevOps Certifications */}
      <div className="space-y-4">
        <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold">
          [OFFICIAL CLOUD & DEVOPS CREDENTIALS]
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificationsList.map(cert => {
            const isCopied = copiedId === cert.credentialId;
            return (
              <div
                key={cert.id}
                className="border border-[var(--border-rule)] bg-[var(--bg-surface)] p-5 space-y-3 hover:border-[var(--border-rule-strong)] transition-colors flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline text-xs font-mono">
                    <span className="text-[var(--accent-terracotta)] font-bold">
                      [{cert.category.toUpperCase()}]
                    </span>
                    <span className="text-[var(--text-muted)]">{cert.issueDate}</span>
                  </div>
                  <h3 className="text-lg font-bold font-serif text-[var(--text-primary)] leading-snug">
                    {cert.name}
                  </h3>
                  <div className="text-xs text-[var(--text-secondary)] font-mono">
                    Issuer: {cert.issuer}
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--border-rule)] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  {cert.credentialId ? (
                    <button
                      type="button"
                      onClick={() => copyCredential(cert.credentialId!)}
                      className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                      title="Click to copy credential ID"
                    >
                      {isCopied ? (
                        <>
                          <CheckIcon className="w-3.5 h-3.5 text-[var(--accent-verdigris)]" />
                          <span className="text-[var(--accent-verdigris)] font-bold">ID Copied</span>
                        </>
                      ) : (
                        <>
                          <CopyIcon className="w-3.5 h-3.5" />
                          <span>ID: {cert.credentialId.slice(0, 16)}...</span>
                        </>
                      )}
                    </button>
                  ) : (
                    <span className="text-[var(--text-muted)]">Verified Record</span>
                  )}

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--accent-terracotta)] hover:underline font-medium"
                    >
                      <span>Verify</span>
                      <ArrowUpRightIcon className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Part 2: Honors & Commendations */}
      <div className="space-y-4 pt-4 border-t border-[var(--border-rule)]">
        <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold">
          [GOVERNMENT, UNIVERSITY & INTERNATIONAL HONORS]
        </div>
        <div className="divide-y divide-[var(--border-rule)] border border-[var(--border-rule)] bg-[var(--bg-surface)]">
          {awardsList.map(award => (
            <div
              key={award.id}
              className="p-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 hover:bg-[var(--bg-surface-secondary)]/30 transition-colors"
            >
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-[var(--accent-terracotta)] font-bold">
                    [{award.scope.toUpperCase()}]
                  </span>
                  <span className="text-[var(--text-muted)]">•</span>
                  <span className="text-[var(--text-muted)]">{award.organization}</span>
                </div>
                <h3 className="text-base font-bold font-serif text-[var(--text-primary)]">
                  {award.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {award.description}
                </p>
              </div>
              <div className="text-xs font-mono text-[var(--text-muted)] whitespace-nowrap">
                {award.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
