export const education = {
  school: "University of Waterloo",
  degree: "Honours Bachelor of Computer Science",
  graduation: "exp. 04/25",
  icon: "logos/uwaterloo.png",
  coursework: [
    "Machine Learning",
    "Algorithms",
    "Operating Systems",
    "Compilers",
    "Data Structures",
    "Networks",
    "Databases",
    "Statistics",
  ],
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
    duration: "09/24 - 12/24",
    location: "Toronto",
    icon: "logos/super.svg",
    link: "https://www.super.com/",
    summary: [
      "Money Movement team / Cash Advance product",
      "Event-driven repayments to reduce txn fees, increase profitability via ACH transfers",
    ],
  },
  {
    company: "Keplar.io",
    role: "ML Engineer Intern",
    duration: "05/24 - 08/24",
    location: "San Francisco",
    icon: "logos/keplar.png",
    link: "https://www.keplar.io/",
    summary: [
      "Worked on fullstack, infra, evals for agentic + RAG webapp",
      "Shipped rapidly to convert 5 B2B pilot customers to full contracts",
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
      "R&D of Open Banking protocol: standardized and permissioned API to allow users granular control over financial data access",
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
      "Revamped insurance service into mobile app PoC to reduce operating costs by 15%",
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
    ],
    details: [
      "Shipped end-end features: payments, booking, OAuth 2.0 (NextJS, Postgres)",
    ],
  },
];

export const activities = [
  {
    title: "BitNet b1.58",
    details: [
      "Implemented Microsoft whitepaper on LLM optimization",
      "Wrote a custom CUDA inference kernel",
    ],
  },
  {
    title: "ZKML",
    details: [
      "(W24 URA) built experiments to benchmark zero knowledge proofs on neural networks",
    ],
  },
  {
    title: "Diffusion Model",
    details: [
      "Trained in PyTorch to generate 10px images of cars from the CIFAR-10 dataset",
    ],
  },
  {
    title: "Waterloo Blockchain",
    details: [
      "Graphic designer during bull market",
      <>
        <span className="line-through">freeloader</span> developer at our hacker
        houses
      </>,
    ],
  },
  {
    title: "Urban Congestion Modelling",
    details: [
      "MacHacks 2022 Winner. Trained a CNN to predict traffic congestion from birds-eye-view maps, to help city planners",
    ],
  },
  {
    title: "Siren",
    details: [
      "ETHGlobal Waterloo Winner. Created a Solidity debugging tool: generates sequence diagrams on execution flow and gas fees",
    ],
  },
  {
    title: "Network Membership Protocol",
    details: ["Built gossip protocol multicasting for node failure detection"],
  },
  {
    title: "Personal website",
    details: ["You're looking at it right now!"],
  },
];
