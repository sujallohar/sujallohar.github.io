import { ExternalLink, BookOpen, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import { GithubIcon } from "../ui/Icons";
import { Project } from "../../types/portfolio";

interface ProjectCardProps {
  project: Project;
  onInspect: (project: Project) => void;
}

export default function ProjectCard({ project, onInspect }: ProjectCardProps) {
  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-cyan-500/5">
      <div className="p-6 space-y-4">
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 text-xs font-mono">
          <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-medium">
            {project.category}
          </span>
          <span className="text-slate-500">
            {project.completionDate}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-slate-300 leading-relaxed">
          {project.summary}
        </p>

        {/* Key Architectural Highlights */}
        <div className="space-y-2 pt-2 border-t border-slate-800/80">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            Architectural Highlights
          </span>
          <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
            {project.architecture.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                <span className="line-clamp-2">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Impact Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="pt-2">
            <div className="flex flex-wrap gap-1.5">
              {project.metrics.map((metric, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  {metric}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="pt-2 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300 text-[11px] font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Links & Inspect Trigger */}
      <div className="px-6 py-4 bg-slate-950/70 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
              title="View GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-medium transition-colors"
              title="Open Live Deployment"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live App</span>
            </a>
          )}

          {project.docsUrl && (
            <a
              href={project.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
              title="Read Documentation"
            >
              <BookOpen className="w-4 h-4" />
              <span>Docs</span>
            </a>
          )}
        </div>

        <button
          onClick={() => onInspect(project)}
          className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold group-hover:translate-x-0.5 transition-all focus:outline-none"
        >
          <span>Deep-Dive</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
