import React, { useRef } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineArrowUpRight, HiOutlinePhone } from "react-icons/hi2";
import { motion, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Solutions", href: "#" },
  { name: "Industries", href: "#" },
  { name: "Contact Us", href: "#" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  const containerRef = useRef(null);

  // Tracks scroll progress as the footer enters the viewport bottom
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [0.3, 0.7, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <motion.footer
        style={{ opacity, scale }}
        className="relative w-full bg-[#182A67] text-slate-300 py-12 lg:py-16"
      >
        {/* Decorative Background Glows */}
        <div className="absolute top-0 left-1/4 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 -z-10 h-72 w-72 translate-y-1/2 rounded-full bg-blue-600/15 blur-[120px]" />

        <div className="mx-auto flex w-full max-w-7xl flex-col justify-between px-6 sm:px-8 lg:px-12">
          {/* Main Content Grid: 1 col (mobile), 2 cols (tablet), 4 cols (desktop) */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 items-start">
            
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="group flex flex-col items-start gap-2 cursor-pointer w-fit">
                {/* Logo with Animation */}
                <div className="relative flex items-center justify-center">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-cyan-400/20 blur-lg"
                    animate={{
                      scale: [0.95, 1.15, 0.95],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />

                  <motion.img
                    src="/Trueface.png"
                    alt="TrueFace Logo"
                    className="h-16 sm:h-20 md:h-34 w-auto object-contain brightness-125 contrast-125 transition-transform duration-500 group-hover:scale-105"
                    animate={{ y: [-2, 2, -2] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Biometric Laser Beam */}
                  <div className="absolute inset-x-[8%] top-[25%] bottom-[15%] overflow-hidden pointer-events-none rounded-full">
                    <motion.div
                      className="w-full h-[14px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_12px_#06b6d4]"
                      animate={{
                        y: ["0%", "280%", "0%"],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </div>

                {/* Shimmer Typography */}
                <span className="relative text-xl font-bold tracking-tight md:text-2xl overflow-hidden text-center">
                  <span className="bg-gradient-to-r from-[#38bdf8] via-[#60a5fa] via-50% to-[#38bdf8] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer mx-1">
                    True
                  </span>
                  <span className="bg-gradient-to-r from-white via-amber-200 via-50% to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
                    Face
                  </span>
                </span>
              </div>

              <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
                A background check platform connecting identity, address,
                employment, UAN, and criminal data so you can onboard with
                confidence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm md:text-base font-semibold uppercase tracking-wider text-white">
                Quick Links
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-slate-400 transition-colors duration-200 hover:text-indigo-400"
                    >
                      <span>{link.name}</span>
                      <HiOutlineArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Hub */}
            <div>
              <h4 className="text-sm md:text-base font-semibold uppercase tracking-wider text-white">
                Customer Hub
              </h4>
              <div className="mt-4 space-y-4 text-sm text-slate-400">
                <a
                  href="#"
                  className="inline-block font-medium text-indigo-400 transition-colors hover:text-indigo-300 hover:underline"
                >
                  Access Customer Center &rarr;
                </a>

                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 backdrop-blur-sm max-w-xs">
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Become a Partner
                  </p>
                  <a
                    href="tel:8447180067"
                    className="mt-1.5 inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-indigo-400 text-sm"
                  >
                    <HiOutlinePhone className="h-4 w-4 text-indigo-400" />
                    844.718.0067
                  </a>
                </div>
              </div>
            </div>

            {/* Connect & Social */}
            <div className="space-y-4">
              <h4 className="text-sm md:text-base font-semibold uppercase tracking-wider text-white">
                Connect With Us
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-indigo-600 hover:text-white hover:shadow-lg hover:shadow-indigo-500/25"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-center text-xs text-slate-400 sm:flex-row sm:text-left">
            <p>
              © {new Date().getFullYear()} TrueFace, Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-slate-300">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-slate-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;