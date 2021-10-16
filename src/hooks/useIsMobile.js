import { useState, useEffect } from "react";
import variables from "../styles/variables";

// Return true if window width is smaller than mobile breakpoint (defined in variables.js)
export default function useIsMobile() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      if (window.innerWidth < variables.breakpoints.mobile)
        setIsMobile(true);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return isMobile;
}