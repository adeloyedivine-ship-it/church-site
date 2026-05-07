"use client";

import { motion } from "framer-motion";
import {
  Church,
  BookOpen,
  Megaphone,
  HeartHandshake,
  Flame,
} from "lucide-react";

const services = [
  {
    title: "Sunday Worship",
    time: "Sundays • 9AM – 12PM",
    desc: "Sunday School (9–10AM) and Worship Service (10AM–12PM).",
    icon: Church,
  },
  {
    title: "Bible Study",
    time: "Tuesdays • 5PM",
    desc: "Deep teachings, spiritual growth, and fellowship in Christ.",
    icon: BookOpen,
  },
  {
    title: "Evangelism & Visitation",
    time: "Mondays • 5PM",
    desc: "Reaching lives with the Gospel and sharing the love of Christ.",
    icon: Megaphone,
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
      className="py-24 px-6 bg-gradient-to-b from-blue-950 to-black text-white"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Worship & Fellowship
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto">
            Join the family of God at RICHEM as we grow in grace,
            fellowship, worship, and the knowledge of Christ.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur hover:border-blue-400 transition"
              >
                <div className="bg-blue-500/20 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-blue-300" size={28} />
                </div>

                <h3 className="text-2xl font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-blue-300 text-sm mb-4">
                  {service.time}
                </p>

                <p className="text-white/70 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}