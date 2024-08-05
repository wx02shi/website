const Position = ({ company, role, duration, location, children }) => (
  <div className="mt-4 mb-2">
    {/* <div className="flex justify-between items-end">
      <text className="text-lg font-medium">{company}</text>
      <text>{duration}</text>
    </div>
    <div className="flex justify-between">
      <text className="italic">{role}</text>
      <text>{location}</text>
    </div> */}
    <h3 className="text-lg font-medium">
      {company} • <span className="font-normal">{role}</span>
    </h3>
    <p className="italic text-sm mb-2">
      {duration} • {location}
    </p>

    {children}
  </div>
);

export default Position;
