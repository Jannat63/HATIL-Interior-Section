import Hero from "@/sections/Hero";
import Trust from "@/sections/Trust";
import Services from "@/sections/Services";
import FeaturedProjects from "@/sections/FeaturedProjects";
import CaseStudy from "@/sections/CaseStudy";
import Process from "@/sections/Process";
import WhyChoose from "@/sections/WhyChoose";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Trust />
      <Services />
      <FeaturedProjects />
      <CaseStudy />
      <Process />
      <WhyChoose />
      <CTA />
    </main>
  );
}