import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiCheckCircle, HiShieldCheck } from "react-icons/hi2";

const verificationSteps = [
  "Initializing Security Protocols...",
  "Authenticating Identity & Address...",
  "Validating Employment & UAN Records...",
  "Cross-referencing Criminal Data...",
  "Verification Complete — Welcome to TrueFace",
];

const InitialLoader = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Cycle through status messages
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < verificationSteps.length - 1) {
          return prev + 1;
        }
        clearInterval(stepInterval);
        return prev;
      });
    }, 700);

    // Complete animation lifecycle after 3.8s
    const timer = setTimeout(() => {
      setIsFinished(true);
      if (onComplete) onComplete();
    }, 3800);

    return () => {
      clearInterval(stepInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d163a] text-white overflow-hidden"
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Ambient Background Glows */}
          <div className="absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/15 blur-[140px]" />
          <div className="absolute top-1/2 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[100px]" />

          {/* Grid Background Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

          {/* Core Biometric Logo HUD */}
          <div className="relative flex flex-col items-center">
            
            {/* Rotating Cyber Pulse Rings */}
            <motion.div
              className="absolute -inset-8 rounded-full border border-cyan-500/20 border-dashed"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-14 rounded-full border border-indigo-400/15"
              animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Logo Wrapper */}
            <div className="relative flex items-center justify-center p-6">
              
              {/* Outer Cyan Glow Aura */}
              <motion.div
                className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl"
                animate={{
                  scale: [0.9, 1.2, 0.9],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Logo Image */}
              <motion.img
                src="/Trueface.png"
                alt="TrueFace Biometric Logo"
                className="h-32 w-auto relative z-10 object-contain drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              />

              {/* Biometric Laser Scanning Beam */}
              <motion.div
                className="absolute inset-x-2 h-[4px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#38bdf8] z-20"
                animate={{
                  top: ["15%", "85%", "15%"],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Shimmer Brand Typography */}
            <motion.span
              className="mt-6 text-2xl font-bold tracking-wider"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-[#38bdf8] via-[#60a5fa] via-50% to-[#38bdf8] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer mr-1.5">
                True
              </span>
              <span className="bg-gradient-to-r from-white via-amber-200 via-50% to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
                Face
              </span>
            </motion.span>
          </div>

          {/* Dynamic Status Display Bar */}
          <div className="mt-10 flex flex-col items-center gap-3 w-80 text-center">
            
            {/* Progress Counter Line */}
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-amber-300"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentStep + 1) / verificationSteps.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>

            {/* Status Text Stream */}
            <div className="h-8 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-2 text-xs font-mono tracking-wide text-cyan-300/90"
                >
                  {currentStep === verificationSteps.length - 1 ? (
                    <HiShieldCheck className="h-4 w-4 text-emerald-400 animate-bounce" />
                  ) : (
                    <HiCheckCircle className="h-4 w-4 text-cyan-400 animate-spin" />
                  )}
                  <span>{verificationSteps[currentStep]}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialLoader;