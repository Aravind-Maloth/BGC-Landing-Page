import React from "react";
import { motion } from "framer-motion";

export const SlidingButton = ({
  children,
  onClick,
  className = "",
  type = "button",
  variant = "primary", // 'primary' | 'secondary' | 'accent' | 'glass-yellow'
}) => {
  // Base outer button styling
  const variants = {
    primary: "bg-[#102B83] border-[#102B83] rounded-xl px-6 py-3 text-sm sm:text-base font-semibold shadow-md",
    secondary: "bg-slate-900 border-slate-900 rounded-xl px-6 py-3 text-sm sm:text-base font-semibold shadow-md",
    accent: "bg-[#E0AE67] border-[#E0AE67] rounded-xl px-6 py-3 text-sm sm:text-base font-semibold shadow-md",
    "glass-yellow": "bg-white/5 border-yellow-400 backdrop-blur-md rounded-full px-4 py-2 text-[17px] font-medium whitespace-nowrap",
  };

  // Sliding background panel fill colors
  const slideColors = {
    primary: "bg-[#203781]",
    secondary: "bg-[#102B83]",
    accent: "bg-white",
    "glass-yellow": "bg-yellow-400",
  };

  // Text color transition (Default vs Hover)
  const textColorVariants = {
    primary: { initial: "#ffffff", hover: "#ffffff" },
    secondary: { initial: "#ffffff", hover: "#ffffff" },
    accent: { initial: "#ffffff", hover: "#102B83" },
    "glass-yellow": { initial: "#fcd34d", hover: "#000000" }, // Amber to Black
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={{
        tap: { scale: 0.96 },
      }}
      className={`
        relative inline-flex items-center justify-center overflow-hidden border
        transition-colors duration-300 cursor-pointer select-none
        ${variants[variant]}
        ${className}
      `}
    >
      {/* Sliding Background Layer */}
      <motion.span
        variants={{
          initial: { x: "-101%" },
          hover: { x: "0%" },
        }}
        transition={{
          duration: 0.35,
          ease: [0.25, 1, 0.5, 1],
        }}
        className={`absolute inset-0 z-0 ${slideColors[variant]}`}
      />

      {/* Button Content Layer with Text Color Transition */}
      <motion.span
        variants={{
          initial: { color: textColorVariants[variant]?.initial || "#ffffff" },
          hover: { color: textColorVariants[variant]?.hover || "#ffffff" },
        }}
        transition={{ duration: 0.2 }}
        className="relative z-10 flex items-center justify-center gap-2"
      >
        {children}
      </motion.span>
    </motion.button>
  );
};