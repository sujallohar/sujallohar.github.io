# DESIGN SYSTEM SPECIFICATION: THE TECHNICAL MONOGRAPH & SYSTEMS FIELD LEDGER

**Subject:** Sujal Lohar (Full-Stack Engineer, DevSecOps Architect, Distributed Systems Researcher)  
**Location:** Ahmedabad, Gujarat, India (Nirma University)  
**Concept Identifier:** `ARCHIVAL-MONOGRAPH-V2`  
**Date of Ratification:** October 2026  
**Strict Ban Compliance:** Zero emojis, zero purple/indigo neon glows, zero glassmorphism, zero generic card grids, zero template filler copy.

---

## 1. Visual Concept & Design Philosophy

### The Core Concept: The Technical Monograph & Systems Field Ledger
Sujal Lohar is not a generic template developer; his work spans low-latency distributed microservices (Java 21, Spring Boot 3.2, gRPC, Saga patterns), zero-trust security architecture (SHA-256 hash-chaining audit trails, WORM immutable storage, Alpine non-root containers), competitive algorithmic problem solving (Codeforces Specialist), and peer-reviewed federated learning research published in IEEE Xplore.

His digital identity should reflect the intellectual rigor of an Edward Tufte information design monograph, a Bell Labs systems research publication, and a field engineer’s precision notebook:
- **Asymmetric, Editorial Grid:** No stacked identical 3-column cards. The layout balances oversized typographic statements with high-density tabular ledgers, margin coordinates, and deliberate whitespace.
- **Physical Tactile Ground:** Crisp 1-pixel architectural rule lines (`1px solid`), flat matte surfaces, and zero blurry drop-shadows or frosted glass blur.
- **Typographic Authority:** A literary editorial serif (`Newsreader`) paired with a high-clarity sans-serif (`Plus Jakarta Sans`) and a dense tabular monospace (`JetBrains Mono`) for telemetry, figures, and system specs.

---

## 2. Color Palette & WCAG AA Contrast Ratios

The palette draws inspiration from archival printing paper, lampblack printer’s ink, and warm terracotta drafting ink. Light and dark modes are engineered as independent tactile environments rather than naive CSS color inversions.

### 2.1 Light Mode: "Warm Archival Paper"
Designed for high legibility, reading endurance, and print-like calm.

| Token | Hex Value | Role | WCAG Contrast against Base |
| :--- | :--- | :--- | :--- |
| `--bg-canvas` | `#F6F4EE` | Warm paper base canvas | Base Ground (1:1) |
| `--bg-surface` | `#FFFFFF` | Crisp paper card surface | N/A (Surface) |
| `--bg-surface-secondary` | `#EFECE4` | Secondary ground / code block | 1.1:1 |
| `--border-rule` | `#DCD6C8` | 1px structural dividing lines | 1.3:1 (Structural) |
| `--border-rule-strong` | `#BCB5A4` | Emphasized rule borders | 2.1:1 (Structural) |
| `--text-primary` | `#1C1B18` | Printer lampblack primary text | **15.2:1 (AAA Pass)** |
| `--text-secondary` | `#5E5B54` | Iron gall ink body & captions | **5.6:1 (AA Pass)** |
| `--text-muted` | `#7E7A71` | Metadata, coordinates, labels | **3.8:1 (AA Large / Non-text)** |
| `--accent-terracotta` | `#B83918` | Archival terracotta ink accent | **5.8:1 (AA Pass)** |
| `--accent-subtle` | `#FBEFEA` | Terracotta tint for active states | 1.1:1 |
| `--accent-verdigris` | `#1E5E4B` | Deep sage / live status indicator | **6.4:1 (AA Pass)** |

### 2.2 Dark Mode: "Carbon & Field Slate"
Designed as a dark field engineer’s terminal log—charcoal and carbon, not neon blue or navy purple.

| Token | Hex Value | Role | WCAG Contrast against Base |
| :--- | :--- | :--- | :--- |
| `--bg-canvas` | `#101113` | Carbon black canvas | Base Ground (1:1) |
| `--bg-surface` | `#17191C` | Dark slate ledger card | N/A (Surface) |
| `--bg-surface-secondary` | `#202327` | Secondary plate / code block | 1.2:1 |
| `--border-rule` | `#2D3136` | 1px slate structural rule | 1.4:1 (Structural) |
| `--border-rule-strong` | `#40464E` | Emphasized rule borders | 2.2:1 (Structural) |
| `--text-primary` | `#EDEAE4` | Warm bone white primary text | **15.8:1 (AAA Pass)** |
| `--text-secondary` | `#9C9991` | Weathered stone body text | **5.9:1 (AA Pass)** |
| `--text-muted` | `#6E727A` | Metadata, coordinates, labels | **3.5:1 (AA Large / Non-text)** |
| `--accent-terracotta` | `#E65A36` | Warm vermilion ember accent | **6.2:1 (AA Pass)** |
| `--accent-subtle` | `#2A1A14` | Terracotta tint for active states | 1.2:1 |
| `--accent-verdigris` | `#3FA382` | Phosphor sage status indicator | **6.1:1 (AA Pass)** |

---

## 3. Typography Hierarchy & Hand-Tuned Proportions

Fonts are loaded from Google Fonts with `font-display: swap` and clean optical metrics:

1. **Display & Section Titles:** `Newsreader` (Optical Serif, 400, 500, 600, 700 with italic styles).  
   Provides literary weight, scholarly gravity, and editorial elegance. Used for large headlines, pull quotes, and section titles.
2. **Body & Case Study Prose:** `Plus Jakarta Sans` (Humanist Sans-Serif, 400, 500, 600, 700).  
   Impeccable legibility at standard reading distances, clean geometric rhythm, zero geometric coldness.
