"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SermonSection() {

  return (

    <section
      id="sermons"
      className="py-24 px-6 bg-slate-900"
    >

      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="uppercase tracking-[0.3em] text-blue-400 text-sm font-black mb-4">

            Sermons

          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white">

            Messages That Transform Lives

          </h2>

        </motion.div>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 overflow-hidden rounded-[2rem] bg-slate-950 border border-white/5"
        >

          {/* IMAGE */}
          <div className="relative min-h-[400px]">

            <Image
              src="/images/church.jpg"
              alt="Sermon"
              fill
              sizes="50vw"
              className="object-cover"
            />

          </div>

          {/* CONTENT */}
          <div className="p-10 md:p-14 flex flex-col justify-center">

            <p className="uppercase tracking-[0.3em] text-blue-400 text-sm font-black mb-5">

              Featured Message

            </p>

            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-6">

              Walking In Divine Victory

            </h3>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">

              Discover powerful biblical truths that strengthen faith,
              build spiritual confidence,
              and empower believers for victorious living in Christ.

            </p>

            <a
              href="https://facebook.com/groups/richem/"
              target="_blank"
              className="inline-flex w-fit items-center gap-3 bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-full text-white font-black"
            >

              Listen Now →

            </a>

          </div>

        </motion.div>

      </div>

    </section>

  );
}