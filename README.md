# Sujal Lohar - Developer Portfolio & Systems Showcase

Production-grade, dynamic, highly interactive personal portfolio website for Sujal Lohar (Full-Stack Engineer, DevSecOps Architect, and Undergraduate Researcher at Nirma University).

## Architecture & Tech Stack

- Frontend Framework: React 19 + TypeScript + Vite
- Styling: Tailwind CSS (Modern tokenized design system)
- Icons: SVG Iconography via Lucide React & Custom Brand SVGs (Strictly zero emojis)
- Data Layer: Decoupled typed data files in `src/data/`
- Telemetry: GitHub REST API integration with 12h localStorage cache & offline fallback
- Command Palette: Global Cmd+K / Ctrl+K spotlight navigation
- Contact Form: Client-side validation with honeypot anti-spam protection

## Project Structure

```text
src/
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── hero/              # HeroSection, TerminalBio
│   ├── projects/          # ProjectsSection, ProjectCard, ProjectModal
│   ├── experience/        # ExperienceTimeline (Work & Education)
│   ├── skills/            # SkillsMatrix (Categorized with context)
│   ├── research/          # ResearchSection (IEEE & International Conferences)
│   ├── certifications/    # CredentialsSection (OCI, Macquarie, Awards)
│   ├── github/            # GitHubTelemetry
│   ├── contact/           # ContactSection & Form
│   └── ui/                # CommandPalette, Icons
├── data/                  # Decoupled content files (projects, experience, etc.)
├── types/                 # TypeScript data contracts (portfolio.ts)
├── App.tsx                # Master assembly
└── main.tsx               # Application entry
```

## Quick Start & Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build production bundle:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## Content Editing Guide

All text, projects, and certifications live in structured data files. No markup editing required:
- Projects: `src/data/projects.ts`
- Experience & Leadership: `src/data/experience.ts`
- Academic Credentials: `src/data/education.ts`
- Research Papers: `src/data/research.ts`
- Certifications: `src/data/certifications.ts`
- Awards & Honors: `src/data/awards.ts`
- Skills: `src/data/skills.ts`
- Personal Profile: `src/data/personal.ts`
- Resume PDF: Replace `public/Sujal_CV.pdf`

## Free-Tier Deployment Options

### Option 1: Vercel (Recommended)
1. Push this folder to a GitHub repository (`sujallohar/portfolio`).
2. Import the project on vercel.com.
3. Vercel automatically detects Vite and deploys to `https://sujallohar.vercel.app`.

### Option 2: GitHub Pages
1. In `vite.config.ts`, set `base: "/"` (or `base: "/<repo-name>/"`).
2. Add a GitHub Actions workflow to build and push `dist/` to GitHub Pages.

---
*Built with zero emojis, high typographic hierarchy, and production engineering rigor.*
