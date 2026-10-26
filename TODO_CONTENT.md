# CONTENT GAPS & OPTIONAL ASSET PLACEHOLDERS (TODO_CONTENT.md)

This document tracks every optional content enhancement, external URL update, and real-world asset slot so Sujal can fill them in as papers are officially published and custom domains are acquired. Zero facts or metrics have been fabricated in the portfolio.

---

## 1. Research Publications & DOI Links

- [ ] **IEEE Xplore Paper Direct DOI:**
  - **Item:** "Federated Transformer-Based Learning for Predicting ICU Events with Multi-hop XAI Explanation Models"
  - **Current Link:** Points to LinkedIn publication citation reference (`https://www.linkedin.com/in/sujallohar/`).
  - **Action Required:** Once IEEE Xplore finalizes the issue volume and page numbers, update `doiUrl` or `paperUrl` in `src/data/research.ts` with the permanent `https://doi.org/10.1109/...` link.

- [ ] **COMSYS 2025 (Warsaw, Poland) Proceedings Links:**
  - **Items:**
    1. "Privacy-Preserving Federated Healthcare Intelligence via Blockchain and Differential Privacy"
    2. "Explainable Deep Learning Framework for Intensive Care Unit Anomaly Forecasting"
    3. "Multi-Hop Attention Rollout in Clinical Event Sequences"
  - **Current Status:** Marked as `Accepted`.
  - **Action Required:** When the conference proceedings are published by Springer/IEEE, add the camera-ready PDF links or Springer Lecture Notes in Networks and Systems (LNNS) URLs to `src/data/research.ts`.

- [ ] **ICDSINC 2025 (NIT Raipur) Proceedings Link:**
  - **Item:** "Intelligent Network Computing Paradigms for Distributed Clinical Data Systems"
  - **Current Status:** Marked as `Accepted`.
  - **Action Required:** Update with direct paper URL once the conference schedule concludes in 2025.

---

## 2. Personal Photo & Identity Assets

- [x] **Official Profile Photo Acquired:** Verified 460x460 portrait of Sujal Lohar synced from GitHub and active in `public/images/sujal-lohar.png`.
- [x] **Bespoke Monograph Logo & Favicon:** Implemented terracotta-and-carbon architectural monogram mark in `public/favicon.svg`.
- [x] **Active Message Relay:** FormSubmit AJAX relay active at `https://formsubmit.co/ajax/sujapanchal17@gmail.com` with verified email routing and mailto fallback.

## 3. Project Imagery & Demonstration Assets

- [ ] **High-Resolution Production Screenshots:**
  - **Projects:** GovAsset Nexus, GovAsset 360, Smart Health Monitoring System.
  - **Current Treatment:** The portfolio utilizes crisp, hand-tuned SVG technical architecture flow diagrams, network schematics, and terminal telemetry readouts.
  - **Action Required:** If you want to include live browser screenshots of the GovAsset UI or Grafana dashboards, place PNG/WebP images in `public/images/projects/` and reference them in `src/data/projects.ts`.

---

## 3. Infrastructure & Custom Domain

- [ ] **Custom Domain Setup:**
  - **Current Host:** `https://sujallohar.github.io/` (GitHub Pages default).
  - **Action Required:** When you acquire a custom domain (e.g. `sujallohar.com` or `sujallohar.dev`), add a `CNAME` file in `public/` or configure it in GitHub repository Settings -> Pages.

- [ ] **Optional PGP Public Key:**
  - **Section:** Contact & Security Verification.
  - **Action Required:** If you wish to provide a cryptographic PGP key for signed communications, add the ASCII-armored public key in `src/data/personal.ts`.

---
*Generated automatically during the Phase 4 Technical Monograph overhaul.*
