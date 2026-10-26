import { describe, it, expect } from "vitest";
import { projectsList } from "../data/projects";

describe("Project Filter & Search Logic", () => {
  it("filters by category correctly", () => {
    const devSecOps = projectsList.filter(p => p.category === "DevSecOps");
    expect(devSecOps.length).toBeGreaterThanOrEqual(1);
    expect(devSecOps[0].id).toBe("govasset-360");

    const microservices = projectsList.filter(p => p.category === "Microservices");
    expect(microservices.length).toBeGreaterThanOrEqual(1);
    expect(microservices[0].id).toBe("govasset-nexus");
  });

  it("matches search query across title, techStack, and problem statement", () => {
    const query = "gRPC";
    const matches = projectsList.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.techStack.some(t => t.toLowerCase().includes(query.toLowerCase())) ||
      p.problem.toLowerCase().includes(query.toLowerCase())
    );
    expect(matches.length).toBeGreaterThanOrEqual(1);
    expect(matches.some(m => m.id === "govasset-nexus")).toBe(true);
  });

  it("has non-empty architecture specs and concrete metrics for every project", () => {
    projectsList.forEach(project => {
      expect(project.architecture.length).toBeGreaterThanOrEqual(2);
      expect(project.metrics.length).toBeGreaterThanOrEqual(2);
      expect(project.techStack.length).toBeGreaterThanOrEqual(3);
    });
  });
});
