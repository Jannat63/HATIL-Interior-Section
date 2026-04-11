"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      title: "Consultation",
      desc: "Understand your needs and vision",
    },
    {
      title: "Design Planning",
      desc: "Create layout and concept design",
    },
    {
      title: "3D Visualization",
      desc: "Preview your future space",
    },
    {
      title: "Execution",
      desc: "Build with precision and quality",
    },
    {
      title: "Handover",
      desc: "Deliver ready-to-use space",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#f5f5f5] to-white relative">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold text-[#1F1F1F] mb-3">
            Our Design Process
          </h2>
          <div className="w-16 h-[3px] bg-[#E11D2E] mx-auto rounded-full"></div>
        </div>

        {/* Timeline Line */}
        <div className="hidden md:block absolute top-[150px] left-0 w-full h-[2px] bg-gray-200"></div>

        {/* Steps */}
        <motion.div
          className="grid md:grid-cols-5 gap-8 relative z-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                },
              }}
              className="flex flex-col items-center group"
            >

              {/* Circle (spring pop) */}
              <motion.div
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 12,
                  delay: i * 0.1,
                }}
                className="w-14 h-14 rounded-full bg-[#E11D2E] text-white flex items-center justify-center font-semibold shadow-lg mb-4 group-hover:scale-110 transition"
              >
                {i + 1}
              </motion.div>

              {/* Title */}
              <h3 className="font-semibold text-[#1F1F1F] mb-2">
                {step.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-gray-600 max-w-[160px]">
                {step.desc}
              </p>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}