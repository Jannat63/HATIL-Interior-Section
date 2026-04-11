"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-200 relative z-50">

      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/hatil-logo.svg"
            alt="HATIL"
            width={120}
            height={40}
            className="w-[130px] h-auto"
          />
        </Link>

        {/* MAIN MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#1F1F1F]">

          <Link href="#">Living Room</Link>
          <Link href="#">Bedroom</Link>
          <Link href="#">Dining</Link>
          <Link href="#">Kitchen</Link>
          <Link href="#">Kid's Room</Link>
          <Link href="#">SmartFit</Link>
          <Link href="#">Institutional</Link>
          <Link href="#">Door</Link>

          {/* INTERIOR (HATIL STYLE DROPDOWN) */}
          <div className="relative group">
            <button className="hover:text-[#E11D2E]">
              Interior
            </button>

            {/* DROPDOWN */}
            <div className="absolute left-0 top-full w-56 bg-white shadow-lg border border-gray-100 rounded-md p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

              <Link
                href="/projects"
                className="block py-2 hover:text-[#E11D2E] transition"
              >
                Projects
              </Link>

              <Link
                href="/services"
                className="block py-2 hover:text-[#E11D2E] transition"
              >
                Services
              </Link>

              <Link
                href="/book"
                className="block mt-3 bg-[#E11D2E] text-white px-4 py-2 rounded-md text-center hover:bg-red-700 transition"
              >
                Book Consultation
              </Link>

            </div>
          </div>

          <Link href="#">Office</Link>

          {/* MORE */}
          <div className="relative group">
            <button>More ▾</button>
          </div>

        </nav>

        {/* RIGHT SIDE ICONS */}
        <div className="hidden md:flex items-center gap-5 text-lg">
          <span className="cursor-pointer">🔍</span>
          <span className="cursor-pointer">🛒</span>
          <span className="cursor-pointer">👤</span>
        </div>

      </div>
    </header>
  );
}