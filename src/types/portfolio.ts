export type ProjectCategory = 
  | "DevSecOps" 
  | "Microservices" 
  | "Full-Stack" 
  | "Healthcare AI" 
  | "Machine Learning";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  problem: string;
  architecture: string[];
  techStack: string[];
  metrics: string[];
  githubUrl?: string;
  liveUrl?: string;
  docsUrl?: string;
  featured: boolean;
  completionDate: string;
  accentColor?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  type: "Industry" | "Research" | "Leadership";
  responsibilities: string[];
  skills: string[];
  metrics?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  grade?: string;
  details?: string[];
}

export interface Publication {
  id: string;
  title: string;
  conference: string;
  publisher: string;
  year: number;
  authors: string[];
  mentor?: string;
  abstract: string;
  doiUrl?: string;
  paperUrl?: string;
  status: "Published" | "Accepted" | "Under Review";
  keywords: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  verifyUrl?: string;
  category: "DevOps" | "Cloud" | "Security" | "AI";
  skillsCovered: string[];
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  scope: "International" | "National" | "State" | "University";
  credentialUrl?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: "Core" | "Advanced" | "Working";
    icon: string;
    context: string;
  }[];
}

export interface PersonalInfo {
  name: string;
  preferredName: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  permanentLocation: string;
  email: string;
  universityEmail: string;
  phone: string;
  github: string;
  linkedin: string;
  codeforces: string;
  resumePdfUrl: string;
  languages: string[];
  openToRoles: string[];
  stats: {
    projectsCount: string;
    papersAccepted: string;
    certificationsCount: string;
    hackathonAwards: string;
  };
}
