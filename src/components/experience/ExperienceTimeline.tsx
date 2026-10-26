import React, { useState } from "react";
import { experienceList } from "../../data/experience";

export const ExperienceTimeline: React.FC = () => {
  const [filterType, setFilterType] = useState<string>("All");

  const filterOptions = ["All", "Industry", "Research", "Leadership"];

  const filteredExperiences = experienceList.filter(item => {
    if (filterType === "All") return true;
    return item.type === filterType;
  });

  return (
    <section id="record" className="border-b border-[var(--border-rule)] py-12 sm:py-16 space-y-8">
      {/* Header */}
      <div className="space-y-2 border-b border-[var(--border-rule)] pb-4">
        <div className="text-[11px] font-mono text-[var(--accent-terracotta)] uppercase tracking-widest font-semibold">
          [§04 // CAREER & FELLOWSHIP RECORD]
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[var(--text-primary)] tracking-tight">
          Engineering Appointments & Leadership
        </h2>
        <p className="text-sm text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          Chronological record of my software engineering internships, academic research fellowships, and international delegations.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-1 border border-[var(--border-rule)] p-1.5 bg-[var(--bg-surface)]">
        {filterOptions.map(opt => (
          <button
            key={opt}
            type="button"
            onClick={() => setFilterType(opt)}
            className={`px-3 py-1 text-xs font-mono transition-colors ${
              filterType === opt
                ? "bg-[var(--accent-terracotta)] text-white font-bold"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-secondary)]"
            }`}
          >
            {opt === "All" ? "All Appointments" : opt}
          </button>
        ))}
      </div>

      {/* Timeline Entries Ledger */}
      <div className="divide-y divide-[var(--border-rule)] border border-[var(--border-rule)] bg-[var(--bg-surface)]">
        {filteredExperiences.map(exp => (
          <article key={exp.id} className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 hover:bg-[var(--bg-surface-secondary)]/30 transition-colors">
            {/* Left Column (4 cols): Chronology & Location */}
            <div className="md:col-span-4 space-y-2 font-mono">
              <div className="text-xs font-bold text-[var(--text-primary)]">
                {exp.startDate} — {exp.endDate}
              </div>
              <div className="text-[11px] text-[var(--text-muted)]">
                {exp.location}
              </div>
              <div>
                <span className="inline-block border border-[var(--border-rule)] px-2 py-0.5 text-[10px] uppercase text-[var(--accent-terracotta)] bg-[var(--bg-canvas)] font-bold">
                  [{exp.type}]
                </span>
              </div>
            </div>

            {/* Right Column (8 cols): Role, Org & Achievements */}
            <div className="md:col-span-8 space-y-4">
              <div>
                <h3 className="text-xl font-bold font-serif text-[var(--text-primary)]">
                  {exp.role}
                </h3>
                <div className="text-sm font-medium text-[var(--text-secondary)] font-mono mt-0.5">
                  {exp.organization}
                </div>
              </div>

              {/* Responsibilities Narrative */}
              <ul className="space-y-1.5 text-xs sm:text-[13px] text-[var(--text-primary)] list-none">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-2.5 leading-relaxed">
                    <span className="text-[var(--accent-terracotta)] font-mono text-xs pt-0.5">▪</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Verified Metrics Callout */}
              {exp.metrics && exp.metrics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
                  {exp.metrics.map((m, idx) => (
                    <div key={idx} className="border border-[var(--border-rule)] px-2.5 py-1 bg-[var(--bg-canvas)] text-[var(--text-secondary)] flex items-center gap-1.5">
                      <span className="text-[var(--accent-verdigris)] font-bold">+</span>
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills Applied */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--border-rule)]">
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className="text-[10.5px] font-mono border border-[var(--border-rule)] px-2 py-0.5 bg-[var(--bg-surface-secondary)] text-[var(--text-secondary)]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
