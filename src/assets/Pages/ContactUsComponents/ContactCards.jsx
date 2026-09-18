import React from "react";
import { motion } from "framer-motion";
import { HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";

const ContactCards = () => {
  const cards = [
   
    {
      icon: <HiOutlinePhone className="h-7 w-7 text-[#203781] group-hover:text-white transition-colors duration-300" />,
      title: "Phone",
      text: "+91 40 400-09669",
      link: "tel:+914040009669",
    },
    {
      icon: <HiOutlineEnvelope className="h-7 w-7 text-[#203781] group-hover:text-white transition-colors duration-300" />,
      title: "Email",
      text: "info@clientservertech.com",
      link: "mailto:info@clientservertech.com",
    },
     {
      icon: <HiOutlineMapPin className="h-7 w-7 text-[#203781] group-hover:text-white transition-colors duration-300" />,
      title: "Address",
      text: "#805, 9th Floor, DSL Abacus IT Park, Uppal, Hyderabad",
      link: "https://maps.google.com",
    },
  ];

  // Container Stagger Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Modern Fade & Upward Slide
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section className="w-full bg-slate-100/80 px-4 py-16 sm:px-6 lg:px-12 xl:py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#203781]/70">
            Reach Out
          </span>
          <h2 className="mt-2 text-1xl font-extrabold tracking-tight text-[#102B83] sm:text-4xl lg:text-5xl">
            Contact Information
          </h2>
        </motion.div>

        {/* Responsive Equal-Height Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {cards.map((card, index) => (
            <motion.a
              key={index}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="
                group relative flex flex-col justify-between overflow-hidden
                rounded-2xl border border-slate-200/80 bg-white p-8
                shadow-sm transition-all duration-300
                hover:border-[#203781]/30 hover:bg-[#203781] hover:shadow-xl hover:shadow-[#203781]/15
              "
            >
              {/* Background Glow Accent on Hover */}
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#203781]/5 transition-all duration-500 group-hover:scale-[2.5] group-hover:bg-white/10" />

              <div className="relative z-10 flex flex-col items-start">
                {/* Icon Wrapper */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 transition-colors duration-300 group-hover:bg-white/10">
                  {card.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-white">
                  {card.title}
                </h3>

                {/* Card Text */}
                <p className="text-base leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-200">
                  {card.text}
                </p>
              </div>

              {/* Decorative Subtle Bottom Bar */}
              <div className="relative z-10 mt-8 h-1 w-12 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-full group-hover:bg-white/30" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCards;