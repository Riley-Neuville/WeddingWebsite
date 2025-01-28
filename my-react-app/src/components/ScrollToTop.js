import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Adding a small delay using setTimeout to ensure DOM is ready
    setTimeout(() => {
      console.log("Scrolling to top:", pathname);
      window.scrollTo(0, 0); // Scroll to top of the page
    }, 50); // 100ms delay to allow for page rendering
  }, [pathname]); // Only re-run when the pathname changes

  return null;
};

export default ScrollToTop;
