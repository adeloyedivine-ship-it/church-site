"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Pastor() {
  return (
    <section id="about" className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/pastor.jpg"
              alt="pastor"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* TEXT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-lg border"
        >

          <p className="text-blue-600 font-bold tracking-widest uppercase text-sm">
            Leadership
          </p>

          <h2 className="text-4xl font-black mt-4">
            Pastor M.K. Adeniyi
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            A servant of God committed to raising believers grounded in truth,
            prayer and victorious living.
          </p>

        </motion.div>

      </div>
    </section>
  );
}