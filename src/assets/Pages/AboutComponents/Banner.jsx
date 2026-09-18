import React from "react";
import { Info } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();
  
  return (
    <section className="bg-[#E5E8F1] px-6 py-24 lg:pt-32 overflow-hidden">
      <div className="mx-auto max-w-8xl md:px-10 grid items-center gap-12 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Subheading Tag */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-2 text-[#102B83]"
          >
            <Info className="h-4 w-4 sm:h-3 sm:w-3 2xl:h-5 2xl:w-5" />
            <span className="text-base font-semibold sm:text-lg 2xl:text-[15px]">
              ABOUT OUR PLATFORM
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 mt-2 text-4xl font-bold leading-tight text-slate-900 sm:text-6xl"
          >
            Empowering Trust
            <br />
            Through Comprehensive
            <br />
            Verification
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 max-w-xl text-slate-600"
          >
            We build the infrastructure for trust in the modern workforce,
            combining advanced technology with rigorous human oversight to
            deliver accurate, fast, and compliant background screening.
          </motion.p>

          {/* Call to Action Button */}
<div className="relative inline-block">
      {/* 1. CONTINUOUS SONAR / RADAR PULSE RING */}
      <motion.span
        animate={{
          scale: [1, 1.35],
          opacity: [0.6, 0],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="absolute inset-0 rounded-lg border-2 border-[var(--color-primary,#102B83)] pointer-events-none"
      />

      {/* 2. MAIN BUTTON */}
      <motion.button
        onClick={() => navigate("/solutions")}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        variants={{
          animate: {
            opacity: [0, 1],
            scale: [0.95, 1],
            transition: { duration: 0.5 },
          },
        }}
        className="
          relative inline-flex items-center gap-2 overflow-hidden
          rounded-lg bg-[var(--color-primary,#102B83)] px-6 py-3
          text-sm font-medium text-white shadow-lg shadow-blue-900/20
          cursor-pointer select-none group
        "
      >
        {/* Hover Accent Fill from Bottom */}
        <motion.span
          variants={{
            initial: { y: "100%" },
            hover: { y: "0%" },
          }}
          transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
          className="absolute inset-0 z-0 bg-blue-600"
        />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          Explore Solutions
          <motion.span
            variants={{
              initial: { x: 0, y: 0 },
              hover: { x: 4, y: -2 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="text-base inline-block leading-none"
          >
            ↗
          </motion.span>
        </span>
      </motion.button>
    </div>
        </motion.div>

        {/* RIGHT IMAGE CONTAINER */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Main Image */}
          <div className="overflow-hidden rounded-2xl shadow-xl bg-slate-200 border border-white/50">
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              src="/About/aboutbanner.jpg"
              alt="Secure Enterprise Platform"
              className="h-full w-full object-cover"
            />
          </div>

          {/* FLOATING CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: [0, -10, 0] 
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.5 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }
            }}
            whileHover={{ scale: 1.04 }}
            className="absolute -bottom-6 left-6 flex items-center gap-4 rounded-xl bg-white/95 backdrop-blur-md px-5 py-4 shadow-xl border border-white/60 cursor-pointer"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 shadow-inner">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3Z" />
                <path d="M19 11c0 7-7 11-7 11S5 18 5 11V5l7-3 7 3v6Z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 leading-tight">
                Secure Enterprise Platform
              </p>
              <p className="text-xs text-slate-500 font-medium">
                Globally Compliant Infrastructure
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Banner;