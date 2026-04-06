export default function Trust() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f5f5f5] to-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8 text-center">

          {/* YEARS */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <h2 className="text-4xl font-bold text-[#1F1F1F] mb-2">
              10+
            </h2>
            <p className="text-gray-600 text-sm tracking-wide">
              Years Experience
            </p>
          </div>

          {/* PROJECTS */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <h2 className="text-4xl font-bold text-[#1F1F1F] mb-2">
              500+
            </h2>
            <p className="text-gray-600 text-sm tracking-wide">
              Projects Completed
            </p>
          </div>

          {/* BRANDS */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <h3 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">
              Trusted by Leading Brands
            </h3>

            <div className="flex justify-center gap-4 flex-wrap text-[#1F1F1F] font-medium">
              <span className="hover:text-[#E11D2E] transition">Walton</span>
              <span className="hover:text-[#E11D2E] transition">Jamuna</span>
              <span className="hover:text-[#E11D2E] transition">Bashundhara</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}