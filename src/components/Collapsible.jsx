import { useState, useCallback } from "react";
import { animated } from "@react-spring/web";
import { useExpandCollapse } from "../hooks/useExpandCollapse";
import ChevronIcon from "../icons/Chevron";

const Collapsible = ({ children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  const { measureRef, animatedStyle } = useExpandCollapse(open);

  const handleToggle = useCallback(() => {
    setOpen((val) => !val);
  }, []);

  return (
    <div>
      <animated.div style={animatedStyle}>
        <div ref={measureRef}>{children}</div>
      </animated.div>
      <button
        className="w-full"
        onClick={handleToggle}
        aria-expanded={open}
        aria-label={open ? "Show less" : "Show more"}
      >
        <div
          className={`py-2 flex justify-center transition-transform duration-300 hover:bg-gray-500 hover:bg-opacity-5 ease-in-out rounded-md ${
            open ? "rotate-180" : ""
          }`}
        >
          <ChevronIcon />
        </div>
      </button>
    </div>
  );
};

export default Collapsible;
