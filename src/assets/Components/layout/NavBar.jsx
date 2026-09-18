import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, useScroll } from "framer-motion"; // 1. Import Framer Motion hooks
import { useNavigate } from "react-router-dom";
import { SlidingButton } from "../common/SlidingButton";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // 2. Track window scroll progress (0 to 1)
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Solutions", path: "/solutions" },
    { name: "Industries", path: "/industries" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-500 ease-in-out
        ${
          isScrolled
            ? "bg-[#221f70]/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10 "
            : "bg-transparent pt-6 pb-2 rounded-b-none"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between xl:grid xl:grid-cols-3">
        
        {/* Logo */}
        <div className="flex items-center justify-start">
          <Link
            to="/"
            className={`
              rounded-full px-3 py-2 flex items-center justify-center
              hover:scale-105 transition-all duration-300 shadow-md shrink-0
              ${isScrolled ? "bg-white backdrop-blur-sm" : "bg-white"}
            `}
          >
            <img
              src="/Logo.png"
              alt="Logo"
              className="h-7 md:h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex justify-center items-center">
          <nav
            className={`
              transition-all duration-500 ease-in-out whitespace-nowrap
              ${
                isScrolled
                  ? "bg-transparent px-0 py-0 border-transparent shadow-none"
                  : "bg-[#221f70]/90 backdrop-blur-md border border-white/20 px-10 py-4 rounded-full shadow-[0_8px_32px_rgba(31,38,135,0.37)] hover:shadow-[0_8px_40px_rgba(99,102,241,0.45)]"
              }
            `}
          >
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `
                      relative text-[17px] font-medium transition-colors duration-300 py-1 group inline-block whitespace-nowrap
                      ${isActive ? "text-amber-300 font-semibold" : "text-white hover:text-blue-200"}
                    `}
                  >
                    {({ isActive }) => (
                      <>
                        {item.name}
                        <span
                          className={`
                            absolute bottom-0 left-0 w-full h-[2px] bg-amber-300 
                            rounded-full transition-transform duration-300 origin-left
                            ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                          `}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden xl:flex justify-end items-center gap-3">
        <SlidingButton 
          variant="glass-yellow" 
          onClick={() => navigate("/contactus")}
        >
          Contact Us
        </SlidingButton>

     <motion.button
      onClick={() => window.open("https://trueface.co.in/", "_blank")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="
        relative inline-flex items-center justify-center
        overflow-hidden rounded-full p-[2px]
        shadow-[0_0_20px_rgba(224,174,103,0.35)]
        cursor-pointer select-none group
      "
    >
      {/* 1. ALWAYS-VISIBLE CONTINUOUS ROTATING GRADIENT BORDER (z-0) */}
      <motion.span
        animate={{ rotate: 360 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute inset-[-300%] z-0 
          bg-[conic-gradient(from_0deg,#221f70,#E0AE67,#6366f1,#E0AE67,#221f70)]
        "
      />

      {/* 2. INNER CARD CONTAINER - Cut out to reveal rotating border (z-10) */}
      <div
        className="
          relative z-10 flex items-center gap-2 rounded-full
          bg-white px-5 py-2.5
          text-[#1C176C] font-semibold text-[17px] whitespace-nowrap
          transition-all duration-300
          group-hover:bg-[#1C176C] group-hover:text-white
        "
      >
        {/* 3. ALWAYS-VISIBLE CONTINUOUS SHIMMER / LIGHT BEAM SWEEP (z-20 inside inner content) */}
        <motion.span
          animate={{
            x: ["-150%", "250%"],
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 1,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="
            absolute inset-0 z-20 rounded-full
            bg-gradient-to-r from-transparent via-amber-300/40 to-transparent skew-x-12
            pointer-events-none
          "
        />

        {/* BUTTON CONTENT (z-30) */}
        <span className="relative z-30 flex items-center gap-2">
          Start a Check
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center justify-center"
          >
            <ArrowRight size={16} />
          </motion.span>
        </span>
      </div>
    </motion.button>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <div className="xl:hidden flex items-center">
          <button
            className="p-2.5 rounded-full bg-[#221f70] text-white focus:outline-none shadow-lg border border-white/20"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {isOpen && (
        <div
          className="
            xl:hidden
            mx-4 mt-3
            rounded-3xl
            bg-[#221f70]/95
            backdrop-blur-xl
            border border-white/10
            p-6
            shadow-2xl
            flex flex-col gap-6
            animate-in fade-in slide-in-from-top-4 duration-300
          "
        >
          <ul className="flex flex-col gap-4 text-white font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    block text-base py-1.5 transition-colors duration-200
                    ${isActive ? "text-amber-300 font-bold translate-x-1" : "text-white/90 hover:text-amber-200"}
                  `}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
            <button className="w-full border border-yellow-400 text-amber-300 hover:bg-yellow-400 hover:text-black rounded-full py-2.5 font-medium transition-all duration-300"  onClick={() => navigate("/contactus")}>
              Contact Us
            </button>

            <button className="w-full bg-white text-[#221f70] hover:bg-amber-300 rounded-full py-2.5 font-semibold flex items-center justify-center gap-2 shadow-md transition-all duration-300">
              Start a Check
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* 3. SCROLL PROGRESS BAR */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 origin-left"
      />
    </header>
  );
};

export default NavBar;