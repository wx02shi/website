// import { useCollapse } from "react-collapsed";

// const Accordion = ({ children }) => {
//   const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

//   return (
//     <div>
//       <div {...getCollapseProps()}>{children}</div>
//       <button
//         className="italic underline underline-offset-4 decoration-gray-400 decoration-0 w-full"
//         {...getToggleProps()}
//       >
//         {isExpanded ? "See less" : "See more"}
//       </button>
//     </div>
//   );
// };

import { useState } from "react";
import { animated, useSpring, config } from "@react-spring/web";
import useMeasure from "react-use-measure";

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
      <button onClick={() => setOpen((val) => !val)}>
        {open ? "Close" : "Open"}
      </button>
    </div>
  );
};

export default Collapsible;
