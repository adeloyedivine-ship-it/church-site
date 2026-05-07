"use client";

import { motion } from "framer-motion";

export default function Events() {
  return (
    <section
      id="events"
      className="relative py-28 px-6 bg-black text-white overflow-hidden"
    >

      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl top-10 left-1/2 -translate-x-1/2"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto bg-gradient-to-br from-blue-950/80 to-blue-700/30 border border-blue-400/20 rounded-[40px] p-10 md:p-16 backdrop-blur"
      >

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-blue-300 text-sm mb-6">
            Upcoming Special Event
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            25 Years Anniversary <br />
            & Cathedral Dedication
          </h2>

          <p className="text-blue-200 text-xl mb-8">
            Grace Overflowing
          </p>

          <p className="text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
            Join us for a powerful week of revival, thanksgiving,
            worship, celebration, and encounter as we celebrate
            25 years of God’s faithfulness and the dedication
            of the RICHEM Cathedral.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <p className="text-blue-300 text-sm mb-2">
              Date
            </p>

            <h3 className="text-2xl font-semibold">
              May 25 – 31, 2026
            </h3>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <p className="text-blue-300 text-sm mb-2">
              Venue
            </p>

            <h3 className="text-2xl font-semibold">
              RICHEM Cathedral, Akure
            </h3>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <p className="text-blue-300 text-sm mb-2">
              Host
            </p>

            <h3 className="text-2xl font-semibold">
              Pst. M.K Adeniyi
            </h3>
          </div>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <h3 className="text-3xl font-semibold mb-6 text-center">
            Event Schedule
          </h3>

          <div className="space-y-4 text-white/80">

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span>Mon – Fri Revival</span>
              <span>5PM</span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span>Saturday Anniversary & Dedication</span>
              <span>10AM</span>
            </div>

            <div className="flex justify-between">
              <span>Sunday Thanksgiving</span>
              <span>9AM</span>
            </div>

          </div>
        </div>

      </motion.div>
    </section>
  );
}