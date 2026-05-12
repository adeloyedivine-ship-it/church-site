"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative section-spacing px-6 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
    >

      {/* Glow */}
      <div className="blue-glow bg-blue-200 w-[350px] h-[350px] bottom-0 left-0"></div>

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
            Connect With Us
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
            We Would Love To Welcome You
          </h2>

          <p className="text-soft text-lg md:text-xl">
            Whether you are visiting for the first time,
            seeking prayer, or looking for a place of worship,
            we are excited to connect with you.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-[2rem] p-10 shadow-2xl border border-blue-100"
          >

            <h3 className="text-3xl font-black text-slate-900 mb-10">
              Church Information
            </h3>

            <div className="space-y-8">

              <div>
                <p className="text-blue-600 font-black uppercase tracking-widest text-sm mb-2">
                  Address
                </p>

                <p className="text-soft text-lg">
                  3A Joseph Ade-Ojo Street,
                  Abusoro, Ijoka,
                  Akure, Ondo State,
                  Nigeria.
                </p>
              </div>

              <div>
                <p className="text-blue-600 font-black uppercase tracking-widest text-sm mb-2">
                  Worship Times
                </p>

                <p className="text-soft text-lg">
                  Sundays: 9AM – 12PM
                </p>

                <p className="text-soft text-lg">
                  Tuesday Bible Study: 5PM
                </p>

                <p className="text-soft text-lg">
                  Thursday Prayer Meeting: 5PM
                </p>
              </div>

              <div>
                <p className="text-blue-600 font-black uppercase tracking-widest text-sm mb-2">
                  Contact
                </p>

                <p className="text-soft text-lg">
                  +234 9130490295
                </p>

                <p className="text-soft text-lg break-all">
                  adeloyedivine@gmail.com
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="glass rounded-[2rem] p-10 shadow-2xl border border-blue-100"
          >

            <h3 className="text-3xl font-black text-slate-900 mb-10">
              First Time Visitor Form
            </h3>

            <form
              action="https://formsubmit.co/adeloyedivine@gmail.com"
              method="POST"
              className="space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full px-6 py-4 rounded-2xl border border-blue-100 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-6 py-4 rounded-2xl border border-blue-100 outline-none focus:border-blue-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full px-6 py-4 rounded-2xl border border-blue-100 outline-none focus:border-blue-500"
              />

              <textarea
                name="message"
                placeholder="Prayer Request / Message"
                rows={5}
                className="w-full px-6 py-4 rounded-2xl border border-blue-100 outline-none focus:border-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-5 rounded-2xl font-black shadow-xl shadow-blue-300/40"
              >
                Submit Information
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}