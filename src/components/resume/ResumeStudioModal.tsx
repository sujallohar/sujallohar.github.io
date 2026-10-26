import React, { useState, useEffect } from "react";
import { ResumeVariant } from "../../types/portfolio";
import { ResumeView } from "./ResumeView";
import { PrinterIcon, DownloadIcon, CloseIcon } from "../ui/Icons";

interface ResumeStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVariant?: ResumeVariant;
}

export const ResumeStudioModal: React.FC<ResumeStudioModalProps> = ({
  isOpen,
  onClose,
  initialVariant = "one-page"
}) => {
  const [variant, setVariant] = useState<ResumeVariant>(initialVariant);
  const [zoomScale, setZoomScale] = useState<number>(100);

  useEffect(() => {
    setVariant(initialVariant);
  }, [initialVariant]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const pdfFilenames: Record<ResumeVariant, string> = {
    "one-page": "/resumes/sujal-lohar-resume-2026-10.pdf",
    "full": "/resumes/sujal-lohar-cv-2026-10.pdf",
    "academic": "/resumes/sujal-lohar-academic-cv-2026-10.pdf"
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-studio-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/75 backdrop-blur-xs no-print overflow-y-auto"
    >
      <div className="relative w-full max-w-5xl bg-[var(--bg-canvas)] border border-[var(--border-rule-strong)] shadow-2xl flex flex-col max-h-[96vh] my-auto">
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-[var(--border-rule)] bg-[var(--bg-surface)]">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--accent-terracotta)] font-bold">
              [§RESUME-STUDIO]
            </span>
            <h2 id="resume-studio-title" className="text-sm font-semibold text-[var(--text-primary)] font-mono">
              Dynamic ATS Curriculum Vitae Generator
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center gap-1 border border-[var(--border-rule)] px-2 py-1 text-xs font-mono text-[var(--text-secondary)]">
              <span>Scale:</span>
              <button
                type="button"
                onClick={() => setZoomScale(Math.max(75, zoomScale - 10))}
                className="hover:text-[var(--text-primary)] px-1"
                aria-label="Zoom out"
              >
                -
              </button>
              <span className="w-8 text-center">{zoomScale}%</span>
              <button
                type="button"
                onClick={() => setZoomScale(Math.min(130, zoomScale + 10))}
                className="hover:text-[var(--text-primary)] px-1"
                aria-label="Zoom in"
              >
                +
              </button>
            </div>

            {/* Print Action */}
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium border border-[var(--border-rule)] hover:border-[var(--accent-terracotta)] text-[var(--text-primary)] hover:text-[var(--accent-terracotta)] transition-colors"
            >
              <PrinterIcon className="w-3.5 h-3.5" />
              <span>Print / Save</span>
            </button>

            {/* Download Action */}
            <a
              href={pdfFilenames[variant]}
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium bg-[var(--accent-terracotta)] text-white hover:opacity-90 transition-opacity"
            >
              <DownloadIcon className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-transparent hover:border-[var(--border-rule)] ml-2"
              aria-label="Close resume preview"
            >
              <CloseIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Variant Tabs & Description */}
        <div className="px-4 py-2.5 border-b border-[var(--border-rule)] bg-[var(--bg-surface-secondary)] flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1">
            <button
              type="button"
              onClick={() => setVariant("one-page")}
              className={`px-3 py-1 text-xs font-mono transition-colors ${
                variant === "one-page"
                  ? "bg-[var(--accent-terracotta)] text-white font-bold"
                  : "border border-[var(--border-rule)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-surface)]"
              }`}
            >
              01 // Industry 1-Page (SWE / DevSecOps)
            </button>
            <button
              type="button"
              onClick={() => setVariant("full")}
              className={`px-3 py-1 text-xs font-mono transition-colors ${
                variant === "full"
                  ? "bg-[var(--accent-terracotta)] text-white font-bold"
                  : "border border-[var(--border-rule)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-surface)]"
              }`}
            >
              02 // Full Engineering CV (All Records)
            </button>
            <button
              type="button"
              onClick={() => setVariant("academic")}
              className={`px-3 py-1 text-xs font-mono transition-colors ${
                variant === "academic"
                  ? "bg-[var(--accent-terracotta)] text-white font-bold"
                  : "border border-[var(--border-rule)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-surface)]"
              }`}
            >
              03 // Academic & Research CV (Publications First)
            </button>
          </div>
          <span className="text-[11px] font-mono text-[var(--text-muted)]">
            ATS Single-Column Standard • Embedded Typography
          </span>
        </div>

        {/* Scrollable Document Canvas */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-neutral-100 dark:bg-neutral-900 flex justify-center">
          <div
            style={{ transform: `scale(${zoomScale / 100})`, transformOrigin: "top center", transition: "transform 0.15s ease" }}
            className="w-full flex justify-center"
          >
            <ResumeView variant={variant} />
          </div>
        </div>
      </div>
    </div>
  );
};
