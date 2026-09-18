import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
const cards = [
  {
    id: 1,
    title: "Employment History & UAN Check",
    shortTitle: "Employment & UAN",
    description:
      "True Face's Employment History & UAN Check service provides a comprehensive verification of a candidate's professional background by validating employment records alongside the Universal Account Number (UAN). We verify key details such as employer name, job title, employment duration, roles, and UAN-linked records.",
    image: "/About/coverage1.jpg",
    icon: "/Solutions/solutions1_icon.png",
  },
  {
    id: 2,
    title: "Education Verification",
    shortTitle: "Education Verification",
    description:
      "True Face's Education Verification service provides a comprehensive validation of a candidate's academic qualifications by verifying educational credentials directly with universities, colleges, boards, and authorized institutions.",
    image: "/About/coverage2.jpg",
    icon: "/Solutions/solutions2_icon.png",
  },
  {
    id: 3,
    title: "Identity Verification & Address",
    shortTitle: "Identity & Address",
    description:
      "True Face's Identity & Address Verification service validates candidate identity documents and physical residential addresses through trusted databases and authorized physical/digital verification checks.",
    image: "/About/coverage3.jpg",
    icon: "/Solutions/solutions3_icon.png",
  },
  {
    id: 4,
    title: "Criminal Records Verification",
    shortTitle: "Criminal Checks",
    description:
      "Conduct comprehensive checks across court databases and law enforcement records to identify reported legal issues, convictions, or red flags early in the hiring process.",
    image: "/About/coverage4.jpg",
    icon: "/Solutions/solutions4_icon.png",
  },
];

const CardItem = ({ card, index, total, onActive }) => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const { scrollYProgress: stackProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  // Stacking scale transform
  const scale = useTransform(stackProgress, [0, 1], [1, 0.96 - (total - index) * 0.015]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0 && latest < 1) {
      onActive(index);
    }
  });

  return (
    <div
      ref={containerRef}
      id={`solution-card-${index}`}
      className="sticky top-32 lg:top-40 mb-12 lg:mb-16 flex min-h-[480px] lg:min-h-[500px] items-center justify-center pt-2"
    >
      <motion.fieldset
        style={{ scale }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`relative flex w-full flex-col items-center rounded-3xl border border-[#E0AE67]/60 p-5 shadow-2xl backdrop-blur-md transition-all duration-300 lg:h-[440px] lg:flex-row lg:p-10 2xl:h-[480px] ${
          index % 2 === 1
            ? "bg-gradient-to-br from-[#F9F9FF] to-[#EDEEFF]"
            : "bg-gradient-to-br from-[#FFF8EE] to-[#FFF1DE]"
        }`}
      >
        {/* Animated Badge Legend */}
        <legend className="mx-auto rounded-full bg-[#1C176C] px-5 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-md sm:text-sm">
          Solution 0{index + 1}
        </legend>

        <div
          className={`mx-auto flex w-full flex-col items-center gap-6 lg:w-[95%] lg:flex-row lg:gap-12 ${
            index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* Animated Content Side */}
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex w-full flex-col items-start gap-3 lg:w-1/2 2xl:gap-6"
          >
            {/* Icon with Pop animation */}
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 p-2 shadow-sm border border-slate-100 lg:h-12 lg:w-12 lg:p-2.5"
            >
              <img
                src={card.icon}
                alt="Solutions icon"
                className="h-full w-full object-contain"
              />
            </motion.div>

            <h2 className="text-lg font-bold leading-snug text-[#102B83] sm:text-xl lg:text-2xl 2xl:text-3xl">
              {card.title}
            </h2>

            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm md:text-base 2xl:text-lg">
              {card.description}
            </p>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate("/contactus")}
              className="group mt-1 flex items-center gap-2 rounded-full bg-[#102B83] px-5 py-2.5 text-xs font-medium text-white shadow-lg shadow-indigo-900/20 transition-all duration-300 hover:bg-[#1C176C] hover:gap-3 sm:px-6 sm:py-3 sm:text-sm cursor-pointer"
            >
              <span>View Details</span>
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </motion.button>
          </motion.div>

          {/* Animated Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`flex w-full items-center justify-center lg:w-1/2 ${
              index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02]">
              <img
                src={card.image}
                alt={card.title}
                className="h-[200px] w-full max-w-[380px] object-cover sm:h-[260px] sm:max-w-[440px] lg:h-[300px] lg:w-[440px] 2xl:h-[340px] 2xl:w-[520px]"
              />
            </div>
          </motion.div>
        </div>
      </motion.fieldset>
    </div>
  );
};

const Servicescards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index) => {
    const targetIndex = Math.max(0, Math.min(index, cards.length - 1));
    setActiveIndex(targetIndex);
    const targetElement = document.getElementById(`solution-card-${targetIndex}`);
    if (targetElement) {
      const yOffset = -100;
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative mx-auto w-[96%] max-w-7xl pt-4 lg:w-[97%] lg:pt-6">
      {/* --- MOBILE / TABLET NAV (< lg) --- */}
      <div className="sticky top-20 z-50 mb-6 flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-lg backdrop-blur-md lg:hidden">
        <button
          onClick={() => scrollToCard(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors disabled:opacity-30"
          aria-label="Previous card"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-1.5">
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToCard(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "w-6 bg-[#102B83]" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-[#102B83]">
            {activeIndex + 1} of {cards.length}: {cards[activeIndex].shortTitle}
          </span>
        </div>

        <button
          onClick={() => scrollToCard(activeIndex + 1)}
          disabled={activeIndex === cards.length - 1}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors disabled:opacity-30"
          aria-label="Next card"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* --- DESKTOP NAV (≥ lg) --- */}
      <div className="sticky top-24 z-50 mb-10 hidden rounded-2xl border border-slate-200/80 bg-white/90 p-2.5 shadow-xl backdrop-blur-md lg:block">
        <div className="flex w-full items-center justify-between gap-2 px-2">
          {cards.map((card, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={card.id}
                onClick={() => scrollToCard(idx)}
                className={`relative flex items-center gap-2.5 rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                  isActive
                    ? "text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="absolute inset-0 rounded-xl bg-[#102B83] shadow-md"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <span
                  className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                    isActive
                      ? "bg-white text-[#102B83]"
                      : "bg-indigo-100 text-[#102B83]"
                  }`}
                >
                  0{idx + 1}
                </span>

                <span className="relative z-10 whitespace-nowrap">
                  {card.shortTitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Cards Container */}
      <div className="relative pb-20 lg:pb-24">
        {cards.map((card, index) => (
          <CardItem
            key={card.id}
            card={card}
            index={index}
            total={cards.length}
            onActive={(idx) => setActiveIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default Servicescards;