import React, { useEffect } from "react";
import { Project } from "../../types/portfolio";
import { CloseIcon, GithubIcon, ArrowUpRightIcon, ArchitectureIcon } from "../ui/Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && project) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs no-print overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl bg-[var(--bg-canvas)] border border-[var(--border-rule-strong)] shadow-2xl flex flex-col max-h-[92vh] my-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--border-rule)] bg-[var(--bg-surface)]">
          <div className="flex items-center gap-2.5">
            <ArchitectureIcon className="w-4 h-4 text-[var(--accent-terracotta)]" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
              [SPEC SHEET: {project.id.toUpperCase()}]
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-transparent hover:border-[var(--border-rule)]"
            aria-label="Close specification sheet"
          >
            <CloseIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <div className="text-xs font-mono text-[var(--accent-terracotta)] uppercase font-semibold mb-1">
              CATEGORY: {project.category} • COMPLETED: {project.completionDate}
            </div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold font-serif text-[var(--text-primary)]">
              {project.title}
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Problem Statement */}
          <div className="border border-[var(--border-rule)] p-4 bg-[var(--bg-surface)]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold mb-2">
              [THE ARCHITECTURAL PROBLEM]
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Architecture & Implementation Decisions */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold mb-3">
              [SYSTEM SPECIFICATIONS & IMPLEMENTED PATTERNS]
            </h3>
            <div className="space-y-2.5">
              {project.architecture.map((item, idx) => (
                <div key={idx} className="flex gap-3 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--accent-terracotta)] font-mono text-xs font-bold pt-0.5">
                    0{idx + 1}.
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Measured Benchmark Outcomes */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold mb-3">
              [MEASURED BENCHMARK METRICS & FAULT TOLERANCE]
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="border border-[var(--border-rule)] p-2.5 bg-[var(--bg-surface)] flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--text-muted)]">VERIFIED</span>
                  <span className="font-bold text-[var(--text-primary)]">{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Ledger */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold mb-2">
              [TECHNOLOGY LEDGER]
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="border border-[var(--border-rule)] px-2.5 py-1 text-xs font-mono bg-[var(--bg-surface-secondary)] text-[var(--text-primary)]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3.5 border-t border-[var(--border-rule)] bg-[var(--bg-surface)]">
          <div className="text-xs font-mono text-[var(--text-muted)]">
            Status: Production Code Verified
          </div>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium border border-[var(--border-rule)] hover:border-[var(--text-primary)] text-[var(--text-primary)] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Source Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium bg-[var(--accent-terracotta)] text-white hover:opacity-90 transition-opacity"
              >
                <span>Live Demonstration</span>
                <ArrowUpRightIcon className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
