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

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60" />

      {/* ❌ REMOVE mx-auto */}
      <div className="relative z-10 px-6 md:px-16">

        {/* Content */}
        <div className="max-w-xl">

          <h1 className="text-6xl md:text-6xl font-semibold leading-tight text-[#1F1F1F] mb-6">
            Transform Your Space
            Into a Living Experience
          </h1>

          <p className="text-lg text-gray-700 mb-8">
            Interior Design Services by HATIL — Where comfort meets craftsmanship.
          </p>

          <Link
            href="/book"
            className="inline-block bg-[#E11D2E] hover:bg-red-700 active:scale-95 transition duration-300 px-8 py-4 rounded-xl text-white font-semibold shadow-lg"
          >
            Book Free Consultation
          </Link>

        </div>

      </div>
    </section>
  );
}