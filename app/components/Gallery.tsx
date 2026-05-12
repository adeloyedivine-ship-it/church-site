"use client";

import { motion } from "framer-motion";

const gallery = [
  {
    title: "Worship Atmosphere",
  },

  {
    title: "Prayer & Revival",
  },

  {
    title: "Congregation Fellowship",
  },

  {
    title: "Anniversary Celebration",
  },
];

export default function Gallery() {
  return (
    <section className="relative section-spacing px-6 bg-gradient-to-b from-blue-50 to-white overflow-hidden">

      {/* Glow */}
      <div className="blue-glow bg-blue-200 w-[400px] h-[400px] bottom-0 right-0"></div>

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
            Gallery
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
            Moments Of Worship, Revival & Fellowship
          </h2>

          <p className="text-soft text-lg md:text-xl">
            Experience glimpses of worship,
            fellowship, revival meetings,
            and moments from the RICHEM family.
          </p>

        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {gallery.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border border-blue-100"
            >

              <div className="h-[320px] bg-gradient-to-br from-blue-100 via-sky-50 to-white flex items-center justify-center">

                <div className="text-center px-6">

                  <div className="w-24 h-24 rounded-full bg-blue-600 mx-auto mb-8 flex items-center justify-center shadow-xl">

                    <span className="text-white text-4xl">
                      ✦
                    </span>

                  </div>

                  <h3 className="text-3xl font-black text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 mt-4">
                    Real ministry images will appear here.
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}