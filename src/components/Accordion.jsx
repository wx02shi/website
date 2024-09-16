import React, { useState, useRef } from "react";
import { useEffect } from "react";

const Accordion = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.3s ease, opacity 0.3s ease",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="italic underline underline-offset-4 decoration-gray-400 decoration-0 w-full"
      >
        {isOpen ? "See less" : "See more"}
      </button>
    </div>
  );
};

export default Accordion;
