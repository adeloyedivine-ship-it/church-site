"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const sermons = [
  {
    title: "Reaping What You Sow",
    description:
      "A powerful teaching on spiritual seeds, stewardship, and divine harvest.",
    link: "https://www.facebook.com/groups/richem/permalink/2004041723533452/?mibextid=rS40aB7S9Ucbxw6v",
  },
  {
    title: "The Breath of God",
    description:
      "Encounter the life-giving power and presence of God through this impactful message.",
    link: "https://www.facebook.com/richemworldwide/videos/2512444465840157/",
  },
];

export default function Sermons() {
  return (
    <section
      id="sermons"
      className="relative py-28 px-6 bg-gradient-to-b from-blue-950 to-black text-white overflow-hidden"
    >

      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-blue-500 blur-3xl rounded-full top-10 left-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="uppercase tracking-[0.3em] text-blue-300 text-sm mb-4">
            Featured Teachings
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Messages That Transform Lives
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            Experience life-transforming teachings, spiritual insight,
            and powerful messages centered on Christ and victorious living.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {sermons.map((sermon, index) => (
            <motion.a
              key={index}
              href={sermon.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur hover:border-blue-400 transition duration-300"
            >

              <div className="flex items-center gap-3 mb-6 text-blue-300">
                <PlayCircle size={32} />
                <span className="uppercase tracking-widest text-sm">
                  Watch Teaching
                </span>
              </div>

              <h3 className="text-3xl font-semibold mb-4 group-hover:text-blue-300 transition">
                {sermon.title}
              </h3>

              <p className="text-white/70 leading-relaxed">
                {sermon.description}
              </p>

            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}