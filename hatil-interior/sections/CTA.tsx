import Link from "next/link";
export default function CTA() {
  return (
    <section className="py-28 bg-gradient-to-r from-[#f8f8f8] via-white to-[#f8f8f8] text-center relative overflow-hidden">
      
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03),transparent)]"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-semibold text-[#1F1F1F] mb-6 leading-tight">
          Ready to Transform Your Space?
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mb-10">
          Book a consultation with HATIL’s interior experts and bring your vision to life.
        </p>

        <Link
  href="/book"
  className="inline-block bg-[#E11D2E] text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 hover:bg-red-700 transition duration-300"
>
  Book Your Consultation
</Link>

        {/* Trust line */}
        <p className="text-xs text-gray-500 mt-6 tracking-wide">
          Free consultation • No obligation • Quick response
        </p>

      </div>
    </section>
  );
}