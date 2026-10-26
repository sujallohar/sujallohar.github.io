import { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/hero/HeroSection";
import TerminalBio from "./components/hero/TerminalBio";
import GitHubTelemetry from "./components/github/GitHubTelemetry";
import ProjectsSection from "./components/projects/ProjectsSection";
import ExperienceTimeline from "./components/experience/ExperienceTimeline";
import SkillsMatrix from "./components/skills/SkillsMatrix";
import ResearchSection from "./components/research/ResearchSection";
import CredentialsSection from "./components/certifications/CredentialsSection";
import ContactSection from "./components/contact/ContactSection";
import CommandPalette from "./components/ui/CommandPalette";
import ProjectModal from "./components/projects/ProjectModal";
import { Project } from "./types/portfolio";

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Top Fixed Header */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-slate-950 focus:font-bold focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white text-xs font-mono"
      >
        Skip to main content
      </a>
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <TerminalBio />
        <GitHubTelemetry />
        <ProjectsSection onInspectProject={(proj) => setSelectedProject(proj)} />
        <ExperienceTimeline />
        <SkillsMatrix />
        <ResearchSection />
        <CredentialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Global Modals */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
