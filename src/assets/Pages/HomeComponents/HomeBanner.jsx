import React from 'react';
import { motion } from 'framer-motion';
import { SlidingButton } from '../../Components/common/SlidingButton';
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    type: 'profile',
    name: 'David Harrison',
    id: 'Global ID • #882-99A',
    match: '99.8%',
    liveness: 'Passed',
    initialPos: { top: '0px', left: '0px', rotate: -6, zIndex: 30 },
  },
  {
    type: 'criminal',
    title: 'Criminal & court records',
    desc: 'Searched across 2,100+ databases with continuous monitoring.',
    status: 'No hits',
    initialPos: { top: '145px', left: '64px', rotate: 4, zIndex: 20 },
  },
  {
    type: 'employment',
    title: 'Employment history',
    count: '3 employers',
    role: 'Senior Risk Analyst • NovaFin',
    dates: 'May 2020 – Present • Verified via HR & UAN',
    tags: ['UAN linked', 'No gaps'],
    initialPos: { top: '260px', left: '-50px', rotate: -3, zIndex: 10 },
  },
  {
    type: 'address',
    title: 'Address & Geo-location',
    desc: 'Physical address verified via GPS & digital footprint analysis.',
    status: 'Confirmed',
    initialPos: { top: '390px', left: '50px', rotate: 7, zIndex: 5 },
  },
];

// Stagger variant configuration for left hero content
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
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const HomeBanner = () => {
    const navigate = useNavigate();

  return (
    <div>
      <section
        className="relative overflow-hidden bg-(--color-primary) text-white transition duration-500 ease-in-out hover:bg-(--color-secondary) lg:pt-24 pt-15"
        style={{
          backgroundImage: 'url(/Home/HomeBanner.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/40 transition duration-500 ease-in-out hover:bg-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(93,174,255,.4),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(255,186,45,.35),transparent_27%)]" />
        
        <div className="relative mx-auto max-w-350 xl:max-w-400 px-6 pb-150 sm:mb-20 md:pb-140 lg:pb-25 xl:pb-40 pt-8 md:px-10 lg:pt-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            
            {/* LEFT COLUMN - TEXT HERO (ANIMATED) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.span
                variants={itemVariants}
                className="inline-flex items-center rounded-full bg-[#12224D] px-4 py-2 text-xs font-semibold text-[#A8CCFF] border border-[#23458C]/50 shadow-inner"
              >
                ⚡ The new standard in background verification
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-6xl"
              >
                Flawless verification.
                <br />
                <span className="text-[#F8B13C]">Zero guesswork.</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="max-w-xl text-base text-[#D8E4FF] sm:text-lg md:text-xl"
              >
                Verify identity, criminal records, employment, address, UAN and drug history in a single, orchestrated workflow.
                Built for high-volume hiring, fintech onboarding and mission-critical trust.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                
               
                    <SlidingButton 
                            variant="glass-yellow" 
                            onClick={() => navigate("/contactus")}
                          >
                            Start a check now →
                          </SlidingButton>

                <span className="inline-flex items-center rounded-lg border border-[#4A66A8] bg-[#0F1E4D]/80 backdrop-blur-md px-4 py-3 text-sm">
                  🔒 Under 60s average check time
                </span>
                <span className="inline-flex items-center rounded-lg border border-[#4A66A8] bg-[#0F1E4D]/80 backdrop-blur-md px-4 py-3 text-sm">
                  🛡 SOC2-ready, GDPR aligned
                </span>
              </motion.div>

              <motion.p variants={itemVariants} className="text-sm text-[#8AA4D3]">
                ✅ Identity, drugs, criminal, address, employment, UAN
              </motion.p>
            </motion.div>

            {/* RIGHT COLUMN - ANIMATED INTERACTIVE CARD STACK */}
            <div className="relative flex items-center justify-center">
              {/* Background Glow Orbs */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-12 h-72 w-72 rounded-full bg-[#1C3C8A]/40 blur-3xl pointer-events-none"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-10 left-4 h-64 w-64 rounded-full bg-[#63B7FF]/20 blur-3xl pointer-events-none"
              />

              {/* Cards Container */}
              <div className="relative z-10 w-full max-w-md h-full">
                {cardData.map((card, index) => (
                  <motion.article
                    key={index}
                    style={{
                      top: card.initialPos.top,
                      left: card.initialPos.left,
                      zIndex: card.initialPos.zIndex,
                    }}
                    initial={{
                      opacity: 0,
                      x: 60,
                      rotate: card.initialPos.rotate + 10,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      rotate: card.initialPos.rotate,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.3 + index * 0.15,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotate: 0,
                      zIndex: 50,
                      transition: { duration: 0.25 },
                    }}
                    className="absolute w-65 sm:w-96 sm:h-44 rounded-2xl border border-white/15 bg-gradient-to-br from-[#0F1D3F]/90 to-[#0B1730]/95 p-5 md:py-10 shadow-2xl backdrop-blur-xl cursor-pointer"
                  >
                    {/* Card 1: Profile */}
                    {card.type === 'profile' && (
                      <>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img
                              src="/Home/profile.jpg"
                              alt="Profile"
                              className="h-10 w-10 rounded-full border border-white/20 object-cover"
                            />
                            <div>
                              <p className="font-semibold text-white">{card.name}</p>
                              <p className="text-xs text-[#92B2E7]">{card.id}</p>
                            </div>
                          </div>
                          <motion.span
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-xs text-emerald-400 font-medium"
                          >
                            ✔ Verified
                          </motion.span>
                        </div>

                        <div className="mt-4 text-xs text-[#A7C6EB] space-y-1">
                          <div className="flex justify-between">
                            <span>Govt ID match</span>
                            <span className="text-emerald-400 font-medium">{card.match}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Liveness check</span>
                            <span className="text-emerald-400 font-medium">{card.liveness}</span>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Card 2: Criminal */}
                    {card.type === 'criminal' && (
                      <div>
                        <p className="font-semibold text-white">{card.title}</p>
                        <p className="mt-2 text-sm text-[#8AA4D3] leading-snug">{card.desc}</p>
                        <span className="mt-3 inline-block rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-xs text-emerald-400 font-medium">
                          {card.status}
                        </span>
                      </div>
                    )}

                    {/* Card 3: Employment */}
                    {card.type === 'employment' && (
                      <div>
                        <div className="flex justify-between items-center">
                          <p className="font-semibold text-white">{card.title}</p>
                          <p className="text-sm text-[#8AB5EF] font-medium">{card.count}</p>
                        </div>
                        <p className="mt-2 text-sm text-[#8AA4D3]">{card.role}</p>
                        <p className="text-xs text-[#7FB2EA]">{card.dates}</p>
                        <div className="mt-3 flex gap-2">
                          {card.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="rounded-full bg-[#1D3B6E] border border-[#2D5599] px-2.5 py-1 text-xs text-[#B6D7FF]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Card 4: Address */}
                    {card.type === 'address' && (
                      <div>
                        <div className="flex items-center justify-between">
                          <p className="font-semibold text-white">{card.title}</p>
                          <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-1 text-xs text-emerald-400 font-medium">
                            {card.status}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-[#8AA4D3] leading-snug">{card.desc}</p>
                      </div>
                    )}
                  </motion.article>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;