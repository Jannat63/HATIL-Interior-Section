import Link from "next/link";

export default function CaseStudy() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
            className="w-full h-full object-cover"
          />

          {/* Overlay text */}
          <div className="absolute bottom-0 left-0 p-6 text-white bg-gradient-to-t from-black/70 to-transparent w-full">
            <h3 className="text-xl font-semibold">
              Luxury Apartment in Dhaka
            </h3>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl font-semibold text-[#1F1F1F] mb-6">
            Featured Case Study
          </h2>

          {/* Problem */}
          <div className="mb-6">
            <h4 className="text-[#E11D2E] font-semibold mb-2">Problem</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              The client wanted a modern, elegant apartment design but struggled
              with space utilization and cohesive aesthetics.
            </p>
          </div>

          {/* Solution */}
          <div className="mb-6">
            <h4 className="text-[#E11D2E] font-semibold mb-2">Solution</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              HATIL provided a complete interior solution with smart layout
              planning, custom furniture, and premium materials to create a
              balanced and luxurious environment.
            </p>
          </div>

          {/* Result */}
          <div className="mb-8">
            <h4 className="text-[#E11D2E] font-semibold mb-2">Result</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              The final space delivered both functionality and elegance,
              transforming the apartment into a comfortable and visually
              stunning home.
            </p>
          </div>

          {/* CTA */}
          <Link
  href="/projects/luxury-apartment"
  className="inline-block bg-[#E11D2E] hover:bg-red-700 text-white px-6 py-3 rounded-lg transition"
>
  View Full Case Study
</Link>
        </div>

      </div>
    </section>
  );
}