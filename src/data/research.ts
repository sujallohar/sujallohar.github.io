import { Publication } from "../types/portfolio";

export const publicationsList: Publication[] = [
  {
    id: "ieee-federated-icu",
    title: "Federated Transformer-Based Learning for Predicting ICU Events with Multi-hop XAI Explanation Models",
    conference: "IEEE Conference (Published in IEEE Xplore)",
    publisher: "IEEE",
    year: 2025,
    authors: ["Sujal Lohar", "Co-Authors", "Dr. Aparna Kumari (Mentor)"],
    mentor: "Dr. Aparna Kumari",
    abstract: "Proposes a decentralized, privacy-preserving federated deep learning framework utilizing TabTransformer architectures to forecast intensive care unit (ICU) clinical events across distributed hospital nodes without transferring raw patient health data. Achieved 96.4% accuracy on the MIMIC-III benchmark with multi-hop attention rollout explainability providing actionable clinical interpretability.",
    paperUrl: "https://www.linkedin.com/in/sujallohar/",
    status: "Published",
    keywords: ["Federated Learning", "Explainable AI (XAI)", "Transformers", "Healthcare AI", "MIMIC-III", "Privacy Preservation"],
    includeInVariants: ["one-page", "full", "academic"]
  },
  {
    id: "comsys-blockchain-fed",
    title: "Privacy-Preserving Federated Healthcare Intelligence via Blockchain and Differential Privacy",
    conference: "COMSYS 2025: 6th International Conference on Frontiers in Computing and Systems",
    publisher: "Springer / IEEE (Warsaw, Poland)",
    year: 2025,
    authors: ["Sujal Lohar", "Taher Gandhi", "Yug Dave", "Vineet Ameta", "Dr. Aparna Kumari"],
    abstract: "Combines federated optimization (FedAvg and FedProx) with distributed ledger technology and differential privacy guarantees to secure multi-institutional heart disease predictive modeling while preventing reconstruction attacks.",
    status: "Accepted",
    keywords: ["Blockchain", "Differential Privacy", "FedAvg", "Distributed Learning", "Healthcare Systems"],
    includeInVariants: ["full", "academic"]
  },
  {
    id: "comsys-xai-anomaly",
    title: "Explainable Deep Learning Framework for Intensive Care Unit Anomaly Forecasting",
    conference: "COMSYS 2025: 6th International Conference on Frontiers in Computing and Systems",
    publisher: "Springer / IEEE (Warsaw, Poland)",
    year: 2025,
    authors: ["Sujal Lohar", "Yash Raval", "Utkarsh Mishra", "Dr. Aparna Kumari"],
    abstract: "Investigates attention mechanisms and post-hoc attribution algorithms for critical physiological time-series streams, providing bedside clinicians with interpretable hazard warning scores.",
    status: "Accepted",
    keywords: ["Deep Learning", "Anomaly Detection", "Time Series", "Clinical Interpretability"],
    includeInVariants: ["full", "academic"]
  },
  {
    id: "comsys-attention-rollout",
    title: "Multi-Hop Attention Rollout in Clinical Event Sequences",
    conference: "COMSYS 2025: 6th International Conference on Frontiers in Computing and Systems",
    publisher: "Springer / IEEE (Warsaw, Poland)",
    year: 2025,
    authors: ["Sujal Lohar", "Taher Gandhi", "Dr. Aparna Kumari"],
    abstract: "Formulates a mathematical graph attention rollout technique that propagates attention weights through transformer layers to produce reliable saliency maps over sparse EHR logs.",
    status: "Accepted",
    keywords: ["Attention Rollout", "Graph Networks", "EHR Modeling", "Explainable AI"],
    includeInVariants: ["full", "academic"]
  },
  {
    id: "icdsinc-distributed-net",
    title: "Intelligent Network Computing Paradigms for Distributed Clinical Data Systems",
    conference: "ICDSINC 2025: International Conference on Data Science and Intelligent Network Computing",
    publisher: "NIT Raipur",
    year: 2025,
    authors: ["Sujal Lohar", "Co-Authors", "Dr. Aparna Kumari"],
    abstract: "Evaluates edge-computing network constraints, bandwidth-efficient gradient compression schemes, and fault-tolerant aggregation protocols for high-security healthcare data grids.",
    status: "Accepted",
    keywords: ["Network Computing", "Edge AI", "Gradient Compression", "Distributed Infrastructure"],
    includeInVariants: ["full", "academic"]
  }
];
