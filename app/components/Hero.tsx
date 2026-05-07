"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-24 relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-950 via-blue-900 to-black text-white overflow-hidden px-6">

      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-blue-300 rounded-full blur-3xl bottom-10 right-10"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl text-center"
      >

        <p className="uppercase tracking-[0.3em] text-blue-300 text-sm mb-6">
          Welcome to RICHEM
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Riches In Christ <br />
          Evangelical Mission
        </h1>

        <p className="text-xl md:text-2xl text-blue-200 italic mb-4">
          “If God be for us, who can be against us?”
        </p>

        <p className="text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          A place of worship, revival, fellowship, spiritual growth,
          and victorious living through the riches of Christ.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="#services"
            className="bg-blue-500 hover:bg-blue-400 transition px-8 py-4 rounded-full text-white font-semibold"
          >
            Explore Services
          </a>

          <a
            href="#contact"
            className="border border-white/20 hover:border-blue-400 transition px-8 py-4 rounded-full text-white font-semibold"
          >
            Contact Us
          </a>

        </div>

      </motion.div>
    </section>
  );
}