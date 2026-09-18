import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse,
  Landmark,
  GraduationCap,
  Laptop,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [activeSegment, setActiveSegment] = useState(null);
  const navigate = useNavigate();

  const segmentsData = {
    healthcare: {
      id: "healthcare",
      title: "Healthcare",
      accuracy: "98% Verification Accuracy",
      description: "Trusted screening for safe healthcare hiring.",
      positionClass: "top-0 left-0 sm:-top-4 sm:-left-4",
      icon: <HeartPulse className="w-5 h-5 text-sky-400" />,
    },
    financial: {
      id: "financial",
      title: "Financial Services",
      accuracy: "99.5% Compliance Rate",
      description: "Reliable verification reducing operational risk.",
      positionClass: "top-0 right-0 sm:-top-4 sm:-right-4",
      icon: <Landmark className="w-5 h-5 text-amber-400" />,
    },
    education: {
      id: "education",
      title: "Education",
      accuracy: "96% Fast Onboarding",
      description: "Verifying academic credentials and past employment.",
      positionClass: "bottom-0 right-0 sm:-bottom-4 sm:-right-4",
      icon: <GraduationCap className="w-5 h-5 text-teal-400" />,
    },
    it: {
      id: "it",
      title: "IT",
      accuracy: "99.9% Data Security",
      description: "Rigorous screening for tech talent & contractors.",
      positionClass: "bottom-0 left-0 sm:-bottom-4 sm:-left-4",
      icon: <Laptop className="w-5 h-5 text-blue-400" />,
    },
  };

  // Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1A2C6D] via-[#273D95] to-[#2596D6] py-12 text-white sm:py-16 md:py-20 lg:pt-28 lg:pb-24">
      {/* Background Glow Overlay */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-8xl px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          
          {/* Left Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Tag Badge */}
            <motion.div
              variants={itemVariants}
              className="mb-4 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-[#E8B35A] animate-pulse" />
              Industries
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Trusted Verification <br />
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-[#E8B35A] bg-clip-text text-transparent">
                Across Industries
              </span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base text-gray-200 leading-relaxed sm:text-lg md:text-xl"
            >
              Empowering organizations across Information Technology, Banking &
              Financial Services, Healthcare, and Education with secure,
              accurate, and compliant background verification solutions to build
              trusted workforces.
            </motion.p>

            {/* Action Buttons */}
          <motion.div
      variants={itemVariants}
      className="mt-8 flex flex-wrap items-center gap-4"
    >
      {/* Primary Gold Button */}
      <motion.button
          onClick={() => navigate("/contactus")}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.05 },
          tap: { scale: 0.96 },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="relative flex items-center gap-2 overflow-hidden rounded-full bg-[#E8B35A] px-7 py-3.5 text-sm font-bold text-slate-900 shadow-lg shadow-amber-500/20 transition-colors hover:bg-[#d5a145] sm:text-base cursor-pointer"
      >
        {/* Subtle Shine/Glow Effect on Hover */}
        <motion.span
          variants={{
            rest: { x: "-100%", opacity: 0 },
            hover: { x: "100%", opacity: 0.6 },
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
        />

        <span className="relative z-10">Explore Industries</span>

        {/* Animated Arrow Icon */}
        <motion.span
          variants={{
            rest: { x: 0 },
            hover: { x: 4 },
          }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="relative z-10 flex items-center justify-center"
        >
          <ChevronRight className="h-4 w-4 stroke-[3]" />
        </motion.span>
      </motion.button>

      {/* Secondary Outline Button */}
      <motion.button
          onClick={() => navigate("/contactus")}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        variants={{
          rest: {
            scale: 1,
            backgroundColor: "rgba(232, 179, 90, 0)",
            borderColor: "rgba(232, 179, 90, 1)",
          },
          hover: {
            scale: 1.05,
            backgroundColor: "rgba(232, 179, 90, 0.15)",
            borderColor: "rgba(232, 179, 90, 1)",
          },
          tap: { scale: 0.96 },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="relative overflow-hidden rounded-full border px-7 py-3.5 text-sm font-semibold text-[#E8B35A] backdrop-blur-sm sm:text-base cursor-pointer"
      >
        {/* Subtle Ripple/Pulse Scale Layer */}
        <motion.span

          variants={{
            rest: { opacity: 0, scale: 0.8 },
            hover: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-full bg-[#E8B35A]/10 cursor-pointer"
        />

        <span className="relative z-10">Get in Touch</span>
      </motion.button>
    </motion.div>
          </motion.div>

          {/* Right Wheel Graphic Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center py-6"
          >
            {/* Main Wheel Container */}
            <div className="relative h-[320px] w-[320px] sm:h-[460px] sm:w-[460px]">
              
              {/* Dynamic Animated Hover Card */}
              <AnimatePresence>
                {activeSegment && (
                  <motion.div
                    key={activeSegment.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute z-30 pointer-events-none max-w-[240px] rounded-2xl border border-white/20 bg-[#0F2352]/90 p-4 shadow-2xl backdrop-blur-lg sm:max-w-[270px] ${activeSegment.positionClass}`}
                  >
                    <div className="mb-1.5 flex items-center gap-2">
                      {activeSegment.icon}
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                        {activeSegment.title}
                      </span>
                    </div>
                    <p className="text-base font-bold text-white sm:text-lg">
                      {activeSegment.accuracy}
                    </p>
                    <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                      {activeSegment.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ROTATING RING */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                whileHover={{ animationPlayState: "paused" }}
                className="absolute inset-0 overflow-hidden rounded-full shadow-2xl shadow-black/30"
              >
                {/* Conic Gradient Segment Styling */}
                <div
                  className="h-full w-full rounded-full"
                  style={{
                    background: `
                      conic-gradient(
                        #1d3b8a 0deg 90deg,
                        rgba(255, 255, 255, 0.4) 90deg 91deg,
                        #2c7dc0 91deg 180deg,
                        rgba(255, 255, 255, 0.4) 180deg 181deg,
                        #e2a856 181deg 270deg,
                        rgba(255, 255, 255, 0.4) 270deg 271deg,
                        #32a5d7 271deg 360deg
                      )
                    `,
                  }}
                />

                {/* Quadrant Triggers */}
                {/* Top-Left: Healthcare */}
                <div
                  onMouseEnter={() => setActiveSegment(segmentsData.healthcare)}
                  onMouseLeave={() => setActiveSegment(null)}
                  className="absolute top-0 left-0 flex h-1/2 w-1/2 cursor-pointer items-center justify-center transition-opacity hover:opacity-90"
                >
                  <div className="flex -translate-x-3 -translate-y-3 -rotate-45 flex-col items-center gap-1">
                    <HeartPulse className="h-6 w-6 text-white" />
                    <span className="text-sm font-semibold text-white sm:text-lg">
                      Healthcare
                    </span>
                  </div>
                </div>

                {/* Top-Right: Financial Services */}
                <div
                  onMouseEnter={() => setActiveSegment(segmentsData.financial)}
                  onMouseLeave={() => setActiveSegment(null)}
                  className="absolute top-0 right-0 flex h-1/2 w-1/2 cursor-pointer items-center justify-center transition-opacity hover:opacity-90"
                >
                  <div className="flex translate-x-4 -translate-y-2 rotate-45 flex-col items-center gap-1">
                    <Landmark className="h-6 w-6 text-white" />
                    <span className="text-sm font-semibold text-white sm:text-lg">
                      Financial
                    </span>
                  </div>
                </div>

                {/* Bottom-Right: Education */}
                <div
                  onMouseEnter={() => setActiveSegment(segmentsData.education)}
                  onMouseLeave={() => setActiveSegment(null)}
                  className="absolute bottom-0 right-0 flex h-1/2 w-1/2 cursor-pointer items-center justify-center transition-opacity hover:opacity-90"
                >
                  <div className="flex translate-x-3 translate-y-3 -rotate-45 flex-col items-center gap-1">
                    <GraduationCap className="h-6 w-6 text-white" />
                    <span className="text-sm font-semibold text-white sm:text-lg">
                      Education
                    </span>
                  </div>
                </div>

                {/* Bottom-Left: IT */}
                <div
                  onMouseEnter={() => setActiveSegment(segmentsData.it)}
                  onMouseLeave={() => setActiveSegment(null)}
                  className="absolute bottom-0 left-0 flex h-1/2 w-1/2 cursor-pointer items-center justify-center transition-opacity hover:opacity-90"
                >
                  <div className="flex -translate-x-3 translate-y-3 rotate-45 flex-col items-center gap-1">
                    <Laptop className="h-6 w-6 text-white" />
                    <span className="text-sm font-semibold text-white sm:text-lg">
                      IT
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* STATIONARY CENTER BADGE */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="pointer-events-none absolute inset-[90px] z-20 flex flex-col items-center justify-center rounded-full border-4 border-white/80 bg-white shadow-2xl backdrop-blur-md sm:inset-[125px]"
              >
                <motion.div
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ShieldCheck className="h-10 w-10 text-[#1d3b8a] sm:h-12 sm:w-12" />
                </motion.div>
                <h3 className="mt-1 text-xl font-black tracking-tight text-[#1d3b8a] sm:text-2xl">
                  TrueFace
                </h3>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Banner;