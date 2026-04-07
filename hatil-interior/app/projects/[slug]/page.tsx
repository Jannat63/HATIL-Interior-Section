import { notFound } from "next/navigation";
import Link from "next/link";

const projects = [
  {
    slug: "modern-apartment",
    title: "Modern Apartment in Dhaka",
    location: "Dhaka, Bangladesh",
    type: "Residential",
    area: "1800 sq ft",
    desc: "A modern interior focused on clean lines, comfort, and efficient space utilization.",
    problem:
      "The client needed a modern living space that maximized limited space while maintaining elegance and functionality.",
    solution:
      "We created a minimalist layout with custom furniture, neutral color palettes, and optimized lighting to enhance spatial perception.",
    result:
      "The final outcome delivered a highly functional, aesthetically pleasing space that feels open, luxurious, and comfortable.",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a",
    ],
  },

  {
    slug: "cozy-cafe",
    title: "Cozy Café in Banani",
    location: "Banani, Dhaka",
    type: "Commercial",
    area: "1200 sq ft",
    desc: "Warm and inviting café design with natural textures and ambient lighting.",
    problem:
      "The client wanted a cozy and welcoming café experience within a compact urban space.",
    solution:
      "We used warm lighting, wood finishes, and efficient seating layout to maximize comfort.",
    result:
      "The café became a highly engaging and visually appealing destination for customers.",
    img: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    gallery: [
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
    ],
  },

  {
    slug: "elegant-office",
    title: "Elegant Office in Gulshan",
    location: "Gulshan, Dhaka",
    type: "Office",
    area: "2500 sq ft",
    desc: "A modern office space designed for productivity and aesthetics.",
    problem:
      "The client needed a professional workspace that balances functionality and style.",
    solution:
      "We implemented open workspace planning with premium materials and lighting.",
    result:
      "A productive and elegant office environment that enhances team efficiency.",
    img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    ],
  },

  {
    slug: "corporate-workspace",
    title: "Corporate Workspace in Dhaka",
    location: "Dhaka",
    type: "Office",
    area: "3000 sq ft",
    desc: "A modern corporate office designed for collaboration and efficiency.",
    problem:
      "The client required a scalable workspace for team collaboration and productivity.",
    solution:
      "We designed an open-plan office with meeting zones and ergonomic furniture.",
    result:
      "An efficient and flexible workspace that supports team growth.",
    img: "https://images.unsplash.com/photo-1598300056393-4aac492f4344",
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      "https://images.unsplash.com/photo-1507209696998-3c532be9b2b5",
    ],
  },

  {
    slug: "luxury-bedroom",
    title: "Luxury Bedroom Design",
    location: "Dhanmondi, Dhaka",
    type: "Residential",
    area: "900 sq ft",
    desc: "A luxurious bedroom design focused on comfort and elegance.",
    problem:
      "The client wanted a premium and relaxing bedroom experience.",
    solution:
      "We used soft textures, layered lighting, and custom furniture.",
    result:
      "A calm, elegant, and luxurious personal space.",
    img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
    gallery: [
      "https://images.unsplash.com/photo-1616593969747-4797dc75033e",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
      "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77",
    ],
  },

  {
    slug: "dining-interior",
    title: "Dining Interior in Uttara",
    location: "Uttara, Dhaka",
    type: "Residential",
    area: "700 sq ft",
    desc: "A stylish dining space combining functionality with modern design.",
    problem:
      "The dining space lacked identity and functional layout.",
    solution:
      "We redesigned the layout with modern furniture and lighting.",
    result:
      "A vibrant and functional dining area for family gatherings.",
    img: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a",
    gallery: [
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea",
    ],
  },
];

type PageProps = {
  params: { slug: string };
};

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative h-[65vh] flex items-center">
        <img src={project.img} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/70" />

        <div className="relative z-10 px-6 md:px-16 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-semibold text-[#1F1F1F] mb-4">
            {project.title}
          </h1>
          <p className="text-gray-700">{project.desc}</p>
        </div>
      </section>

      {/* PROJECT INFO */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-gray-500 text-sm">Location</p>
            <h3 className="font-semibold">{project.location}</h3>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Type</p>
            <h3 className="font-semibold">{project.type}</h3>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Area</p>
            <h3 className="font-semibold">{project.area}</h3>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 max-w-4xl mx-auto px-6 space-y-10">
        <div>
          <h2 className="text-xl font-semibold text-[#E11D2E] mb-2">Problem</h2>
          <p className="text-gray-600">{project.problem}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#E11D2E] mb-2">Solution</h2>
          <p className="text-gray-600">{project.solution}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#E11D2E] mb-2">Result</h2>
          <p className="text-gray-600">{project.result}</p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {project.gallery.map((img, i) => (
            <img key={i} src={img} className="h-64 w-full object-cover rounded-xl" />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <Link href="/book" className="bg-[#E11D2E] text-white px-10 py-4 rounded-xl">
          Book Your Consultation
        </Link>
      </section>

    </main>
  );
}