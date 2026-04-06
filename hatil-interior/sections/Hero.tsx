import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] flex items-center">
      
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
        alt="Interior Design"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/60" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-[#1F1F1F] mb-6">
          Transform Your Space <br /> Into a Living Experience
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
          Interior Design Services by HATIL — Where comfort meets craftsmanship.
        </p>

        {/* WORKING CTA */}
        <Link
          href="/book"
          className="inline-block bg-[#E11D2E] hover:bg-red-700 active:scale-95 transition duration-300 px-8 py-4 rounded-xl text-white font-semibold shadow-lg"
        >
          Book Free Consultation
        </Link>

      </div>
    </section>
  );
}