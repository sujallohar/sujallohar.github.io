import React, { useState, useEffect } from "react";
import { GithubIcon, ArrowUpRightIcon } from "../ui/Icons";

interface GitHubUserStats {
  publicRepos: number;
  followers: number;
  following: number;
  updatedAt: string;
}

interface RecentRepo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  url: string;
  language: string;
  updatedAt: string;
}

const CACHE_KEY = "sujal_github_telemetry_v2";
const CACHE_DURATION_MS = 12 * 60 * 60 * 1000; // 12 hours

export const GitHubTelemetry: React.FC = () => {
  const [stats, setStats] = useState<GitHubUserStats>({
    publicRepos: 20,
    followers: 12,
    following: 15,
    updatedAt: "2026-10-26"
  });

  const [recentRepos, setRecentRepos] = useState<RecentRepo[]>([
    {
      name: "GovtAssets",
      description: "Distributed enterprise asset platform built on polyglot microservice principles (Java 21, Spring Boot 3.2, gRPC).",
      stars: 4,
      forks: 1,
      url: "https://github.com/sujallohar/GovtAssets",
      language: "Java",
      updatedAt: "Oct 2026"
    },
    {
      name: "GovAsset-360",
      description: "AppSec Gateway, SHA-256 hash-chaining audit engine, and WORM immutable storage rules.",
      stars: 3,
      forks: 0,
      url: "https://github.com/sujallohar/GovAsset-360",
      language: "TypeScript",
      updatedAt: "Sep 2026"
    },
    {
      name: "Smart-Health-Monitoring-System",
      description: "IoT biometric telemetry streaming over TLS 1.3 MQTT into InfluxDB and Grafana.",
      stars: 5,
      forks: 2,
      url: "https://github.com/sujallohar/Smart-Health-Monitoring-System",
      language: "C++",
      updatedAt: "May 2025"
    }
  ]);

  const [cacheStatus, setCacheStatus] = useState<"LIVE" | "CACHED" | "STANDBY">("STANDBY");
  const [latencyMs, setLatencyMs] = useState<number>(0);

  useEffect(() => {
    const fetchGitHubData = async () => {
      const startTime = performance.now();
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < CACHE_DURATION_MS) {
            setStats(parsed.stats);
            if (parsed.recentRepos) setRecentRepos(parsed.recentRepos);
            setCacheStatus("CACHED");
            setLatencyMs(Math.round(performance.now() - startTime));
            return;
          }
        }

        const userRes = await fetch("https://api.github.com/users/sujallohar");
        if (!userRes.ok) throw new Error("API Limit");
        const userData = await userRes.json();

        const newStats: GitHubUserStats = {
          publicRepos: userData.public_repos ?? 20,
          followers: userData.followers ?? 12,
          following: userData.following ?? 15,
          updatedAt: userData.updated_at ? new Date(userData.updated_at).toISOString().split("T")[0] : "2026-10-26"
        };

        const reposRes = await fetch("https://api.github.com/users/sujallohar/repos?sort=pushed&per_page=3");
        let newRepos = recentRepos;
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData) && reposData.length > 0) {
            newRepos = reposData.map((r: any) => ({
              name: r.name,
              description: r.description || "Active engineering repository",
              stars: r.stargazers_count,
              forks: r.forks_count,
              url: r.html_url,
              language: r.language || "TypeScript",
              updatedAt: new Date(r.pushed_at).toISOString().split("T")[0]
            }));
          }
        }

        setStats(newStats);
        setRecentRepos(newRepos);
        setCacheStatus("LIVE");
        setLatencyMs(Math.round(performance.now() - startTime));

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ timestamp: Date.now(), stats: newStats, recentRepos: newRepos })
        );
      } catch (e) {
        setCacheStatus("STANDBY");
        setLatencyMs(Math.round(performance.now() - startTime));
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <div className="border border-[var(--border-rule)] bg-[var(--bg-surface)] p-6 space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-rule)] pb-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <GithubIcon className="w-4 h-4 text-[var(--accent-terracotta)]" />
          <span className="font-bold text-[var(--text-primary)]">
            [STATION TELEMETRY // GITHUB: @SUJALLOHAR]
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10.5px] text-[var(--text-muted)]">
          <span>STATUS: <span className="text-[var(--accent-terracotta)] font-bold">{cacheStatus}</span></span>
          <span>•</span>
          <span>LATENCY: {latencyMs}ms</span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
        <div className="border border-[var(--border-rule)] p-2.5 bg-[var(--bg-canvas)]">
          <span className="text-[10px] text-[var(--text-muted)] block">PUBLIC REPOSITORIES</span>
          <span className="text-base font-bold text-[var(--text-primary)]">{stats.publicRepos}</span>
        </div>
        <div className="border border-[var(--border-rule)] p-2.5 bg-[var(--bg-canvas)]">
          <span className="text-[10px] text-[var(--text-muted)] block">TELEMETRY SYNC</span>
          <span className="text-base font-bold text-[var(--text-primary)]">{stats.updatedAt}</span>
        </div>
        <div className="border border-[var(--border-rule)] p-2.5 bg-[var(--bg-canvas)]">
          <span className="text-[10px] text-[var(--text-muted)] block">NETWORK FOLLOWERS</span>
          <span className="text-base font-bold text-[var(--text-primary)]">{stats.followers}</span>
        </div>
        <div className="border border-[var(--border-rule)] p-2.5 bg-[var(--bg-canvas)]">
          <span className="text-[10px] text-[var(--text-muted)] block">CACHE WINDOW</span>
          <span className="text-base font-bold text-[var(--text-primary)]">12 HOURS</span>
        </div>
      </div>

      {/* Recent Pushed Repos */}
      <div className="space-y-2">
        <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold block">
          [ACTIVE REPOSITORIES FEED]
        </span>
        <div className="divide-y divide-[var(--border-rule)] border border-[var(--border-rule)]">
          {recentRepos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="p-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 hover:bg-[var(--bg-surface-secondary)]/50 transition-colors block group text-xs font-mono"
            >
              <div>
                <span className="font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-terracotta)] transition-colors">
                  {repo.name}
                </span>
                <span className="text-[11px] text-[var(--text-muted)] ml-2">
                  [{repo.language}]
                </span>
                <p className="text-[11.5px] text-[var(--text-secondary)] font-sans mt-0.5 line-clamp-1">
                  {repo.description}
                </p>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[var(--text-muted)] whitespace-nowrap">
                <span>{repo.updatedAt}</span>
                <ArrowUpRightIcon className="w-3 h-3 group-hover:text-[var(--accent-terracotta)]" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
