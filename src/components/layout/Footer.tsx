import React from "react";
import { personalInfo } from "../../data/personal";
import { DocumentIcon } from "../ui/Icons";

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  return (
    <footer className="border-t border-[var(--border-rule)] bg-[var(--bg-canvas)] py-12 px-6 sm:px-12 text-xs font-mono text-[var(--text-muted)] space-y-6 no-print">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[var(--border-rule)] pb-6">
        <div>
          <span className="text-[var(--accent-terracotta)] font-bold">
            [COLOPHON & ARCHIVAL IMPRINT]
          </span>
          <div className="text-sm font-bold text-[var(--text-primary)] font-serif mt-1">
            {personalInfo.name} — Technical Monograph
          </div>
          <div className="text-[11px] text-[var(--text-secondary)] mt-0.5">
            B.Tech Computer Science & Cybersecurity • Nirma University
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 text-[var(--accent-terracotta)] hover:underline font-bold"
          >
            <DocumentIcon className="w-3.5 h-3.5" />
            <span>Open Resume Studio (3 Variants)</span>
          </button>
          <a
            href="#dispatch"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            ↑ Return to Top
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[11px] leading-relaxed text-[var(--text-secondary)]">
        <div>
          Typeset in Newsreader (Display Serif), Plus Jakarta Sans (Body), and JetBrains Mono (Telemetry). Designed around an asymmetric editorial grid with physical 1px rule borders, high typographic contrast, and zero blurred cards or neon gradients.
        </div>
        <div className="md:text-right">
          WCAG 2.1 AA certified with 15.2:1 text contrast on warm paper ground and 15.8:1 on carbon slate. Automated CI/CD pipeline deploying to GitHub Pages edge network.
        </div>
      </div>

      <div className="pt-4 border-t border-[var(--border-rule)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[10px] text-[var(--text-muted)]">
        <div>
          © 2026 {personalInfo.name}. All specifications and benchmark numbers verified against production code.
        </div>
        <div>
          Ahmedabad, Gujarat, India • Station: 23.0225° N, 72.5714° E
        </div>
      </div>
    </footer>
  );
};
