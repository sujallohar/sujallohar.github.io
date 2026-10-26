import React from "react";
import { skillCategories } from "../../data/skills";

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="capability" className="border-b border-[var(--border-rule)] py-12 sm:py-16 space-y-8">
      {/* Header */}
      <div className="space-y-2 border-b border-[var(--border-rule)] pb-4">
        <div className="text-[11px] font-mono text-[var(--accent-terracotta)] uppercase tracking-widest font-semibold">
          [§05 // CAPABILITY INVENTORY]
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[var(--text-primary)] tracking-tight">
          Systems Engineering Tooling & Core Competencies
        </h2>
        <p className="text-sm text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          I do not believe in arbitrary percentage bars for skills. Below is an inventory of technologies, protocols, and frameworks I use in production, paired with the exact operational context in which I deploy them.
        </p>
      </div>

      {/* Grid of Domains */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="border border-[var(--border-rule)] bg-[var(--bg-surface)] p-6 space-y-4 hover:border-[var(--border-rule-strong)] transition-colors"
          >
            {/* Domain Title & Description */}
            <div className="border-b border-[var(--border-rule)] pb-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[var(--accent-terracotta)] font-bold">
                  DOMAIN // 0{idx + 1}
                </span>
                <span className="text-[var(--text-muted)]">
                  {category.skills.length} TECHNOLOGIES
                </span>
              </div>
              <h3 className="text-xl font-bold font-serif text-[var(--text-primary)] mt-1">
                {category.title}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                {category.description}
              </p>
            </div>

            {/* Skills List with Real Production Context */}
            <div className="divide-y divide-[var(--border-rule)] text-xs">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="py-2.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-center gap-2 min-w-[170px]">
                    <span className="font-bold text-[var(--text-primary)] font-mono text-[12.5px]">
                      {skill.name}
                    </span>
                    <span className={`text-[9px] font-mono uppercase px-1 py-0.2 border ${
                      skill.level === "Core"
                        ? "border-[var(--accent-terracotta)] text-[var(--accent-terracotta)]"
                        : "border-[var(--border-rule-strong)] text-[var(--text-muted)]"
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                  <div className="text-[11.5px] text-[var(--text-secondary)] leading-relaxed sm:text-right">
                    {skill.context}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
