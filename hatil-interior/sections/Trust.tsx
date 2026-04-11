"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function useCountUp(end: number, duration = 1500, trigger: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [trigger, end, duration]);

  return count;
}

export default function Trust() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const years = useCountUp(10, 1200, isInView);
  const projects = useCountUp(500, 1500, isInView);

  return (
    <section className="py-24 bg-[#F9F9F9]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid md:grid-cols-2 gap-16"
        >

          {/* ITEM 1 */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 40,
                scale: 0.95,
                filter: "blur(6px)",
              },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              },
            }}
            className="group"
          >
            <h2 className="text-6xl font-bold text-[#1F1F1F] tracking-tight">
              {years}+
            </h2>
            <p className="text-gray-600 mt-3 tracking-wide">
              Years Experience
            </p>

            {/* subtle hover */}
            <div className="mt-3 h-[2px] w-0 bg-[#E11D2E] group-hover:w-12 transition-all duration-300 mx-auto"></div>
          </motion.div>

          {/* ITEM 2 */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 40,
                scale: 0.95,
                filter: "blur(6px)",
              },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              },
            }}
            className="group"
          >
            <h2 className="text-6xl font-bold text-[#1F1F1F] tracking-tight">
              {projects}+
            </h2>
            <p className="text-gray-600 mt-3 tracking-wide">
              Projects Completed
            </p>

            <div className="mt-3 h-[2px] w-0 bg-[#E11D2E] group-hover:w-12 transition-all duration-300 mx-auto"></div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}