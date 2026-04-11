"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Residential Interior",
      desc: "Create your dream home with personalized, stylish interiors.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      link: "/services",
    },
    {
      title: "Office Interior",
      desc: "Enhance productivity with modern workspace design.",
      img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76",
      link: "/services",
    },
    {
      title: "Commercial Interior",
      desc: "Design impactful spaces for business and retail.",
      img: "https://images.unsplash.com/photo-1598300056393-4aac492f4344",
      link: "/services",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#1F1F1F] mb-16">
          Our Interior Design Services
        </h2>

        {/* GRID */}
        <motion.div
          className="grid md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {services.map((s, i) => (

            <motion.div
              key={i}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                  scale: 0.96,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                },
              }}
            >
              <Link href={s.link} className="group block">

                <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl transition duration-300">

                  {/* IMAGE */}
                  <div className="overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-60 object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#1F1F1F] mb-2">
                      {s.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                      {s.desc}
                    </p>

                    <span className="text-[#E11D2E] font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                      Learn More →
                    </span>
                  </div>

                </div>

              </Link>
            </motion.div>

          ))}
        </motion.div>

      </div>
    </section>
  );
}