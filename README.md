# Sujal Lohar - Systems Engineering Monograph & Portfolio

**Subject:** Sujal Lohar (Full-Stack Engineer, DevSecOps Architect, Distributed Systems Researcher)  
**Location:** Ahmedabad, Gujarat, India (Institute of Technology, Nirma University)  
**Live Production URL:** https://sujallohar.github.io/  
**GitHub Repository:** https://github.com/sujallohar/sujallohar.github.io  
**Architecture Spec:** See DESIGN.md  
**Content Gaps & Asset Ledger:** See TODO_CONTENT.md  

---

## 1. Architectural Concept & Visual Identity

This portfolio is built on the **Technical Monograph & Systems Field Ledger** design concept, moving away from generic templates, stacked 3-column card grids, frosted glass blur, and corporate buzzwords.

- **Design Philosophy:** Editorial, asymmetric layout balancing large serif display headlines (`Newsreader`) with humanist body prose (`Plus Jakarta Sans`) and monospace telemetry (`JetBrains Mono`).
- **Color System:** Warm archival printing paper (`#F6F4EE`) in light mode and carbon slate (`#101113`) in dark mode, accented by archival burnt terracotta ink (`#B83918` / `#E65A36`). Both modes exceed WCAG 2.1 AA with contrast ratios up to 15.8:1.
- **Strict Compliance:** Strictly zero emojis across the entire codebase, copy, comments, and commit messages. Zero generic filler phrases. Every metric is verified against real code repositories and accepted research papers.

---

## 2. Dynamic ATS Resume Studio & Build-Time Generator

The portfolio replaces static CV downloads with a unified, data-driven resume generation engine:
- **Single Source of Truth:** All resume content is compiled directly from `src/data/` without duplication.
- **Three Switchable Formats:**
  1. `one-page`: Industry 1-Page Resume prioritizing software engineering and DevSecOps achievements.
  2. `full`: Comprehensive Technical CV detailing all 7 case studies, internships, and full skills inventory.
  3. `academic`: Research-first CV putting peer-reviewed publications (IEEE Xplore, COMSYS 2025 Warsaw, ICDSINC 2025) and academic grants at the top.
- **Automated Generation:**
  - Build-time headless browser rendering via Puppeteer (`scripts/generate-resumes.mjs`).
  - Pre-rendered PDFs stored in `public/resumes/` and served with clean semantic filenames (`sujal-lohar-resume-YYYY-MM.pdf`).
  - Browser-native print-to-PDF modal preview with dedicated `@media print` rules.

---

## 3. Project Structure

```text
src/
|-- components/
|   |-- layout/            # Navbar (Asymmetric Dossier Rail), Footer (Archival Imprint)
|   |-- hero/              # DispatchHeader (Executive positioning, real photo, ledger table)
|   |-- projects/          # ProjectsSection, ProjectCard (Case studies), ProjectModal (Spec sheets)
|   |-- research/          # ResearchSection (IEEE proceedings, expandable abstracts, BibTeX)
|   |-- experience/        # ExperienceTimeline (Chronological dual-column ledger)
|   |-- skills/            # SkillsMatrix (Domain inventory with real production context)
|   |-- certifications/    # CredentialsSection (OCI, Macquarie, DoT Sanchar Mitras)
|   |-- github/            # GitHubTelemetry (Live REST API sync with 12h cache)
|   |-- contact/           # ContactSection (Honeypot anti-spam protection)
|   |-- resume/            # ResumeView (ATS printable template), ResumeStudioModal (Interactive preview)
|   `-- ui/                # CommandPalette (Cmd+K), Icons (Bespoke SVGs)
|-- data/                  # Strongly-typed data layer (projects, experience, education, research, etc.)
|-- tests/                 # Unit tests (Vitest) for resume variant filtering and project search
|-- types/                 # TypeScript data contracts (portfolio.ts)
|-- App.tsx                # Master monograph assembly
`-- index.css              # Archival paper & carbon slate design tokens, print stylesheets
```

---

## 4. Local Development & Workflow Reference

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Interactive Development Server
```bash
npm run dev
```
The Vite dev server starts at `http://localhost:5173`.

### 3. Run Automated Test Suite
```bash
npm run test
```
Runs the Vitest suite covering resume variant data filtering, project search queries, and navigation ordering.

### 4. Regenerate Resume PDFs
```bash
npm run generate:resumes
```
Compiles the latest data files in `src/data/` into fresh, ATS-compliant PDFs in `public/resumes/`.

### 5. Compile Production Bundle
```bash
npm run build
```

### 6. Preview Production Build
```bash
npm run preview
```

---

## 5. Content Editing Guide

All site content is decoupled from layout components in `src/data/`. You never need to edit JSX markup to update your portfolio:

| Category | File | Description |
| :--- | :--- | :--- |
| **Personal Profile** | `src/data/personal.ts` | Title, first-person bio, status note, engineering philosophy, contact endpoints. |
| **Systems Projects** | `src/data/projects.ts` | Architectural problems, implementation decisions, benchmark metrics, stack, variant flags. |
| **Career & Fellowship** | `src/data/experience.ts` | Roles, organizations, dates, responsibilities, quantifiable outcomes. |
| **Academic Records** | `src/data/education.ts` | Degree, institution, coursework, grades, scholarship info. |
| **Research Papers** | `src/data/research.ts` | Conference citations, IEEE/Springer proceedings, abstracts, keywords. |
| **Certifications** | `src/data/certifications.ts` | Official cloud/DevOps credentials with verifiable IDs and URLs. |
| **Honors & Awards** | `src/data/awards.ts` | State and international recognitions (DoT Sanchar Mitras, HPAIR). |
| **Capability Inventory**| `src/data/skills.ts` | Technologies categorized into 6 domains paired with production context. |

---

## 6. Continuous Deployment (CI/CD)

Deployments are automated through GitHub Actions on push to `main`:
- Workflow definition: `.github/workflows/deploy.yml`
- Runs test suites, compiles TypeScript, verifies build output, generates fresh resume PDFs, and publishes zero-downtime updates to GitHub Pages edge network.
- Target URL: https://sujallohar.github.io/
