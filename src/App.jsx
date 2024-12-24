import Section from "./components/Section";
import randomNameDecorator from "./components/NameDecorator";
import Collapsible from "./components/Collapsible";
import Event from "./components/Event";
import { experience, education, skills, activities } from "./data";
import { EventContextProvider } from "./EventContext";

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
      <a
        href="https://drive.google.com/file/d/1_VMpVSnP07EeZB_UoWnfZoFeiA0kiIpB/view?usp=sharing"
        target="_blank"
      >
        Resume
      </a>
    </div>
  </header>
);

const Education = () => (
  <Section title="Education">
    <div className="-mx-2">
      <Event
        company={education.school}
        role={education.degree}
        duration={education.graduation}
        icon={education.icon}
        summary={["Coursework:", education.coursework.join(", ")]}
      />
    </div>
  </Section>
);

const Skills = () => {
  return (
    <Section title="Skills">
      <p className="whitespace-pre-line">{skills.join(" • ")}</p>
    </Section>
  );
};

const Experience = () => {
  const cutoff = 3;
  const latest = experience.slice(0, cutoff);
  const rest = experience.slice(cutoff);

  return (
    <Section title="Experience">
      <div className="-mx-2">
        {latest.map((exp, i) => (
          <Event key={i} id={i} {...exp} />
        ))}
        <Collapsible className="-mx-2">
          {rest.map((exp, i) => (
            <Event key={i} {...exp} />
          ))}
        </Collapsible>
      </div>
    </Section>
  );
};

const Activities = () => {
  const cutoff = 3;
  const latest = activities.slice(0, cutoff);
  const rest = activities.slice(cutoff);

  return (
    <Section title="Works">
      {latest.map((activity, i) => (
        <div className="mt-4" key={i}>
          <h3 className="text-lg font-medium">{activity.title}</h3>
          {activity.details.map((line, j) => (
            <p key={j}>{line}</p>
          ))}
        </div>
      ))}
      <Collapsible>
        <div className="pb-8">
          {rest.map((activity, i) => (
            <div className="mt-4" key={i}>
              <h3 className="text-lg font-medium">{activity.title}</h3>
              {activity.details.map((line, j) => (
                <p key={j}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </Collapsible>
    </Section>
  );
};

function App() {
  return (
    <EventContextProvider>
      <div className="max-w-md mx-auto p-4 mt-4 md:mt-32 text-gray-600">
        <Header />
        <Education />
        <Skills />
        <Experience />
        <Activities />
      </div>
    </EventContextProvider>
  );
}

export default App;
