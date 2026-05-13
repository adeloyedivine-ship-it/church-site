"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-5">

      <div className="max-w-7xl mx-auto">

        <div className="backdrop-blur-xl bg-white/80 border border-blue-100 shadow-xl rounded-full px-8 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center">

              <Image
                src="/images/logo.jpg"
                alt="RICHEM Logo"
                width={56}
                height={56}
                className="object-contain"
              />

            </div>

            <div>

              <h1 className="font-black text-slate-900 text-lg leading-tight">
                RICHEM Worldwide
              </h1>

              <p className="text-blue-600 text-sm">
                Raising Believers
              </p>

            </div>

          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">

            <a href="#about" className="font-semibold text-slate-700 hover:text-blue-600 transition">
              About
            </a>

            <a href="#gallery" className="font-semibold text-slate-700 hover:text-blue-600 transition">
              Gallery
            </a>

            <a href="#events" className="font-semibold text-slate-700 hover:text-blue-600 transition">
              Events
            </a>

            <a href="#contact" className="font-semibold text-slate-700 hover:text-blue-600 transition">
              Contact
            </a>

            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-full font-bold"
            >
              Join Us
            </a>

          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-slate-900"
          >

            {open ? <X size={30} /> : <Menu size={30} />}

          </button>

        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden mt-4 bg-white rounded-3xl shadow-2xl border border-blue-100 p-8 flex flex-col gap-6">

            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>

            <a href="#gallery" onClick={() => setOpen(false)}>
              Gallery
            </a>

            <a href="#events" onClick={() => setOpen(false)}>
              Events
            </a>

            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>

            <a
              href="#contact"
              className="bg-blue-600 text-white text-center py-3 rounded-full font-bold"
            >
              Join Us
            </a>

          </div>
        )}

      </div>

    </header>
  );
}