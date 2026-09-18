import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom"; // Import useLocation hook

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation(); // Get current route path

  // 1. AUTOMATIC ROUTE CHANGE SCROLL TO TOP
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Resets scroll immediately on page transition
    });
  }, [pathname]);

  // 2. FLOATING BUTTON VISIBILITY ON SCROLL
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 3. MANUAL CLICK SCROLL TO TOP
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#1C176C] to-[#E0AE67] p-[2px] shadow-lg drop-shadow-[0_0_15px_rgba(224,174,103,0.3)] hover:drop-shadow-[0_0_22px_rgba(224,174,103,0.6)] cursor-pointer group"
        >
          {/* Inner dark circle wrapper */}
          <div className="flex items-center justify-center w-full h-full bg-slate-950/90 rounded-full transition-colors duration-300 group-hover:bg-slate-900/80">
            {/* Animated Up Arrow Icon */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 stroke-[#E0AE67] transition-colors duration-300 group-hover:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              animate={{ y: [-1, 2, -1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </motion.svg>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};