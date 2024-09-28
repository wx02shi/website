import { useState } from "react";
import { animated, useSpring, config } from "@react-spring/web";
import useMeasure from "react-use-measure";
import ChevronIcon from "../icons/Chevron";

const Collapsible = ({ children }) => {
  const [open, setOpen] = useState(false);

  const [measureRef, { height }] = useMeasure();

  const springs = useSpring({
    from: {
      height: 0,
      opacity: 0,
    },
    to: {
      height: open ? height : 0,
      opacity: open ? 1 : 0,
    },
  });

  return (
    <div>
      <animated.div
        style={{
          overflow: "hidden",
          ...springs,
        }}
      >
        <div ref={measureRef}>{children}</div>
      </animated.div>
      <button className="w-full" onClick={() => setOpen((val) => !val)}>
        <div
          className={`py-2 flex justify-center transform duration-300 hover:bg-gray-500 hover:bg-opacity-5 ease-in-out rounded-md ${
            open ? "-scale-100" : ""
          }`}
        >
          <ChevronIcon />
        </div>
      </button>
    </div>
  );
};

export default Collapsible;
