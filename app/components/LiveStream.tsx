"use client";

import { motion } from "framer-motion";

export default function LiveStream() {
  return (
    <section className="relative section-spacing px-6 bg-white overflow-hidden">

      {/* Glow */}
      <div className="blue-glow bg-blue-200 w-[400px] h-[400px] top-0 right-0"></div>

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-[3rem] p-10 md:p-20 shadow-2xl border border-blue-100 overflow-hidden relative"
        >

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

              <p className="uppercase tracking-[0.3em] text-blue-600 font-bold text-sm mb-6">
                Watch Online
              </p>

              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
                Join Our Services From Anywhere
              </h2>

              <p className="text-soft text-lg mb-10">
                Worship with us online, listen to powerful teachings,
                and stay connected to the ministry wherever you are.
              </p>

              <div className="flex flex-wrap gap-5">

                <a
                  href="https://www.facebook.com/richemworldwide"
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-5 rounded-full font-black shadow-xl shadow-blue-300/30"
                >
                  Watch On Facebook
                </a>

                <a
                  href="#sermons"
                  className="glass border border-blue-100 hover:border-blue-300 transition px-8 py-5 rounded-full font-black text-slate-900"
                >
                  Explore Teachings
                </a>

              </div>

            </div>

            {/* RIGHT */}
            <div className="relative">

              <div className="relative h-[350px] rounded-[2rem] overflow-hidden bg-gradient-to-br from-blue-600 to-sky-400 shadow-2xl">

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">

                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">

                      <div className="ml-2 w-0 h-0 border-t-[18px] border-t-transparent border-b-[18px] border-b-transparent border-l-[28px] border-l-blue-600"></div>

                    </div>

                  </div>

                </div>

                {/* Live Badge */}
                <div className="absolute top-6 left-6 bg-red-500 text-white px-5 py-2 rounded-full text-sm font-black shadow-lg animate-pulse">

                  LIVE

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}