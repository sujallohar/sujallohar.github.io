import React, { useState, useEffect } from "react";
import { personalInfo } from "../../data/personal";
import { SunIcon, MoonIcon, DocumentIcon, TerminalIcon } from "../ui/Icons";

interface NavbarProps {
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenCommandPalette,
  activeSection
}) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  const [timeString, setTimeString] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      // Local time in Ahmedabad, India (UTC+05:30)
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      };
      setTimeString(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio_theme", "light");
    }
  };

  const navItems = [
    { id: "dispatch", label: "01 // DISPATCH" },
    { id: "case-studies", label: "02 // CASE STUDIES" },
    { id: "proceedings", label: "03 // PROCEEDINGS" },
    { id: "record", label: "04 // CAREER RECORD" },
    { id: "capability", label: "05 // CAPABILITY INVENTORY" },
    { id: "commendations", label: "06 // COMMENDATIONS" },
    { id: "contact", label: "07 // DIRECT DISPATCH" }
  ];

  return (
    <>
      {/* Mobile Top Header (< 1024px) */}
      <header className="lg:hidden sticky top-0 z-40 bg-[var(--bg-canvas)] border-b border-[var(--border-rule)] px-4 py-3 flex items-center justify-between no-print">
        <a href="#dispatch" className="flex items-center gap-2.5 group">
          <img src="/favicon.svg" alt="SL Logo" className="w-6 h-6 border border-[var(--border-rule)]" />
          <span className="text-xs font-mono font-bold text-[var(--text-primary)] tracking-wide">
            SUJAL LOHAR
          </span>
        </a>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 border border-[var(--border-rule)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            aria-label="Toggle color theme"
          >
            {isDark ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={onOpenResume}
            className="px-2.5 py-1 text-xs font-mono font-medium border border-[var(--accent-terracotta)] text-[var(--accent-terracotta)] hover:bg-[var(--accent-subtle)]"
          >
            CV
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 border border-[var(--border-rule)] text-xs font-mono"
            aria-label="Toggle section index menu"
          >
            {mobileMenuOpen ? "CLOSE" : "INDEX"}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-12 z-30 bg-[var(--bg-canvas)] border-b border-[var(--border-rule)] p-4 space-y-2 no-print shadow-xl">
          <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2">
            Table of Contents
          </div>
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-xs font-mono py-1.5 px-2 border-l-2 ${
                activeSection === item.id
                  ? "border-[var(--accent-terracotta)] text-[var(--accent-terracotta)] font-bold bg-[var(--bg-surface-secondary)]"
                  : "border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[var(--border-rule)] flex justify-between items-center text-[10px] font-mono text-[var(--text-muted)]">
            <span>STATION: AHMEDABAD</span>
            <span>{timeString} IST</span>
          </div>
        </div>
      )}

      {/* Desktop Persistent Left Dossier Rail (>= 1024px) */}
      <aside className="hidden lg:flex flex-col w-72 sticky top-0 h-screen border-r border-[var(--border-rule)] bg-[var(--bg-canvas)] p-6 justify-between select-none no-print overflow-y-auto">
        {/* Top: Identity Ledger */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <img src="/favicon.svg" alt="SL Logo" className="w-8 h-8 border border-[var(--border-rule)]" />
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-terracotta)] font-semibold">
                  [§ MONOGRAPH INDEX]
                </div>
                <div className="text-[10.5px] font-mono text-[var(--text-muted)]">
                  DOC-ID: NU-CSE-2027
                </div>
              </div>
            </div>
            <div>
              <a href="#dispatch" className="block group">
                <h1 className="text-xl font-bold font-serif text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent-terracotta)] transition-colors">
                  {personalInfo.name}
                </h1>
              </a>
              <p className="text-xs font-mono text-[var(--text-secondary)] mt-1 leading-snug">
                Full-Stack & DevSecOps Engineer
              </p>
              <div className="text-[11px] font-mono text-[var(--text-muted)] mt-0.5">
                Nirma University // CSE '27
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <nav aria-label="Monograph Sections" className="space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] mb-2 font-semibold">
              Contents
            </div>
            {navItems.map(item => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`group flex items-center justify-between text-[11.5px] font-mono py-1 px-2 border-l-2 transition-colors ${
                    isActive
                      ? "border-[var(--accent-terracotta)] text-[var(--accent-terracotta)] font-bold bg-[var(--bg-surface-secondary)]"
                      : "border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-rule-strong)]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="text-[10px] text-[var(--accent-terracotta)]">
                      ◄
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Quick Actions */}
          <div className="space-y-2 pt-2 border-t border-[var(--border-rule)]">
            <button
              type="button"
              onClick={onOpenResume}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-mono border border-[var(--border-rule)] hover:border-[var(--accent-terracotta)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:text-[var(--accent-terracotta)] transition-colors text-left"
            >
              <div className="flex items-center gap-2">
                <DocumentIcon className="w-3.5 h-3.5 text-[var(--accent-terracotta)]" />
                <span>Resume Studio</span>
              </div>
              <span className="text-[10px] text-[var(--text-muted)] font-mono">3 VAR</span>
            </button>

            <button
              type="button"
              onClick={onOpenCommandPalette}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-mono border border-[var(--border-rule)] hover:border-[var(--border-rule-strong)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-left"
            >
              <div className="flex items-center gap-2">
                <TerminalIcon className="w-3.5 h-3.5" />
                <span>Command Palette</span>
              </div>
              <kbd className="text-[10px] border border-[var(--border-rule)] px-1 py-0.5 bg-[var(--bg-surface-secondary)]">
                ⌘K
              </kbd>
            </button>
          </div>
        </div>

        {/* Bottom: Telemetry Ledger */}
        <div className="pt-6 border-t border-[var(--border-rule)] space-y-3 text-[11px] font-mono text-[var(--text-muted)]">
          <div className="flex justify-between items-center">
            <span>THEME MODE</span>
            <button
              type="button"
              onClick={toggleTheme}
              className="p-1 border border-[var(--border-rule)] text-[var(--text-primary)] hover:border-[var(--accent-terracotta)] transition-colors"
              aria-label="Toggle light/dark theme"
            >
              {isDark ? <SunIcon className="w-3.5 h-3.5" /> : <MoonIcon className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div>
            <div className="flex justify-between">
              <span>STATION</span>
              <span className="text-[var(--text-secondary)] font-medium">AHMEDABAD, IN</span>
            </div>
            <div className="flex justify-between mt-0.5">
              <span>COORDINATES</span>
              <span className="text-[var(--text-secondary)]">23.02° N, 72.57° E</span>
            </div>
            <div className="flex justify-between mt-0.5">
              <span>STATION CLOCK</span>
              <span className="text-[var(--text-primary)] font-bold tabular-nums">
                {timeString || "00:00:00"} IST
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-[var(--border-rule)] text-[10px] text-[var(--text-muted)] leading-relaxed">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent-verdigris)] mr-1.5 align-middle"></span>
            <span>SYSTEM ACTIVE // RESILIENT BY DESIGN</span>
          </div>
        </div>
      </aside>
    </>
  );
};
