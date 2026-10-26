import React, { useState, useEffect } from "react";
import { ResumeVariant } from "./types/portfolio";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { DispatchHeader } from "./components/hero/DispatchHeader";
import { ProjectsSection } from "./components/projects/ProjectsSection";
import { ResearchSection } from "./components/research/ResearchSection";
import { ExperienceTimeline } from "./components/experience/ExperienceTimeline";
import { SkillsMatrix } from "./components/skills/SkillsMatrix";
import { CredentialsSection } from "./components/certifications/CredentialsSection";
import { ContactSection } from "./components/contact/ContactSection";
import { GitHubTelemetry } from "./components/github/GitHubTelemetry";
import { ResumeStudioModal } from "./components/resume/ResumeStudioModal";
import { ResumeView } from "./components/resume/ResumeView";
import { CommandPalette } from "./components/ui/CommandPalette";

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("dispatch");
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [selectedResumeVariant, setSelectedResumeVariant] = useState<ResumeVariant>("one-page");
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        "dispatch",
        "case-studies",
        "proceedings",
        "record",
        "capability",
        "commendations",
        "contact"
      ];

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global Keyboard shortcuts: Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleOpenResume = (variant: ResumeVariant = "one-page") => {
    setSelectedResumeVariant(variant);
    setIsResumeModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      {/* Keyboard Skip Bypass */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--accent-terracotta)] focus:text-white focus:font-mono focus:text-xs"
      >
        Skip directly to monograph content
      </a>

      {/* Screen Layout: Desktop Left Rail + Main Editorial Canvas */}
      <div className="flex flex-col lg:flex-row no-print">
        {/* Left Dossier Rail */}
        <Navbar
          activeSection={activeSection}
          onOpenResume={() => handleOpenResume("one-page")}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />

        {/* Main Monograph Content Stream */}
        <main
          id="main-content"
          tabIndex={-1}
          className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 py-4 sm:py-8 focus:outline-hidden"
        >
          {/* §01 // Executive Dispatch */}
          <DispatchHeader onOpenResume={() => handleOpenResume("one-page")} />

          {/* §02 // Systems Case Studies */}
          <ProjectsSection />

          {/* §03 // Research Proceedings */}
          <ResearchSection />

          {/* §04 // Career & Fellowship Record */}
          <ExperienceTimeline />

          {/* §05 // Capability Inventory */}
          <SkillsMatrix />

          {/* §06 // Verified Commendations */}
          <CredentialsSection />

          {/* Telemetry Station */}
          <div className="py-12 border-b border-[var(--border-rule)]">
            <GitHubTelemetry />
          </div>

          {/* §07 // Direct Dispatch */}
          <ContactSection />

          {/* Imprint & Colophon */}
          <Footer onOpenResume={() => handleOpenResume("one-page")} />
        </main>
      </div>

      {/* Print Target (Only visible when printing with Ctrl/Cmd+P) */}
      <div className="hidden print:block">
        <ResumeView variant={selectedResumeVariant} id="browser-print-resume" />
      </div>

      {/* Interactive Resume Studio Modal */}
      <ResumeStudioModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        initialVariant={selectedResumeVariant}
      />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResumeVariant={v => handleOpenResume(v)}
      />
    </div>
  );
};

export default App;
