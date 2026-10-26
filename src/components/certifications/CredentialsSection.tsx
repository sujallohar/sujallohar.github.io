import { useState } from "react";
import { ShieldCheck, ExternalLink, Check, Copy, Calendar, Trophy } from "lucide-react";
import { certificationsList } from "../../data/certifications";
import { awardsList } from "../../data/awards";

export default function CredentialsSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (idText: string, key: string) => {
    navigator.clipboard.writeText(idText);
    setCopiedId(key);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="certifications" className="py-24 border-t border-slate-900 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Accredited Credentials & Honors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry Certifications & State Awards
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Verified technical specializations across Oracle Cloud DevOps, applied cryptography, container security, and governmental digital service honors.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-2">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>Verified Professional Certifications</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsList.map((cert) => (
              <div
                key={cert.id}
                className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-medium">
                      {cert.issuer}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.issueDate}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white tracking-tight leading-snug">
                    {cert.name}
                  </h4>

                  {cert.credentialId && (
                    <div className="bg-slate-950 border border-slate-800/80 rounded-lg p-2 flex items-center justify-between text-xs font-mono text-slate-400">
                      <div className="truncate mr-2">
                        <span className="text-slate-500 text-[10px] block">CREDENTIAL ID</span>
                        <span className="text-slate-200 select-all">{cert.credentialId}</span>
                      </div>
                      <button
                        onClick={() => handleCopy(cert.credentialId!, cert.id)}
                        className="text-slate-400 hover:text-cyan-400 p-1 rounded"
                        title="Copy credential ID"
                        aria-label="Copy credential ID"
                      >
                        {copiedId === cert.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  )}

                  {/* Skills Covered */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skillsCovered.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400 text-[11px] font-mono"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {cert.verifyUrl && (
                  <div className="pt-3 border-t border-slate-800/80">
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                    >
                      <span>Show Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Honors and Awards Grid */}
        <div className="space-y-6 pt-6">
          <div className="border-b border-slate-800 pb-2">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" />
              <span>Honors & Fellowships</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardsList.map((award) => (
              <div
                key={award.id}
                className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all space-y-3 shadow-md"
              >
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-medium">
                    {award.scope}
                  </span>
                  <span>{award.date}</span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white tracking-tight">{award.title}</h4>
                  <p className="text-xs font-mono text-cyan-400 mt-0.5">{award.organization}</p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
