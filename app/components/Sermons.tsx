"use client";

import { motion } from "framer-motion";

const sermons = [
  {
    title: "Reaping What You Sow",
    description:
      "A timely message on spiritual seeds, obedience, and the harvest that follows faithful living.",
    link: "https://www.facebook.com/groups/richem/permalink/2004041723533452/?mibextid=rS40aB7S9Ucbxw6v",
  },

  {
    title: "The Breath of GOD",
    description:
      "A powerful teaching on spiritual life, revival, and the transforming power of God’s breath.",
    link: "https://www.facebook.com/richemworldwide/videos/2512444465840157/",
  },

  {
    title: "Victorious Living",
    description:
      "Learn how believers can walk daily in faith, authority, victory, and spiritual maturity.",
    link: "#",
  },
];

export default function Sermons() {
  return (
    <section
      id="sermons"
      className="relative section-spacing px-6 bg-white overflow-hidden"
    >

      {/* Glow */}
      <div className="blue-glow bg-blue-200 w-[350px] h-[350px] top-0 right-0"></div>

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
            Featured Teachings
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
            Messages That Transform Lives
          </h2>

          <p className="text-soft text-lg md:text-xl">
            Explore life-transforming teachings, sermons,
            and messages designed to strengthen your walk with God.
          </p>

        </motion.div>

        {/* Sermons Grid */}
        <div className="grid lg:grid-cols-3 gap-10">

          {sermons.map((sermon, index) => (
            <motion.div
              key={sermon.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-[2rem] p-8 shadow-xl border border-blue-100 flex flex-col"
            >

              <div className="mb-6">

                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">

                  <span className="text-blue-700 text-3xl font-black">
                    ✦
                  </span>

                </div>

                <h3 className="text-3xl font-black text-slate-900 mb-5 leading-tight">
                  {sermon.title}
                </h3>

                <p className="text-soft text-lg">
                  {sermon.description}
                </p>

              </div>

              <div className="mt-auto pt-8">

                <a
                  href={sermon.link}
                  target="_blank"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-300/30"
                >
                  Watch Message
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}