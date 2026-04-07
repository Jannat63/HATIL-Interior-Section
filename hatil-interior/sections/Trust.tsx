export default function Trust() {
const logos = [
  "https://cdn.simpleicons.org/google/000000",
  "https://cdn.simpleicons.org/microsoft/000000",
  "https://cdn.simpleicons.org/amazon/000000",
  "https://cdn.simpleicons.org/netflix/000000",
  "https://cdn.simpleicons.org/airbnb/000000",
  "https://cdn.simpleicons.org/apple/000000",
  "https://cdn.simpleicons.org/meta/000000",
  "https://cdn.simpleicons.org/tesla/000000",
  "https://cdn.simpleicons.org/spotify/000000",
  "https://cdn.simpleicons.org/adobe/000000",
  "https://cdn.simpleicons.org/samsung/000000",
  "https://cdn.simpleicons.org/intel/000000",
  "https://cdn.simpleicons.org/ibm/000000",
  "https://cdn.simpleicons.org/oracle/000000",
  "https://cdn.simpleicons.org/nvidia/000000",
];
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* STATS */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-5xl font-bold text-[#1F1F1F]">10+</h2>
            <p className="text-gray-600 mt-2 tracking-wide">
              Years Experience
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-[#1F1F1F]">500+</h2>
            <p className="text-gray-600 mt-2 tracking-wide">
              Projects Completed
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-16 h-[2px] bg-[#E11D2E] mx-auto mb-12"></div>

        {/* TITLE */}
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-10">
          Trusted by Leading Brands
        </h3>

      </div>

      {/* MARQUEE */}
      <div className="relative overflow-hidden">

        {/* Fade edges */}
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="animate-marquee gap-20">

          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="brand"
              className="h-10 min-w-[120px] w-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300"
            />
          ))}

        </div>

      </div>
    </section>
  );
}