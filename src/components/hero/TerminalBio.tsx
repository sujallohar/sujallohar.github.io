import { useState } from "react";
import { Terminal as TerminalIcon, Check, Copy } from "lucide-react";
import { personalInfo } from "../../data/personal";

type TabKey = "whoami" | "architecture" | "stack" | "contact";

export default function TerminalBio() {
  const [activeTab, setActiveTab] = useState<TabKey>("whoami");
  const [copied, setCopied] = useState(false);

  const tabs: { key: TabKey; label: string; command: string }[] = [
    { key: "whoami", label: "whoami.sh", command: "curl -s https://sujallohar.dev/api/whoami" },
    { key: "architecture", label: "architecture.log", command: "cat /etc/security/architecture-spec.md" },
    { key: "stack", label: "stack.json", command: "jq .skills /etc/developer/matrix.json" },
    { key: "contact", label: "connect.sh", command: "echo $SUJAL_CONTACT_CHANNELS" }
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl font-mono text-sm">
        {/* Terminal Header */}
        <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <span className="text-xs text-slate-400 ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              sujal@nirma-secops:~
            </span>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1 text-xs">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === tab.key
                    ? "bg-slate-800 text-cyan-400 font-bold border border-slate-700"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Command Executed Bar */}
        <div className="bg-slate-950/60 px-4 py-2 border-b border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="text-cyan-400">$</span>
            <span className="text-slate-300">{tabs.find((t) => t.key === activeTab)?.command}</span>
          </div>
          <button
            onClick={() => handleCopy(tabs.find((t) => t.key === activeTab)?.command || "")}
            className="text-slate-500 hover:text-slate-300 p-1 rounded"
            title="Copy command"
            aria-label="Copy terminal command"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Terminal Output Body */}
        <div className="p-6 text-slate-300 space-y-4 bg-slate-900/60 min-h-[180px]">
          {activeTab === "whoami" && (
            <div className="space-y-2 leading-relaxed">
              <p className="text-white font-bold">
                {personalInfo.name} - Full-Stack Engineer & DevSecOps Specialist
              </p>
              <p className="text-slate-400 text-xs">
                Undergraduate candidate in Computer Science & Engineering (Minor in Cybersecurity) at Institute of Technology, Nirma University (2023 - 2027, CGPA 7.94 / 10).
              </p>
              <p className="text-slate-300 text-xs">
                Selected as a global delegate for the Harvard Project for Asian and International Relations (HPAIR 2025, Tokyo) with an acceptance rate below 10%. Co-author of an IEEE-published research paper on federated transformer models for healthcare prediction.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/50 text-cyan-300">Nirma ITNU 27</span>
                <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/50 text-emerald-300">HPAIR Tokyo 25</span>
                <span className="px-2 py-0.5 rounded bg-indigo-950/80 border border-indigo-800/50 text-indigo-300">IEEE Author</span>
                <span className="px-2 py-0.5 rounded bg-amber-950/80 border border-amber-800/50 text-amber-300">Top 8 Sanchar Mitra</span>
              </div>
            </div>
          )}

          {activeTab === "architecture" && (
            <div className="space-y-2 text-xs leading-relaxed text-slate-300">
              <div className="text-emerald-400 font-semibold">[CORE ARCHITECTURAL PRINCIPLES]</div>
              <p>- Polyglot Microservices: Separation of concerns, gRPC inter-service transport, Saga choreography with compensating transactions.</p>
              <p>- DevSecOps Quality Gates: Shift-left static analysis (GitLeaks, SCA, Oxlint), container non-root execution contexts, and ephemeral health probes.</p>
              <p>- Cryptographic Integrity: SHA-256 hash chaining and Write-Once-Read-Many (WORM) audit ledger rules for verifiable non-repudiation.</p>
              <p>- Zero-Dollar Cost Architecture: Engineering resilient multi-cloud failover leveraging GitHub Pages, Vercel, and Render free tiers.</p>
            </div>
          )}

          {activeTab === "stack" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <span className="text-cyan-400 font-semibold">Languages & Backend:</span>
                <p className="text-slate-400">Java 21 (Spring Boot 3.2), Python (Flask/FastAPI), TypeScript, C++, Bash</p>
              </div>
              <div className="space-y-1">
                <span className="text-emerald-400 font-semibold">Cloud, DevOps & Infra:</span>
                <p className="text-slate-400">Docker (Alpine non-root), Kubernetes, GitHub Actions CI/CD, Istio, Prometheus, Grafana</p>
              </div>
              <div className="space-y-1">
                <span className="text-amber-400 font-semibold">Security & AppSec:</span>
                <p className="text-slate-400">Trivy, GitLeaks, Falco runtime tracing, Zod validation, Web Crypto SHA-256</p>
              </div>
              <div className="space-y-1">
                <span className="text-indigo-400 font-semibold">Databases & Storage:</span>
                <p className="text-slate-400">PostgreSQL, MongoDB, Redis 7.2 (tokens/sessions), Cloud Firestore (WORM)</p>
              </div>
            </div>
          )}

          {activeTab === "contact" && (
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-slate-500">Email:</span>
                <a href={`mailto:${personalInfo.email}`} className="text-cyan-400 hover:underline">{personalInfo.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">University:</span>
                <span className="text-slate-300">{personalInfo.universityEmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">Phone:</span>
                <span className="text-slate-300">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">GitHub:</span>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{personalInfo.github}</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">LinkedIn:</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{personalInfo.linkedin}</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
