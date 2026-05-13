"use client";

import { motion } from "framer-motion";

export default function Location() {
  return (
    <section className="relative section-spacing px-6 bg-gradient-to-b from-blue-50 to-white overflow-hidden">

      {/* Glow */}
      <div className="blue-glow bg-blue-200 w-[350px] h-[350px] top-0 left-0"></div>

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
            Our Location
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
            Worship With Us In Akure
          </h2>

          <p className="text-soft text-lg md:text-xl">
            We welcome you to experience worship,
            fellowship, revival, and God’s transforming presence
            at RICHEM Cathedral.
          </p>

        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-[2.5rem] p-10 shadow-2xl border border-blue-100"
          >

            <h3 className="text-3xl font-black text-slate-900 mb-10">
              Church Address
            </h3>

            <div className="space-y-8">

              <div>

                <p className="text-blue-600 uppercase tracking-widest font-black text-sm mb-3">
                  Headquarters
                </p>

                <p className="text-soft text-lg leading-relaxed">
                  3A Joseph Ade-Ojo Street,
                  Abusoro, Ijoka,
                  Akure, Ondo State,
                  Nigeria.
                </p>

              </div>

              <div>

                <p className="text-blue-600 uppercase tracking-widest font-black text-sm mb-3">
                  Worship Schedule
                </p>

                <div className="space-y-3 text-soft text-lg">

                  <p>Sunday Worship — 9AM</p>

                  <p>Monday Evangelism — 5PM</p>

                  <p>Tuesday Bible Study — 5PM</p>

                  <p>Wednesday Counselling — 12PM</p>

                  <p>Thursday Prayer Meeting — 5PM</p>

                </div>

              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-5 rounded-full font-black shadow-xl shadow-blue-300/30"
              >
                Open In Google Maps
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="overflow-hidden rounded-[2.5rem] shadow-2xl border border-blue-100 h-[500px]">

              <iframe
                src="https://www.google.com/maps?q=Akure,+Ondo+State&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
              ></iframe>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}