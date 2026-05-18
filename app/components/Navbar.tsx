"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (

    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-[90px]">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-4"
          >

            <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-md">

              <Image
                src="/images/logo.jpg"
                alt="RICHEM"
                fill
                className="object-cover"
              />

            </div>

            <div className="leading-tight">

              <h2 className="text-xl md:text-2xl font-black text-blue-950">
                RICHEM
              </h2>

              <p className="text-xs md:text-sm text-gray-500">
                Raising Believers For Victorious Living
              </p>

            </div>

          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-10">

            <a
              href="#about"
              className="text-gray-700 hover:text-blue-700 transition font-medium"
            >
              About
            </a>

            <a
              href="#live"
              className="text-gray-700 hover:text-blue-700 transition font-medium"
            >
              Live
            </a>

            <a
              href="#events"
              className="text-gray-700 hover:text-blue-700 transition font-medium"
            >
              Convention
            </a>

            <a
              href="#gallery"
              className="text-gray-700 hover:text-blue-700 transition font-medium"
            >
              Gallery
            </a>

            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-700 transition font-medium"
            >
              Contact
            </a>

          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >

            {open ? (
              <X size={32} className="text-blue-950" />
            ) : (
              <Menu size={32} className="text-blue-950" />
            )}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (

        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">

          <div className="flex flex-col px-6 py-8 gap-6">

            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="text-lg font-semibold text-gray-700"
            >
              About
            </a>

            <a
              href="#live"
              onClick={() => setOpen(false)}
              className="text-lg font-semibold text-gray-700"
            >
              Live
            </a>

            <a
              href="#events"
              onClick={() => setOpen(false)}
              className="text-lg font-semibold text-gray-700"
            >
              Convention
            </a>

            <a
              href="#gallery"
              onClick={() => setOpen(false)}
              className="text-lg font-semibold text-gray-700"
            >
              Gallery
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-lg font-semibold text-gray-700"
            >
              Contact
            </a>

          </div>

        </div>

      )}

    </header>

  );
}