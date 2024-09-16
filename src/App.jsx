import Section from "./components/Section";
import randomNameDecorator from "./components/NameDecorator";
import Position from "./components/Position";
import Accordion from "./components/Accordion";
import Event from "./components/Event";
import { experience } from "./data";

const Header = () => (
  <header className="my-8">
    <h1 className="text-2xl font-bold text-gray-900">
      {randomNameDecorator("william shi")}
    </h1>
    <div className="mt-6 space-y-4 whitespace-pre-line">
      <p>
        Software engineer, specializing in machine learning and distributed
        systems
      </p>
      <p>
        + diverse work experience in fintech, crypto, fullstack, and data
        engineering
      </p>
      <p>Pursuing spring 2025 full-time roles</p>
    </div>

    <div className="mt-8 space-x-4">
      <a href="https://linkedin.com/in/wx02shi" target="_blank">
        LinkedIn
      </a>
      <a href="mailto:wxshi@uwaterloo.ca" target="_blank">
        Email
      </a>
      <a href="https://github.com/wx02shi" target="_blank">
        GitHub
      </a>
      <a href="resume.pdf" target="_blank">
        Resume
      </a>
    </div>
  </header>
);

const Education = () => (
  <Section title="Education">
    <div className="-mx-2">
      <Event
        company="University of Waterloo"
        role="Bachelor of Computer Science"
        duration="04/25"
        icon="logos/uwaterloo.png"
      />
    </div>
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

const Experience = () => {
  const latest = experience.slice(0, 3);
  const rest = experience.slice(3);

  return (
    <Section title="Experience">
      <div className="-mx-2">
        {latest.map((exp, i) => (
          <Event key={i} {...exp} />
        ))}
        <Accordion className="-mx-2">
          {rest.map((exp, i) => (
            <Event key={i} {...exp} />
          ))}
        </Accordion>
      </div>
    </Section>
  );
};

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
