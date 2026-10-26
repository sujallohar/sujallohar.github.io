import { describe, it, expect } from "vitest";
import { projectsList } from "../data/projects";
import { experienceList } from "../data/experience";
import { publicationsList } from "../data/research";
import { educationList } from "../data/education";
import { certificationsList } from "../data/certifications";

describe("Resume Variant Data Filters", () => {
  it("filters items correctly for one-page industry resume", () => {
    const onePageProjects = projectsList.filter(p => !p.includeInVariants || p.includeInVariants.includes("one-page"));
    expect(onePageProjects.length).toBeGreaterThan(0);
    expect(onePageProjects.length).toBeLessThanOrEqual(4);
    expect(onePageProjects.map(p => p.id)).toContain("govasset-nexus");

    const onePageExp = experienceList.filter(e => !e.includeInVariants || e.includeInVariants.includes("one-page"));
    expect(onePageExp.some(e => e.organization.includes("Nirma"))).toBe(true);
    expect(onePageExp.some(e => e.organization.includes("T.I.M.E."))).toBe(true);
  });

  it("filters items correctly for academic CV", () => {
    const academicPubs = publicationsList.filter(p => !p.includeInVariants || p.includeInVariants.includes("academic"));
    expect(academicPubs.length).toBe(publicationsList.length);
    expect(academicPubs.some(p => p.publisher.includes("IEEE"))).toBe(true);

    const academicCerts = certificationsList.filter(c => !c.includeInVariants || c.includeInVariants.includes("academic"));
    expect(academicCerts.some(c => c.name.includes("Oracle"))).toBe(true);
  });

  it("retains all records in full CV", () => {
    const fullProjects = projectsList.filter(p => !p.includeInVariants || p.includeInVariants.includes("full"));
    expect(fullProjects.length).toBe(projectsList.length);

    const fullExp = experienceList.filter(e => !e.includeInVariants || e.includeInVariants.includes("full"));
    expect(fullExp.length).toBe(experienceList.length);
  });

  it("contains valid education entries for all variants", () => {
    const edu = educationList.filter(e => e.institution.includes("Nirma"));
    expect(edu.length).toBe(1);
    expect(edu[0].grade).toBe("8.44 / 10.0 CGPA");
  });
});
