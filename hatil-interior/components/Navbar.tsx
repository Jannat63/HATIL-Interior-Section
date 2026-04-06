import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/">
          <Image
  src="/hatil-logo.svg"
  alt="HATIL"
  width={120}
  height={40}
  className="w-[140px] h-auto"
/>
        </Link>

        {/* NAV */}
        <nav className="flex items-center gap-6 text-sm text-[#1F1F1F]">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/services">Services</Link>

          <Link
            href="/book"
            className="bg-[#E11D2E] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Book Consultation
          </Link>
        </nav>

      </div>
    </header>
  );
}