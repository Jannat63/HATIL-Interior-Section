"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] flex items-center">
      
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
        alt="Interior Design"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60" />

      <div className="relative z-10 px-6 md:px-16">

        <div className="max-w-xl">

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-6xl md:text-6xl font-semibold leading-tight text-[#1F1F1F] mb-6"
          >
            Transform Your Space
            Into a Living Experience
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            className="text-lg text-gray-700 mb-8"
          >
            Interior Design Services by HATIL — Where comfort meets craftsmanship.
          </motion.p>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
          >
            <Link
              href="/book"
              className="inline-block bg-[#E11D2E] hover:bg-red-700 active:scale-95 transition duration-300 px-8 py-4 rounded-xl text-white font-semibold shadow-lg"
            >
              Book Free Consultation
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}