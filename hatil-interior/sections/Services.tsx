export default function Services() {
  const services = [
    {
      title: "Residential Interior",
      desc: "Create your dream home with personalized, stylish interiors.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      title: "Office Interior",
      desc: "Enhance productivity with modern workspace design.",
      img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76",
    },
    {
      title: "Commercial Interior",
      desc: "Design impactful spaces for business and retail.",
      img: "https://images.unsplash.com/photo-1598300056393-4aac492f4344",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl font-semibold text-center text-[#1F1F1F] mb-12">
          Our Interior Design Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition bg-white"
            >
              
              <img src={s.img} className="w-full h-56 object-cover" />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#1F1F1F] mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{s.desc}</p>

                <span className="text-[#E11D2E] font-medium text-sm cursor-pointer">
                  Learn More →
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}