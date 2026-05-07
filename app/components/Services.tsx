"use client";

import { motion } from "framer-motion";
import {
  Church,
  Megaphone,
  BookOpen,
  HeartHandshake,
  Flame,
} from "lucide-react";

const services = [
  {
    title: "Sunday Worship Experience",
    time: "9AM – 12PM",
    desc: "Sunday School (9–10AM) and Worship Service (10AM–12PM).",
    icon: Church,
  },
  {
    title: "Evangelism & Visitation",
    time: "Mondays • 5PM",
    desc: "Reaching lives with the Gospel and sharing the love of Christ.",
    icon: Megaphone,
  },
  {
    title: "Bible Study",
    time: "Tuesdays • 5PM",
    desc: "Deep teachings, spiritual growth, and fellowship in Christ.",
    icon: BookOpen,
  },
  {
    title: "Counselling & Deliverance",
    time: "Wednesdays • 12PM – 3PM",
    desc: "Prayer, counselling, healing, and spiritual guidance.",
    icon: HeartHandshake,
  },
  {
    title: "Prayer Meeting",
    time: "Thursdays • 5PM",
    desc: "A powerful time of prayer, worship, and encounter with God.",
    icon: Flame,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 px-6 bg-black text-white overflow-hidden"
    >

      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-blue-500 blur-3xl rounded-full top-20 left-10"></div>
        <div className="absolute w-96 h-96 bg-blue-300 blur-3xl rounded-full bottom-10 right-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="sticky top-28"
        >

          <p className="uppercase tracking-[0.3em] text-blue-300 text-sm mb-4">
            Worship Experience
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Gather, Grow <br /> and Encounter God
          </h2>

          <p className="text-white/70 leading-relaxed text-lg">
            At Riches In Christ Evangelical Mission (RICHEM),
            every gathering is an opportunity for spiritual growth,
            fellowship, revival, healing, and encounter with God.
          </p>

        </motion.div>

        <div className="relative border-l border-white/10 pl-10 space-y-12">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >

                <div className="absolute -left-[52px] top-2 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/40">
                  <Icon size={20} />
                </div>

                <div className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-6 hover:border-blue-400 transition duration-300">

                  <p className="text-blue-300 text-sm mb-2">
                    {service.time}
                  </p>

                  <h3 className="text-2xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-white/70 leading-relaxed">
                    {service.desc}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}