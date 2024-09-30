import { useState, useEffect } from "react";

// Define your breakpoints
const breakpoints = {
  mobile: 768, // up to 768px
  tablet: 1024, // up to 1024px
  desktop: 1025, // anything above 1024px
};

export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < breakpoints.mobile) {
        setScreenSize("mobile");
      } else if (width < breakpoints.tablet) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    updateScreenSize();

    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return screenSize;
};
