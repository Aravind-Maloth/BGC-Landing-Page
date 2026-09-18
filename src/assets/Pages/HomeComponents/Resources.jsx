import React from 'react'
import { motion } from 'framer-motion';
import StaggerContainer,{itemVariants} from '../../Components/common/StaggerContainer';

const resources = [
  {
    type: "Guide",
    title: "Building a compliant background check program in 2026",
    meta: "14 min read · Compliant · 2026 edition",
    image: "/Home/resource1.jpg",
  },
  {
    type: "Report",
    title: "The state of identity & employment fraud across emerging markets",
    meta: "Data report · 2026 edition",
       image: "/Home/resource2.jpg",

  },
  {
    type: "For Developers",
    title: "Embedding background checks directly into your product flows",
    meta: "API · Webhooks · SDKs",
       image: "/Home/resource3.jpg",

  },
];


const Resources = () => {
  return (
  
<section className="mx-auto max-w-7xl px-6 py-15">
      {/* Header */}
      <div className="mb-16 text-center">
        <p className="mb-3 text-xs font-semibold tracking-widest text-amber-500">
          EXPLORE OUR RESOURCES
        </p>
        <h2 className="mt-3  text-(--color-primary) text-3xl font-bold sm:text-4xl">
          Deep dives & resources.
        </h2>
        <p className="mx-auto py-2 max-w-xl text-slate-500">
          Stay ahead of regulations, fraud patterns and best practices in
          people risk.
        </p>
      </div>

      {/* Cards */}
     <StaggerContainer className="grid gap-6 md:grid-cols-3">
        {resources.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative h-[360px] overflow-hidden rounded-2xl bg-black cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent p-6 flex flex-col justify-end">
              <span className="mb-2 text-[11px] font-medium tracking-widest text-slate-300">
                {item.type}
              </span>
              <h4 className="mb-2 text-[16px] font-medium leading-snug text-white">
                {item.title}
              </h4>
              <p className="text-sm text-slate-300">{item.meta}</p>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </section>


  )
}

export default Resources