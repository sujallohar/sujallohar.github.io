import { useState } from "react";
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { experienceList } from "../../data/experience";
import { educationList } from "../../data/education";

export default function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState<"All" | "Industry" | "Leadership" | "Education">("All");

  const filteredExperiences = experienceList.filter((exp) => {
    if (activeTab === "All") return true;
    if (activeTab === "Industry") return exp.type === "Industry";
    if (activeTab === "Leadership") return exp.type === "Leadership";
    return false;
  });

  return (
    <section id="experience" className="py-24 border-t border-slate-900 bg-slate-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Progression & Academic Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on technical internships in AI model serving, automated notification pipelines, and sensor-driven kitchen automation alongside competitive global leadership roles.
          </p>
        </div>

        {/* Filter Switcher */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          {(["All", "Industry", "Leadership", "Education"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-lg transition-all focus:outline-none ${
                activeTab === tab
                  ? "bg-emerald-500 text-slate-950 font-bold shadow-sm shadow-emerald-500/20"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              {tab === "Education" ? "Education Only" : tab}
            </button>
          ))}
        </div>

        {/* Experience List (Shown when not in Education only mode) */}
        {activeTab !== "Education" && (
          <div className="space-y-6 relative before:absolute before:inset-0 before:left-5 before:md:left-1/2 before:-translate-x-px before:w-0.5 before:bg-slate-800">
            {filteredExperiences.map((exp, idx) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-start gap-6 group ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-400 group-hover:bg-emerald-400 transition-colors z-10"></div>

                {/* Content Box */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                  <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all shadow-md space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium">
                        {exp.type}
                      </span>
                      <span className="text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">{exp.role}</h3>
                      <div className="text-cyan-400 font-mono text-sm font-medium">{exp.organization}</div>
                      <div className="text-slate-500 font-mono text-xs flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2 text-xs text-slate-300 leading-relaxed font-sans">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Metrics Pills */}
                    {exp.metrics && exp.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {exp.metrics.map((m, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-slate-950 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono flex items-center gap-1"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            {m}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Skills Covered */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400 text-[11px] font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education Section */}
        {(activeTab === "All" || activeTab === "Education") && (
          <div className="pt-12 space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-bold text-white tracking-tight">Academic Credentials</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {educationList.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-3 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>{edu.startDate} - {edu.endDate}</span>
                    {edu.grade && (
                      <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold">
                        {edu.grade}
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white tracking-tight">{edu.institution}</h4>
                    <p className="text-sm text-cyan-400 font-medium">{edu.degree}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{edu.field}</p>
                  </div>

                  {edu.details && edu.details.length > 0 && (
                    <ul className="space-y-1.5 text-xs text-slate-400 font-sans pt-2 border-t border-slate-800/80">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
