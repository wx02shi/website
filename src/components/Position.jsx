const Position = ({ company, role, duration, location, children }) => (
  <div className="mt-4">
    <h3 className="text-lg font-medium">{company}</h3>
    <p className="italic">{role}</p>
    {children}
  </div>
);

export default Position;
