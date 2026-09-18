import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "1",
    title: "Configure & Request",
    description:
      "Select the required checks or use pre-built packages. Initiate requests directly from our dashboard or your integrated ATS.",
    icon: (
      <svg
        className="h-6 w-6 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c0 .64.38 1.21.98 1.51.6.3 1.3.21 1.83-.22l.06-.05a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V15Z" />
      </svg>
    ),
  },
  {
    step: "2",
    title: "Candidate Submission",
    description:
      "Candidates receive a secure, mobile‑friendly link to upload documents, provide consent, and complete their profile in minutes.",
    icon: (
      <svg
        className="h-6 w-6 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    step: "3",
    title: "Automated Verification",
    description:
      "Our AI-driven engine processes the data instantly, flagging discrepancies and delivering a comprehensive, compliant report.",
    icon: (
      <svg
        className="h-6 w-6 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M9 12l2 2 4-4" />
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      </svg>
    ),
  },
];

// Motion Variants for Staggered Parent and Child Elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time delay between each card's animation
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Smooth custom cubic-bezier cubic curve
    },
  },
};

const Seamless = () => {
  return (
    <section className="bg-blue-900 px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center sm:mb-14 lg:mb-16"
        >
          <span className="mb-2.5 inline-block text-[11px] font-semibold tracking-widest text-blue-300 sm:text-xs uppercase">
            SEAMLESS WORKFLOW
          </span>
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl leading-tight">
            How Our Application Works
          </h2>
          <p className="mx-auto max-w-2xl text-xs text-slate-300 sm:text-sm md:text-base leading-relaxed">
            From request to report, our platform simplifies the complex
            background check process into three easy steps.
          </p>
        </motion.div>

        {/* Animated Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {steps.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`
                group flex flex-col items-center justify-between
                rounded-2xl border border-white/20 bg-blue-800/40 
                p-6 sm:p-8 text-center 
                backdrop-blur-sm transition-all duration-500 ease-in-out
                hover:bg-white hover:border-white hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-2
                ${index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
              `}
            >
              <div>
                {/* Icon Circle */}
                <div
                  className="
                    mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl 
                    bg-white shadow-md sm:h-14 sm:w-14
                    transition-colors duration-500 ease-in-out
                    group-hover:bg-blue-900 group-hover:text-white
                  "
                >
                  <div className="text-blue-600 transition-colors duration-500 group-hover:text-white [&>svg]:w-6 [&>svg]:h-6 [&>svg]:stroke-current">
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-base font-semibold text-white sm:text-lg transition-colors duration-500 ease-in-out group-hover:text-slate-900">
                  {item.step}. {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 sm:text-sm leading-relaxed transition-colors duration-500 ease-in-out group-hover:text-slate-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Seamless;