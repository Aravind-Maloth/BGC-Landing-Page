import React, { useRef } from "react";
import {
  ShieldCheck,
  Gavel,
  Pill,
  Briefcase,
  Sliders,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";
import StaggerContainer,{itemVariants} from "../../Components/common/StaggerContainer";
import '../../Styles/global.css'

const services = [
  {
    icon: <ShieldCheck size={18} className="text-blue-400" />,
    title: "Identity & address verification",
    desc:
      "Instantly match government IDs, faces and addresses to authoritative data sources.",
    tags: ["ID match", "Address proof", "Liveness"],
  },
  {
    icon: <Gavel size={18} className="text-orange-400" />,
    title: "Criminal & court records",
    desc:
      "Search national and regional databases with continuous risk monitoring enabled.",
    tags: ["Court records", "Watchlists", "Continuous alerts"],
  },
  // {
  //   icon: <Pill size={18} className="text-green-400" />,
  //   title: "Drug & behaviour screening",
  //   desc:
  //     "Lab-based or on-site drug tests with full compliance and strict chain of custody.",
  //   tags: ["10-panel tests", "Chain of custody"],
  // },
  {
    icon: <Briefcase size={18} className="text-yellow-400" />,
    title: "Employment & UAN history",
    desc:
      "Validate employment claims and UAN records through HR and statutory systems.",
    tags: ["UAN checks", "HR verified"],
  },
  {
    icon: <Sliders size={18} className="text-purple-400" />,
    title: "Configurable workflows",
    desc:
      "Design custom verification workflows with our visual no-code builder.",
    tags: ["Role-based", "Country-aware", "APIs"],
  },
  // {
  //   icon: <Lock size={18} className="text-cyan-400" />,
  //   title: "Compliance & auditing",
  //   desc:
  //     "Immutable audit trails, consent capture and regulator-ready exports.",
  //   tags: ["SOC2-ready", "Consent vault", "Exports"],
  // },
];

const ServicesSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#162B66] via-[#0F1F4A] to-[#070E23] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <p className="text-center text-xs font-semibold tracking-widest text-blue-300">
          SERVICES OF TRUEFACE
        </p>

        <h2 className="mt-3 text-center text-3xl font-bold text-white sm:text-4xl">
          Everything you need to trust every person.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-[#B7C9F2]">
          Run deep checks across identity, criminal records, drugs, address,
          employment and UAN from one modern background verification platform.
        </p>

        {/* Cards */}
     <StaggerContainer className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
  {services.slice(0, 4).map((service, index) => (
    <motion.div key={index} variants={itemVariants}>
      <TiltCard service={service} />
    </motion.div>
  ))}
</StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesSection;


const TiltCard = ({ service, delay }) => {
  const ref = useRef(null);

  const getDirection = (e, element) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const angle = Math.atan2(y, x) * (180 / Math.PI);

    if (angle >= -45 && angle < 45) return "right";
    if (angle >= 45 && angle < 135) return "bottom";
    if (angle >= -135 && angle < -45) return "top";
    return "left";
  };

  const handleMouseEnter = (e) => {
    const dir = getDirection(e, ref.current);
    ref.current.setAttribute("data-dir", dir);
  };

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ref.current.style.setProperty("--x", `${x}px`);
    ref.current.style.setProperty("--y", `${y}px`);

    // Tilt
    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;

    ref.current.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ animationDelay: `${delay}s` }}
      className="group relative overflow-hidden animate-float rounded-2xl border border-white/10 bg-gradient-to-br from-[#0B1733] to-[#050A19] p-6 shadow-[0_0_50px_-12px_rgba(90,130,255,.35)] transition-all duration-300 cursor-pointer"
    >
  
      <span className="direction-fill absolute inset-0 z-0" />

  
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `
            radial-gradient(
              250px circle at var(--x) var(--y),
              rgba(255,255,255,0.25),
              transparent 40%
            )
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 transition-colors duration-300 group-hover:text-black">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 group-hover:bg-black/10 transition">
          {service.icon}
        </div>

        <h3 className="text-sm font-semibold text-white">{service.title}</h3>

        <p className="mt-2 text-sm leading-relaxed text-[#9BB5E5] group-hover:text-black transition">
          {service.desc}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/10 px-3 py-1 text-xs text-[#BFD2FF] group-hover:bg-black/10 group-hover:text-black transition"
              
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};