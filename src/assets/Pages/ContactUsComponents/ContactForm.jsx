import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Send } from "lucide-react";
import "@lottiefiles/lottie-player";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const inputClasses = `
    w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 
    text-slate-800 text-sm md:text-base placeholder:text-slate-400
    outline-none transition-all duration-300
    hover:border-slate-300 hover:bg-white
    focus:border-[#102B83] focus:bg-white focus:ring-4 focus:ring-[#102B83]/10
  `;

  return (
    <section className="
        relative w-full py-12 md:py-12 lg:py-14 overflow-hidden
        bg-[oklch(0.88_0.01_0/0.5)] 
        supports-[color:color-mix(in_lab,red,red)]:bg-[color-mix(in_oklab,oklch(0.88_0.01_0)_50%,transparent)]
      ">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          
          {/* LOTTIE ANIMATION COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-center justify-center w-full max-w-lg mx-auto lg:max-w-none"
          >
            <div className="relative w-full aspect-square max-w-[500px]">
              {/* Background Decorative Ambient Glow */}
              <div className="absolute inset-0 bg-blue-400/10 rounded-full blur-3xl -z-10 animate-pulse" />
              
              <lottie-player
                src="/Contact/contact_animation.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </motion.div>

          {/* FORM CONTAINER COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="
              relative w-full rounded-3xl bg-white p-6 sm:p-8 md:p-10 lg:p-12
              border border-slate-100 shadow-[0_20px_50px_rgba(16,43,131,0.08)]
            "
          >
            {/* Top Decorative Border Accent */}
            <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-[#102B83] via-blue-500 to-[#E0AE67] rounded-t-full" />

            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E0AE67]">
                Connect With Us
              </span>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#102B83] sm:text-3xl md:text-4xl">
                Reach out to Us
              </h2>
              <p className="mt-2 text-sm text-slate-500 sm:text-base">
                Have questions or need assistance? Fill in the details below.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message Sent!</h3>
                <p className="mt-2 text-sm text-slate-600 max-w-xs">
                  Thank you for reaching out. A representative will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-[#102B83] hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter Name ..."
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="Enter Email Adress"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className={`${inputClasses} resize-none`}
                  />
                </div>

               <div className="relative mt-2 w-full sm:w-fit">
      {/* 1. CONTINUOUS AMBIENT BREATHING GLOW (Disabled during submit) */}
      {!isSubmitting && (
        <motion.div
          animate={{
            scale: [0.97, 1.05, 0.97],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-xl bg-[#E0AE67] blur-md -z-10"
        />
      )}

      {/* 2. MAIN SUBMIT BUTTON */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        initial="rest"
        whileHover={isSubmitting ? "rest" : "hover"}
        whileTap={isSubmitting ? "rest" : "tap"}
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.03 },
          tap: { scale: 0.97 },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="
          group relative flex w-full sm:w-fit items-center justify-center gap-2.5 overflow-hidden
          rounded-xl bg-[#E0AE67] px-8 py-3.5 text-sm font-semibold text-white 
          shadow-lg shadow-[#E0AE67]/20 transition-all duration-300
          hover:bg-[#d09d56] hover:shadow-xl hover:shadow-[#E0AE67]/30 
          disabled:opacity-80 disabled:cursor-not-allowed cursor-pointer select-none
        "
      >
        {/* 3. HOVER SHIMMER LIGHT SWEEP */}
        <motion.span
          variants={{
            rest: { x: "-150%" },
            hover: { x: "200%" },
          }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
        />

        {/* 4. BUTTON CONTENT STATES */}
        <span className="relative z-10 flex items-center gap-2.5">
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin text-white" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send message</span>
              <motion.span
                variants={{
                  rest: { x: 0 },
                  hover: { x: 5 },
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="flex items-center"
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </>
          )}
        </span>
      </motion.button>
    </div>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;