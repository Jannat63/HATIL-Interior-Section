"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 relative z-50">
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

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-[#1F1F1F]">
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

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>

      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
  <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-6 py-6 space-y-5">

    <Link
      href="/"
      onClick={() => setOpen(false)}
      className="block text-lg font-medium text-[#1F1F1F] hover:text-[#E11D2E] transition"
    >
      Home
    </Link>

    <Link
      href="/projects"
      onClick={() => setOpen(false)}
      className="block text-lg font-medium text-[#1F1F1F] hover:text-[#E11D2E] transition"
    >
      Projects
    </Link>

    <Link
      href="/services"
      onClick={() => setOpen(false)}
      className="block text-lg font-medium text-[#1F1F1F] hover:text-[#E11D2E] transition"
    >
      Services
    </Link>

    <Link
      href="/book"
      onClick={() => setOpen(false)}
      className="block bg-[#E11D2E] text-white px-5 py-3 rounded-xl text-center font-semibold mt-6 shadow-md hover:bg-red-700 transition"
    >
      Book Consultation
    </Link>

  </div>
)}
    </header>
  );
}