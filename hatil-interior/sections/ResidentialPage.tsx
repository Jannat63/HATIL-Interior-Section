import Link from "next/link";
export default function ResidentialPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative h-[70vh] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1615874959474-d609969a20ed"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />

        <div className="relative z-10 max-w-4xl px-6 ml-10 md:ml-20">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-[#1F1F1F] mb-6">
            Residential Interior Design
          </h1>

          <p className="text-lg text-gray-700 max-w-xl">
            Designed for comfort, crafted for lifestyle. Transform your home with HATIL.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-[#1F1F1F] mb-4">
            Transform Your Home with HATIL
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We specialize in creating elegant, functional interiors tailored to your lifestyle.
            From living rooms to bedrooms, we deliver complete interior solutions
            with premium materials and expert craftsmanship.
          </p>
        </div>
      </section>

      {/* WHAT WE DESIGN */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center text-[#1F1F1F] mb-12">
            What We Design
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Living Room", "Bedroom", "Dining Space"].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
              >
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
                  className="h-56 w-full object-cover transition duration-500 hover:scale-105"
                />

                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-[#1F1F1F]">
                    {item}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-semibold text-[#1F1F1F] mb-16">
            Our Design Process
          </h2>

          {/* CENTERED LINE (FIXED) */}
          <div className="hidden md:block absolute top-[155px] left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gray-200"></div>

          <div className="grid md:grid-cols-5 gap-8 relative z-10">
            {[
              "Consultation",
              "Planning",
              "3D Design",
              "Execution",
              "Handover",
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center">

                <div className="w-14 h-14 bg-[#E11D2E] text-white flex items-center justify-center rounded-full shadow-lg mb-4 hover:scale-110 transition">
                  {i + 1}
                </div>

                <p className="text-sm text-[#1F1F1F] font-medium">
                  {step}
                </p>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
<section className="py-28 bg-gradient-to-r from-[#f8f8f8] via-white to-[#f8f8f8] text-center relative overflow-hidden">

  {/* Soft background glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03),transparent)]"></div>

  <div className="relative z-10 max-w-3xl mx-auto px-6">

    <h2 className="text-4xl md:text-5xl font-semibold text-[#1F1F1F] mb-6 leading-tight">
      Ready to Design Your Dream Home?
    </h2>

    <p className="text-gray-600 mb-10">
      Book a consultation with HATIL’s interior experts and bring your vision to life.
    </p>

    {/* WORKING BUTTON */}
    <Link
      href="/book"
      className="inline-block bg-[#E11D2E] text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 hover:bg-red-700 active:scale-95 transition duration-300"
    >
      Book Consultation
    </Link>

    <p className="text-xs text-gray-500 mt-6 tracking-wide">
      Free consultation • No obligation • Quick response
    </p>

  </div>
</section>

    </main>
  );
}