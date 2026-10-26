import { SkillCategory } from "../types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used in system development, algorithms, and backend services.",
    skills: [
      { name: "C++", level: "Core", icon: "cplusplus", context: "Data structures, algorithms, memory management, high-performance logic." },
      { name: "Python", level: "Core", icon: "python", context: "AI pipelines, automation agents, Flask/FastAPI, ML feature engineering." },
      { name: "JavaScript / TypeScript", level: "Core", icon: "typescript", context: "React 19, NestJS, Node.js, Express AppSec gateways, type systems." },
      { name: "Java", level: "Advanced", icon: "java", context: "Spring Boot 3.2, polyglot microservices, Saga choreography, gRPC." },
      { name: "SQL", level: "Core", icon: "postgresql", context: "Complex relational queries, indexing, PostgreSQL, MySQL." },
      { name: "Bash / Shell", level: "Advanced", icon: "gnubash", context: "Linux automation, CI/CD runners, container scripting." }
    ]
  },
  {
    title: "Cloud, DevOps & DevSecOps",
    description: "Infrastructure as code, containerization, security gates, and deployment automation.",
    skills: [
      { name: "Docker", level: "Core", icon: "docker", context: "Multi-stage builds, non-root user execution, alpine minimization, layer caching." },
      { name: "Kubernetes", level: "Advanced", icon: "kubernetes", context: "Pod security standards, ingress routing, Istio service mesh, statefulsets." },
      { name: "GitHub Actions", level: "Core", icon: "githubactions", context: "Automated CI/CD security quality gates, multi-stage verification, PR automation." },
      { name: "DevSecOps (Trivy / GitLeaks)", level: "Core", icon: "shield", context: "Shift-left secret detection, container SCA vulnerability scanning, Oxlint." },
      { name: "AWS & OCI", level: "Advanced", icon: "amazonwebservices", context: "EC2, S3, OKE Kubernetes, OCI DevOps, cloud infrastructure management." },
      { name: "Linux System Administration", level: "Core", icon: "linux", context: "Process management, network sockets, systemd services, permissions hardening." }
    ]
  },
  {
    title: "Backend & Distributed Systems",
    description: "High-throughput APIs, distributed transaction patterns, and resilience engineering.",
    skills: [
      { name: "Spring Boot 3.2", level: "Advanced", icon: "spring", context: "Microservices architecture, gRPC endpoints, Redis token blacklisting." },
      { name: "Node.js & Express", level: "Core", icon: "nodedotjs", context: "AppSec gateways, Helmet defense, sliding-window rate limiters, Zod validation." },
      { name: "NestJS", level: "Advanced", icon: "nestjs", context: "Clean Architecture, dependency injection, OAuth authentication, RBAC." },
      { name: "gRPC & Protocol Buffers", level: "Advanced", icon: "grpc", context: "High-performance inter-microservice RPCs with low overhead." },
      { name: "Flask & FastAPI", level: "Core", icon: "flask", context: "Model serving, RESTful APIs, asynchronous background tasks." }
    ]
  },
  {
    title: "Security, Cryptography & Observability",
    description: "Zero-trust verification, tamper-evident ledgers, and telemetry instrumentation.",
    skills: [
      { name: "Cryptographic SHA-256 Ledger", level: "Core", icon: "key", context: "Web Crypto hash chaining, WORM immutable storage, tamper attack detection." },
      { name: "Prometheus & Grafana", level: "Advanced", icon: "prometheus", context: "Standard OpenTelemetry metrics, alerting thresholds, system health dashboards." },
      { name: "Falco Runtime Detection", level: "Advanced", icon: "radar", context: "Kernel-level anomaly tracing and unauthorized container execution alerting." },
      { name: "Active Defense Honeypots", level: "Core", icon: "trap", context: "Automated vulnerability scanner decoys, incident signature capture." }
    ]
  },
  {
    title: "Databases & Storage",
    description: "Relational, document, and in-memory transactional storage.",
    skills: [
      { name: "PostgreSQL", level: "Core", icon: "postgresql", context: "ACID transactions, transactional outbox pattern, schema design." },
      { name: "MongoDB", level: "Core", icon: "mongodb", context: "Document aggregation, high-throughput ingestion, flexible schemas." },
      { name: "Redis", level: "Advanced", icon: "redis", context: "Session stores, token blacklist, in-memory caching, distributed locks." },
      { name: "Firebase Firestore", level: "Core", icon: "firebase", context: "Real-time sync, WORM security rules, BaaS integration." }
    ]
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    description: "Applied deep learning, federated training, and computer vision.",
    skills: [
      { name: "Federated Learning (FedAvg / FedProx)", level: "Advanced", icon: "network", context: "Decentralized ICU hazard prediction, differential privacy, MIMIC-III." },
      { name: "Explainable AI (XAI)", level: "Advanced", icon: "brain", context: "TabTransformer attention rollout, saliency attribution for clinical data." },
      { name: "MediaPipe Computer Vision", level: "Core", icon: "eye", context: "478 real-time facial landmarks at 30fps in WebAssembly." },
      { name: "Scikit-Learn, NumPy & Pandas", level: "Core", icon: "scikitlearn", context: "Data pipelines, classification/regression models, feature normalization." }
    ]
  }
];
