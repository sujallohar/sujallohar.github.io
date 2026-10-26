import { Experience } from "../types/portfolio";

export const experienceList: Experience[] = [
  {
    id: "techmicra",
    role: "Artificial Intelligence Intern",
    organization: "Techmicra IT Solutions",
    location: "Ahmedabad, Gujarat, India",
    startDate: "May 2026",
    endDate: "Jun 2026",
    type: "Industry",
    responsibilities: [
      "Engineered automated preprocessing and feature engineering pipelines using NumPy and Pandas to optimize high-cardinality input spaces.",
      "Trained, evaluated, and cross-validated end-to-end regression and classification models with Scikit-learn.",
      "Packaged and deployed model-serving REST APIs using Python Flask to production cloud environments on Vercel."
    ],
    skills: ["Python", "Machine Learning", "Scikit-Learn", "Flask", "Vercel", "Data Preprocessing", "NumPy", "Pandas"],
    metrics: ["100% cloud-deployed inference endpoints", "Optimized feature pipelines"]
  },
  {
    id: "time-institute",
    role: "Automation & Web Developer Intern",
    organization: "T.I.M.E. (Triumphant Institute of Management Education)",
    location: "Ahmedabad, Gujarat, India",
    startDate: "Jun 2025",
    endDate: "Jul 2025",
    type: "Industry",
    responsibilities: [
      "Automated daily personalized student-notification pipeline leveraging Python, Docker, Twilio WhatsApp API, and cron runners.",
      "Engineered reliable automated alert delivery boosting communication efficiency by 30%.",
      "Constructed a dynamic student engagement portal backed by ReactJS and MongoDB for real-time exam tracking and schedule access."
    ],
    skills: ["Python", "Docker", "Twilio API", "ReactJS", "MongoDB", "Automation", "WhatsApp API"],
    metrics: ["30% increase in communication delivery efficiency", "Zero-downtime containerized alerts"]
  },
  {
    id: "akshaya-patra",
    role: "Web Development Intern",
    organization: "The Akshaya Patra Foundation",
    location: "Ahmedabad, Gujarat, India",
    startDate: "Jun 2024",
    endDate: "Jul 2024",
    type: "Industry",
    responsibilities: [
      "Engineered Sensory Report, an automated operational web application using HTML, CSS, JavaScript, Node.js, Express, and MySQL.",
      "Replaced paper-driven sensory checklists across 2 industrial kitchens serving 20+ kitchen staff with automated sensor reporting.",
      "Optimized menu iteration and real-time food quality metrics, reducing reporting latency and saving 10+ hours per week in manual reconciliation."
    ],
    skills: ["Node.js", "Express", "MySQL", "JavaScript", "HTML/CSS", "Process Automation"],
    metrics: ["30% increase in operational efficiency", "10+ hours saved weekly across industrial kitchens"]
  },
  {
    id: "hpair-delegate",
    role: "Delegate (HPAIR Tokyo)",
    organization: "Harvard Project for Asian and International Relations",
    location: "Tokyo, Japan",
    startDate: "Aug 2025",
    endDate: "Oct 2026",
    type: "Leadership",
    responsibilities: [
      "Selected among international applicant pool with sub-10% acceptance rate to represent India and Nirma University in Tokyo.",
      "Collaborated with multinational delegates on technological innovation, public infrastructure policies, and demographic resilience in Asia-Pacific."
    ],
    skills: ["Global Collaboration", "Public Speaking", "Technology Policy", "Strategic Leadership"],
    metrics: ["Sub-10% acceptance rate", "Represented Nirma University internationally"]
  },
  {
    id: "rotaract-emerald",
    role: "Social Media & Communications Manager",
    organization: "Rotaract Club of Ahmedabad Emerald",
    location: "Ahmedabad, Gujarat, India",
    startDate: "Jul 2025",
    endDate: "Present",
    type: "Leadership",
    responsibilities: [
      "Direct technical and digital engagement campaigns across community welfare, youth development, and social action programs.",
      "Coordinated cross-functional outreach with executive board members to expand community participation."
    ],
    skills: ["Digital Outreach", "Public Relations", "Team Management"]
  },
  {
    id: "aiesec-ogta",
    role: "Junior Manager, OGTA",
    organization: "AIESEC in Ahmedabad",
    location: "Ahmedabad, Gujarat, India",
    startDate: "Aug 2024",
    endDate: "Feb 2025",
    type: "Leadership",
    responsibilities: [
      "Spearheaded Outgoing Global Talent (OGTA) matching, assessing engineering student profiles and connecting candidates with international internships.",
      "Conducted interview preparation, international visa guidance, and enterprise partner stakeholder alignment."
    ],
    skills: ["Stakeholder Alignment", "Global Talent Placement", "Operations Management"]
  }
];
