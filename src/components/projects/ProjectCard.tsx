import React from "react";
import { Project } from "../../types/portfolio";
import { GithubIcon, ArrowUpRightIcon, ArchitectureIcon } from "../ui/Icons";

interface ProjectCardProps {
  project: Project;
  index: number;
  onInspect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onInspect }) => {
  const numeral = (index + 1).toString().padStart(2, "0");

  return (
    <article className="border border-[var(--border-rule)] bg-[var(--bg-surface)] p-6 sm:p-8 space-y-6 hover:border-[var(--border-rule-strong)] transition-colors">
      {/* Top Header Ledger */}
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--border-rule)] pb-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="text-[var(--accent-terracotta)] font-bold">
            CASE STUDY // {numeral}
          </span>
          <span className="text-[var(--text-muted)]">•</span>
          <span className="text-[var(--text-muted)] uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        <div className="text-[var(--text-muted)]">
          {project.completionDate}
        </div>
      </div>

      {/* Title & Core Summary */}
      <div className="space-y-2">
        <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[var(--text-primary)] tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm sm:text-[15px] text-[var(--text-secondary)] leading-relaxed">
          {project.summary}
        </p>
      </div>

      {/* Architectural Problem Statement Callout */}
      <div className="border-l-2 border-[var(--border-rule-strong)] pl-4 py-1 space-y-1 bg-[var(--bg-canvas)] p-3">
        <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold block">
          [THE ARCHITECTURAL PROBLEM]
        </span>
        <p className="text-xs sm:text-[13px] text-[var(--text-primary)] leading-relaxed">
          {project.problem}
        </p>
      </div>

      {/* Selected Implementation Decisions */}
      <div className="space-y-2">
        <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold block">
          [KEY IMPLEMENTATION DECISIONS]
        </span>
        <ul className="space-y-1.5 text-xs sm:text-[13px] text-[var(--text-secondary)] list-none">
          {project.architecture.slice(0, 3).map((point, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-[var(--accent-terracotta)] font-mono text-xs">▪</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Measured Benchmark Ledger */}
      <div className="space-y-2">
        <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold block">
          [MEASURED BENCHMARK METRICS]
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="border border-[var(--border-rule)] px-2.5 py-1.5 bg-[var(--bg-canvas)] flex justify-between items-center">
              <span className="text-[var(--text-muted)] text-[10px]">VERIFIED</span>
              <span className="font-bold text-[var(--text-primary)] text-[11px]">{metric}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Ledger */}
      <div className="pt-2 border-t border-[var(--border-rule)] flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="border border-[var(--border-rule)] px-2 py-0.5 text-[11px] font-mono text-[var(--text-secondary)] bg-[var(--bg-surface-secondary)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onInspect(project)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium border border-[var(--border-rule)] hover:border-[var(--accent-terracotta)] text-[var(--text-primary)] hover:text-[var(--accent-terracotta)] transition-colors"
          >
            <ArchitectureIcon className="w-3.5 h-3.5" />
            <span>Inspect Spec Sheet</span>
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-[var(--border-rule)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-mono bg-[var(--accent-terracotta)] text-white hover:opacity-90 transition-opacity"
            >
              <span>Demo</span>
              <ArrowUpRightIcon className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
