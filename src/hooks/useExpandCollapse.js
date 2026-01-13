import { useSpring } from "@react-spring/web";
import useMeasure from "react-use-measure";

/**
 * Hook for consistent expand/collapse animation behavior
 * @param {boolean} isOpen - Whether the content should be expanded
 * @param {object} options - Animation options
 * @returns {object} - { measureRef, animatedStyle }
 */
export function useExpandCollapse(isOpen, options = {}) {
  const { animateOpacity = true, config = { tension: 200, friction: 25 } } =
    options;

  const [measureRef, { height }] = useMeasure();

  const springs = useSpring({
    height: isOpen ? height : 0,
    opacity: animateOpacity ? (isOpen ? 1 : 0) : 1,
    config,
  });

  return {
    measureRef,
    animatedStyle: {
      overflow: "hidden",
      ...springs,
    },
  };
}
