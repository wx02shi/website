import { animated } from "@react-spring/web";
import { useAccordion } from "../EventContext";
import { useExpandCollapse } from "../hooks/useExpandCollapse";
import LinkIcon from "../icons/Link";
import ExpandIcon from "../icons/Expand";

const Event = ({ id, company, role, duration, icon, link, summary }) => {
  const { isOpen, toggle } = useAccordion();
  const expanded = isOpen(id);

  const { measureRef, animatedStyle } = useExpandCollapse(expanded);

  const handleClick = (e) => {
    if (e.target.closest("[data-link-area]")) {
      return;
    }
    toggle(id);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`p-2 rounded-xl cursor-pointer ${
        expanded ? "bg-gray-500 bg-opacity-5" : ""
      } hover:bg-gray-700 hover:bg-opacity-5 transition-colors duration-300 ease-in-out relative`}
      onClick={handleClick}
    >
      <div className="flex items-start">
        {icon && (
          <div
            data-link-area
            className="mr-4 relative rounded-lg overflow-hidden group"
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              {link && (
                <div className="absolute flex inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <LinkIcon />
                </div>
              )}
              <img
                src={icon}
                alt={`${company} logo`}
                className="w-12 h-12 object-cover group-hover:blur-md transition-all duration-300 ease-in-out"
              />
            </a>
          </div>
        )}
        <div className="flex flex-col flex-grow">
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium">{company}</p>
            <p className="text-xs italic text-gray-500">{duration}</p>
          </div>
          <p className="text-sm">{role}</p>
        </div>
      </div>

      <animated.div style={animatedStyle}>
        <div ref={measureRef}>
          {summary && (
            <div className="flex flex-col gap-1 py-2">
              {summary.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          )}
        </div>
      </animated.div>

      <div
        className={`absolute bottom-2 right-2 transition-transform duration-300 ease-in-out ${
          expanded ? "rotate-180" : ""
        }`}
      >
        <ExpandIcon />
      </div>
    </div>
  );
};

export default Event;
