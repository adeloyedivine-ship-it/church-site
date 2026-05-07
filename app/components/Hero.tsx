"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-6 pt-28"
    >

      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-black to-black"></div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 blur-3xl rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/20 blur-3xl rounded-full"></div>

      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="uppercase tracking-[0.4em] text-blue-300 text-sm mb-6"
        >
          Riches In Christ Evangelical Mission
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-8"
        >
          Raising Believers <br />
          For Victorious Living
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          A Christ-centered evangelical ministry committed to worship,
          revival, spiritual growth, fellowship, discipleship,
          and the transforming power of God.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >

          <a
            href="#services"
            className="bg-blue-500 hover:bg-blue-400 transition px-8 py-4 rounded-full text-lg font-medium shadow-lg shadow-blue-500/30"
          >
            Worship With Us
          </a>

          <a
            href="#about"
            className="border border-white/20 hover:border-blue-300 hover:text-blue-300 transition px-8 py-4 rounded-full text-lg font-medium"
          >
            Learn More
          </a>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >

          <p className="text-blue-200 italic text-lg md:text-xl">
            “If God be for us, who can be against us?”
          </p>

          <p className="text-white/50 mt-3">
            Romans 8:31
          </p>

        </motion.div>

      </div>
    </section>
  );
}