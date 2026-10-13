import React from "react";
import { Info, ArrowDown, ArrowRight } from "lucide-react";
import Servicescards from "./SolutionComponents/Servicescards";
import solutions_img from "/Solutions/solutions_bg_img.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Solutions = () => {
    const navigate = useNavigate();
  
  const scrollToSolutions = () => {
    const el = document.getElementById("solutions-cards-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };
  return (
    <>
  <section
      className="relative flex min-h-[85vh] w-full items-center justify-start bg-cover bg-center bg-no-repeat py-16 md:py-24 lg:py-32"
      style={{
        backgroundImage: `
          linear-gradient(
            249.84deg,
            rgba(15, 59, 94, 0.35) 9.67%,
            rgba(8, 42, 91, 0.85) 49.71%,
            #001457 100%
          ),
          url(${solutions_img})
        `,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 2xl:px-24">
        <motion.div
          className="flex max-w-2xl flex-col items-start gap-6 lg:max-w-4xl 2xl:max-w-5xl 2xl:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md border border-white/15 text-white"
          >
            <Info className="h-4 w-4 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6 text-[#E0AE67]" />
            <span className="text-xs font-semibold tracking-wide uppercase sm:text-sm 2xl:text-base">
              Solutions
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-4xl lg:text-4xl 2xl:text-5xl 2xl:leading-[1.1] w-full md:max-w-[550px]"
          >
            Build a Trusted{" "}
            <span className="text-[#E0AE67]">
              Workforce with Reliable Verification
            </span>{" "}
            Services
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-xl text-base text-slate-200 sm:text-lg md:text-xl 2xl:max-w-3xl 2xl:text-2xl 2xl:leading-relaxed"
          >
            True Face delivers accurate background verification services that
            help organizations hire with confidence, reduce risks, ensure
            compliance, and build a trusted workforce.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex w-full flex-col gap-4 pt-2 sm:w-auto sm:flex-row sm:items-center sm:gap-5"
          >
            {/* 1. PRIMARY BUTTON: "Request a Demo" */}
            <div className="relative w-full sm:w-auto">
              {/* Continuous Breathing Glow Background */}
              <motion.div
                animate={{
                  scale: [0.98, 1.08, 0.98],
                  opacity: [0.25, 0.55, 0.25],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-white blur-md -z-10"
              />

              <motion.button
                onClick={() => navigate("/contactus")}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.96 }}
                className="
                  relative w-full overflow-hidden rounded-full bg-white
                  px-7 py-3.5 text-center text-sm font-bold text-[#001457]
                  shadow-xl cursor-pointer select-none
                  sm:w-auto sm:text-base 2xl:px-9 2xl:py-4 2xl:text-lg
                "
              >
                {/* Hover Shimmer Light Sweep */}
                <motion.span
                  variants={{
                    initial: { x: "-150%" },
                    hover: { x: "200%" },
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-[#001457]/15 to-transparent skew-x-12"
                />

                <span className="relative z-10 flex items-center justify-center gap-2">
                  Request a Demo
                  <motion.span
                    variants={{
                      initial: { x: 0 },
                      hover: { x: 5 },
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 2xl:h-5 2xl:w-5" strokeWidth={2.2} />
                  </motion.span>
                </span>
              </motion.button>
            </div>

            {/* 2. SECONDARY BUTTON: "View Solutions" */}
            <motion.button
  onClick={scrollToSolutions}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.96 }}
              variants={{
                hover: {
                  scale: 1.03,
                  backgroundColor: "rgba(255, 255, 255, 0.18)",
                  borderColor: "rgba(255, 255, 255, 1)",
                },
              }}
              className="
                flex w-full cursor-pointer items-center justify-center gap-2.5
                rounded-full border border-white/70 bg-white/5
                px-7 py-3.5 text-center text-sm font-medium text-white
                backdrop-blur-md shadow-lg transition-all
                sm:w-auto sm:text-base 2xl:px-9 2xl:py-4 2xl:text-lg
              "
            >
              <span>View Solutions</span>

              {/* Bouncing Arrow with Hover Offset */}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              >
                <motion.span
                  variants={{
                    initial: { y: 0 },
                    hover: { y: 3 },
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  className="inline-block"
                >
                  <ArrowDown className="h-5 w-5 2xl:h-6 2xl:w-6" strokeWidth={1.75} />
                </motion.span>
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>

      {/* Cards Section Container */}
      <div id="solutions-cards-section">
        <Servicescards />
      </div>
    </>
  );
};

export default Solutions;