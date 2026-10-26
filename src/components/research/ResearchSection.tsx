import { useState } from "react";
import { BookOpen, ExternalLink, ChevronDown, ChevronUp, Users, Calendar } from "lucide-react";
import { publicationsList } from "../../data/research";

export default function ResearchSection() {
  const [expandedId, setExpandedId] = useState<string | null>("ieee-federated-icu");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="research" className="py-24 border-t border-slate-900 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-xs font-mono text-indigo-400">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Research & Publications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Peer-Reviewed Papers & Whitepapers
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Investigating privacy-preserving federated deep learning, multi-hop explainable AI (XAI) attention rollouts, and distributed healthcare intelligence.
          </p>
        </div>

        {/* Papers List */}
        <div className="space-y-6">
          {publicationsList.map((pub) => {
            const isExpanded = expandedId === pub.id;
            return (
              <div
                key={pub.id}
                className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all space-y-4 shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full font-medium ${
                        pub.status === "Published"
                          ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                          : "bg-indigo-500/10 border border-indigo-500/30 text-indigo-400"
                      }`}
                    >
                      {pub.status} - {pub.publisher}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {pub.year}
                    </span>
                  </div>

                  <span className="text-slate-400">{pub.conference}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                  {pub.title}
                </h3>

                {/* Authors & Mentorship */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Authors: {pub.authors.join(", ")}</span>
                  </div>
                  {pub.mentor && (
                    <div className="text-slate-500">
                      Faculty Mentor: <span className="text-slate-300">{pub.mentor}</span>
                    </div>
                  )}
                </div>

                {/* Abstract Preview & Collapsible Details */}
                <div className="space-y-3">
                  <p className={`text-xs sm:text-sm text-slate-300 leading-relaxed font-sans ${!isExpanded ? "line-clamp-2" : ""}`}>
                    {pub.abstract}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80">
                    {/* Keywords */}
                    <div className="flex flex-wrap gap-1.5">
                      {pub.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400 text-[11px] font-mono"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono">
                      <button
                        onClick={() => toggleExpand(pub.id)}
                        className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 focus:outline-none"
                      >
                        <span>{isExpanded ? "Hide Abstract" : "Read Abstract"}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      {pub.paperUrl && (
                        <a
                          href={pub.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                        >
                          <span>Publication Info</span>
                          <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
