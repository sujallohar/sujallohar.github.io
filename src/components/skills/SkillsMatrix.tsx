import { useState } from "react";
import { Wrench } from "lucide-react";
import { skillCategories } from "../../data/skills";

export default function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...skillCategories.map((c) => c.title)];

  const displayedCategories = skillCategories.filter((cat) => {
    return selectedCategory === "All" || cat.title === selectedCategory;
  });

  return (
    <section id="skills" className="py-24 border-t border-slate-900 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Categorized Skills & Engineering Context
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Practical competencies grounded in production microservices, zero-trust cloud infrastructure, and published research. Evaluated with engineering context, not arbitrary percentage bars.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all focus:outline-none ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-sm shadow-cyan-500/20"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Groups */}
        <div className="space-y-10">
          {displayedCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <div className="border-b border-slate-800 pb-2">
                <h3 className="text-lg font-bold text-white tracking-tight">{category.title}</h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></span>
                        <h4 className="text-sm font-bold text-white tracking-tight font-mono">
                          {skill.name}
                        </h4>
                      </div>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium shrink-0 ${
                          skill.level === "Core"
                            ? "bg-cyan-500/10 border border-cyan-500/30 text-cyan-400"
                            : skill.level === "Advanced"
                            ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                            : "bg-slate-800 text-slate-300 border border-slate-700"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {skill.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
