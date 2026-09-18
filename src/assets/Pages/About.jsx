import React from 'react'
import Banner from './AboutComponents/Banner'
import Seamless from './AboutComponents/Seamless'
import Cards from '../Components/common/Cards'
import CoverageSection from './AboutComponents/CoverageSection'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <div>
        <Banner />

        
<section className="bg-white px-6 py-24"   style={{
        backgroundImage: "url('/Home/homebg.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",

      }}
      data-aos="fade-down">
      <div className="mx-auto max-w-7xl grid items-center gap-12 lg:grid-cols-2">
        
        {/* IMAGE */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/About/aboutwhoweare.jpg"
              alt="Team Collaboration"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 "
            />
          </div>
        </div>

        {/* CONTENT */}
        <div>
          <span className="mb-4 inline-block text-xs font-semibold tracking-widest text-amber-500 md:text-lg">
            WHO WE ARE
          </span>

          <h2 className="mb-6 text-3xl font-semibold text-(--color-primary) sm:text-5xl">
            Setting the Standard for <br />
            Modern Background <br />
            Screening
          </h2>

          <p className="mb-4 max-w-xl text-slate-600">
            Our application was built on a simple premise: companies need a
            faster, more reliable way to verify the people they trust with
            their business. We’ve replaced fragmented, manual processes
            with a unified, digital‑first platform.
          </p>

          <p className="mb-10 max-w-xl text-slate-600">
            Whether you are onboarding a single executive or scaling a global
            gig workforce, our platform adapts to your needs—ensuring
            compliance, protecting your brand, and delivering an exceptional
            candidate experience globally.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-8 border-t pt-8">
            <div>
              <p className="text-2xl font-semibold text-(--color-primary) md:text-4xl">99.9%</p>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Accuracy Rate
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-(--color-primary) md:text-4xl">24h</p>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Avg Turnaround
              </p>
            </div>  

            <div>
              <p className="text-2xl font-semibold text-(--color-primary) md:text-4xl">150+</p>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Data Partners
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

        <div className="relative md:mb-50">
          <Seamless />

       <div className="hidden lg:block absolute left-1/2 -bottom-35 w-[95%] -translate-x-1/2 rounded-3xl">
        <Cards className="rounded-xl" />
      </div>

        </div>

        <CoverageSection />

        
    <section className="bg-slate-100 px-6 py-20 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Subheading Tag */}
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-4 inline-block text-xs font-semibold tracking-widest text-amber-500 uppercase"
          >
            ENTERPRISE-GRADE PLATFORM
          </motion.span>

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-3xl font-bold leading-tight text-blue-900 sm:text-4xl lg:text-5xl"
          >
            Built for Speed.<br />
            Engineered for Security.
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10 max-w-xl text-slate-600 text-sm sm:text-base leading-relaxed"
          >
            Our API‑first infrastructure integrates seamlessly into your
            existing HR tech stack. We use advanced encryption and strict
            compliance frameworks to protect sensitive candidate data at
            every step of the verification process.
          </motion.p>

          {/* CHECKLIST */}
          <ul className="space-y-4">
            {[
              "SOC 2 Type II Certified Data Centers",
              "Fully GDPR & CCPA Compliant Workflows",
              "AES‑256 End‑to‑End Military Grade Encryption",
            ].map((text, i) => (
              <motion.li 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 group transition-transform duration-200"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm sm:text-base font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                  {text}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT IMAGE CONTAINER */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Subtle Dynamic Glow behind the image */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-xl opacity-70" />

          {/* Main Image Frame */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/60 w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <div className="aspect-square overflow-hidden bg-slate-200">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src="/About/lock.jpg"
                alt="secure-image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* FLOATING STATUS BADGE */}
          <motion.div
  initial={{ opacity: 0, y: 20, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true }}
  animate={{ 
    y: [0, -8, 0],
  }}
  transition={{
    // Entry animation delay & duration
    duration: 0.5,
    delay: 0.5,
    // Repeating Y-axis float animation overrides
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  whileHover={{ scale: 1.05 }}
  className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 
    flex items-center gap-3 sm:gap-4 
    rounded-2xl bg-white/85 backdrop-blur-md 
    px-4 py-3 sm:px-5 sm:py-3.5 shadow-xl shadow-slate-900/10
    border border-white/60 cursor-pointer"
>
  {/* Status Icon & Pulse Ring */}
  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
    <span className="text-lg">🔒</span>
    <span className="absolute top-0 right-0 flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
    </span>
  </div>

  {/* Status Text */}
  <div>
    <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
      System Secured
    </p>
    <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
      Active Threat Monitoring
    </p>
  </div>
</motion.div>
        </motion.div>

      </div>
    </section>


    </div>
  )
}

export default About