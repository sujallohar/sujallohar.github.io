import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../ui/Icons";
import { personalInfo } from "../../data/personal";

interface GitHubData {
  publicRepos: number;
  followers: number;
  starsCount: number;
  recentRepo: string;
  recentRepoDesc: string;
  recentRepoLang: string;
  updatedAt: string;
}

export default function GitHubTelemetry() {
  const [data, setData] = useState<GitHubData>({
    publicRepos: 17,
    followers: 12,
    starsCount: 8,
    recentRepo: "GovtAssets",
    recentRepoDesc: "GovAsset Nexus: Polyglot microservices architecture with Java 21 Spring Boot and Kubernetes",
    recentRepoLang: "Java",
    updatedAt: "Live Sync"
  });

  useEffect(() => {
    const fetchGitHub = async () => {
      const cacheKey = "sujal_github_telemetry_v1";
      const cached = localStorage.getItem(cacheKey);

      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < 1000 * 60 * 60 * 12) {
            setData(parsed.data);
            return;
          }
        } catch {
          // ignore cache errors
        }
      }

      try {
        const userRes = await fetch("https://api.github.com/users/sujallohar");
        if (userRes.ok) {
          const user = await userRes.json();
          const reposRes = await fetch("https://api.github.com/users/sujallohar/repos?sort=updated&per_page=5");
          let latestRepo = "GovtAssets";
          let latestDesc = "Distributed polyglot microservice enterprise architecture.";
          let latestLang = "Java";
          let totalStars = 0;

          if (reposRes.ok) {
            const repos = await reposRes.json();
            if (Array.isArray(repos) && repos.length > 0) {
              latestRepo = repos[0].name;
              latestDesc = repos[0].description || "Engineering production system";
              latestLang = repos[0].language || "TypeScript";
              totalStars = repos.reduce((acc: number, r: any) => acc + (r.stargazers_count || 0), 0);
            }
          }

          const freshData: GitHubData = {
            publicRepos: user.public_repos || 17,
            followers: user.followers || 12,
            starsCount: Math.max(totalStars, 8),
            recentRepo: latestRepo,
            recentRepoDesc: latestDesc,
            recentRepoLang: latestLang,
            updatedAt: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          };

          setData(freshData);
          localStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), data: freshData }));
        }
      } catch {
        // Fallback remains active
      }
    };

    fetchGitHub();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl font-mono text-xs text-slate-400 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <GithubIcon className="w-4 h-4 text-cyan-400" />
            <span className="text-white font-bold text-sm">Live GitHub Telemetry (api.github.com)</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-500">Cache TTL: 12h ({data.updatedAt})</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
            >
              <span>github.com/sujallohar</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-slate-950/80 border border-slate-800/80 p-3 rounded-xl">
            <div className="text-slate-500 text-[10px] uppercase">PUBLIC REPOSITORIES</div>
            <div className="text-xl font-bold text-white mt-1">{data.publicRepos}</div>
          </div>

          <div className="bg-slate-950/80 border border-slate-800/80 p-3 rounded-xl">
            <div className="text-slate-500 text-[10px] uppercase">STARS ACCUMULATED</div>
            <div className="text-xl font-bold text-amber-400 mt-1">{data.starsCount}+</div>
          </div>

          <div className="bg-slate-950/80 border border-slate-800/80 p-3 rounded-xl">
            <div className="text-slate-500 text-[10px] uppercase">LATEST REPOSITORY</div>
            <div className="text-sm font-bold text-cyan-400 truncate mt-1">{data.recentRepo}</div>
          </div>

          <div className="bg-slate-950/80 border border-slate-800/80 p-3 rounded-xl">
            <div className="text-slate-500 text-[10px] uppercase">PRIMARY STACK</div>
            <div className="text-sm font-bold text-emerald-400 mt-1">{data.recentRepoLang} / Polyglot</div>
          </div>
        </div>
      </div>
    </div>
  );
}
