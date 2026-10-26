import { Project } from "../types/portfolio";

export const projectsList: Project[] = [
  {
    id: "secure-devsecops-platform",
    title: "Secure DevSecOps Platform: Hardened Microservices & CI/CD Security Gate",
    category: "DevSecOps",
    summary: "Containerized e-commerce microservices application delivered through an automated 4-stage security-gated CI/CD pipeline, deployed to hardened Kubernetes with Falco runtime intrusion detection and full-stack observability.",
    problem: "Modern microservice pipelines often lack automated shift-left security enforcement in CI, leaving container images vulnerable to unpatched CVEs, hardcoded secrets, and unauthorized runtime execution.",
    architecture: [
      "Separated user, product, and order workflows into containerized microservices behind an Nginx API Gateway with TLS termination.",
      "Engineered automated shift-left static security verification: GitLeaks for secret scanning and Trivy for container image SCA vulnerability scanning.",
      "Hardened Kubernetes cluster deployment utilizing unprivileged non-root pod security standards and read-only root filesystems.",
      "Configured Falco runtime intrusion detection monitoring Linux kernel syscalls for unauthorized namespace execution and shell spawns.",
      "Implemented full-stack telemetry instrumentation with Prometheus metrics collection, Grafana operational dashboards, and Loki log aggregation."
    ],
    techStack: [
      "Kubernetes",
      "Docker",
      "Falco",
      "Prometheus",
      "Grafana",
      "Loki",
      "Trivy",
      "GitLeaks",
      "GitHub Actions",
      "PostgreSQL",
      "Nginx"
    ],
    metrics: [
      "Zero CVEs in Production Images",
      "Sub-100ms Ingress Proxying",
      "100% Shift-Left Secret Detection Gate",
      "Kernel Syscall Anomaly Alerting via Falco"
    ],
    githubUrl: "https://github.com/sujallohar/secure-devsecops-platform",
    liveUrl: "https://sujallohar.github.io/secure-devsecops-platform/",
    featured: true,
    completionDate: "Oct 2026",
    includeInVariants: ["one-page", "full", "academic"],
    resumeHighlights: [
      "Architected hardened Kubernetes microservices platform with Falco runtime kernel syscall intrusion detection.",
      "Implemented automated 4-stage GitHub Actions CI/CD security gate utilizing Trivy and GitLeaks with zero production CVEs.",
      "Integrated Prometheus metrics, Grafana dashboards, and Loki log aggregation for complete cluster observability."
    ]
  },
  {
    id: "govasset-360",
    title: "GovAsset 360: Cryptographic WORM & AppSec Gateway",
    category: "DevSecOps",
    summary: "Public infrastructure lifecycle platform engineered with a hardened Node.js/Express AppSec gateway, Web Crypto SHA-256 hash chaining, WORM immutable audit logs, and an automated 4-gate CI/CD security pipeline.",
    problem: "Public audits of infrastructure contracts are easily compromised when administrative logs can be quietly tampered with or deleted by compromised privileged accounts.",
    architecture: [
      "Mathematical SHA-256 hash chaining engine linking each administrative mutation to its predecessor root block.",
      "Write-Once-Read-Many (WORM) Firestore security rules (allow update, delete: if false;) preventing historical tampering.",
      "Multi-stage Dockerized deployment running under unprivileged non-root users (nginx UID 101, node UID 1000) on Alpine Linux.",
      "AppSec Express Gateway equipped with Helmet security headers, CORS origin whitelisting, and strict Zod runtime schema validation.",
      "Automated CI/CD security quality gates in GitHub Actions enforcing GitLeaks secret scanning and Trivy container vulnerability scanning."
    ],
    techStack: [
      "Node.js",
      "TypeScript",
      "Web Crypto SHA-256",
      "Firestore WORM",
      "Docker",
      "Trivy",
      "GitLeaks",
      "GitHub Actions",
      "Zod"
    ],
    metrics: [
      "100% Cryptographic Tamper Detection",
      "WORM Immutable Audit Storage",
      "Zero CVEs in Production Images",
      "Automated 4-Stage CI/CD Security Gate"
    ],
    githubUrl: "https://github.com/sujallohar/GovAsset-360",
    liveUrl: "https://govasset-360.web.app",
    featured: true,
    completionDate: "Sep 2026",
    includeInVariants: ["one-page", "full"],
    resumeHighlights: [
      "Engineered SHA-256 cryptographic hash-chained audit engine with WORM append-only enforcement.",
      "Constructed hardened AppSec Express gateway with Zod schema validation and sliding-window rate limiters.",
      "Built multi-stage non-root Docker builds verified via Trivy and GitLeaks CI/CD security gates."
    ]
  },
  {
    id: "samvedna",
    title: "Samvedna: Cloud-Powered Behavioural Screening Platform",
    category: "Full-Stack",
    summary: "Accessible web-based developmental screening platform for autism spectrum assessment, providing clinical questionnaires, quantitative risk scoring, and progress tracking.",
    problem: "Access to clinical paediatric screening for developmental and autism spectrum conditions is hindered by geographic barriers, long specialist waitlists, and complex paper-based screening forms.",
    architecture: [
      "Engineered responsive, accessible user interface in React with empathetic design, clean multi-step evaluation flows, and local state persistence.",
      "Constructed Python Flask backend microservice processing multi-dimensional behavioural response vectors with scoring algorithms.",
      "Implemented statistical assessment models scoring communication, social interaction, and sensory metrics with interpretable reporting for caregivers.",
      "Packaged with lightweight container deployment on cloud infrastructure (Vercel & cloud endpoints)."
    ],
    techStack: [
      "React",
      "Python",
      "Flask",
      "Tailwind CSS",
      "REST API",
      "Vercel",
      "Machine Learning"
    ],
    metrics: [
      "Automated Behavioural Risk Scoring",
      "Accessible Multi-Step Assessment Flow",
      "Sub-200ms API Scoring Latency",
      "Cloud Deployed on Vercel"
    ],
    githubUrl: "https://github.com/sujallohar/Samvedna",
    liveUrl: "https://samvedna-beta.vercel.app",
    featured: true,
    completionDate: "Sep 2025",
    includeInVariants: ["one-page", "full", "academic"],
    resumeHighlights: [
      "Constructed full-stack developmental screening platform using React and Python Flask.",
      "Implemented quantitative behavioural scoring algorithms with automated summary reporting for clinicians."
    ]
  },
  {
    id: "govasset-nexus",
    title: "GovAsset Nexus: Polyglot Microservices Platform",
    category: "Microservices",
    summary: "Distributed enterprise asset platform built on polyglot microservice principles with decoupled state machines, gRPC inter-service transport, and compensating Saga orchestration.",
    problem: "Public utility equipment and transportation machinery suffer from untracked lifecycle states, data silos between procurement and maintenance divisions, and cascade failures when downstream databases stall.",
    architecture: [
      "Separated auth, procurement, and asset monitoring into 5 independent services running on Java 21 / Spring Boot 3.2 and Node.js.",
      "Engineered inter-service communication over binary gRPC schemas on port 9091, cutting serialization latency compared to REST.",
      "Implemented a choreography Saga pattern using transactional outbox tables in PostgreSQL to guarantee zero-loss state transitions.",
      "Configured Resilience4j circuit breakers and sliding-window rate limiters backed by Redis 7.2 token buckets.",
      "Packaged all services in multi-stage Alpine Docker containers with non-root security contexts, deployed on Kubernetes with Istio ingress routing."
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
      "5 Decoupled Services",
      "Sub-15ms gRPC Inter-Service RPCs",
      "Zero Data Loss with Transactional Outbox",
      "100% Deterministic Saga State Recovery"
    ],
    githubUrl: "https://github.com/sujallohar/GovtAssets",
    featured: true,
    completionDate: "Oct 2026",
    includeInVariants: ["one-page", "full", "academic"],
    resumeHighlights: [
      "Architected 5 polyglot microservices on Java 21 / Spring Boot 3.2 and Node.js using gRPC and Kafka.",
      "Engineered distributed Saga choreography with PostgreSQL transactional outbox for zero-loss recovery.",
      "Deployed to Kubernetes with Istio service mesh and Redis 7.2 sliding-window rate limiting."
    ]
  },
  {
    id: "federated-icu-risk",
    title: "Federated Clinical Predictor & XAI Engine",
    category: "Healthcare AI",
    summary: "Decentralized machine learning system that trains TabTransformer architectures across isolated hospital nodes to forecast ICU critical events without sharing patient records.",
    problem: "Hospitals cannot centralize sensitive Intensive Care Unit patient records for deep learning due to HIPAA/GDPR constraints, resulting in fragmented local models with high error rates.",
    architecture: [
      "Formulated federated parameter aggregation with FedProx and FedAvg to handle heterogeneous patient distributions across simulated hospital clients.",
      "Trained TabTransformer neural networks on 40,000+ patient records from the MIMIC-III critical care database.",
      "Engineered multi-hop attention rollout to compute saliency maps across physiological time-series features, giving clinicians interpretable reasoning.",
      "Containerized model inference workers in Python Flask microservices for zero-dependency deployment."
    ],
    techStack: [
      "Python 3.11",
      "PyTorch",
      "FedAvg / FedProx",
      "TabTransformer",
      "MIMIC-III Dataset",
      "Scikit-Learn",
      "Flask",
      "Docker"
    ],
    metrics: [
      "96.4% Accuracy on ICU Event Prediction",
      "100% Decentralized Patient Record Privacy",
      "Multi-Hop Saliency Attribution for Clinicians",
      "Accepted at IEEE & COMSYS 2025"
    ],
    githubUrl: "https://github.com/sujallohar",
    featured: true,
    completionDate: "Aug 2025",
    includeInVariants: ["full", "academic"],
    resumeHighlights: [
      "Formulated decentralized federated learning pipeline using FedProx on 40,000+ MIMIC-III ICU records.",
      "Attained 96.4% predictive accuracy with multi-hop attention rollout for clinical feature interpretability.",
      "Co-authored research paper published in IEEE Xplore and presented at international conferences."
    ]
  },
  {
    id: "mantbyte",
    title: "Mantbyte: Editorial Systems & Technology Publication",
    category: "Full-Stack",
    summary: "Lightweight static publication and distribution platform covering distributed systems, cloud security, and technology analysis, deployed on GitHub Pages with automated CI distribution.",
    problem: "Content-heavy blogs and technical publications frequently suffer from bloated JavaScript client bundles, slow server-side database lookups, and fragile content management systems.",
    architecture: [
      "Engineered zero-dependency static site architecture powered by Jekyll and GitHub Actions automated deployment.",
      "Integrated PWA service worker caching and offline-first reading experience with web app manifest.",
      "Configured automated CI workflows for editorial validation, daily digest distribution, and RSS/Atom feeds.",
      "Optimized for fast typography rendering with curated Google Fonts and zero tracking scripts."
    ],
    techStack: [
      "Jekyll",
      "Liquid",
      "Ruby",
      "GitHub Pages",
      "PWA",
      "Service Worker",
      "GitHub Actions"
    ],
    metrics: [
      "100 Lighthouse Performance",
      "Zero Client Database Dependencies",
      "Offline PWA Support",
      "Automated CI Distribution"
    ],
    githubUrl: "https://github.com/mantbyte/mantbyte.github.io",
    liveUrl: "https://mantbyte.github.io",
    featured: false,
    completionDate: "Jul 2026",
    includeInVariants: ["full"],
    resumeHighlights: [
      "Engineered lightweight Jekyll static publication deployed to GitHub Pages edge network.",
      "Built automated CI/CD editorial validation and distribution pipelines with offline PWA caching."
    ]
  },
  {
    id: "nasa-neo-trajectory",
    title: "NASA Near-Earth Object Orbital Risk Engine",
    category: "Machine Learning",
    summary: "Interactive 3D orbital dynamics visualizer and hazard classification engine tracking near-Earth asteroids using real-time NASA JPL ephemeris data.",
    problem: "Astronomical trajectory tables are complex tabular grids that make it difficult for researchers and students to understand close-approach velocity vectors.",
    architecture: [
      "Queried the NASA JPL NeoWs REST API to ingest orbital parameters, velocity vectors, and miss-distance coordinates.",
      "Built a mathematical Keplerian orbit simulator in Three.js and WebGL rendering real-time planetary orbits.",
      "Classified hazardous asteroid trajectories using Scikit-Learn decision trees based on absolute magnitude and minimum orbit intersection distance.",
      "Developed under time constraints during the NASA International Space Apps Challenge 2024."
    ],
    techStack: [
      "Three.js",
      "WebGL",
      "TypeScript",
      "Python FastAPI",
      "NASA JPL API",
      "Docker"
    ],
    metrics: [
      "30,000+ Tracked Astronomical Objects",
      "60 FPS 3D Orbital Trajectory Rendering",
      "Real-Time Ephemeris Ingestion from NASA JPL",
      "NASA Space Apps 2024 Global Nominee"
    ],
    githubUrl: "https://github.com/sujallohar",
    featured: false,
    completionDate: "Oct 2024",
    includeInVariants: ["full", "academic"],
    resumeHighlights: [
      "Constructed Three.js 3D orbital simulator processing 30,000+ near-Earth asteroids from NASA JPL APIs.",
      "Integrated Python hazard classifier predicting close-approach risk factors."
    ]
  }
];
