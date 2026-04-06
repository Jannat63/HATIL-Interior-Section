export default function FeaturedProjects() {
  const projects = [
    {
      title: "Modern Apartment in Dhaka",
      location: "Residential",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    },
    {
      title: "Luxury Office Interior",
      location: "Gulshan",
      img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76",
    },
    {
      title: "Elegant Living Space",
      location: "Dhanmondi",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    },
    {
      title: "Corporate Workspace",
      location: "Dhaka",
      img: "https://images.unsplash.com/photo-1598300056393-4aac492f4344",
    },
    {
      title: "Minimal Bedroom Design",
      location: "Banani",
      img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
    },
    {
      title: "Premium Dining Area",
      location: "Uttara",
      img: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a",
    },
  ];

  return (
    <section className="py-20 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-center text-[#1F1F1F] mb-12">
          Featured Projects
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-xl"
            >
              {/* Image */}
              <img
                src={p.img}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-200">{p.location}</p>

                <span className="text-sm mt-2 inline-block text-[#ff4d4d] opacity-0 group-hover:opacity-100 transition">
                  View Case Study →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}