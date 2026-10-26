import { Project } from "../types/portfolio";

export const projectsList: Project[] = [
  {
    id: "govasset-nexus",
    title: "GovAsset Nexus: Polyglot Microservices Platform",
    category: "Microservices",
    summary: "Distributed cloud-native enterprise system for government asset governance, procurement lifecycle, and condition monitoring built strictly following polyglot microservice principles.",
    problem: "Government physical assets (transportation infrastructure, civil utility networks, hospital machinery) suffer from fragmented lifecycle visibility, untracked procurement state machines, and high inter-service coupling.",
    architecture: [
      "Identity & RBAC Service (Java 21 / Spring Boot 3.2, Redis 7.2 session store and token blacklist, gRPC port 9091).",
      "Asset Lifecycle Registry (PostgreSQL with ACID transaction boundaries and transactional outbox pattern).",
      "Choreography Saga orchestration across procurement, allocation, and decommission states with automated compensating transactions.",
      "Resilience circuit breakers implemented via Resilience4j alongside distributed sliding-window rate limiters.",
      "Containerized microservices packaged with multi-stage Docker and deployed to Kubernetes with Istio service mesh ingress routing."
    ],
    techStack: [
      "Java 21",
      "Spring Boot 3.2",
      "Redis 7.2",
      "gRPC",
      "PostgreSQL",
      "MongoDB",
      "Kafka",
      "Docker",
      "Kubernetes",
      "Istio"
    ],
    metrics: [
      "5 Decoupled Microservices",
      "Sub-15ms gRPC Inter-Service Communication",
      "Transactional Outbox Zero-Loss Guarantees",
      "100% Compensating Saga Fault Recovery"
    ],
    githubUrl: "https://github.com/sujallohar/GovtAssets",
    featured: true,
    completionDate: "Oct 2026",
    accentColor: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "govasset-360",
    title: "GovAsset 360: Cryptographic WORM & AppSec Gateway",
    category: "DevSecOps",
    summary: "Public infrastructure lifecycle platform engineered with a hardened Node.js/Express AppSec gateway, Web Crypto SHA-256 hash chaining, WORM immutable audit logs, and an automated 4-gate CI/CD security pipeline.",
    problem: "Public audits of infrastructure contracts are easily compromised when administrative logs can be quietly tampered with or deleted by compromised privileged accounts.",
    architecture: [
      "Mathematical SHA-256 hash chaining engine (src/utils/cryptoAudit.ts) linking each administrative mutation to its predecessor root block.",
      "Write-Once-Read-Many (WORM) Firestore security rules (allow update, delete: if false;) preventing historical tampering.",
      "Multi-stage Dockerized deployment running under unprivileged non-root users (nginx UID 101, node UID 1000) on Alpine Linux.",
      "AppSec Express Gateway equipped with Helmet security headers, CORS origin whitelisting, and strict Zod runtime schema validation.",
      "Active defense honeypot decoy traps (/.env, /wp-login.php, /api/admin/debug-dump) logging scanner intrusions to live SecOps telemetry.",
      "DevSecOps CI/CD workflow executing GitLeaks secret detection, SCA dependency audits, Oxlint checks, and live container health probe loops."
    ],
    techStack: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express",
      "Docker",
      "SHA-256 Chaining",
      "Zod",
      "Prometheus",
      "Leaflet GIS",
      "Gemini 1.5 Flash"
    ],
    metrics: [
      "100% Cryptographic Ledger Verification",
      "Zero-Cost $0 Free-Tier Architecture",
      "Sub-2s CI/CD Quality Gate Execution",
      "Zero Critical Vulnerabilities (Oxlint + SCA)"
    ],
    liveUrl: "https://govasset-360.web.app",
    githubUrl: "https://github.com/sujallohar/Praviresearch_project",
    featured: true,
    completionDate: "Oct 2026",
    accentColor: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: "secure-devsecops-platform",
    title: "Secure DevSecOps Platform: Hardened Kubernetes & CI/CD",
    category: "DevSecOps",
    summary: "Production-grade e-commerce microservices infrastructure delivered via automated shift-left security scanning, runtime intrusion detection, and full-stack observability on hardened Kubernetes.",
    problem: "Modern microservice pipelines frequently deploy unpatched container vulnerabilities, expose hardcoded secrets in git history, and lack kernel-level runtime anomaly detection.",
    architecture: [
      "Automated CI/CD security gates with GitLeaks for credential leak prevention and Trivy for container image vulnerability scanning.",
      "Hardened Kubernetes pod security: restricted security contexts, non-root execution, dropped Linux capabilities, and read-only root filesystems.",
      "Runtime security monitoring using Falco kernel-level syscall tracing to detect unauthorized shell spawns and privilege escalations.",
      "Full-stack observability cluster aggregating metrics and logs with Prometheus, Grafana, and Loki."
    ],
    techStack: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Trivy",
      "GitLeaks",
      "Falco",
      "Prometheus",
      "Grafana",
      "Shell"
    ],
    metrics: [
      "100% Automated Security Quality Gates",
      "Real-Time Kernel Security Alerts with Falco",
      "Zero License & Cloud Infrastructure Cost",
      "Strict Pod Security Standards Compliance"
    ],
    liveUrl: "https://sujallohar.github.io/secure-devsecops-platform/",
    githubUrl: "https://github.com/sujallohar/secure-devsecops-platform",
    docsUrl: "https://sujallohar.github.io/secure-devsecops-platform/",
    featured: true,
    completionDate: "Sep 2026",
    accentColor: "from-cyan-500/20 to-indigo-500/20"
  },
  {
    id: "samvedna",
    title: "Samvedna: AI Autism Screening & Companion Platform",
    category: "Healthcare AI",
    summary: "Cloud-native pediatric autism spectrum disorder (ASD) screening platform using client-side computer vision for 478 facial landmarks at 30fps and a multi-signal behavioral scoring engine.",
    problem: "Early ASD diagnosis faces severe bottlenecks due to lack of accessible clinical specialists, manual observational friction, and non-standardized behavioral assessment tools.",
    architecture: [
      "Client-side MediaPipe landmark extraction running in WebAssembly, tracking 478 facial coordinates at 30 frames per second.",
      "5-signal behavioral scoring engine classifying Level 0 through 3 ASD risk indicators with clinician oversight.",
      "Multi-cloud distributed architecture: Vercel static edge frontend, Render Flask PaaS inference service, and Firebase BaaS persistence.",
      "Groq-accelerated LLaMA 3 conversational AI companion with clinician analytics dashboard and instant PDF export."
    ],
    techStack: [
      "React",
      "Python",
      "Flask",
      "MediaPipe",
      "Groq LLaMA 3",
      "Firebase",
      "Vercel",
      "Render"
    ],
    metrics: [
      "478 Real-Time Facial Landmarks Tracked",
      "30 FPS Zero-Lag WebAssembly Ingestion",
      "Level 0-3 Multi-Signal Behavioral Scoring",
      "Automated Clinical Report Generation"
    ],
    liveUrl: "https://samvedna-beta.vercel.app",
    githubUrl: "https://github.com/sujallohar/Samvedna",
    featured: true,
    completionDate: "Mar 2026",
    accentColor: "from-violet-500/20 to-purple-500/20"
  },
  {
    id: "mantbyte",
    title: "Mantbyte: Autonomous Multi-Agent Tech Publishing System",
    category: "Full-Stack",
    summary: "Autonomous technology news and research platform powered by an 11-agent Python pipeline orchestrated via GitHub Actions CI/CD with human-in-the-loop review.",
    problem: "High-volume AI content generation typically results in factual hallucinations, poor technical formatting, repetitive prose, and missing fact-checking verification.",
    architecture: [
      "11 specialized autonomous Python agents coordinating trend detection, deep research, drafting, technical fact-checking, editorial review, and SEO scoring.",
      "Pull-request gated review workflow in GitHub Actions CI/CD ensuring human approval before merging to production.",
      "Jekyll-based static site generator integrated with Firebase Firestore for user accounts, likes, bookmarks, and read tracking.",
      "SMTP-driven notification engine managing automated push newsletters and RSS broadcast digests."
    ],
    techStack: [
      "Python",
      "Jekyll",
      "GitHub Actions",
      "Gemini API",
      "Firebase Firestore",
      "SMTP",
      "Shell"
    ],
    metrics: [
      "11 Coordinated Autonomous Agents",
      "Automated CI/CD Content Pipeline",
      "PR-Gated Editorial Verification",
      "Zero Cloud Hosting Server Cost"
    ],
    liveUrl: "https://mantbyte.github.io",
    githubUrl: "https://github.com/sujallohar/Mantbyte",
    featured: true,
    completionDate: "Jun 2026",
    accentColor: "from-amber-500/20 to-orange-500/20"
  },
  {
    id: "deployshield",
    title: "DeployShield: Modular Deployment & Observability Stack",
    category: "Full-Stack",
    summary: "Production-grade deployment management platform built using NestJS, Clean Architecture, GitHub OAuth, and a Prometheus/Grafana/Loki observability pipeline.",
    problem: "Development teams require unified deployment tracking with granular role-based access control and live infrastructure telemetry without proprietary vendor lock-in.",
    architecture: [
      "NestJS backend structured strictly on Clean Architecture principles, isolating domain entities from database drivers and external controllers.",
      "Robust security implementation featuring GitHub OAuth, JWT refresh-token rotation, and granular RBAC permission gates.",
      "Containerized deployment on Docker with PostgreSQL transactional storage.",
      "Full observability instrumentation with Prometheus metrics exporters, Loki log aggregation, and Grafana dashboards."
    ],
    techStack: [
      "NestJS",
      "TypeScript",
      "Docker",
      "PostgreSQL",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "Loki"
    ],
    metrics: [
      "Clean Architecture Layer Isolation",
      "JWT Refresh-Token Rotation Security",
      "Distributed Metrics & Tracing Dashboards",
      "Automated Docker Multi-Stage Builds"
    ],
    githubUrl: "https://github.com/sujallohar/cloud-deploy",
    featured: false,
    completionDate: "Aug 2026",
    accentColor: "from-sky-500/20 to-blue-500/20"
  },
  {
    id: "heart-disease-prediction",
    title: "Clinical Heart Disease Prediction Engine",
    category: "Machine Learning",
    summary: "Comparative machine learning classification engine trained on 10,000+ medical records to predict cardiovascular risk factors using interpretable algorithms.",
    problem: "Clinical decision support systems require transparent, explainable feature importance alongside high predictive accuracy to be trusted in healthcare workflows.",
    architecture: [
      "Engineered automated data preprocessing, outlier mitigation, and feature scaling pipeline using NumPy and Pandas.",
      "Trained and benchmarked Logistic Regression, Decision Trees, and K-Nearest Neighbors (KNN) classification algorithms.",
      "Conducted hyperparameter tuning and k-fold cross-validation, achieving 85%+ validation accuracy."
    ],
    techStack: [
      "Python",
      "Scikit-Learn",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn"
    ],
    metrics: [
      "85%+ Validation Accuracy",
      "10,000+ Analyzed Clinical Records",
      "Comparative Algorithm Benchmarking",
      "Transparent Feature Importance Pipelines"
    ],
    githubUrl: "https://github.com/sujallohar/Heart-disease-prediction",
    featured: false,
    completionDate: "May 2025",
    accentColor: "from-rose-500/20 to-red-500/20"
  }
];
