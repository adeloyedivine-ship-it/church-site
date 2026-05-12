"use client";

import { motion } from "framer-motion";

export default function Events() {
  return (
    <section
      id="events"
      className="relative section-spacing px-6 bg-white overflow-hidden"
    >

      {/* Glow */}
      <div className="blue-glow bg-sky-200 w-[400px] h-[400px] top-0 right-0"></div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >

          <p className="uppercase tracking-[0.3em] text-blue-600 font-bold text-sm mb-6">
            Anniversary Celebration
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
            25 Years Anniversary & Cathedral Dedication
          </h2>

          <p className="text-soft text-lg md:text-xl">
            Join us for a powerful week of revival,
            thanksgiving, worship, celebration,
            and encounters with God’s overflowing grace.
          </p>

        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="glass rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-blue-100"
        >

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-block bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-black mb-8">
                MAY 25TH – 31ST, 2026
              </div>

              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
                Grace Overflowing
              </h3>

              <p className="text-soft text-lg mb-10">
                Celebrate 25 years of ministry impact,
                revival, worship, and victorious living
                at RICHEM Cathedral, Akure.
              </p>

              <div className="space-y-6">

                <div className="flex gap-4">

                  <div className="w-4 h-4 rounded-full bg-blue-600 mt-2"></div>

                  <div>
                    <h4 className="font-black text-slate-900">
                      Revival Services
                    </h4>

                    <p className="text-soft">
                      Monday – Friday | 5PM Daily
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-4 h-4 rounded-full bg-blue-600 mt-2"></div>

                  <div>
                    <h4 className="font-black text-slate-900">
                      Anniversary & Cathedral Dedication
                    </h4>

                    <p className="text-soft">
                      Saturday | 10AM
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-4 h-4 rounded-full bg-blue-600 mt-2"></div>

                  <div>
                    <h4 className="font-black text-slate-900">
                      Thanksgiving Service
                    </h4>

                    <p className="text-soft">
                      Sunday | 9AM
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-6">

              <div className="glass rounded-3xl p-8 text-center shadow-lg">

                <h2 className="text-5xl font-black text-blue-700 mb-4">
                  25
                </h2>

                <p className="text-slate-600 font-medium">
                  Years
                </p>

              </div>

              <div className="glass rounded-3xl p-8 text-center shadow-lg">

                <h2 className="text-5xl font-black text-blue-700 mb-4">
                  7
                </h2>

                <p className="text-slate-600 font-medium">
                  Days
                </p>

              </div>

              <div className="glass rounded-3xl p-8 text-center shadow-lg">

                <h2 className="text-5xl font-black text-blue-700 mb-4">
                  5PM
                </h2>

                <p className="text-slate-600 font-medium">
                  Revival Time
                </p>

              </div>

              <div className="glass rounded-3xl p-8 text-center shadow-lg">

                <h2 className="text-5xl font-black text-blue-700 mb-4">
                  Glory
                </h2>

                <p className="text-slate-600 font-medium">
                  Overflowing
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}