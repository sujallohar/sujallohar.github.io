import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const outDir = path.join(rootDir, "public", "resumes");

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Read data files
async function loadData() {
  const personalMod = await import("../src/data/personal.ts");
  const eduMod = await import("../src/data/education.ts");
  const expMod = await import("../src/data/experience.ts");
  const projMod = await import("../src/data/projects.ts");
  const pubMod = await import("../src/data/research.ts");
  const certMod = await import("../src/data/certifications.ts");
  const awMod = await import("../src/data/awards.ts");
  const skillMod = await import("../src/data/skills.ts");

  return {
    personal: personalMod.personalInfo,
    education: eduMod.educationList,
    experience: expMod.experienceList,
    projects: projMod.projectsList,
    publications: pubMod.publicationsList,
    certifications: certMod.certificationsList,
    awards: awMod.awardsList,
    skills: skillMod.skillCategories
  };
}

function renderHtml(variant, data) {
  const isOnePage = variant === "one-page";
  const isAcademic = variant === "academic";

  const edu = data.education.filter(e => !e.includeInVariants || e.includeInVariants.includes(variant));
  const exp = data.experience.filter(e => !e.includeInVariants || e.includeInVariants.includes(variant));
  const proj = data.projects.filter(p => !p.includeInVariants || p.includeInVariants.includes(variant));
  const pubs = data.publications.filter(p => !p.includeInVariants || p.includeInVariants.includes(variant));
  const certs = data.certifications.filter(c => !c.includeInVariants || c.includeInVariants.includes(variant));
  const awards = data.awards.filter(a => !a.includeInVariants || a.includeInVariants.includes(variant));
  const skills = data.skills.filter(s => !s.includeInVariants || s.includeInVariants.includes(variant));

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sujal Lohar - ${variant === "one-page" ? "Resume" : variant === "academic" ? "Academic CV" : "Curriculum Vitae"}</title>
  <style>
    @page { margin: 10mm; size: A4; }
    * { box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #111;
      background: #fff;
      margin: 0;
      padding: 0;
      font-size: 11pt;
      line-height: 1.45;
    }
    h1 { font-size: 22pt; margin: 0 0 2px 0; font-family: Georgia, serif; font-weight: bold; }
    .subtitle { font-size: 11pt; color: #333; margin-bottom: 8px; font-weight: 500; }
    .contact-line { font-size: 9.5pt; color: #444; font-family: monospace; margin-bottom: 14px; }
    .contact-line a { color: #111; text-decoration: none; }
    h2 {
      font-size: 10.5pt;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      border-bottom: 1.5px solid #222;
      padding-bottom: 2px;
      margin: 14px 0 8px 0;
      font-family: monospace;
      font-weight: bold;
    }
    .entry { margin-bottom: 8px; }
    .entry-header { display: flex; justify-content: space-between; align-items: baseline; font-size: 10.5pt; }
    .entry-title { font-weight: bold; color: #000; }
    .entry-date { font-family: monospace; font-size: 9pt; color: #555; }
    .entry-sub { font-style: italic; color: #333; font-size: 9.5pt; margin-bottom: 2px; }
    .entry-meta { font-family: monospace; font-size: 8.5pt; color: #555; margin-bottom: 3px; }
    ul { margin: 2px 0 4px 18px; padding: 0; }
    li { margin-bottom: 2px; font-size: 9.5pt; color: #222; line-height: 1.35; }
    .skills-row { margin-bottom: 4px; font-size: 9.5pt; }
    .skills-label { font-weight: bold; font-family: monospace; font-size: 9pt; display: inline-block; min-width: 155px; }
    .footer { margin-top: 20px; border-top: 1px solid #ccc; padding-top: 6px; font-size: 8pt; font-family: monospace; color: #666; display: flex; justify-content: space-between; }
  </style>
</head>
<body>
  <div style="display: flex; justify-content: space-between; align-items: baseline;">
    <div>
      <h1>${data.personal.name}</h1>
      <div class="subtitle">${data.personal.title}</div>
    </div>
    <div style="text-align: right;" class="contact-line">
      <div>${data.personal.location}</div>
      <div>${data.personal.email} • ${data.personal.phone}</div>
      <div>github.com/sujallohar • linkedin.com/in/sujallohar</div>
    </div>
  </div>

  <h2>Summary</h2>
  <div style="font-size: 9.5pt; color: #222; line-height: 1.4; margin-bottom: 8px;">
    ${isAcademic 
      ? "Undergraduate researcher in Computer Science at Nirma University with peer-reviewed publications indexed in IEEE Xplore. Specializing in decentralized federated learning, differential privacy in clinical IoT, and explainable AI architectures. Selected delegate to Harvard HPAIR Tokyo 2025."
      : "Software Engineer and DevSecOps Architect with core competencies in distributed microservices (Java 21, Spring Boot 3.2, gRPC, PostgreSQL, Redis), container security, and cryptographic audit ledgers. Experienced in designing Saga choreography state machines, multi-stage non-root Docker deployments, and automated CI/CD security quality gates."}
  </div>

  ${isAcademic && pubs.length > 0 ? `
  <h2>Peer-Reviewed Publications</h2>
  ${pubs.map(p => `
    <div class="entry">
      <div class="entry-title">"${p.title}"</div>
      <div class="entry-sub">${p.authors.join(", ")}</div>
      <div class="entry-meta">${p.conference} • ${p.publisher} (${p.year}) • [${p.status.toUpperCase()}]</div>
    </div>
  `).join("")}
  ` : ""}

  <h2>Education</h2>
  ${edu.map(e => `
    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">${e.institution}</span>
        <span class="entry-date">${e.startDate} – ${e.endDate}</span>
      </div>
      <div class="entry-sub">${e.degree} in ${e.field} ${e.grade ? `— <strong>${e.grade}</strong>` : ""}</div>
      ${e.details ? `<ul>${e.details.map(d => `<li>${d}</li>`).join("")}</ul>` : ""}
    </div>
  `).join("")}

  <h2>Experience</h2>
  ${exp.map(x => `
    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">${x.role} | ${x.organization}</span>
        <span class="entry-date">${x.startDate} – ${x.endDate}</span>
      </div>
      <div class="entry-meta">${x.location}</div>
      <ul>
        ${(x.resumeBullets || x.responsibilities.slice(0, isOnePage ? 2 : 4)).map(b => `<li>${b}</li>`).join("")}
      </ul>
    </div>
  `).join("")}

  <h2>Selected Engineering Projects</h2>
  ${proj.slice(0, isOnePage ? 3 : 6).map(p => `
    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">${p.title}</span>
        <span class="entry-date">${p.completionDate}</span>
      </div>
      <div class="entry-meta">Stack: ${p.techStack.join(" • ")}</div>
      <ul>
        ${(p.resumeHighlights || p.architecture.slice(0, 2)).map(h => `<li>${h}</li>`).join("")}
      </ul>
    </div>
  `).join("")}

  ${!isAcademic && pubs.length > 0 ? `
  <h2>Research Publications</h2>
  ${pubs.slice(0, isOnePage ? 1 : 4).map(p => `
    <div class="entry">
      <div class="entry-title">"${p.title}" — ${p.conference} (${p.publisher}, ${p.year}) [${p.status}]</div>
    </div>
  `).join("")}
  ` : ""}

  <h2>Technical Skills</h2>
  ${skills.map(s => `
    <div class="skills-row">
      <span class="skills-label">${s.title}:</span>
      <span>${s.skills.map(sk => sk.name).join(", ")}</span>
    </div>
  `).join("")}

  <h2>Certifications & Honors</h2>
  <div style="font-size: 9pt; display: grid; grid-template-columns: 1fr 1fr; gap: 4px;">
    ${certs.slice(0, isOnePage ? 3 : 5).map(c => `
      <div><strong>${c.name}</strong> (${c.issuer}, ${c.issueDate})</div>
    `).join("")}
    ${awards.slice(0, isOnePage ? 3 : 5).map(a => `
      <div><strong>${a.title}</strong> (${a.organization})</div>
    `).join("")}
  </div>

  <div class="footer">
    <div>Sujal Lohar • ${isOnePage ? "One-Page Resume" : isAcademic ? "Academic CV" : "Comprehensive Technical CV"}</div>
    <div>Generated: October 2026 • ATS Standard Single-Column</div>
  </div>
</body>
</html>`;
}

async function run() {
  console.log("Loading portfolio structured data...");
  const data = await loadData();

  console.log("Launching headless browser for PDF generation...");
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage", "--disable-gpu"]
    });
  } catch (err) {
    console.log("Default puppeteer launch failed, trying Mac system Chrome...", err.message);
    const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
    if (fs.existsSync(chromePath)) {
      browser = await puppeteer.launch({
        executablePath: chromePath,
        headless: "new",
        args: ["--no-sandbox", "--disable-setuid-sandbox"]
      });
    } else {
      throw err;
    }
  }

  const variants = [
    { id: "one-page", file: "sujal-lohar-resume-2026-10.pdf", title: "Sujal Lohar - Software Engineer & DevSecOps Resume" },
    { id: "full", file: "sujal-lohar-cv-2026-10.pdf", title: "Sujal Lohar - Comprehensive Technical CV" },
    { id: "academic", file: "sujal-lohar-academic-cv-2026-10.pdf", title: "Sujal Lohar - Academic & Research CV" }
  ];

  for (const v of variants) {
    console.log(`Rendering variant [${v.id}] to ${v.file}...`);
    const page = await browser.newPage();
    const html = renderHtml(v.id, data);
    await page.setContent(html, { waitUntil: "networkidle0" });
    const targetPath = path.join(outDir, v.file);
    await page.pdf({
      path: targetPath,
      format: "A4",
      printBackground: true,
      margin: { top: "10mm", bottom: "10mm", left: "10mm", right: "10mm" }
    });
    console.log(`Generated: ${targetPath} (${fs.statSync(targetPath).size} bytes)`);
    await page.close();
  }

  await browser.close();
  console.log("All resume PDF variants compiled successfully.");
}

run().catch(err => {
  console.error("Resume generation error:", err);
  process.exit(1);
});
