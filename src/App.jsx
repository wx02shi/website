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
      <p>
        Upcoming software engineer, specializing in machine learning and
        distributed systems
      </p>
      <p>
        + diverse work experience in fintech, crypto, fullstack, and data
        engineering
      </p>
      <p>
        {`Pursuing fall 2024 internships + \n spring 2025 full-time opportunities`}
      </p>
    </div>

    <div className="mt-8 space-x-4">
      <a href="https://github.com/yourusername">GitHub</a>
      <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
      <a href="mailto:youremail@example.com">Email</a>
      <a href="path/to/your/resume.pdf">Resume</a>
    </div>
  </header>
);

const Education = () => (
  <Section title="Education">
    <h3 className="text-lg font-medium">University of Waterloo</h3>
    <p className="italic">Honours Bachelor of Computer Science</p>
    <p>April 2025 (expected)</p>
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
      company="Keplar.io"
      role="ML Engineer Intern"
      duration="May 2024 - present"
      location="San Francisco"
    >
      <p>Hot take: "ChatGPT wrappers" are hard!</p>
      <p className="whitespace-pre-line">
        {`Worked for an early-stage startup,
        on the cutting-edge of agentic AI systems:
        infra, reliability, prod scale
        + benchmarking & training models`}
      </p>
      <Accordion>
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
    <div className="mt-4">
      <h3 className="text-xl font-medium">Company Name</h3>
      <p className="text-sm">Job Title | Duration | Location</p>
      <ul className="list-disc list-inside mt-2">
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </li>
      </ul>
    </div>
    <div className="mt-4">
      <h3 className="text-xl font-medium">Company Name</h3>
      <p className="text-sm">Job Title | Duration | Location</p>
      <ul className="list-disc list-inside mt-2">
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </li>
      </ul>
    </div>
  </Section>
);

const Activities = () => (
  <section className="my-8">
    <h2 className="text-2xl font-semibold">Projects</h2>
    <div className="mt-4">
      <h3 className="text-xl font-medium">Project Name</h3>
      <p className="text-sm">Brief description of the project.</p>
    </div>
    <div className="mt-4">
      <h3 className="text-xl font-medium">Project Name</h3>
      <p className="text-sm">Brief description of the project.</p>
    </div>
  </section>
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
