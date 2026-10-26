import { ArrowDown, Download, ShieldCheck, Cpu, Terminal, ExternalLink, Award, FileCode2 } from "lucide-react";
import { personalInfo } from "../../data/personal";

export default function HeroSection() {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.12),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Positioning & Headlines */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Full-Stack, DevSecOps & Cloud Roles</span>
            </div>

            {/* Title & Name */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">{personalInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-mono text-cyan-400/90 font-medium">
                {personalInfo.title}
              </p>
            </div>

            {/* Positioning Statement */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* Quick Context Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                Nirma University (ITNU 27)
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Minor in Cybersecurity
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                HPAIR 25 Tokyo Delegate
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <FileCode2 className="w-3.5 h-3.5 text-indigo-400" />
                Co-Author IEEE Research
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>View Architecture Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePdfUrl}
                download="Sujal_Lohar_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-slate-600"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume PDF</span>
              </a>

              <a
                href="#certifications"
                className="flex items-center gap-1.5 px-4 py-3 rounded-lg text-slate-400 hover:text-white text-sm font-medium transition-colors"
              >
                <span>Verify Credentials</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Telemetry Card */}
          <div className="w-full lg:w-96 max-w-md">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>system_metrics.json</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-slate-950/70 border border-slate-800/80 p-3.5 rounded-xl">
                  <div className="text-2xl font-bold font-mono text-white tracking-tight">
                    {personalInfo.stats.projectsCount}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    Flagship Projects
                  </div>
                </div>

                <div className="bg-slate-950/70 border border-slate-800/80 p-3.5 rounded-xl">
                  <div className="text-2xl font-bold font-mono text-cyan-400 tracking-tight">
                    {personalInfo.stats.papersAccepted}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    Accepted Papers
                  </div>
                </div>

                <div className="bg-slate-950/70 border border-slate-800/80 p-3.5 rounded-xl">
                  <div className="text-2xl font-bold font-mono text-emerald-400 tracking-tight">
                    {personalInfo.stats.certificationsCount}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    Industry Certs
                  </div>
                </div>

                <div className="bg-slate-950/70 border border-slate-800/80 p-3.5 rounded-xl">
                  <div className="text-2xl font-bold font-mono text-amber-400 tracking-tight">
                    {personalInfo.stats.hackathonAwards}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    State Honors
                  </div>
                </div>
              </div>

              {/* System State Telemetry */}
              <div className="space-y-2 text-xs font-mono bg-slate-950/90 border border-slate-800/80 p-3.5 rounded-xl text-slate-400">
                <div className="flex justify-between items-center">
                  <span>Architecture</span>
                  <span className="text-slate-200">Polyglot / Cloud-Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Security Standard</span>
                  <span className="text-emerald-400">Zero-Trust / WORM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>CI/CD Pipeline</span>
                  <span className="text-cyan-400">Automated 4-Gate Scan</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Deployment Footprint</span>
                  <span className="text-slate-200">$0 Free-Tier Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
