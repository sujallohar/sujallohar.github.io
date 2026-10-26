import React, { useState } from "react";
import { publicationsList } from "../../data/research";
import { ArrowUpRightIcon, CopyIcon, CheckIcon } from "../ui/Icons";

export const ResearchSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleAbstract = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const copyBibtex = (pub: typeof publicationsList[0]) => {
    const bibtex = `@inproceedings{lohar${pub.year}${pub.id.split("-")[1] || "conf"},
  title = {${pub.title}},
  author = {${pub.authors.join(" and ")}},
  booktitle = {${pub.conference}},
  publisher = {${pub.publisher}},
  year = {${pub.year}}
}`;
    navigator.clipboard.writeText(bibtex);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="proceedings" className="border-b border-[var(--border-rule)] py-12 sm:py-16 space-y-8">
      {/* Header */}
      <div className="space-y-2 border-b border-[var(--border-rule)] pb-4">
        <div className="text-[11px] font-mono text-[var(--accent-terracotta)] uppercase tracking-widest font-semibold">
          [§03 // PEER-REVIEWED PROCEEDINGS]
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[var(--text-primary)] tracking-tight">
          Academic Research & Federated Systems
        </h2>
        <p className="text-sm text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          My undergraduate research under the mentorship of Dr. Aparna Kumari investigates decentralized federated deep learning, differential privacy in intensive care units, and attention rollout explainability over sparse medical records.
        </p>
      </div>

      {/* Publications Ledger */}
      <div className="divide-y divide-[var(--border-rule)] border border-[var(--border-rule)] bg-[var(--bg-surface)]">
        {publicationsList.map((pub, index) => {
          const numeral = (index + 1).toString().padStart(2, "0");
          const isExpanded = expandedId === pub.id;
          const isCopied = copiedId === pub.id;

          return (
            <article key={pub.id} className="p-6 sm:p-8 space-y-4 hover:bg-[var(--bg-surface-secondary)]/40 transition-colors">
              {/* Meta Header */}
              <div className="flex flex-wrap items-baseline justify-between gap-2 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--accent-terracotta)] font-bold">
                    PROCEEDING // {numeral}
                  </span>
                  <span className="text-[var(--text-muted)]">•</span>
                  <span className="text-[var(--text-primary)] font-semibold">
                    {pub.conference}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--text-muted)]">{pub.publisher} ({pub.year})</span>
                  <span className="border border-[var(--border-rule-strong)] px-1.5 py-0.5 text-[10px] font-bold text-[var(--accent-terracotta)] uppercase">
                    [{pub.status}]
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-[var(--text-primary)] leading-snug">
                "{pub.title}"
              </h3>

              {/* Authors */}
              <div className="text-xs sm:text-[13px] text-[var(--text-secondary)]">
                <span className="font-mono text-[11px] text-[var(--text-muted)] mr-2 uppercase">Authors:</span>
                {pub.authors.map((author, i) => (
                  <span key={i} className={author.includes("Sujal Lohar") ? "font-bold text-[var(--text-primary)] underline decoration-[var(--accent-terracotta)] decoration-1 underline-offset-2" : ""}>
                    {author}{i < pub.authors.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>

              {/* Keywords */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {pub.keywords.map((kw, i) => (
                  <span key={i} className="text-[10.5px] font-mono border border-[var(--border-rule)] px-2 py-0.5 bg-[var(--bg-canvas)] text-[var(--text-secondary)]">
                    {kw}
                  </span>
                ))}
              </div>

              {/* Expandable Abstract Drawer */}
              {isExpanded && (
                <div className="mt-3 p-4 border-l-2 border-[var(--accent-terracotta)] bg-[var(--bg-canvas)] text-xs sm:text-[13px] text-[var(--text-primary)] leading-relaxed space-y-2">
                  <span className="text-[10.5px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold block">
                    [ABSTRACT]
                  </span>
                  <p>{pub.abstract}</p>
                </div>
              )}

              {/* Action Vectors */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-rule)] text-xs font-mono">
                <button
                  type="button"
                  onClick={() => toggleAbstract(pub.id)}
                  className="text-[var(--accent-terracotta)] hover:underline font-medium"
                >
                  {isExpanded ? "▲ Hide Abstract" : "▼ Read Abstract"}
                </button>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => copyBibtex(pub)}
                    className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {isCopied ? (
                      <>
                        <CheckIcon className="w-3.5 h-3.5 text-[var(--accent-verdigris)]" />
                        <span className="text-[var(--accent-verdigris)] font-bold">BibTeX Copied</span>
                      </>
                    ) : (
                      <>
                        <CopyIcon className="w-3.5 h-3.5" />
                        <span>Copy BibTeX</span>
                      </>
                    )}
                  </button>

                  {pub.paperUrl && (
                    <a
                      href={pub.paperUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--text-primary)] hover:text-[var(--accent-terracotta)] font-medium"
                    >
                      <span>Citation Reference</span>
                      <ArrowUpRightIcon className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
