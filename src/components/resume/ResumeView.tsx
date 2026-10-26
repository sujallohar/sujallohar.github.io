import React from "react";
import { ResumeVariant } from "../../types/portfolio";
import { personalInfo } from "../../data/personal";
import { educationList } from "../../data/education";
import { experienceList } from "../../data/experience";
import { projectsList } from "../../data/projects";
import { publicationsList } from "../../data/research";
import { certificationsList } from "../../data/certifications";
import { awardsList } from "../../data/awards";
import { skillCategories } from "../../data/skills";

interface ResumeViewProps {
  variant: ResumeVariant;
  id?: string;
}

export const ResumeView: React.FC<ResumeViewProps> = ({ variant, id = "printable-resume" }) => {
  // Filter items based on variant
  const filteredEducation = educationList.filter(e => !e.includeInVariants || e.includeInVariants.includes(variant));
  const filteredExperience = experienceList.filter(e => !e.includeInVariants || e.includeInVariants.includes(variant));
  const filteredProjects = projectsList.filter(p => !p.includeInVariants || p.includeInVariants.includes(variant));
  const filteredPublications = publicationsList.filter(p => !p.includeInVariants || p.includeInVariants.includes(variant));
  const filteredCertifications = certificationsList.filter(c => !c.includeInVariants || c.includeInVariants.includes(variant));
  const filteredAwards = awardsList.filter(a => !a.includeInVariants || a.includeInVariants.includes(variant));
  const filteredSkillCategories = skillCategories.filter(sc => !sc.includeInVariants || sc.includeInVariants.includes(variant));

  const isOnePage = variant === "one-page";
  const isAcademic = variant === "academic";

  const currentDate = "October 2026";

  return (
    <article
      id={id}
      className="bg-white text-neutral-900 p-8 sm:p-12 max-w-[210mm] mx-auto shadow-sm border border-neutral-200 print:border-none print:shadow-none print:p-0 print:max-w-none text-[13px] leading-relaxed font-sans selection:bg-neutral-200"
      style={{ minHeight: isOnePage ? "297mm" : "auto" }}
    >
      {/* Header / Identification */}
      <header className="border-b-2 border-neutral-900 pb-4 mb-5">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 font-serif">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-medium text-neutral-700 mt-0.5">
              {personalInfo.title}
            </p>
          </div>
          <div className="text-xs text-neutral-600 sm:text-right font-mono space-y-0.5">
            <div>{personalInfo.location}</div>
            <div>
              <a href={`mailto:${personalInfo.email}`} className="hover:underline text-neutral-900 font-medium">
                {personalInfo.email}
              </a>
              {" • "}
              <span>{personalInfo.phone}</span>
            </div>
            <div>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline text-neutral-900">
                github.com/sujallohar
              </a>
              {" • "}
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline text-neutral-900">
                linkedin.com/in/sujallohar
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Summary / Positioning */}
      <section className="mb-5">
        <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2 font-mono">
          Executive Summary
        </h2>
        <p className="text-[12.5px] text-neutral-800 leading-normal">
          {isAcademic
            ? `Undergraduate researcher in Computer Science at Nirma University with peer-reviewed publications indexed in IEEE Xplore. Specializing in decentralized federated learning, differential privacy in clinical IoT, and explainable AI architectures. Selected delegate to Harvard HPAIR Tokyo 2025.`
            : `Software Engineer and DevSecOps Architect with core competencies in distributed microservices (Java 21, Spring Boot 3.2, gRPC, PostgreSQL, Redis), container security, and cryptographic audit ledgers. Experienced in designing Saga choreography state machines, multi-stage non-root Docker deployments, and automated CI/CD security quality gates.`}
        </p>
      </section>

      {/* For Academic variant: Publications appear FIRST */}
      {isAcademic && filteredPublications.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2 font-mono">
            Peer-Reviewed Research Publications & Proceedings
          </h2>
          <div className="space-y-3">
            {filteredPublications.map(pub => (
              <div key={pub.id} className="text-[12px]">
                <div className="font-semibold text-neutral-950">
                  "{pub.title}"
                </div>
                <div className="text-neutral-700 italic">
                  {pub.authors.join(", ")}
                </div>
                <div className="text-neutral-600 font-mono text-[11px] mt-0.5">
                  <span className="font-semibold text-neutral-900">{pub.conference}</span>
                  {" • "}
                  <span>{pub.publisher} ({pub.year})</span>
                  {" • "}
                  <span className="uppercase font-bold text-neutral-800">[{pub.status}]</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      <section className="mb-5">
        <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2 font-mono">
          Academic Background
        </h2>
        <div className="space-y-3">
          {filteredEducation.map(edu => (
            <div key={edu.id}>
              <div className="flex justify-between items-baseline text-[12.5px]">
                <div className="font-bold text-neutral-950">
                  {edu.institution}
                </div>
                <div className="text-xs font-mono text-neutral-600">
                  {edu.startDate} – {edu.endDate}
                </div>
              </div>
              <div className="flex justify-between items-baseline text-[12px] text-neutral-700 italic">
                <div>
                  {edu.degree} in {edu.field}
                </div>
                {edu.grade && (
                  <div className="font-mono text-[11px] text-neutral-900 not-italic font-semibold">
                    {edu.grade}
                  </div>
                )}
              </div>
              {edu.details && edu.details.length > 0 && (
                <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-[11.5px] text-neutral-700">
                  {edu.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Work & Research Experience */}
      <section className="mb-5">
        <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2 font-mono">
          Engineering & Research Experience
        </h2>
        <div className="space-y-3.5">
          {filteredExperience.map(exp => (
            <div key={exp.id}>
              <div className="flex justify-between items-baseline text-[12.5px]">
                <div className="font-bold text-neutral-950">
                  {exp.role} <span className="font-normal text-neutral-600">| {exp.organization}</span>
                </div>
                <div className="text-xs font-mono text-neutral-600">
                  {exp.startDate} – {exp.endDate}
                </div>
              </div>
              <div className="text-[11.5px] text-neutral-600 font-mono mb-1">
                {exp.location}
              </div>
              <ul className="list-disc list-outside ml-4 space-y-0.5 text-[12px] text-neutral-800">
                {(exp.resumeBullets || exp.responsibilities.slice(0, isOnePage ? 2 : 4)).map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Projects */}
      <section className="mb-5">
        <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2 font-mono">
          Selected Engineering Case Studies
        </h2>
        <div className="space-y-3.5">
          {filteredProjects.slice(0, isOnePage ? 3 : 6).map(project => (
            <div key={project.id}>
              <div className="flex justify-between items-baseline text-[12.5px]">
                <div className="font-bold text-neutral-950">
                  {project.title}
                  {project.githubUrl && (
                    <span className="font-mono font-normal text-[11px] text-neutral-600 ml-1.5">
                      [{project.githubUrl.replace("https://github.com/", "")}]
                    </span>
                  )}
                </div>
                <div className="text-xs font-mono text-neutral-600">
                  {project.completionDate}
                </div>
              </div>
              <div className="text-[11px] font-mono text-neutral-600 mb-0.5">
                Stack: {project.techStack.join(" • ")}
              </div>
              <ul className="list-disc list-outside ml-4 space-y-0.5 text-[12px] text-neutral-800">
                {(project.resumeHighlights || project.architecture.slice(0, 2)).map((hl, idx) => (
                  <li key={idx}>{hl}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* For Non-academic variants: Publications appear here if filtered */}
      {!isAcademic && filteredPublications.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2 font-mono">
            Research Publications
          </h2>
          <div className="space-y-2">
            {filteredPublications.slice(0, isOnePage ? 1 : 4).map(pub => (
              <div key={pub.id} className="text-[12px]">
                <span className="font-semibold text-neutral-950">"{pub.title}"</span> — {pub.conference} ({pub.publisher}, {pub.year}). Status: <span className="font-mono text-[11px] font-bold">[{pub.status}]</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Technical Skills Inventory */}
      <section className="mb-5">
        <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2 font-mono">
          Technical Skills & Tooling
        </h2>
        <div className="space-y-1.5 text-[12px]">
          {filteredSkillCategories.map((cat, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1">
              <span className="font-bold text-neutral-950 min-w-[170px] font-mono text-[11.5px]">
                {cat.title}:
              </span>
              <span className="text-neutral-800">
                {cat.skills.map(s => s.name).join(", ")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Honors */}
      <section className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2 font-mono">
          Certifications & State Honors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12px]">
          {filteredCertifications.slice(0, isOnePage ? 3 : 5).map(cert => (
            <div key={cert.id} className="text-neutral-800">
              <span className="font-bold text-neutral-950">{cert.name}</span>
              <div className="text-[11px] font-mono text-neutral-600">
                {cert.issuer} ({cert.issueDate}) {cert.credentialId && `[ID: ${cert.credentialId}]`}
              </div>
            </div>
          ))}
          {filteredAwards.slice(0, isOnePage ? 3 : 5).map(award => (
            <div key={award.id} className="text-neutral-800">
              <span className="font-bold text-neutral-950">{award.title}</span>
              <div className="text-[11px] font-mono text-neutral-600">
                {award.organization} ({award.date})
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / ATS Metadata */}
      <footer className="border-t border-neutral-200 pt-3 mt-6 flex justify-between items-center text-[10px] font-mono text-neutral-500">
        <div>
          Sujal Lohar • {isOnePage ? "One-Page Industry Resume" : isAcademic ? "Academic & Research CV" : "Comprehensive Technical CV"}
        </div>
        <div>
          Last updated: {currentDate} • Compiled from live portfolio data
        </div>
      </footer>
    </article>
  );
};
