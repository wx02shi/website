import { useState, useRef } from "react";
import LinkIcon from "../icons/Link";
import ExpandIcon from "../icons/Expand";

const Event = ({ company, role, duration, icon, link, summary }) => {
  const [isHoverLink, setIsHoverLink] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div
      className={`p-2 rounded-xl ${
        isOpen ? "bg-gray-500 bg-opacity-5" : ""
      } hover:bg-gray-700 hover:bg-opacity-5 transition duration-300 ease-in-out relative`}
      onClick={() => !isHoverLink && setIsOpen(!isOpen)}
    >
      <div className="flex items-start">
        {icon && (
          <a
            className="mr-4"
            onMouseEnter={() => setIsHoverLink(true)}
            onMouseLeave={() => setIsHoverLink(false)}
            href={link}
            target="_blank"
          >
            <img src={icon} className="w-12 h-12 rounded-lg object-cover" />
          </a>
        )}
        <div className="flex flex-col flex-grow">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a
                className="text-lg font-medium no-underline"
                href={link}
                target="_blank"
                onMouseEnter={() => setIsHoverLink(true)}
                onMouseLeave={() => setIsHoverLink(false)}
              >
                {company}
              </a>
              {link && (
                <div
                  className="pl-2"
                  style={{
                    opacity: isHoverLink ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={() => {
                    if (isHoverLink) setIsHoverLink(true);
                  }}
                  onMouseLeave={() => setIsHoverLink(false)}
                >
                  <a href={link} target="_blank">
                    <LinkIcon />
                  </a>
                </div>
              )}
            </div>
            <p className="text-xs italic text-gray-500">{duration}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm">{role}</p>
          </div>
        </div>
      </div>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
          opacity: isOpen ? 1 : 0,
          transition: "all 0.3s ease",
          overflow: "hidden",
        }}
      >
        {summary && (
          <div className="flex flex-col gap-1 py-2">
            {summary.map((line) => (
              <p>{line}</p>
            ))}
          </div>
        )}
      </div>
      <div
        className={`absolute bottom-2 right-2 transition-transform duration-300 ease-in-out ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <ExpandIcon />
      </div>
    </div>
  );
};

export default Event;
