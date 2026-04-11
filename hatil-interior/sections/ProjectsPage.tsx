"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Modern Apartment in Dhaka",
      location: "Residential",
      slug: "modern-apartment",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    },
    {
      title: "Cozy Café",
      location: "Banani",
      slug: "cozy-cafe",
      img: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    },
    {
      title: "Elegant Office",
      location: "Gulshan",
      slug: "elegant-office",
      img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76",
    },
    {
      title: "Corporate Workspace",
      location: "Dhaka",
      slug: "corporate-workspace",
      img: "https://images.unsplash.com/photo-1598300056393-4aac492f4344",
    },
    {
      title: "Luxury Bedroom",
      location: "Dhanmondi",
      slug: "luxury-bedroom",
      img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
    },
    {
      title: "Dining Interior",
      location: "Uttara",
      slug: "dining-interior",
      img: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a",
    },
  ];

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />

        <div className="relative z-10 max-w-4xl px-6 ml-10 md:ml-20">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-semibold text-[#1F1F1F] mb-4"
          >
            Our Interior Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-700"
          >
            Explore spaces designed with precision & passion
          </motion.p>

        </div>
      </section>

      {/* FILTER */}
      <section className="py-10 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex gap-6 justify-center text-sm">
          <button className="text-[#E11D2E] font-semibold">All</button>
          <button className="text-gray-600 hover:text-[#E11D2E]">Residential</button>
          <button className="text-gray-600 hover:text-[#E11D2E]">Office</button>
          <button className="text-gray-600 hover:text-[#E11D2E]">Commercial</button>
        </div>
      </section>

      {/* GRID */}
      <section className="py-20">
        <motion.div
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >

          {projects.map((p, i) => (

            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.97 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6 },
                },
              }}
            >
              <Link
                href={`/projects/${p.slug}`}
                className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300 block"
              >
                <img
                  src={p.img}
                  className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition" />

                <div className="absolute bottom-0 left-0 p-5 text-white">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-200 mb-2">{p.location}</p>

                  <span className="text-sm text-[#ff4d4d] opacity-0 group-hover:opacity-100 transition">
                    View Case Study →
                  </span>
                </div>
              </Link>
            </motion.div>

          ))}

        </motion.div>
      </section>

      {/* FEATURED */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h2 className="text-3xl font-semibold text-[#1F1F1F] mb-4">
              Featured Project
            </h2>

            <h3 className="text-xl font-semibold mb-3">
              Luxury Apartment in Dhaka
            </h3>

            <p className="text-gray-600 mb-6">
              A modern residential project focused on elegance, space optimization,
              and premium material selection. Designed to deliver both comfort and
              visual sophistication.
            </p>

            <Link
              href="/projects/luxury-apartment"
              className="inline-block bg-[#E11D2E] text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition"
            >
              View Full Case Study
            </Link>
          </motion.div>

        </div>
      </section>

    </main>
  );
}