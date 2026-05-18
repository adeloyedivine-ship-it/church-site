"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (

    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="flex items-center justify-between h-[88px]">

          {/* LEFT */}
          <Link
            href="/"
            className="flex items-center gap-3 flex-1 min-w-0"
          >

            {/* LOGO */}
            <div className="relative w-[52px] h-[52px] md:w-[60px] md:h-[60px] flex-shrink-0">

              <Image
                src="/images/logo.jpg"
                alt="RICHEM Logo"
                fill
                className="object-contain"
              />

            </div>

            {/* TEXT */}
            <div className="leading-tight min-w-0">

              <h1 className="font-black text-[13px] sm:text-[15px] md:text-[18px] text-blue-950 whitespace-nowrap">
                Riches In Christ
              </h1>

              <p className="text-[10px] sm:text-[12px] md:text-[13px] text-blue-700 whitespace-nowrap">
                Evangelical Mission
              </p>

            </div>

          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10 font-semibold text-blue-950">

            <a href="#home" className="hover:text-blue-700 transition">
              Home
            </a>

            <a href="#about" className="hover:text-blue-700 transition">
              About
            </a>

            <a href="#events" className="hover:text-blue-700 transition">
              Convention
            </a>

            <a href="#live" className="hover:text-blue-700 transition">
              Live
            </a>

            <a href="#contact" className="hover:text-blue-700 transition">
              Contact
            </a>

          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-blue-950 text-4xl ml-2"
          >

            {open ? <HiX /> : <HiMenu />}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (

        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">

          <div className="flex flex-col p-6 space-y-6 text-blue-950 font-semibold">

            <a href="#home" onClick={() => setOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>

            <a href="#events" onClick={() => setOpen(false)}>
              Convention
            </a>

            <a href="#live" onClick={() => setOpen(false)}>
              Live
            </a>

            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>

          </div>

        </div>

      )}

    </header>

  );
}