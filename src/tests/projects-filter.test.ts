import { describe, it, expect } from "vitest";
import { projectsList } from "../data/projects";

describe("Project Filter & Search Logic", () => {
  it("filters by category correctly", () => {
    const devSecOps = projectsList.filter(p => p.category === "DevSecOps");
    expect(devSecOps.length).toBeGreaterThanOrEqual(2);
    expect(devSecOps.map(p => p.id)).toContain("secure-devsecops-platform");
    expect(devSecOps.map(p => p.id)).toContain("govasset-360");

    const fullStack = projectsList.filter(p => p.category === "Full-Stack");
    expect(fullStack.map(p => p.id)).toContain("samvedna");
    expect(fullStack.map(p => p.id)).toContain("mantbyte");

    const microservices = projectsList.filter(p => p.category === "Microservices");
    expect(microservices.length).toBeGreaterThanOrEqual(1);
    expect(microservices[0].id).toBe("govasset-nexus");
  });

  it("matches search query across title, techStack, and problem statement", () => {
    const query = "Falco";
    const matches = projectsList.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.techStack.some(t => t.toLowerCase().includes(query.toLowerCase())) ||
      p.problem.toLowerCase().includes(query.toLowerCase())
    );
    expect(matches.length).toBeGreaterThanOrEqual(1);
    expect(matches.some(m => m.id === "secure-devsecops-platform")).toBe(true);
  });

  it("has live demonstration URLs for all deployed web projects", () => {
    const samvedna = projectsList.find(p => p.id === "samvedna");
    expect(samvedna?.liveUrl).toBe("https://samvedna-beta.vercel.app");

    const govasset360 = projectsList.find(p => p.id === "govasset-360");
    expect(govasset360?.liveUrl).toBe("https://govasset-360.web.app");

    const devsecops = projectsList.find(p => p.id === "secure-devsecops-platform");
    expect(devsecops?.liveUrl).toBe("https://sujallohar.github.io/secure-devsecops-platform/");

    const mantbyte = projectsList.find(p => p.id === "mantbyte");
    expect(mantbyte?.liveUrl).toBe("https://mantbyte.github.io");
  });

  it("has non-empty architecture specs and concrete metrics for every project", () => {
    projectsList.forEach(project => {
      expect(project.architecture.length).toBeGreaterThanOrEqual(2);
      expect(project.metrics.length).toBeGreaterThanOrEqual(2);
      expect(project.techStack.length).toBeGreaterThanOrEqual(3);
    });
  });
});
