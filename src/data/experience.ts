import { Experience } from "../types/portfolio";

export const experienceList: Experience[] = [
  {
    id: "nirma-research",
    role: "Undergraduate Research Fellow",
    organization: "Institute of Technology, Nirma University",
    location: "Ahmedabad, Gujarat, India",
    startDate: "Aug 2024",
    endDate: "Present",
    type: "Research",
    responsibilities: [
      "I investigate decentralized federated learning algorithms under the mentorship of Dr. Aparna Kumari.",
      "Trained TabTransformer neural architectures on 40,000+ patient records from the MIMIC-III intensive care dataset.",
      "Formulated multi-hop attention rollout to generate reliable feature saliency maps for bedside clinicians.",
      "Co-authored 5 papers accepted or published at IEEE Xplore, COMSYS 2025 Warsaw, and ICDSINC 2025 NIT Raipur.",
      "Awarded a 10,000 INR competitive research fellowship grant from the Nirma University UG Research Club."
    ],
    skills: ["Federated Learning", "PyTorch", "Transformers", "Explainable AI", "MIMIC-III", "Distributed Training"],
    metrics: ["96.4% ICU prediction accuracy", "5 conference papers published/accepted", "10,000 INR fellowship grant"],
    includeInVariants: ["one-page", "full", "academic"],
    resumeBullets: [
      "Engineered decentralized federated learning pipelines using FedProx across 40,000+ MIMIC-III ICU records.",
      "Attained 96.4% ICU hazard classification accuracy with multi-hop attention rollout for clinical interpretability.",
      "Co-authored 5 peer-reviewed papers indexed in IEEE Xplore and presented at international conferences."
    ]
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
      "Engineered an automated notification delivery engine utilizing Python, Docker, Twilio WhatsApp API, and Linux cron daemons.",
      "Reduced manual operational announcements by 10+ hours per week while improving message delivery confirmation to 99.8%.",
      "Constructed a student portal in React and MongoDB for real-time exam schedule access and attendance tracking."
    ],
    skills: ["Python", "Docker", "Twilio API", "React", "MongoDB", "Linux Automation"],
    metrics: ["30% increase in communication delivery speed", "99.8% message delivery reliability"],
    includeInVariants: ["one-page", "full"],
    resumeBullets: [
      "Constructed containerized Python dispatch service using Twilio WhatsApp API and MongoDB, increasing delivery speed by 30%.",
      "Eliminated 10+ hours per week of manual operational overhead for administrative staff."
    ]
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
      "Engineered Sensory Report, an automated food-quality reporting portal utilizing Node.js, Express, MySQL, and JavaScript.",
      "Replaced physical paper inspection sheets across 2 centralized industrial kitchens serving 20+ kitchen supervisors.",
      "Automated real-time inspection log aggregation, saving 10+ hours per week in manual reconciliation."
    ],
    skills: ["Node.js", "Express", "MySQL", "JavaScript", "Process Automation"],
    metrics: ["10+ hours saved weekly", "30% operational efficiency improvement across 2 industrial kitchens"],
    includeInVariants: ["one-page", "full"],
    resumeBullets: [
      "Engineered operational web app on Node.js, Express, and MySQL replacing paper logs across 2 industrial kitchens.",
      "Reduced reporting latency and saved 10+ hours per week in manual kitchen reconciliation."
    ]
  },
  {
    id: "suven-consultants",
    role: "Machine Learning Intern",
    organization: "Suven Consultants & Technology Pvt. Ltd.",
    location: "Remote / Mumbai, India",
    startDate: "Jul 2024",
    endDate: "Aug 2024",
    type: "Industry",
    responsibilities: [
      "Constructed data preprocessing and feature engineering pipelines in Python, NumPy, Pandas, and Scikit-Learn.",
      "Trained classification and regression models and evaluated feature importance using cross-validation.",
      "Packaged model inference workers into Flask REST APIs and deployed endpoints on cloud infrastructure."
    ],
    skills: ["Python", "Scikit-Learn", "Flask", "Pandas", "NumPy", "Cloud Deployment"],
    metrics: ["100% cloud-deployed inference endpoints", "Evaluated 10+ ML model architectures"],
    includeInVariants: ["full"],
    resumeBullets: [
      "Built feature engineering pipelines in Python and Scikit-Learn for tabular data classification.",
      "Packaged model inference workers into Flask REST APIs deployed on cloud endpoints."
    ]
  },
  {
    id: "hpair-delegate",
    role: "Selected Delegate (HPAIR Tokyo)",
    organization: "Harvard Project for Asian and International Relations",
    location: "Tokyo, Japan",
    startDate: "Aug 2025",
    endDate: "Oct 2026",
    type: "Leadership",
    responsibilities: [
      "Selected among an international pool of university applicants with an acceptance rate below 10%.",
      "Represented India and Nirma University at the University of Tokyo.",
      "Collaborated with international delegates on technology policy, public infrastructure security, and demographic resilience."
    ],
    skills: ["International Collaboration", "Technology Policy", "Public Speaking"],
    metrics: ["Sub-10% acceptance rate", "Represented Nirma University internationally"],
    includeInVariants: ["one-page", "full", "academic"],
    resumeBullets: [
      "Selected among international applicants (sub-10% acceptance rate) to represent India and Nirma University at Tokyo summit.",
      "Collaborated on technology policy and public infrastructure security frameworks."
    ]
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
    skills: ["Digital Outreach", "Operations Management", "Team Leadership"],
    includeInVariants: ["full"]
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
      "Assessed technical student qualifications and matched candidates with international engineering internships.",
      "Conducted interview prep, technical resume reviews, and visa guidance for outgoing candidates."
    ],
    skills: ["Candidate Assessment", "International Operations", "Stakeholder Alignment"],
    includeInVariants: ["full"]
  }
];
