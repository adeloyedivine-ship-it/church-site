"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Sunday Worship Experience",
    time: "9:00AM – 12:00PM",
    details:
      "Sunday School (9AM – 10AM) followed by Worship Service (10AM – 12PM).",
  },

  {
    title: "Monday Evangelism & Visitation",
    time: "5:00PM",
    details:
      "Reaching souls and strengthening believers through outreach and visitation.",
  },

  {
    title: "Tuesday Bible Study",
    time: "5:00PM",
    details:
      "Deep scriptural teaching, spiritual growth, and practical Christian living.",
  },

  {
    title: "Wednesday Counselling & Deliverance",
    time: "12:00PM – 3:00PM",
    details:
      "Prayer, counselling, healing, and deliverance sessions for spiritual restoration.",
  },

  {
    title: "Thursday Prayer Meeting",
    time: "5:00PM",
    details:
      "A powerful atmosphere of intercession, worship, and revival prayers.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative section-spacing px-6 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
    >

      <div className="blue-glow bg-blue-200 w-[350px] h-[350px] top-20 left-0"></div>

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >

          <p className="uppercase tracking-[0.3em] text-blue-600 font-bold text-sm mb-6">
            Worship Experience
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
            Gather, Grow & Encounter God
          </h2>

          <p className="text-soft text-lg md:text-xl">
            Join us weekly for worship, prayer, revival,
            Bible study, discipleship, evangelism,
            and spiritual transformation.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-[2rem] p-8 shadow-xl border border-blue-100 hover:-translate-y-2 transition duration-300"
            >

              <div className="flex items-center justify-between flex-wrap gap-4 mb-6">

                <h3 className="text-2xl font-black text-slate-900">
                  {service.title}
                </h3>

                <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-bold">
                  {service.time}
                </span>

              </div>

              <p className="text-soft text-lg">
                {service.details}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}