import React from 'react'
import Banner from './industriesComponents/Banner'
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Industries = () => {
    const industriesData = [
    {
      id: "financial",
      title: "Financial Services",
      image: "/Industries/industrieimg1.jpg",
      description:
        "Strengthen trust and compliance with reliable background verification for banking and financial institutions, ensuring secure hiring and reduced operational risk.",
    },
    {
      id: "healthcare",
      title: "Healthcare",
      image: "/Industries/Healthcare.jpg",
      description:
        "Ensure trusted healthcare hiring with comprehensive background verification that helps organizations maintain safety, compliance, and confidence when hiring healthcare professionals.",
    },
    {
      id: "it",
      title: "IT",
      image: "/Industries/IT.jpg",
      description:
        "Support technology-driven organizations with reliable background verification solutions that help businesses hire skilled, trustworthy, and qualified professionals.",
    },
    {
      id: "education",
      title: "Education",
      image: "/Industries/Education.jpg",
      description:
        "Build safer educational environments with dependable background verification for faculty, staff, and other professionals across educational institutions.",
    },
  ];

  // Motion variants for container staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scrollToIndustryDetails = () => {
  const el = document.getElementById("industry-details-section");

  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

  // Banking & Financial Services is selected by default
  const [activeIndustry, setActiveIndustry] = useState(industriesData[0]);

  return (
    <div>
        <Banner/>

       <section 
      className="relative overflow-hidden bg-[#f8f8fa] py-16 lg:py-24"
      style={{
        backgroundImage: "url('/Home/homebg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-4 lg:max-w-8xl max-w-8xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div   id="industry-details-section"

          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-12"
        >
          <motion.div variants={itemVariants}>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1D3D91]/15 bg-[#1D3D91]/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#1D3D91]">
              <Sparkles className="h-3.5 w-3.5" />
              Industry Expertise
            </div>
            <h2 className="text-3xl font-extrabold leading-tight text-[#1D3D91] sm:text-4xl md:text-5xl">
              Empowering Trusted Hiring <br />
              <span className="text-[#E0AE67]">Across Industries</span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
              Empowering organizations across Information Technology, Banking &
              Financial Services, Healthcare, and Education with secure, accurate,
              and compliant background verification solutions.
            </p>
          </motion.div>
        </motion.div>

        {/* Featured Card Display Area */}
        <div className="mb-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid gap-6 lg:grid-cols-2"
            >
              {/* Featured Image */}
              <div className="overflow-hidden rounded-2xl shadow-md">
                <motion.img
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={activeIndustry.image}
                  alt={activeIndustry.title}
                  className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[380px]"
                />
              </div>

              {/* Featured Details Box */}
              <div className="flex flex-col justify-center rounded-2xl border border-slate-200/60 bg-[#EEF0FA] p-8 shadow-sm lg:p-10">
                <span className="mb-2 text-xs font-bold uppercase tracking-wider text-[#E0AE67]">
                  Selected Solution
                </span>
                <h3 className="mb-4 text-2xl font-bold text-[#1D3D91] sm:text-3xl">
                  {activeIndustry.title}
                </h3>
                <p className="mb-6 text-base leading-relaxed text-gray-700 sm:text-lg">
                  {activeIndustry.description}
                </p>
                <div>
                  <button className="inline-flex items-center gap-2 rounded-full bg-[#1D3D91] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#163075]" >
                    Explore {activeIndustry.title}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Selection Cards Grid */}
      {/* Bottom Cards Grid - All cards stay visible without jumping */}
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-50px" }}
  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
>
  {industriesData.map((item) => {
    const isActive = item.id === activeIndustry.id;

    return (
      <motion.div 
        key={item.id}
        variants={itemVariants}
        whileHover={{ y: -6, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setActiveIndustry(item)}
        className={`group relative min-h-[200px] cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all duration-300 ${
          isActive ? "ring-4 ring-[#E0AE67]" : "ring-1 ring-black/5"
        }`}
      >
        {/* Image Layer */}
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Base Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent transition-opacity duration-300 group-hover:opacity-20" />

        {/* Hover Backdrop Blur Overlay */}
        <div className="absolute inset-0 bg-slate-950/75 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100" />

        {/* Active Badge */}
        {isActive && (
          <div className="absolute top-3 right-3 z-20 rounded-full bg-[#E0AE67] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-md">
            Active
          </div>
        )}

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 transition-all duration-300 group-hover:justify-center">
          <h4 className="text-lg font-bold text-white transition-colors duration-200 group-hover:text-[#E0AE67]">
            {item.title}
          </h4>

          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {item.description}
          </p>

          <div className="mt-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#E0AE67] px-3 py-1.5 text-xs font-bold text-slate-900 shadow-sm">
              View Details
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </motion.div>
    );
  })}
</motion.div>
      </div>
    </section>

      {/* <section
  id="industry-details-section"
  className="scroll-mt-20 bg-white py-16 lg:py-24"
>
  <div className="mx-auto max-w-7xl px-6">
    <h2 className="text-3xl font-bold text-[#1D3D91]">
      {activeIndustry.title}
    </h2>

    <p className="mt-4 text-gray-600">
      {activeIndustry.description}
    </p>
  </div>
</section> */}
    </div>
  )
}

export default Industries