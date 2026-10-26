import { Project } from "../types/portfolio";

export const projectsList: Project[] = [
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
    id: "govasset-360",
    title: "GovAsset 360: Cryptographic WORM & AppSec Gateway",
    category: "DevSecOps",
    summary: "Audit tracking infrastructure engineered with mathematical SHA-256 hash chaining, WORM immutable storage rules, and a 4-stage automated security gate.",
    problem: "Public infrastructure procurement ledgers are vulnerable to silent retroactive tampering by compromised administrative accounts with write access.",
    architecture: [
      "Engineered a cryptographic SHA-256 hash chaining engine where every administrative mutation points to the cryptographic root of its predecessor block.",
      "Wrote Write-Once-Read-Many (WORM) Firestore security rules enforcing permanent append-only semantics (forbidding update and delete operations).",
      "Enforced unprivileged container execution (Node UID 1000, Nginx UID 101) across all Docker runtime images.",
      "Built an AppSec Express gateway with Helmet security headers, strict Zod input parsing, and sliding-window rate limiters.",
      "Automated automated shift-left security checks in GitHub Actions utilizing GitLeaks secret scanning and Trivy vulnerability checks."
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
      "Zero CVEs in Production Docker Images",
      "Automated 4-Stage CI/CD Security Gate"
    ],
    githubUrl: "https://github.com/sujallohar/GovAsset-360",
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
    includeInVariants: ["one-page", "full", "academic"],
    resumeHighlights: [
      "Formulated decentralized federated learning pipeline using FedProx on 40,000+ MIMIC-III ICU records.",
      "Attained 96.4% predictive accuracy with multi-hop attention rollout for clinical feature interpretability.",
      "Co-authored research paper published in IEEE Xplore and presented at international conferences."
    ]
  },
  {
    id: "smart-health-monitoring",
    title: "Edge IoT Health Telemetry Pipeline",
    category: "Full-Stack",
    summary: "Real-time edge sensor streaming architecture combining ESP32 microcontrollers, TLS-encrypted MQTT messages, InfluxDB time-series indexing, and automated threshold alerts.",
    problem: "Bedside biometric monitors in regional clinics often operate in isolation without centralized logging, causing delays in recognizing critical cardiac drops.",
    architecture: [
      "Programmed ESP32 microcontrollers in C++ to sample pulse oximetry and ECG sensors at 100Hz.",
      "Secured edge-to-broker transport over TLS 1.3 MQTT protocol with pre-shared device certificates.",
      "Batched incoming time-series metrics into InfluxDB with automated retention and downsampling policies.",
      "Visualized real-time telemetry waveforms in Grafana with sub-500ms dashboard refresh intervals."
    ],
    techStack: [
      "C++",
      "ESP32",
      "MQTT (TLS 1.3)",
      "InfluxDB",
      "Grafana",
      "Docker",
      "Python",
      "WebSocket"
    ],
    metrics: [
      "100Hz Sensor Sampling Rate",
      "Sub-500ms End-to-End Metric Latency",
      "TLS 1.3 Encrypted Edge Transport",
      "Zero Metric Drop over Saturated WiFi"
    ],
    githubUrl: "https://github.com/sujallohar/Smart-Health-Monitoring-System",
    featured: false,
    completionDate: "May 2025",
    includeInVariants: ["full", "academic"],
    resumeHighlights: [
      "Programmed ESP32 C++ firmware for 100Hz physiological biometric sensor sampling.",
      "Engineered TLS 1.3 MQTT telemetry ingestion pipeline into InfluxDB and Grafana dashboards."
    ]
  },
  {
    id: "focus-flow",
    title: "FocusFlow: Client-Side Computer Vision Telemetry",
    category: "Full-Stack",
    summary: "Privacy-preserving web application that computes facial engagement metrics directly in the browser via WebAssembly without sending video frames over the network.",
    problem: "Most ergonomic and attention monitoring tools upload live webcam streams to cloud servers, introducing severe privacy violations and high network bandwidth overhead.",
    architecture: [
      "Compiled MediaPipe Face Mesh models to WebAssembly to track 478 3D facial landmarks at 30fps entirely on the client CPU.",
      "Calculated eye-aspect ratios and head pose angles locally to detect ergonomic fatigue and distraction.",
      "Built a state store in TypeScript without external telemetry or third-party tracking scripts.",
      "Synthesized non-intrusive auditory cues via Web Audio API without requiring media assets."
    ],
    techStack: [
      "React 19",
      "TypeScript",
      "MediaPipe Wasm",
      "Web Audio API",
      "Tailwind CSS",
      "Vite"
    ],
    metrics: [
      "30 FPS Landmark Tracking in Browser",
      "Zero Bytes of Video Transmitted to Servers",
      "478 Tracked Facial Landmarks",
      "Sub-100ms Ergonomic Fatigue Alert Latency"
    ],
    githubUrl: "https://github.com/sujallohar",
    featured: false,
    completionDate: "Jul 2025",
    includeInVariants: ["full"],
    resumeHighlights: [
      "Engineered client-side computer vision pipeline processing 478 facial landmarks at 30 FPS in WebAssembly.",
      "Guaranteed 100% video stream privacy by eliminating cloud telemetry."
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
  },
  {
    id: "automated-notification-pipeline",
    title: "Automated Student Alert Dispatcher",
    category: "Full-Stack",
    summary: "Containerized scheduled alert delivery engine dispatching personalized exam schedules and notifications via WhatsApp API with zero message drops.",
    problem: "Manual administrative announcements across 500+ students created delivery bottlenecks, delayed exam reminders, and high operational overhead.",
    architecture: [
      "Wrote Python worker daemons driven by cron schedules to query student database states in MongoDB.",
      "Integrated Twilio WhatsApp Business API with queue backoff logic to handle API provider rate limits.",
      "Packaged the entire alert worker pipeline into Docker containers running on Linux servers.",
      "Saved administrative teams 10+ manual hours each week while raising delivery confirmation to 99.8%."
    ],
    techStack: [
      "Python",
      "Docker",
      "Twilio API",
      "MongoDB",
      "React",
      "Linux Cron"
    ],
    metrics: [
      "99.8% Message Delivery Success Rate",
      "10+ Hours Saved Weekly in Manual Reconciliation",
      "30% Increase in Communication Delivery Speed",
      "Zero Downtime During Production Intern Term"
    ],
    githubUrl: "https://github.com/sujallohar",
    featured: false,
    completionDate: "Jul 2025",
    includeInVariants: ["full"],
    resumeHighlights: [
      "Engineered containerized Python dispatch service integrated with Twilio WhatsApp API and MongoDB.",
      "Automated personalized notifications for 500+ students, increasing delivery speed by 30%."
    ]
  }
];
