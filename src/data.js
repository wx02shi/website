export const education = {
  school: "University of Waterloo",
  degree: "Bachelor of Science in Computer Science",
  graduation: "04/25",
  coursework: [],
};

export const skills = [
  "Python",
  "C++",
  "TypeScript",
  "Java",
  "Go",
  "React",
  "Node",
  "FastAPI",
  "Spring",
  "PyTorch",
  "TensorFlow",
  "Huggingface",
  "Flutter",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "MongoDB",
];

export const experience = [
  {
    company: "Super.com",
    role: "Software Engineer Intern",
    duration: "(present) 09/24",
    location: "Toronto",
    icon: "logos/super.svg",
    link: "https:/www.super.com/",
    summary: ["Building fintech products again"],
  },
  {
    company: "Keplar.io",
    role: "ML Engineer Intern",
    duration: "05/24 - 08/24",
    location: "San Francisco",
    icon: "logos/keplar.png",
    link: "https://www.keplar.io/",
    summary: [
      "Worked for an early-stage startup, on the cutting-edge of agentic AI + RAG: infra, reliability, prod scale",
      "+ benchmarking & training models",
    ],
    details: [
      "Shipped new projects & features (Node, Python, Postgres) for early-stage startup",
      "Trained vision models, built infra to support video file formats",
      "Created evals for actionable insights → converted 5 B2B pilots to full customers",
      "Led infra refactor to save 50 dev hours",
    ],
  },
  {
    company: "Interac",
    role: "Software Engineer Intern",
    duration: "09/23 - 12/23",
    location: "Toronto",
    icon: "logos/interac.png",
    link: "https://www.interac.ca/",
    summary: [
      "R&D of Open Banking system: customers use granular permissions to control third-party access to their personal & financial data",
    ],
    details: [
      "Built Open Banking API for testing internal systems (Java, Spring, Postgres)",
      "Implemented security model to OAuth 2.0, OIDC, and Financial-grade API standards",
      "Designed granular permissions mechanisms according to RFC 9396; a drop-in upgrade for archaic OAuth scope implementations",
    ],
  },
  {
    company: "Interac",
    role: "Software Engineer Intern",
    duration: "01/23 - 04/23",
    location: "Toronto",
    icon: "logos/interac.png",
    link: "https://www.interac.ca/",
    summary: [
      "Laid groundwork ML + data infra to boost developer velocity, reduce cloud costs, and advance company OKRs to leverage AI tech",
      "+ side hustle: upgrading the InfoSec system",
    ],
    details: [
      "Architected cloud VM infra for existing and upcoming data and ML workloads",
      "Migrated existing projects to stateless NLP microservices, reducing costs by 20%",
      "Built data pipelines to run traditional NLP methods (ex. TF-IDF) on 10TB corpus",
      "Created Outlook extension to detect email compliance breaches; outperformed InfoSec system in prod by 47%",
    ],
  },
  {
    company: "WSIB Innovation Lab",
    role: "Software Engineer Intern",
    location: "Waterloo",
    duration: "05/22 - 08/22",
    icon: "logos/wsib.jpeg",
    link: "https://www.linkedin.com/company/wsib-innovation-lab/posts/?feedView=all",
    summary: [
      "Revamped insurance service into mobile app to save $1M/yr in operating costs",
    ],
    details: [
      "Built automations for 90% of claims processing ~ replacing human review",
      "Scaled tech stack to serve ~100k customers (Flutter, Node, MongoDB)",
      "Implemented security and customer SSO (OAuth 2.0 + OIDC)",
    ],
  },
  {
    company: "Paperminds AI",
    role: "Software Engineer Intern",
    location: "Montreal",
    duration: "05/21 - 08/21",
    icon: "logos/paperminds.jpeg",
    link: "https://www.linkedin.com/company/papermindsai/",
    summary: [
      "Launched webapp MVP for early-stage startup, fast-tracking launch by 1 month",
      "Worked on classical NLP, embeddings, and early Transformer-based Language Models",
    ],
    details: [
      "Shipped end-end features: payments, booking, OAuth 2.0 (NextJS, Postgres)",
      "Used TF-IDF to accelerate search re-indexing (SBERT embeddings) by 20%",
    ],
  },
];
