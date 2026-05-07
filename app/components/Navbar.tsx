"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 text-white">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-bold tracking-wide text-blue-300">
            RICHEM
          </h1>

          <p className="text-xs text-white/60 hidden md:block">
            Riches In Christ Evangelical Mission
          </p>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium">

          <a href="#" className="hover:text-blue-300 transition">
            Home
          </a>

          <a href="#services" className="hover:text-blue-300 transition">
            Services
          </a>

          <a href="#about" className="hover:text-blue-300 transition">
            About
          </a>

          <a href="#contact" className="hover:text-blue-300 transition">
            Contact
          </a>

        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-6 flex flex-col gap-6 text-lg">

          <a
            href="#"
            onClick={() => setOpen(false)}
            className="hover:text-blue-300 transition"
          >
            Home
          </a>

          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="hover:text-blue-300 transition"
          >
            Services
          </a>

          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="hover:text-blue-300 transition"
          >
            About
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="hover:text-blue-300 transition"
          >
            Contact
          </a>

        </div>
      )}
    </nav>
  );
}