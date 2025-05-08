import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook

const ScrollToTop = () => {
  const location = useLocation();

  // Whenever the route changes, scroll to the top
  useEffect(() => {
    window.scrollTo(0, 0); // This will scroll the window to the top (0, 0)
  }, [location]);

  return null;
};

export default ScrollToTop;
