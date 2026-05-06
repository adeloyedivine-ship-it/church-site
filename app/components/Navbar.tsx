"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      
      <div className="flex justify-between items-center px-6 py-4">
        
        <h1 className="text-xl font-bold text-blue-700">
          Grace Church
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#sermons" className="hover:text-blue-600">Sermons</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-sm font-medium bg-white">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#sermons">Sermons</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}