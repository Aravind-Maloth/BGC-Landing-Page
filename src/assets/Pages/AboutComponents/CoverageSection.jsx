import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cardsData = [
  {
    icon: "💼",
    image: "/About/coverage1.jpg",
    title: "Employment History",
    desc: "Direct verification of past employers, confirming dates, roles, and exit reasons.",
  },
  {
    icon: "📍",
    image: "/About/coverage2.jpg",
    title: "Address & UAN Checks",
    desc: "Current and previous address verification along with UAN & financial checks.",
  },
  {
    icon: "🪪",
    image: "/About/coverage3.jpg",
    title: "Identity Verification",
    desc: "Real-time biometric and government-issued ID verification.",
  },
  {
    icon: "⚖️",
    image: "/About/coverage4.jpg",
    title: "Criminal Records",
    desc: "Deep searches across courts, databases, and global watchlists.",
  },
];

const CoverageSection = () => {
  const [active, setActive] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cardsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [pause]);

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16 overflow-hidden">
      <div className="mx-auto max-w-8xl grid gap-12 lg:grid-cols-2 lg:items-center">

        {/* LEFT SIDE CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full"
        >
          {/* Tag */}
          <span className="inline-block rounded-full bg-amber-100/80 border border-amber-200 px-3.5 py-1 text-xs font-semibold tracking-wide text-amber-700">
            COMPREHENSIVE COVERAGE
          </span>

          {/* Heading */}
          <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl leading-tight">
            Every Check You Need, <br className="hidden sm:block" />
            In One Place
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-xl text-slate-600 text-sm sm:text-base leading-relaxed">
            Mix and match from our extensive suite of verifications to create
            the perfect screening package for any role, ensuring total peace
            of mind.
          </p>

          {/* Journey Card */}
          <div className="relative mt-8 rounded-2xl border border-slate-200/80 bg-white/70 backdrop-blur-xl p-5 sm:p-6 shadow-xl shadow-slate-200/50">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/50 to-indigo-50/30 opacity-70" />

            <h3 className="relative z-10 mb-6 text-xs font-bold text-blue-700 tracking-wider uppercase">
              Comprehensive coverage journey
            </h3>

            <ul className="relative z-10 space-y-4">
              {[
                "Confirm identity with real-time document and biometric verification.",
                "Search criminal databases, court records & sanctions lists.",
                "Validate employment history, addresses, UAN and financial background.",
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="flex items-start gap-3 sm:gap-4 group"
                >
                  <div className="flex flex-col items-center shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#102B83] text-xs font-semibold text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>

                    {index !== 2 && (
                      <div className="mt-2 h-full min-h-[20px] w-[2px] bg-blue-100" />
                    )}
                  </div>

                  <div className="flex-1 rounded-xl bg-white px-4 py-3 text-xs sm:text-sm text-slate-700 shadow-sm border border-slate-100 group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300">
                    {item}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Bottom Info Card */}
          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-gradient-to-r from-slate-50 to-white px-5 py-4 text-xs sm:text-sm text-slate-600 shadow-sm">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 text-xs font-bold">
              ✓
            </div>
            <p>
              Walk through each check visually, or switch to a{" "}
              <span className="font-semibold text-slate-900">
                consolidated view
              </span>
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE – CARDS (MODERN INTERACTIVE SLIDER) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-md mx-auto lg:max-w-none flex flex-col items-center justify-center"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          {/* Progress Indicators */}
          <div className="mb-6 flex justify-center gap-2">
            {cardsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="relative h-2 rounded-full overflow-hidden bg-slate-200 transition-all duration-300"
                style={{ width: active === i ? "5rem" : "1rem" }}
              >
                {active === i && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-[#102B83] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Animated Card Window */}
          <div className="relative w-full max-w-md h-[400px] sm:h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20, scale: 0.96, rotate: -1 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.96, rotate: 1 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50/50 p-6 shadow-2xl backdrop-blur-sm h-full flex flex-col justify-between transition-all duration-300 hover:shadow-indigo-500/10">
                  
                  {/* Subtle Background Accent */}
                  <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-indigo-500/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div>
                    {/* Header: Icon & Counter */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-md border border-slate-100 text-xl">
                        {cardsData[active].icon}
                      </div>
                      <span className="text-xs font-semibold tracking-widest text-slate-400">
                        0{active + 1} / 0{cardsData.length}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                      {cardsData[active].title}
                    </h3>

                    {/* Description */}
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {cardsData[active].desc}
                    </p>
                  </div>

                  {/* Image Container with Hover Scale */}
                  <div className="relative z-10 mt-4 overflow-hidden rounded-xl aspect-video w-full border border-slate-200/60 bg-slate-200 shadow-inner">
                    <motion.img
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6 }}
                      src={cardsData[active].image}
                      alt={cardsData[active].title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Dynamic Bottom Bar Indicator */}
                  <motion.div 
                    key={`bar-${active}`}
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: pause ? 0 : 4, ease: "linear" }}
                    className="absolute bottom-0 left-0 h-1 w-full bg-[#102B83]"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CoverageSection;