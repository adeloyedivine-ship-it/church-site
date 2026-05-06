"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-blue-900 to-black text-white px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Grace Church
        </h1>

        <p className="text-lg text-white/80 mb-6">
          A place of worship, growth, and encounter with God
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#sermons"
          className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium"
        >
          Watch Sermons
        </motion.a>
      </motion.div>
    </section>
  );
}