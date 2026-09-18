import React, { useState } from 'react';
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import StaggerContainer,{itemVariants} from '../../Components/common/StaggerContainer';
const industries = [
  "Financial Services",
  "IT",
  "Healthcare",
  "Education",
];

const industryContent = [
  {
    title: "Hudson Valley Credit Union",
    image: "/Home/image-1.jpg",
    quote:
      "We don't have to worry about signing on to multiple platforms, we can initiate background checks in just a few clicks, and the status updates and email notifications our recruiters receive allow us to respond quickly to keep candidates moving forward quickly.",
  },
  {
    title: "CTO, Leading IT Services Company",
    image: "/Home/image-2.jpg",
    quote:
      "The solution has significantly improved our operational efficiency and helped our team deliver projects faster. The technology, support, and overall experience have been exceptional.",
  },
  {
    title: "Hospital Administrator, Healthcare Organization",
    image: "/Home/image-3.jpg",
    quote:
      "The solution has helped us simplify our processes while maintaining a strong focus on patient experience and data security. It has made our day-to-day operations much more efficient.",
  },
  {
    title: "Principal, Educational Institution",
    image: "/Home/image-4.jpg",
    quote:
      "The solution has transformed the way we manage our academic and administrative processes. It has reduced manual effort and helped our staff focus more on students and learning.",
  },
 
];

const Solutions = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        backgroundImage: "url('/Home/homebg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6">
        <StaggerContainer className="grid gap-12 lg:grid-cols-2 lg:items-start">
          
          {/* LEFT COLUMN */}
          <motion.div variants={itemVariants}>
            <p className="text-xs font-semibold tracking-widest text-amber-500">
              SOLUTIONS FOR EVERY INDUSTRY
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#12224D] sm:text-4xl">
              Industry Expertise at Scale
            </h2>

            {/* Industry List */}
            <div className="relative mt-10 md:mt-44 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl overflow-hidden">
              {industries.map((item, index) => {
                const isActive = active === index;
                return (
                  <button
                    key={item}
                    onClick={() => setActive(index)}
                    className={`
                      group relative flex w-full items-center justify-between
                      px-7 py-4  md:py-6 text-left transition-colors duration-200
                      ${
                        isActive
                          ? "bg-[#102765] text-white"
                          : "bg-[#132F7B]/95 text-white hover:bg-[#102765]"
                      }
                      ${
                        index !== industries.length - 1
                          ? "border-b border-blue-800"
                          : ""
                      }
                    `}
                  >
                    {/* Animated Active Pill Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-amber-400 to-orange-500"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    <span className="text-sm font-medium z-10">{item}</span>
                    <ArrowRight
                      size={16}
                      className={`z-10 transition-transform duration-200 ${
                        isActive
                          ? "translate-x-1 text-amber-400"
                          : "group-hover:translate-x-1"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="
                  w-full
                  max-w-md
                  rounded-2xl
                  bg-white
                  p-6
                  shadow-2xl
                  backdrop-blur
                "
              >
                <p className="text-lg font-semibold text-[#111827]">
                  {industryContent[active].title}
                </p>

                <div className="mt-4 overflow-hidden rounded-xl">
                  <motion.img
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                    src={industryContent[active].image}
                    alt={industryContent[active].title}
                    className="max-h-96 w-full object-cover"
                  />
                </div>

                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  “{industryContent[active].quote}”
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </StaggerContainer>
      </div>
    </section>
  );
};

export default Solutions;