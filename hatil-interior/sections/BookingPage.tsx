"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative h-[65vh] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />

        <div className="relative z-10 max-w-4xl px-6 ml-10 md:ml-20">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-semibold text-[#1F1F1F] mb-4 leading-tight"
          >
            Book Your Interior Consultation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-700 max-w-xl"
          >
            Let’s design your dream space together with HATIL experts.
          </motion.p>

        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 rounded-2xl shadow-md border border-gray-100"
          >

            <h2 className="text-2xl font-semibold mb-6 text-[#1F1F1F]">
              Get a Free Consultation
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-5"
            >

              {/* INPUT STYLE (FIXED) */}
              {[
                { label: "Full Name", type: "text", placeholder: "Enter your full name" },
                { label: "Phone Number", type: "text", placeholder: "Enter your phone number" },
                { label: "Email Address", type: "email", placeholder: "Enter your email" },
                { label: "Location", type: "text", placeholder: "Enter your location" },
              ].map((field, i) => (
                <div key={i}>
                  <label className="text-sm font-medium text-[#1F1F1F] mb-1 block">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-[#1F1F1F] placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E11D2E] focus:border-[#E11D2E] transition"
                  />
                </div>
              ))}

              {/* SELECT */}
              <div>
                <label className="text-sm font-medium text-[#1F1F1F] mb-1 block">
                  Project Type
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-[#1F1F1F] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E11D2E] focus:border-[#E11D2E] transition">
                  <option>Select project type</option>
                  <option>Residential</option>
                  <option>Office</option>
                  <option>Commercial</option>
                </select>
              </div>

              {/* SELECT */}
              <div>
                <label className="text-sm font-medium text-[#1F1F1F] mb-1 block">
                  Budget Range
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-[#1F1F1F] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E11D2E] focus:border-[#E11D2E] transition">
                  <option>Select budget</option>
                  <option>Below 5 Lakh</option>
                  <option>5–10 Lakh</option>
                  <option>10+ Lakh</option>
                </select>
              </div>

              {/* TEXTAREA */}
              <div>
                <label className="text-sm font-medium text-[#1F1F1F] mb-1 block">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-[#1F1F1F] placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E11D2E] focus:border-[#E11D2E] transition"
                />
              </div>

              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Your information will not be shared.
              </p>

              <button className="w-full bg-[#E11D2E] text-white py-4 rounded-lg font-semibold shadow-lg hover:scale-[1.02] hover:bg-red-700 transition">
                Book Consultation
              </button>

            </form>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="bg-gradient-to-br from-[#fafafa] to-[#f0f0f0] p-8 rounded-2xl shadow-md border border-gray-100"
          >

            <h3 className="text-xl font-semibold mb-6 text-[#1F1F1F]">
              Our Contact
            </h3>

            <div className="space-y-3 text-gray-700 text-sm mb-6">
              <p>📍 Shewrapara, Rokeya Sarani, Mirpur, Dhaka 1216</p>
              <p>📞 +88 02 58054370</p>
              <p>📞 +88 01715440000</p>
              <p>✉ info@hatil.com</p>
            </div>

            <div className="rounded-xl overflow-hidden mb-8 border">
              <iframe
                src="https://maps.google.com/maps?q=hatil%20mirpur%20dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-48 border-0"
              ></iframe>
            </div>

            <div className="space-y-3 text-gray-700 mb-8 text-sm">
              <p>✔ 10+ Years Experience</p>
              <p>✔ 500+ Projects Completed</p>
              <p>✔ End-to-End Interior Solution</p>
            </div>

            <div className="bg-white p-5 rounded-xl text-center shadow-sm border">
              <p className="text-sm text-gray-500 mb-2">
                Prefer to talk directly?
              </p>

              <a
                href="tel:+8801715440000"
                className="text-[#E11D2E] font-semibold text-lg hover:underline"
              >
                Call us now: +88 01715440000
              </a>
            </div>

          </motion.div>

        </div>
      </section>

      {/* SUCCESS POPUP */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl"
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#E11D2E]/10">
              <span className="text-[#E11D2E] text-2xl">✓</span>
            </div>

            <h2 className="text-2xl font-semibold mb-2">Thank You!</h2>

            <p className="text-gray-600 mb-6">
              Our design consultants will contact you shortly.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="bg-[#E11D2E] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}

    </main>
  );
}