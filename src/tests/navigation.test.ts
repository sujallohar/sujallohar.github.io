import { describe, it, expect } from "vitest";

describe("Navigation Index Structure", () => {
  const sections = [
    { id: "dispatch", label: "01 // DISPATCH" },
    { id: "case-studies", label: "02 // CASE STUDIES" },
    { id: "proceedings", label: "03 // PROCEEDINGS" },
    { id: "record", label: "04 // CAREER RECORD" },
    { id: "capability", label: "05 // CAPABILITY INVENTORY" },
    { id: "commendations", label: "06 // COMMENDATIONS" },
    { id: "contact", label: "07 // DIRECT DISPATCH" }
  ];

  it("has 7 distinct ordered monograph sections", () => {
    expect(sections.length).toBe(7);
    const ids = sections.map(s => s.id);
    expect(new Set(ids).size).toBe(7);
  });

  it("follows monotonic technical indexing", () => {
    sections.forEach((sec, idx) => {
      const expectedNum = (idx + 1).toString().padStart(2, "0");
      expect(sec.label.startsWith(expectedNum)).toBe(true);
    });
  });
});
