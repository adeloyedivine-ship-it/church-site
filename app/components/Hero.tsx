"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">

      {/* IMAGE BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/images/church.jpg"
          alt="church"
          fill
          priority
          className="object-cover"
        />

        {/* SOFT BLUE OVERLAY ONLY */}
        <div className="absolute inset-0 bg-blue-950/60"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-4xl px-6">

        <p className="text-blue-200 tracking-[0.3em] uppercase text-sm mb-6">
          Riches In Christ Evangelical Mission
        </p>

        <h1 className="text-white text-5xl md:text-7xl font-black leading-tight">
          Raising Believers
          <br />
          <span className="text-blue-300">For Victorious Living</span>
        </h1>

        <p className="text-white/80 mt-6 text-lg">
          Worship • Word • Prayer • Revival • Impact
        </p>

        <div className="flex gap-4 justify-center mt-10 flex-wrap">

          <a href="#about" className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold">
            Explore
          </a>

          <a href="#live" className="border border-white text-white px-8 py-3 rounded-full font-bold">
            Watch Live
          </a>

        </div>

      </div>
    </section>
  );
}