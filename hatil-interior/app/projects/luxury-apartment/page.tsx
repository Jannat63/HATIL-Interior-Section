import Link from "next/link";

export default function CaseStudyPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-semibold mb-4">
            Luxury Apartment in Dhaka
          </h1>
          <p className="text-lg text-gray-200">
            A complete residential transformation by HATIL
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-6 text-[#1F1F1F]">
            Project Overview
          </h2>

          <p className="text-gray-600 leading-relaxed">
            This project involved transforming a modern apartment into a
            luxurious and highly functional living space. The client required
            efficient space utilization while maintaining a premium aesthetic
            aligned with contemporary interior design trends.
          </p>

        </div>
      </section>

      {/* PROBLEM / SOLUTION / RESULT */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-[#E11D2E] font-semibold mb-3">Problem</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Limited space and lack of cohesive design created an imbalance
              between functionality and visual appeal.
            </p>
          </div>

          <div>
            <h3 className="text-[#E11D2E] font-semibold mb-3">Solution</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Smart layout planning, custom furniture, and premium materials
              were used to optimize space and elevate aesthetics.
            </p>
          </div>

          <div>
            <h3 className="text-[#E11D2E] font-semibold mb-3">Result</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              A visually stunning, comfortable home that perfectly balances
              luxury and practicality.
            </p>
          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">

          {[
            "photo-1618221195710-dd6b41faaea6",
            "photo-1600607687939-ce8a6c25118c",
            "photo-1615874959474-d609969a20ed",
          ].map((img, i) => (
            <img
              key={i}
              src={`https://images.unsplash.com/${img}`}
              className="rounded-xl object-cover h-64 w-full hover:scale-105 transition duration-300"
            />
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-r from-[#f8f8f8] to-white">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-4xl font-semibold mb-4 text-[#1F1F1F]">
            Want a Similar Transformation?
          </h2>

          <p className="text-gray-600 mb-8">
            Book a consultation with our experts and start your project today.
          </p>

          <Link
            href="/book"
            className="inline-block bg-[#E11D2E] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Book Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}