import React from "react";
import contact_bg_img from "/Contact/contact_home_bg_image.png";
import contact_bg2_img from "/Contact/contact_home_bg_icon.png";
import ContactForm from "./ContactUsComponents/ContactForm";
import ContactCards from "./ContactUsComponents/ContactCards.jsx";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <>
      <section
        className="
        relative flex w-full items-center justify-center overflow-hidden
        bg-[#FFF8EE] bg-no-repeat
        
        /* Mobile & Tablet Background Layout */
        min-h-[420px] py-12
        bg-[length:320px_auto,cover]
        bg-[position:bottom_center,center]

        /* Tablet (md) */
        md:min-h-[500px] md:py-16
        md:bg-[length:450px_auto,cover]

        /* Desktop (lg) */
        lg:h-[630px] lg:py-0 lg:justify-start
        lg:bg-[length:620px_auto,cover]
        lg:bg-[position:right_2rem_center,center]

        /* Large Desktop (xl & 2xl) */
       xl:bg-[position:right_4rem_center,center]
        2xl:bg-[position:right_8rem_center,center]
      "
        style={{
          backgroundImage: `
          url(${contact_bg2_img}),
          url(${contact_bg_img})
        `,
        }}
      >
        {/* Container wrapper for uniform alignment */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            {/* Animated Text Block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full max-w-2xl mx-auto lg:mx-0 text-white text-center lg:text-left z-10"
            >
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-4 text-3xl font-extrabold sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl tracking-tight leading-tight"
              >
                Get in touch with us
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-sm font-normal sm:text-base md:text-sm lg:text-xl xl:text-1xl leading-relaxed md:leading-8 lg:leading-normal text-slate-100"
              >
                Complete the form below or book a meeting at your convenience.
                Our team will connect with you to understand your needs and
                provide the right solution.
              </motion.p>
            </motion.div>

            {/* Right Spacer Column (Maintains Grid Balance) */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      <ContactCards />
      <ContactForm />
    </>
  );
};

export default ContactUs;
