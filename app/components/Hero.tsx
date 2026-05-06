"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 py-24 bg-gradient-to-br from-blue-900 to-black text-white px-6"
    >
      <div className="max-w-5xl mx-auto text-center">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Welcome to Grace Church
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white/80 mb-8"
        >
          A place of worship, growth, and encounter with God
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#sermons"
          className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium"
        >
          Watch Sermons
        </motion.a>

      </div>
    </section>
  );
}