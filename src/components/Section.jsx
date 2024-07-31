const Section = ({ title, children }) => (
  <section className="my-8">
    <h2 className="text-xl font-semibold text-black">{title}</h2>
    <div className="mt-4">{children}</div>
  </section>
);

export default Section;
