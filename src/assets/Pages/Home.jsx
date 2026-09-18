import React,{useState,useEffect} from 'react'
import HomeBanner from './HomeComponents/HomeBanner'
import ServicesSection from './HomeComponents/Services'
import { Check, ArrowRight ,Target, User, LogIn, Sparkles} from "lucide-react";
import Solutions from './HomeComponents/Solutions';
import Resources from './HomeComponents/Resources';
import Cards from '../Components/common/Cards';
import FadeIn from '../Components/common/FadeIn';
import { motion } from "framer-motion";
import { Navigate } from 'react-router-dom';

const useCountUpOnView = (end, duration = 1200) => {
  const [value, setValue] = useState(0);
  const ref = React.useRef(null);
  const hasAnimated = React.useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const startTime = performance.now();

          const animate = (time) => {
            const progress = Math.min((time - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setValue(Math.floor(easeOut * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return [value, ref];
};






const Home = () => {
  
  const [count98, ref98] = useCountUpOnView(98);
const [count20, ref20] = useCountUpOnView(10);
const [count40, ref40] = useCountUpOnView(40);


  return (
   <div>
    <HomeBanner />
  
  
    <section
      className="relative overflow-hidden py-24"
      style={{
        backgroundImage: "url('/Home/homebg.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",

      }}
      data-aos="fade-down"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 " />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* LEFT CONTENT */}
          <FadeIn direction="left">
          <div className="max-w-xl text-white">
            <p className="text-xs font-semibold tracking-widest text-amber-300">
              ABOUT TRUEFACE
            </p>

            <h2 className="mt-3  text-(--color-primary) text-3xl font-bold sm:text-4xl">
              Built for high‑stakes trust decisions.
            </h2>

            <p className="mt-4 text-md text-gray-800 md:text-lg">
              Trueface is a background check platform that connects identity,
              address, employment, UAN and criminal data so you can onboard
              candidates, partners and customers with confidence in seconds,
              not weeks.
            </p>

            <ul className="mt-6 space-y-3 text-md text-gray-700 lg:text-lg">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                Unified view of identity, address, criminal, employment and UAN history.
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                Configurable workflows for hiring, lending, gig onboarding and tenant screening.
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                Enterprise‑grade audit trails, access control and compliance reporting.
              </li>
            </ul>

          <motion.button
      onClick={()=>Navigate('solutions')}
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--color-primary,#102B83)] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all cursor-pointer"
    >
      <span>Learn More</span>
      
      {/* Arrow slides to the right on hover */}
      <motion.span
        variants={{
          initial: { x: 0 },
          hover: { x: 5 },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="flex items-center"
      >
        <ArrowRight size={16} />
      </motion.span>
    </motion.button>

          </div>
          </FadeIn>

          {/* RIGHT STATS CARD */}
        <FadeIn direction="up" delay={0.}>
        <div className="relative">
        {/* CARD */}
        <div
          className="
            relative overflow-hidden
            rounded-2xl
            bg-(--color-primary)
            p-8 text-white
            shadow-[0_30px_80px_-25px_rgba(0,0,0,.6)]
          "
        >
          {/* Pattern overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.08]  bg-size-[20px_20px]" />

          {/* Header */}
          <div className="relative z-10 flex items-start justify-between">
            <div>
              <p className="text-xs text-blue-200">
                Live risk snapshot
              </p>
              <h3 className="mt-2 text-xl font-semibold">
                People you can rely on.
              </h3>
            </div>

            {/* Icon */}
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              <Target size={16} className="text-blue-200" />
            </div>
          </div>

          <p className="relative z-10 mt-3 text-sm text-blue-200 max-w-sm">
            Layered checks for identity, behaviour and history,
            orchestrated in one place.
          </p>

          {/* Stats */}
      <div className="relative z-10 mt-8 grid grid-cols-3 gap-6">
    <div ref={ref98}>
      <p className="text-2xl font-bold text-amber-400">
        {count98}%
      </p>
      <p className="mt-1 text-xs text-blue-200">
        checks completed under 2 mins
      </p>
    </div>

    <div ref={ref20}>
      <p className="text-2xl font-bold text-amber-400">
        {count20}M+
      </p>
      <p className="mt-1 text-xs text-blue-200">
        verifications processed
      </p>
    </div>

    <div ref={ref40}>
      <p className="text-2xl font-bold text-amber-400">
        {count40}%
      </p>
      <p className="mt-1 text-xs text-blue-200">
        lower onboarding risk
      </p>
    </div>
  </div>

        </div>

        {/* Glow accent */}
        <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-blue-500/30 blur-3xl" />
        </div>
        </FadeIn>

        </div>
      </div>
    </section>

    <FadeIn direction="up">
        <ServicesSection />
      </FadeIn>

      <FadeIn direction="up">
        <Solutions />
      </FadeIn>

        <Cards />

      <FadeIn direction="up">
        <Resources />
      </FadeIn>

   </div>
  )
}

export default Home