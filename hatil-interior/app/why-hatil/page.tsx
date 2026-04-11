import Link from "next/link";

export default function WhyHatilPage() {
  return (
    <main className="bg-white">

      {/* HERO (NOW MATCHES ALL PAGES) */}
      <section className="relative w-full h-[90vh] flex items-center">

        {/* Background */}
        <img
          src="https://images.unsplash.com/photo-1600210492493-0946911123ea"
          alt="Why HATIL"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* SAME OVERLAY AS OTHER PAGES */}
        <div className="absolute inset-0 bg-white/60" />

        {/* SAME ALIGNMENT */}
        <div className="relative z-10 px-6 md:px-16">

          <div className="max-w-xl">

            <h1 className="text-6xl md:text-6xl font-semibold leading-tight text-[#1F1F1F] mb-6">
              Why Choose HATIL Interior
            </h1>

            <p className="text-lg text-gray-700 mb-8">
              We design spaces that combine functionality, craftsmanship, and
              timeless aesthetics — creating environments that truly feel like home.
            </p>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          At HATIL, every project reflects our dedication to quality and
          precision. From concept to completion, we deliver thoughtfully crafted
          interiors designed for modern living.
        </p>
      </section>

      {/* SECTION 1 */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
          className="rounded-2xl shadow-md transition duration-500 hover:scale-[1.03] hover:shadow-xl"
        />
        <div>
          <h2 className="text-3xl font-semibold text-[#1F1F1F] mb-4">
            End-to-End Interior Solutions
          </h2>
          <p className="text-gray-700 leading-relaxed">
            From initial concept to final execution, we manage every stage of the
            journey. Our integrated process ensures efficiency, consistency, and
            a seamless experience.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-[#1F1F1F] mb-4">
              Own Manufacturing Excellence
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our in-house manufacturing facilities allow us to maintain strict
              quality control. Every piece is crafted with precision to ensure
              durability and refined design.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1582582621959-48d27397dc69"
            className="rounded-2xl shadow-md transition duration-500 hover:scale-[1.03] hover:shadow-xl"
          />
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
          className="rounded-2xl shadow-md transition duration-500 hover:scale-[1.03] hover:shadow-xl"
        />
        <div>
          <h2 className="text-3xl font-semibold text-[#1F1F1F] mb-4">
            Premium Materials & Finishes
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We select materials that combine durability with elegance, ensuring
            long-lasting performance while enhancing the beauty of your space.
          </p>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-[#1F1F1F] mb-4">
              Experienced Design Team
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our designers and engineers bring years of expertise, delivering
              solutions that balance innovation, functionality, and style.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            className="rounded-2xl shadow-md transition duration-500 hover:scale-[1.03] hover:shadow-xl"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-semibold text-[#1F1F1F] mb-6">
          Let’s Design Your Space Together
        </h2>

        <Link
          href="/book"
          className="inline-block bg-[#E11D2E] text-white px-10 py-4 rounded-xl hover:bg-red-700 transition"
        >
          Book Your Consultation
        </Link>
      </section>

    </main>
  );
}