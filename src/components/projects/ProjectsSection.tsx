import React, { useState, useMemo } from "react";
import { Project } from "../../types/portfolio";
import { projectsList } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { SearchIcon } from "../ui/Icons";

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ["All", "Microservices", "DevSecOps", "Healthcare AI", "Full-Stack"];

  const filteredProjects = useMemo(() => {
    return projectsList.filter(project => {
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        project.title.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.problem.toLowerCase().includes(q) ||
        project.techStack.some(t => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="case-studies" className="border-b border-[var(--border-rule)] py-12 sm:py-16 space-y-8">
      {/* Section Header */}
      <div className="space-y-2 border-b border-[var(--border-rule)] pb-4">
        <div className="text-[11px] font-mono text-[var(--accent-terracotta)] uppercase tracking-widest font-semibold">
          [§02 // SYSTEMS CASE STUDIES]
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[var(--text-primary)] tracking-tight">
          Distributed Architectures & Security Ledgers
        </h2>
        <p className="text-sm text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          These case studies document production systems I have architected and benchmarked. Each project addresses a specific architectural failure mode, from state machine consensus in microservices to cryptographic tamper resistance in public audit ledgers.
        </p>
      </div>

      {/* Filter & Search Rail */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border border-[var(--border-rule)] p-2 bg-[var(--bg-surface)]">
        {/* Categories */}
        <div className="flex flex-wrap gap-1">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 text-xs font-mono transition-colors ${
                selectedCategory === cat
                  ? "bg-[var(--accent-terracotta)] text-white font-bold"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-secondary)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative min-w-[200px]">
          <SearchIcon className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-[var(--text-muted)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Filter by stack or problem..."
            aria-label="Filter case studies by technology or problem"
            className="w-full pl-8 pr-3 py-1 text-xs font-mono bg-[var(--bg-canvas)] border border-[var(--border-rule)] text-[var(--text-primary)] focus:outline-hidden focus:border-[var(--accent-terracotta)]"
          />
        </div>
      </div>

      {/* Case Studies List */}
      <div className="space-y-6">
        {filteredProjects.length === 0 ? (
          <div className="border border-[var(--border-rule)] p-8 text-center bg-[var(--bg-surface)]">
            <p className="text-xs font-mono text-[var(--text-muted)]">
              NO MATCHING CASE STUDIES FOUND FOR QUERY: "{searchQuery}"
            </p>
          </div>
        ) : (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onInspect={p => setActiveProject(p)}
            />
          ))
        )}
      </div>

      {/* Deep-dive Spec Sheet Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
