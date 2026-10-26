import { Certification } from "../types/portfolio";

export const certificationsList: Certification[] = [
  {
    id: "oci-devops-2024",
    name: "Oracle Cloud Infrastructure 2024 DevOps Professional",
    issuer: "Oracle Cloud Infrastructure",
    issueDate: "Oct 2024",
    credentialId: "100919932OCI24DOPCA",
    verifyUrl: "https://catalog-education.oracle.com/",
    category: "DevOps",
    skillsCovered: ["OCI DevOps", "OKE Kubernetes", "Artifact Registry", "Build Pipelines", "Deployment Strategies", "Infrastructure as Code"],
    includeInVariants: ["one-page", "full", "academic"]
  },
  {
    id: "oci-genai-2024",
    name: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "Oracle Cloud Infrastructure",
    issueDate: "Aug 2024",
    credentialId: "100659174OCI24GAIPC",
    verifyUrl: "https://catalog-education.oracle.com/",
    category: "AI",
    skillsCovered: ["LLM Fine-Tuning", "Vector Databases", "OCI Generative AI Service", "RAG Pipelines", "Model Evaluation"],
    includeInVariants: ["one-page", "full", "academic"]
  },
  {
    id: "macquarie-devops",
    name: "DevOps Engineering Job Simulation",
    issuer: "Macquarie Group (via Forage)",
    issueDate: "May 2024",
    credentialId: "MQ-DEVOPS-2024-FORAGE",
    verifyUrl: "https://www.theforage.com/simulations/macquarie/devops-ykwz",
    category: "DevOps",
    skillsCovered: ["Continuous Integration", "Automated Testing", "Infrastructure Provisioning", "Release Engineering", "Monitoring"],
    includeInVariants: ["one-page", "full"]
  },
  {
    id: "palo-alto-cyber",
    name: "Cybersecurity Fundamentals",
    issuer: "Palo Alto Networks Cybersecurity Academy",
    issueDate: "2024",
    credentialId: "PAN-CYBER-2024",
    verifyUrl: "https://www.paloaltonetworks.com/",
    category: "Security",
    skillsCovered: ["Network Security", "Zero Trust Architecture", "Threat Vectors", "Firewall Configuration", "Cloud Defense"],
    includeInVariants: ["full"]
  },
  {
    id: "space-apps-2024",
    name: "NASA Space Apps Challenge Global Nominee",
    issuer: "NASA - National Aeronautics and Space Administration",
    issueDate: "Oct 2024",
    credentialId: "NASA-2024-SPACEAPPS",
    verifyUrl: "https://www.spaceappschallenge.org/",
    category: "Cloud",
    skillsCovered: ["Three.js", "Keplerian Orbital Mechanics", "NASA JPL API Ingestion", "FastAPI"],
    includeInVariants: ["full", "academic"]
  }
];
