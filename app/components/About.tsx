"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative section-spacing px-6 bg-white overflow-hidden"
    >

      {/* Background Glow */}
      <div className="blue-glow bg-blue-200 w-[300px] h-[300px] top-0 right-0"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[0.3em] text-blue-600 font-bold text-sm mb-6">
            Welcome To RICHEM
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
            A Christ-Centered Ministry
            For Spiritual Growth & Victorious Living
          </h2>

          <p className="text-soft text-lg mb-6">
            Riches In Christ Evangelical Mission (RICHEM)
            is a ministry devoted to raising believers through
            sound teaching, prayer, worship, evangelism,
            discipleship, and the transforming power of Jesus Christ.
          </p>

          <p className="text-soft text-lg mb-10">
            For over two decades, the ministry has remained committed
            to building lives, strengthening faith, and spreading the
            message of Christ through heartfelt service and spiritual impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">

            <div className="glass rounded-3xl p-6 flex-1 shadow-lg">

              <h3 className="text-4xl font-black text-blue-700 mb-2">
                25+
              </h3>

              <p className="text-slate-600 font-medium">
                Years of Ministry Impact
              </p>

            </div>

            <div className="glass rounded-3xl p-6 flex-1 shadow-lg">

              <h3 className="text-4xl font-black text-blue-700 mb-2">
                Christ
              </h3>

              <p className="text-slate-600 font-medium">
                Centered Worship & Revival
              </p>

            </div>

          </div>

        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >

          <div className="glass rounded-[2rem] p-10 shadow-2xl border border-blue-100">

            <div className="space-y-8">

              <div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Our Vision
                </h3>

                <p className="text-soft">
                  To raise believers who walk in spiritual maturity,
                  victorious living, and unwavering devotion to Christ.
                </p>

              </div>

              <div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Our Mission
                </h3>

                <p className="text-soft">
                  To spread the Gospel through worship, teaching,
                  prayer, discipleship, evangelism, and compassionate ministry.
                </p>

              </div>

              <div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Our Foundation
                </h3>

                <p className="text-soft">
                  “If God be for us, who can be against us?”
                  — Romans 8:31
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}