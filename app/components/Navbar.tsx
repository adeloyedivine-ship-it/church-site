"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Worship", href: "#services" },
  { name: "Teachings", href: "#sermons" },
  { name: "Events", href: "#events" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/90 border-b border-blue-100 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <a
          href="#"
          className="flex items-center gap-4"
        >

          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center shadow-lg">

            <span className="text-white font-black text-2xl">
              R
            </span>

          </div>

          <div>

            <h1 className="text-2xl md:text-3xl font-black text-blue-700 leading-tight">
              RICHEM
            </h1>

            <p className="text-sm text-slate-600 leading-tight">
              Riches In Christ Evangelical Mission
            </p>

          </div>

        </a>

        <nav className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-700 hover:text-blue-600 transition font-semibold"
            >
              {link.name}
            </a>
          ))}

        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-700"
        >

          {isOpen ? <X size={30} /> : <Menu size={30} />}

        </button>

      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 px-6 py-6 space-y-5 shadow-xl">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 hover:text-blue-600 transition text-lg font-medium"
            >
              {link.name}
            </a>
          ))}

        </div>
      )}

    </header>
  );
}