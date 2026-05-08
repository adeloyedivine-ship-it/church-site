"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 px-6">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-100"></div>

      {/* Glow Effects */}
      <div className="blue-glow bg-blue-300 w-[300px] h-[300px] top-10 left-10"></div>

      <div className="blue-glow bg-sky-200 w-[400px] h-[400px] bottom-0 right-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="uppercase tracking-[0.3em] text-blue-600 text-sm font-semibold mb-6"
          >
            Celebrating 25 Years of God’s Faithfulness
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="heading-primary text-slate-900 mb-8"
          >
            Raising Believers <br />
            For Victorious Living
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-soft text-lg md:text-xl max-w-2xl mb-10"
          >
            Riches In Christ Evangelical Mission is a Christ-centered
            ministry committed to worship, revival, spiritual growth,
            evangelism, discipleship, and the transforming power of God.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5"
          >

            <a
              href="#services"
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-300/40 text-center"
            >
              Worship With Us
            </a>

            <a
              href="#events"
              className="glass px-8 py-4 rounded-full text-slate-800 font-semibold text-center hover:bg-white/90 transition"
            >
              Anniversary Events
            </a>

          </motion.div>

          {/* Anniversary Counter Style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-16 glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-xl"
          >

            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-700">
                25
              </h3>

              <p className="text-slate-500 mt-2">
                Years
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-700">
                2026
              </h3>

              <p className="text-slate-500 mt-2">
                Anniversary
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-700">
                7
              </h3>

              <p className="text-slate-500 mt-2">
                Days Revival
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-700">
                Glory
              </h3>

              <p className="text-slate-500 mt-2">
                Overflowing
              </p>
            </div>

          </motion.div>

        </div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 bg-blue-300 blur-3xl opacity-30 rounded-full"></div>

            <img
              src="/images/logo.jpeg"
              alt="RICHEM Logo"
              className="relative z-10 w-full max-w-[520px] object-contain drop-shadow-2xl"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}