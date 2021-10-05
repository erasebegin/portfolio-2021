import { useState, useEffect } from "react";

export default function UseWidth() {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    window.innerWidth <= 1000 ? setIsMobile(true) : setIsMobile(false);
  });

  if (typeof window === "undefined") {
    global.window = {};
  }

  window.onresize = function () {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
  };

  return isMobile;
}