3. **Telemetry, Figures, Coordinates & Code:** `JetBrains Mono` (Monospace with tabular figures, 400, 500, 600).  
   Used for section numbers (`§01 // DISPATCH`), system parameters, benchmark metrics, and telemetry readings.

### Type Scale
- **Display 1 (Monograph Hero Title):** 3.5rem (56px) / Line-height 1.05 / Tracking -0.025em (`Newsreader`)
- **Display 2 (Section Numerals & Titles):** 2.25rem (36px) / Line-height 1.15 / Tracking -0.02em (`Newsreader`)
- **Headline 3 (Project & Case Study Headings):** 1.5rem (24px) / Line-height 1.25 / Tracking -0.015em (`Newsreader`)
- **Subhead (Role / Ledger Metadata):** 1.0rem (16px) / Line-height 1.4 / Tracking +0.02em (`Plus Jakarta Sans`, Semi-bold)
- **Body Text:** 0.9375rem (15px) / Line-height 1.65 / Tracking 0 (`Plus Jakarta Sans`)
- **Technical Sidenotes & Telemetry:** 0.8125rem (13px) / Line-height 1.5 / Tracking +0.04em (`JetBrains Mono`)
- **Micro Figures & Coordinates:** 0.6875rem (11px) / Line-height 1.4 / Tracking +0.08em uppercase (`JetBrains Mono`)

---

## 4. Spacing Scale & Layout Grid

- **Base Unit:** 4px
- **Scale:** 4px (`space-1`), 8px (`space-2`), 12px (`space-3`), 16px (`space-4`), 24px (`space-6`), 32px (`space-8`), 48px (`space-12`), 64px (`space-16`), 96px (`space-24`), 128px (`space-32`).
- **Asymmetric Editorial Layout:**
  - On Desktop (>= 1024px): 
    - 280px persistent sticky left-hand Dossier Index & Telemetry Rail.
    - 1fr editorial content area bounded at max-w-5xl, with asymmetric dual-column splits (margin notes column on left/right for dates and technical tags, wide central column for case study narrative).
  - On Mobile (< 1024px):
    - Top compact editorial banner with section drawer, station status, and quick theme toggle.

---

## 5. Three Signature Details

### Signature Detail 1: The Asymmetric Dossier Index & Station Telemetry Rail
Instead of a generic top navbar with centered links, the site features a persistent structural navigation rail on desktop. It displays:
- Section coordinates with section glyphs (`§01 // DISPATCH`, `§02 // CASE STUDIES`, `§03 // PROCEEDINGS`, `§04 // CAREER RECORD`, `§05 // CAPABILITY INVENTORY`, `§06 // COMMENDATIONS`, `§07 // DIRECT DISPATCH`).
- Live active scroll-spy with a terracotta hairline indicator.
- Real-time station clock for Ahmedabad (`UTC+05:30`).
- Quick trigger for the Command Palette (`Cmd+K`) and the Interactive Resume Studio.

### Signature Detail 2: Case Study Architectural Spec Sheets
Projects are not displayed as identical 3-column cards with pill tags. Each project is presented as an authoritative case study:
- Problem Statement: The real-world bottleneck or vulnerability.
- Engineering Decisions & Trade-Offs: Why specific architectures were selected (e.g. Saga Choreography vs Orchestration, WORM storage vs mutable logs).
- Measured Benchmark Numbers: Concrete performance metrics (e.g. sub-15ms gRPC latency, 100% compensating transaction recovery).
- Interactive Spec Sheet Modal: Deep-dive view with technical schematics, exact multi-tier tech specifications, and direct commit/demo links.

### Signature Detail 3: The Live Tri-Variant Resume Studio
Replaces the static PDF download with a dynamic, ATS-optimized resume generator powered by the exact same TypeScript data files:
- **Variant 1 (Industry 1-Page):** Formatted for software engineering and DevSecOps roles. Concise, single-column, strictly prioritized.
- **Variant 2 (Full Engineering CV):** Complete archival ledger detailing all 7 projects, internships, leadership roles, and full skills inventory.
- **Variant 3 (Academic & Research CV):** Prioritizes peer-reviewed publications (IEEE Xplore, COMSYS Warsaw, ICDSINC NIT Raipur), research fellowship grants, and HPAIR Harvard delegate credentials.
- Includes a live modal preview with zoom controls, build-time pre-rendered PDF downloads, and browser print-to-PDF rendering with dedicated `@media print` rules.

---

## 6. Ban List Verification Check

| Banned Element | Mitigation in Current Design |
| :--- | :--- |
| Purple / Cyan / Blue gradients | Replaced with Archival Paper (`#F6F4EE`), Carbon Slate (`#101113`), and Burnt Terracotta (`#B83918` / `#E65A36`). |
| Glassmorphism / Frosted blur | Replaced with crisp `1px solid` rule lines and matte tactile paper surfaces. |
| "Hi, I'm Sujal" centered hero | Replaced with the Executive Engineering Dispatch Header with station ledger, real-time clock, and verified coordinates. |
| Uniform 3-column card grid | Replaced with asymmetric case study layouts, chronological dual-column ledgers, and academic proceedings tables. |
| Single generic sans-serif | Characterful 3-font pairing: `Newsreader` (Serif) + `Plus Jakarta Sans` (Text) + `JetBrains Mono` (Data). |
| Fake terminal / particle effects | Eliminated. Real interactive terminal replaced with functional case-study spec sheets and command palette. |
| Emojis anywhere | Strictly zero emojis across UI, copy, metadata, comments, and commit messages. |
| Filler corporate buzzwords | Completely rewritten in plain first-person voice with factual measurements from Sujal's actual code and publications. |
