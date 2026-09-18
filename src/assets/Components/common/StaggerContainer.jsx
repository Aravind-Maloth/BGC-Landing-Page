import React from 'react';
import { motion } from 'framer-motion';

// Parent container controls the stagger timing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each card reveal
      delayChildren: 0.1,
    },
  },
};

// Child item controls how individual elements animate in
export const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const StaggerContainer = ({ children, className = "" }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;