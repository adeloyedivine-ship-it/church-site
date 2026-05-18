"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Live() {
  return (
    <section id="live" className="py-24 bg-white overflow-hidden">

      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="relative rounded-[32px] overflow-hidden shadow-2xl min-h-[520px]">

            {/* BACKGROUND IMAGE */}
            <Image
              src="/images/live.jpg"
              alt="Live Service"
              fill
              className="object-cover"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/55"></div>

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-16 text-white">

              <div className="max-w-2xl">

                <p className="uppercase tracking-[0.3em] text-sm text-red-300 mb-4">
                  Live Broadcast
                </p>

                <h2 className="text-4xl md:text-6xl font-black leading-tight">
                  Worship With Us Live
                </h2>

                <p className="mt-6 text-white/80 text-lg leading-relaxed">
                  Experience worship, prayer, teachings and revival moments live from Riches In Christ Evangelical Mission.
                </p>

                {/* BUTTON */}
                <a
                  href="https://web.facebook.com/share/v/1CyoMSZ3kG/"
                  target="_blank"
                  className="inline-flex items-center gap-3 mt-10 bg-red-600 hover:bg-red-700 transition-all duration-300 px-8 py-4 rounded-full font-bold shadow-2xl"
                >

                  <span className="text-xl">▶</span>

                  Watch Live Now

                </a>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}