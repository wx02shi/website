import Section from "./components/Section";
import randomNameDecorator from "./components/NameDecorator";
import Position from "./components/Position";
import Accordion from "./components/Accordion";

const Header = () => (
  <header className="my-8">
    <h1 className="text-2xl font-bold text-gray-900">
      {randomNameDecorator("william shi")}
    </h1>
    <div className="mt-6 space-y-4 whitespace-pre-line">
      <p className="italic">
        NOTE: site still under construction, apologies for any issues!
      </p>
      <p>
        Upcoming software engineer, specializing in machine learning and
        distributed systems
      </p>
      <p>
        + diverse work experience in fintech, crypto, fullstack, and data
        engineering
      </p>
      <p>Pursuing spring 2025 full-time roles</p>
    </div>

    <div className="mt-8 space-x-4">
      <a href="https://linkedin.com/in/wx02shi">LinkedIn</a>
      <a href="mailto:wxshi@uwaterloo.ca">Email</a>
      <a href="https://github.com/wx02shi">GitHub</a>
      <a href="">Resume</a>
    </div>
  </header>
);

const Education = () => (
  <Section title="Education">
    <h3 className="text-lg font-medium">University of Waterloo</h3>
    <p className="italic">Honours Bachelor of Computer Science</p>
    <p>Apr 2025 (expected)</p>
  </Section>
);

const Skills = () => {
  const skillsList = [
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

  return (
    <Section title="Skills">
      <p className="whitespace-pre-line">{skillsList.join(" • ")}</p>
    </Section>
  );
};

const Experience = () => (
  <Section title="Experience">
    <Position
      company="Super.com"
      role="Software Engineer Intern"
      duration="Sep 2024 - present"
      location="Toronto"
    >
      <div className="mt-4 space-y-2 whitespace-pre-line">
        <p>Building fintech products again</p>
      </div>
    </Position>
    <Position
      company="Keplar.io"
      role="ML Engineer Intern"
      duration="May 2024 - Aug 2024"
      location="San Francisco"
    >
      <div className="mt-4 space-y-2 whitespace-pre-line">
        <p className="whitespace-pre-line">
          {`Worked for an early-stage startup,
        on the cutting-edge of agentic AI + RAG:
        infra, reliability, prod scale
        + benchmarking & training models`}
        </p>
      </div>
      <Accordion className="mt-2">
        <ul>
          <li>
            Shipped new projects & features (Node, Python, Postgres) for
            early-stage startup
          </li>
          <li>
            Trained vision models, built infra to support video file formats
          </li>
          <li>
            Created evals for actionable insights → converted 5 B2B pilots to
            full customers
          </li>
          <li>Led infra refactor to save ~50 dev hours</li>
        </ul>
      </Accordion>
    </Position>
    <Position
      company="Interac"
      role="Software Engineer Intern"
      duration="Sep 2023 - Dec 2023"
      location="Toronto"
    >
      <div className="mt-4 space-y-2 whitespace-pre-line">
        <p>
          R&D of Open Banking system: customers use granular permissions to
          control third-party access to their personal & financial data
        </p>
      </div>
      <Accordion className="mt-2">
        <ul>
          <li>
            Built Open Banking API for testing internal systems (Java, Spring,
            Postgres)
          </li>
          <li>
            Implemented security model to OAuth 2.0, OIDC, and Financial-grade
            API standards
          </li>
          <li>
            Designed granular permissions mechanisms according to RFC 9396; a
            drop-in upgrade for archaic OAuth scope implementations
          </li>
        </ul>
      </Accordion>
    </Position>
    <Position
      company="Interac"
      role="Software Engineer Intern"
      duration="Jan 2023 - Apr 2023"
      location="Toronto"
    >
      <div className="mt-4 space-y-2 whitespace-pre-line">
        <p>
          Laid groundwork ML + data infra to boost developer velocity, reduce
          cloud costs, and advance company OKRs to leverage AI tech
        </p>
        <p>+ side hustle: upgrading the InfoSec system</p>
      </div>
      <Accordion className="mt-2">
        <ul>
          <li>
            Architected cloud VM infra for existing and upcoming data and ML
            workloads
          </li>
          <li>
            Migrated existing projects to stateless NLP microservices, reducing
            costs by 20%
          </li>
          <li>
            Built data pipelines to run traditional NLP methods (ex. TF-IDF) on
            ~10TB corpus
          </li>
          <li>
            Created Outlook extension to detect email compliance breaches;
            outperformed InfoSec system in prod by 47%
          </li>
        </ul>
      </Accordion>
    </Position>
    <Position
      company="WSIB Innovation Lab"
      role="Software Engineer Intern"
      duration="May 2022 - Aug 2022"
      location="Waterloo"
    >
      <div className="mt-4 space-y-2 whitespace-pre-line">
        <p>
          Revamped insurance service into mobile app to save $1M/yr in operating
          costs
        </p>
        <Accordion className="mt-2">
          <ul>
            <li>
              Built automations for 90% of claims processing ~ replacing human
              review
            </li>
            <li>
              Scaled tech stack to serve ~100k customers (Flutter, Node,
              MongoDB)
            </li>
            <li>Implemented security and customer SSO (OAuth 2.0 + OIDC)</li>
          </ul>
        </Accordion>
      </div>
    </Position>
    <Position
      company="Paperminds AI"
      role="Software Engineer Intern"
      duration="May 2021 - Aug 2021"
      location="Montreal"
    >
      <div className="mt-4 space-y-2 whitespace-pre-line">
        <p>
          Launched webapp MVP for early-stage startup, fast-tracking launch by 1
          month
        </p>
        <p>
          Worked on classical NLP, embeddings, and early Transformer-based
          Language Models
        </p>
        <Accordion className="mt-2">
          <ul>
            <li>
              Shipped end-end features: payments, booking, OAuth 2.0 (NextJS,
              Postgres)
            </li>
            <li>
              Used TF-IDF to accelerate search re-indexing (SBERT embeddings) by
              20%
            </li>
          </ul>
        </Accordion>
      </div>
    </Position>
  </Section>
);

const Activities = () => (
  <Section title="Other stuff">
    <div className="mt-4">
      <h3 className="text-lg font-medium">BitNet b1.58</h3>
      <p>Implemented Microsoft whitepaper on LLM optimization</p>
      <p>Trained 100M model, wrote a custom CUDA inference kernel</p>
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-medium">ZKML</h3>
      <p>
        (W24 URA) built experiments to benchmark zero knowledge proofs on neural
        networks
      </p>
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-medium">Urban Congestion Modelling</h3>
      <p>
        MacHacks 2022 Winner. Trained a CNN to predict traffic congestion from
        birds-eye-view maps, to help city planners
      </p>
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-medium">Waterloo Blockchain</h3>
      <p>Graphic designer during bull market</p>
      <p>
        <span className="line-through">freeloader</span> developer at our hacker
        houses
      </p>
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-medium">Siren</h3>
      <p>
        ETHGlobal Waterloo Winner. Created a Solidity debugging tool: generates
        sequence diagrams on execution flow and gas fees
      </p>
    </div>
  </Section>
);

function App() {
  return (
    <div className="max-w-md mx-auto p-4 mt-4 md:mt-32 text-gray-600">
      <Header />
      <Education />
      <Skills />
      <Experience />
      <Activities />
    </div>
  );
}

export default App;
