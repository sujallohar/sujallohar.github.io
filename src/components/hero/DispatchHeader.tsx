import React from "react";
import { personalInfo } from "../../data/personal";
import { DocumentIcon, ArrowUpRightIcon } from "../ui/Icons";

interface DispatchHeaderProps {
  onOpenResume: () => void;
}

export const DispatchHeader: React.FC<DispatchHeaderProps> = ({ onOpenResume }) => {
  return (
    <section id="dispatch" className="border-b border-[var(--border-rule)] pb-12 sm:pb-16 pt-6 sm:pt-10">
      {/* Top Ledger Identifier */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-6 border-b border-[var(--border-rule)] text-[11px] font-mono text-[var(--text-muted)]">
        <div>
          <span className="text-[var(--accent-terracotta)] font-semibold">[§01 // EXECUTIVE DISPATCH]</span>
          <span className="ml-2">DOC-ID: NU-CSE-2027-SL</span>
        </div>
        <div>
          LOC: 23.0225° N, 72.5714° E (AHMEDABAD, IN)
        </div>
      </div>

      {/* Main Grid: Asymmetric Typography & Subject Ledger */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column (7 cols): Editorial Monograph Title & Positioning */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-[var(--text-primary)] tracking-tight leading-[1.05]">
              {personalInfo.name}
            </h1>
            <p className="text-base sm:text-lg font-medium text-[var(--accent-terracotta)] font-mono mt-2">
              {personalInfo.title}
            </p>
          </div>

          <div className="space-y-4 text-[15px] sm:text-[16px] text-[var(--text-primary)] leading-relaxed">
            <p className="font-serif italic text-lg sm:text-xl text-[var(--text-secondary)] border-l-2 border-[var(--accent-terracotta)] pl-4 py-0.5">
              "{personalInfo.tagline}"
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Small Human Details: Currently & Philosophy */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="border border-[var(--border-rule)] p-3 bg-[var(--bg-surface)]">
              <span className="text-[10.5px] font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-1 font-semibold">
                [CURRENTLY BENCHMARKING]
              </span>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {personalInfo.currentlyFocusing}
              </p>
            </div>

            <div className="border border-[var(--border-rule)] p-3 bg-[var(--bg-surface)]">
              <span className="text-[10.5px] font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-1 font-semibold">
                [ENGINEERING PHILOSOPHY]
              </span>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {personalInfo.workPhilosophy}
              </p>
            </div>
          </div>

          {/* Action Vectors */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium bg-[var(--text-primary)] text-[var(--bg-canvas)] hover:bg-[var(--accent-terracotta)] hover:text-white transition-colors"
            >
              <span>Inspect Case Studies</span>
              <span>↓</span>
            </a>

            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium border border-[var(--border-rule-strong)] text-[var(--text-primary)] hover:border-[var(--accent-terracotta)] hover:text-[var(--accent-terracotta)] transition-colors bg-[var(--bg-surface)]"
            >
              <DocumentIcon className="w-3.5 h-3.5 text-[var(--accent-terracotta)]" />
              <span>Resume Studio (3 Variants)</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              <span>Direct Channel</span>
              <ArrowUpRightIcon className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Right Column (5 cols): Real Photo & Systems Ledger */}
        <div className="lg:col-span-5 space-y-4">
          {/* Framed Archival Photo */}
          <div className="border border-[var(--border-rule-strong)] p-1.5 bg-[var(--bg-surface)]">
            <div className="relative aspect-square overflow-hidden bg-neutral-200 dark:bg-neutral-800 border border-[var(--border-rule)]">
              <img
                src="/images/sujal-lohar.png?v=20261027"
                alt="Sujal Lohar, Full-Stack & DevSecOps Engineer"
                className="w-full h-full object-cover object-top filter contrast-[1.02]"
                loading="eager"
              />
              <div className="absolute bottom-0 inset-x-0 bg-neutral-950/85 text-neutral-200 p-2 text-[10px] font-mono flex justify-between items-center">
                <span>[FIG. 01: SUJAL LOHAR]</span>
                <span>AHMEDABAD, IN</span>
              </div>
            </div>
            <div className="px-1 py-1.5 text-[10px] font-mono text-[var(--text-muted)] flex justify-between">
              <span>DEPT OF COMPUTER SCIENCE</span>
              <span>NIRMA UNIVERSITY</span>
            </div>
          </div>

          {/* Quick Metrics & Station Ledger */}
          <div className="border border-[var(--border-rule)] bg-[var(--bg-surface)] divide-y divide-[var(--border-rule)] text-xs font-mono">
            <div className="p-2.5 flex justify-between items-center">
              <span className="text-[var(--text-muted)]">ACADEMIC CGPA</span>
              <span className="text-[var(--text-primary)] font-bold">7.94 / 10.0 (ITNU)</span>
            </div>
            <div className="p-2.5 flex justify-between items-center">
              <span className="text-[var(--text-muted)]">IEEE / CONFERENCES</span>
              <span className="text-[var(--text-primary)] font-bold">5 Accepted Papers</span>
            </div>
            <div className="p-2.5 flex justify-between items-center">
              <span className="text-[var(--text-muted)]">CODEFORCES RANK</span>
              <span className="text-[var(--text-primary)] font-bold">Specialist (1400+)</span>
            </div>
            <div className="p-2.5 flex justify-between items-center">
              <span className="text-[var(--text-muted)]">STATE RECOGNITION</span>
              <span className="text-[var(--text-primary)] font-bold">Top 8 Sanchar Mitras</span>
            </div>
            <div className="p-2.5 flex justify-between items-center">
              <span className="text-[var(--text-muted)]">SEEKING AVAILABILITY</span>
              <span className="text-[var(--accent-terracotta)] font-bold">Open for Internships</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
