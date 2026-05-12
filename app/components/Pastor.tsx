"use client";

import { motion } from "framer-motion";

export default function Pastor() {
  return (
    <section className="relative section-spacing px-6 bg-gradient-to-b from-white to-blue-50 overflow-hidden">

      {/* Glow */}
      <div className="blue-glow bg-blue-200 w-[350px] h-[350px] top-0 left-0"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[0.3em] text-blue-600 font-bold text-sm mb-6">
            Leadership
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
            Welcome From <br />
            Pastor M.K. Adeniyi
          </h2>

          <p className="text-soft text-lg mb-6">
            Welcome to Riches In Christ Evangelical Mission.
            We are delighted to have you connect with us.
          </p>

          <p className="text-soft text-lg mb-6">
            Our prayer is that through worship,
            sound teaching, prayer, and fellowship,
            your life will continually experience
            God’s transforming power and victorious grace.
          </p>

          <p className="text-soft text-lg mb-10">
            We believe that if God be for us,
            no challenge can stand against us.
          </p>

          <div className="glass rounded-3xl p-6 inline-block shadow-lg">

            <p className="text-blue-700 font-black text-xl">
              “If God be for us, who can be against us?”
            </p>

            <p className="text-slate-500 mt-2">
              Romans 8:31
            </p>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >

          <div className="relative glass rounded-[2.5rem] p-10 shadow-2xl border border-blue-100">

            <div className="w-[320px] h-[420px] rounded-[2rem] bg-gradient-to-b from-blue-100 to-sky-50 flex items-center justify-center">

              <div className="text-center px-6">

                <div className="w-28 h-28 rounded-full bg-blue-600 mx-auto mb-8 flex items-center justify-center shadow-xl">

                  <span className="text-white text-5xl font-black">
                    P
                  </span>

                </div>

                <h3 className="text-3xl font-black text-slate-900 mb-4">
                  Pastor M.K. Adeniyi
                </h3>

                <p className="text-slate-500 text-lg">
                  Senior Pastor
                </p>

                <p className="text-blue-600 font-semibold mt-6">
                  RICHEM Worldwide
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}