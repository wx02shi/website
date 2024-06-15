const randomNameDecorator = (name) => {
  const special = [
    `🗿 ${name}`,
    `${name} 🚀`,
    <text>
      🏎️💨 <text className="italic">{name}</text>
    </text>,
    `🆙 ${name}`,
    `${name} 📣`,
    `[${name}]`,
    `${name}!`,
  ];

  const num = Math.floor(Math.random() * special.length * 4);

  if (num < special.length) {
    return special[num];
  }

  return `*${name}`;
};

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
        {`Pursuing fall 2024 internships + \n spring 2025 full-time opportunities!`}
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
  <section className="my-8">
    <h2 className="text-2xl font-semibold">Education</h2>
    <div className="mt-4">
      <h3 className="text-xl font-medium">University Name</h3>
      <p className="text-sm">Degree | Graduation Year</p>
    </div>
  </section>
);

const Skills = () => (
  <section className="my-8">
    <h2 className="text-2xl font-semibold">Skills</h2>
    <ul className="list-disc list-inside mt-4">
      <li>Programming Language 1</li>
      <li>Programming Language 2</li>
      <li>Technology 1</li>
      <li>Technology 2</li>
    </ul>
  </section>
);

const Experience = () => (
  <section className="my-8">
    <h2 className="text-2xl font-semibold">Work Experience</h2>
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
  </section>
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
