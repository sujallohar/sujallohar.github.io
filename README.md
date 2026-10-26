# Sujal Lohar - Developer Portfolio & Systems Showcase

Production-grade, dynamic, highly interactive personal developer portfolio for Sujal Lohar (Full-Stack Engineer, DevSecOps Architect, and Undergraduate Researcher at Nirma University).

Live Production URL: https://sujallohar.github.io/
GitHub Repository: https://github.com/sujallohar/sujallohar.github.io

## Architecture & Tech Stack

- Frontend Framework: React 19 + TypeScript + Vite 6
- Styling: Tailwind CSS (Modern tokenized Slate & Obsidian design system)
- Typography: Inter (UI) and JetBrains Mono (Code / Metrics)
- Accessibility: WCAG 2.1 AA compliant, skip-to-content bypass, prefers-reduced-motion support
- SEO & Telemetry: JSON-LD Person schema, Open Graph metadata, sitemap.xml, robots.txt, GitHub REST API telemetry with 12h caching
- Command Palette: Global Cmd+K / Ctrl+K keyboard shortcut launcher
- Strict Policy: Strictly zero emojis across codebase, copy, and UI elements

## Project Structure

```text
src/
|-- components/
|   |-- layout/            # Navbar, Footer
|   |-- hero/              # HeroSection, TerminalBio (interactive tabbed CLI)
|   |-- projects/          # ProjectsSection, ProjectCard, ProjectModal (architecture deep-dives)
|   |-- experience/        # ExperienceTimeline (Industry, Leadership, Education filters)
|   |-- skills/            # SkillsMatrix (Domain categorized with production context)
|   |-- research/          # ResearchSection (IEEE & International Conferences)
|   |-- certifications/    # CredentialsSection (OCI, Macquarie, Awards)
|   |-- github/            # GitHubTelemetry (Live repository stats & cache)
|   |-- contact/           # ContactSection & Form (Honeypot anti-spam protection)
|   `-- ui/                # CommandPalette, Icons
|-- data/                  # Decoupled content files (projects, experience, skills, etc.)
|-- types/                 # Strict TypeScript data contracts (portfolio.ts)
|-- App.tsx                # Master assembly
`-- main.tsx               # Application entry
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

4. Preview production build locally:
   ```bash
   npm run preview
   ```

## Content Editing Guide

All text, projects, and certifications live in structured TypeScript data files in `src/data/`. No JSX/HTML markup editing is required to update content:

- Personal Profile & Social Links: `src/data/personal.ts`
- Flagship Projects & Architecture Details: `src/data/projects.ts`
- Work Experience & Leadership: `src/data/experience.ts`
- Education: `src/data/education.ts`
- Research Publications: `src/data/research.ts`
- Certifications & Badges: `src/data/certifications.ts`
- Awards & Honors: `src/data/awards.ts`
- Skills Matrix & Context: `src/data/skills.ts`
- Resume PDF: Replace `public/Sujal_CV.pdf`

## Continuous Deployment (CI/CD)

Deployments are fully automated via GitHub Actions on every push to the `main` branch.

- Workflow definition: `.github/workflows/deploy.yml`
- Hosting: GitHub Pages (100% free-tier, HTTPS enforced, custom domain ready)
- Target URL: https://sujallohar.github.io/

### Custom Domain Configuration (Optional)
If you wish to link a custom domain (e.g., `sujallohar.dev` or `sujallohar.com`):
1. Add a `CNAME` record in your DNS provider pointing to `sujallohar.github.io`.
2. In GitHub repository Settings -> Pages -> Custom domain, enter your domain and check "Enforce HTTPS".

---
*Built with zero emojis, high typographic hierarchy, and production engineering rigor.*
