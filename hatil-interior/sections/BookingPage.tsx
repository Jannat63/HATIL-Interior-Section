"use client";
import { useState } from "react";

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
          <h1 className="text-5xl md:text-6xl font-semibold text-[#1F1F1F] mb-4 leading-tight">
            Book Your Interior Consultation
          </h1>

          <p className="text-lg text-gray-700 max-w-xl">
            Let’s design your dream space together with HATIL experts.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* FORM */}
          <div className="bg-[#FAFAFA] p-8 rounded-2xl shadow-md border border-gray-100">

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

              {/* Name */}
              <div>
                <label className="text-sm font-medium text-[#1F1F1F] mb-1 block">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-[#1F1F1F] placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E11D2E]"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium text-[#1F1F1F] mb-1 block">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-[#1F1F1F] placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E11D2E]"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-[#1F1F1F] mb-1 block">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-[#1F1F1F] placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E11D2E]"
                  placeholder="Enter your email"
                />
              </div>

              {/* Location */}
              <div>
                <label className="text-sm font-medium text-[#1F1F1F] mb-1 block">
                  Location
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-[#1F1F1F] placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E11D2E]"
                  placeholder="Enter your location"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="text-sm font-medium text-[#1F1F1F] mb-1 block">
                  Project Type
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-[#1F1F1F] shadow-sm focus:ring-2 focus:ring-[#E11D2E]">
                  <option>Select project type</option>
                  <option>Residential</option>
                  <option>Office</option>
                  <option>Commercial</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="text-sm font-medium text-[#1F1F1F] mb-1 block">
                  Budget Range
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-[#1F1F1F] shadow-sm focus:ring-2 focus:ring-[#E11D2E]">
                  <option>Select budget</option>
                  <option>Below 5 Lakh</option>
                  <option>5–10 Lakh</option>
                  <option>10+ Lakh</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-[#1F1F1F] mb-1 block">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-[#1F1F1F] placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-[#E11D2E]"
                  placeholder="Tell us about your project..."
                />
              </div>

              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Your information will not be shared.
              </p>

              <button className="w-full bg-[#E11D2E] text-white py-4 rounded-lg font-semibold shadow-lg hover:scale-[1.02] hover:bg-red-700 active:scale-95 transition">
                Book Consultation
              </button>

            </form>
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-gradient-to-br from-[#fafafa] to-[#f0f0f0] p-8 rounded-2xl shadow-md border border-gray-100">

            <h3 className="text-xl font-semibold mb-6 text-[#1F1F1F]">
              Why Choose HATIL?
            </h3>

            <ul className="space-y-4 text-gray-700 mb-8">
              <li>✔ 10+ Years Experience</li>
              <li>✔ 500+ Projects Completed</li>
              <li>✔ End-to-End Interior Solution</li>
            </ul>

            <h3 className="text-lg font-semibold mb-4 text-[#1F1F1F]">
              Contact Information
            </h3>

            <div className="space-y-2 text-gray-700 text-sm mb-6">
              <p>📍 Mirpur, Dhaka, Bangladesh</p>
              <p>📞 +8801XXXXXXXXX</p>
              <p>✉ info@hatil.com</p>
            </div>

            <div className="bg-white p-5 rounded-xl text-center shadow-sm border border-gray-100">
              <p className="text-sm text-gray-500 mb-2">
                Prefer to talk directly?
              </p>
              <p className="text-[#E11D2E] font-semibold text-lg">
                Call Now: +8801XXXXXXXXX
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SUCCESS POPUP */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">

            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#E11D2E]/10">
              <span className="text-[#E11D2E] text-2xl">✓</span>
            </div>

            <h2 className="text-2xl font-semibold text-[#1F1F1F] mb-2">
              Thank You!
            </h2>

            <p className="text-gray-600 mb-6">
              Thank you for reaching out to HATIL.  
              Our design consultants will connect with you shortly to discuss your project in detail.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="bg-[#E11D2E] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </main>
  );
}