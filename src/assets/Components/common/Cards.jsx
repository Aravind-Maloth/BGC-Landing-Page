import React from 'react';
import { ArrowRight, User, LogIn, Sparkles } from "lucide-react";
import { motion } from 'framer-motion';

const items = [
  {
    title: "Candidates",
    desc: "I'm a candidate completing my background check.",
    icon: <User size={16} />,
  },
  {
    title: "Existing Customers",
    desc: "I'm a customer and want to log in.",
    icon: <LogIn size={16} />,
  },
  {
    title: "New Customers",
    desc: "I'm exploring First Advantage solutions for a business.",
    icon: <Sparkles size={16} />,
  },
];

// Parent animation container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Child card animations using spring physics for guaranteed visibility
const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 14,
      mass: 1,
    },
  },
};

const Cards = ({ className = "" }) => {
  return (
    <section className={`relative bg-[#020617] py-10 ${className}`}>
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-blue-500/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Main Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="
                group
                relative
                rounded-xl
                border border-white/10
                bg-gradient-to-br from-white/5 to-white/[0.02]
                p-6
                text-white
                backdrop-blur-xl
                hover:border-amber-300/60
                hover:from-white/10
              "
              style={{ willChange: "transform, opacity" }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold">
                    {item.title}
                    <ArrowRight
                      size={16}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    {item.desc}
                  </p>
                </div>

                {/* Gold Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400/90 text-slate-900 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 bg-gradient-to-br from-amber-400/10 via-transparent to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Cards;