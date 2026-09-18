import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const BottomBanner = () => {
  const cardRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
    
  };

  return (
    <section className="px-4 py-20">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-6 py-16 text-center shadow-2xl transition duration-500 hover:scale-[1.02]"
      >
        {/* Cursor Light Effect */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition duration-300 hover:opacity-100">
          <div
            className="absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
            style={{
              top: "var(--y)",
              left: "var(--x)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Heading */}
          <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl md:text-4xl animate-fadeInUp">
            Start your first background check in minutes.
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mb-8 max-w-2xl text-sm text-slate-300 sm:text-base animate-fadeInUp delay-100">
            Create an account, configure your checks and run your first
            verification today. No sales call required.
          </p>

          {/* Button */}
         <motion.button
          onClick={() => navigate('/contactus')}
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.96 }}
      className="
        relative inline-flex items-center gap-2 overflow-hidden
        rounded-lg bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900
        shadow-md cursor-pointer select-none
      "
    >
      {/* Liquid Wave Fill from Bottom */}
      <motion.span
        variants={{
          initial: { y: "100%" },
          hover: { y: "0%" },
        }}
        transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
        className="absolute inset-0 z-0 bg-slate-900"
      />

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        <motion.span
          variants={{
            initial: { color: "#0f172a" }, // slate-900
            hover: { color: "#fbbf24" },   // amber-400
          }}
          transition={{ duration: 0.2 }}
        >
          Request a Demo
        </motion.span>

        <motion.span
          variants={{
            initial: { x: 0, color: "#0f172a" },
            hover: { x: 5, color: "#fbbf24" },
          }}
          transition={{ duration: 0.25 }}
          className="text-lg leading-none"
        >
          →
        </motion.span>
      </span>
    </motion.button>
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;