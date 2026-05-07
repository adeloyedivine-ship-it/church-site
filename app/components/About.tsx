"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-gradient-to-b from-black to-blue-950 text-white overflow-hidden"
    >

      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl top-20 right-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[0.3em] text-blue-300 text-sm mb-4">
            About RICHEM
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            A Ministry Focused on Revival, Fellowship and Spiritual Growth
          </h2>

          <p className="text-white/70 leading-relaxed mb-6">
            Riches In Christ Evangelical Mission (RICHEM) is a Christ-centered
            evangelical ministry committed to raising believers who walk in
            spiritual maturity, stewardship, heartfelt service, and victorious living.
          </p>

          <p className="text-white/70 leading-relaxed">
            Through worship, sound teaching, prayer, evangelism, and fellowship,
            RICHEM continues to impact lives with the transforming power of God
            while revealing the riches and treasures found in Christ Jesus.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">
              Our Vision
            </h3>

            <p className="text-white/70 leading-relaxed">
              To raise spiritually mature believers who manifest the life,
              victory, and riches of Christ in every area of life.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">
              Our Mission
            </h3>

            <p className="text-white/70 leading-relaxed">
              To proclaim the Gospel of Jesus Christ through worship,
              discipleship, prayer, evangelism, fellowship, and impactful ministry.
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-400/20 rounded-3xl p-8">
            <p className="text-blue-200 text-lg italic leading-relaxed">
              “If God be for us, who can be against us?”
            </p>

            <p className="text-white/50 mt-4">
              Romans 8:31
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}