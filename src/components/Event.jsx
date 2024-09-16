import { useState } from "react";

const Event = ({ company, role, duration, icon, link }) => {
  const [isHoverLink, setIsHoverLink] = useState(false);

  return (
    <div className="p-2 flex items-center rounded-xl hover:bg-gray-700 hover:bg-opacity-5 transition duration-300 ease-in-out">
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 stroke-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>
          <p className="text-xs italic text-gray-500">{duration}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm">{role}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            className="w-2 h-2 stroke-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Event;
