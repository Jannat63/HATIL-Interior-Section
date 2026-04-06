export default function WhyChoose() {
  const points = [
    {
      title: "End-to-End Solution",
      desc: "From concept to execution, we handle everything seamlessly.",
    },
    {
      title: "Own Manufacturing",
      desc: "High-quality furniture crafted in HATIL’s own factory.",
    },
    {
      title: "Premium Materials",
      desc: "We use durable and elegant materials for long-lasting results.",
    },
    {
      title: "Experienced Team",
      desc: "Skilled designers and engineers with years of expertise.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f9f9f9]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold text-[#1F1F1F] mb-3">
            Why Choose HATIL
          </h2>
          <div className="w-16 h-[3px] bg-[#E11D2E] mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {points.map((item, i) => (
            <div
              key={i}
              className="group p-7 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              {/* Accent line */}
              <div className="w-10 h-[3px] bg-[#E11D2E] mb-4 rounded-full"></div>

              <h3 className="text-lg font-semibold text-[#1F1F1F] mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Hover arrow */}
              <div className="mt-4 text-sm text-[#E11D2E] opacity-0 group-hover:opacity-100 transition">
                Learn more →
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}