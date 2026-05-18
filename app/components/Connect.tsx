"use client";

import { motion } from "framer-motion";

export default function Connect() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.3em] text-blue-600 text-sm mb-4">
              Connect With Us
            </p>

            <h2 className="text-5xl font-black text-blue-950">
              We Would Love To Hear From You
            </h2>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* PRAYER */}
            <div className="bg-blue-50 rounded-[30px] p-8 shadow-lg">

              <h3 className="text-2xl font-black text-blue-950 mb-6">
                Prayer Request
              </h3>

              <form className="space-y-4">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl border border-gray-200 outline-none"
                />

                <textarea
                  placeholder="Share your prayer point..."
                  rows={5}
                  className="w-full p-4 rounded-xl border border-gray-200 outline-none"
                ></textarea>

                <button className="w-full bg-blue-950 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition">
                  Submit Prayer
                </button>

              </form>

            </div>

            {/* TESTIMONY */}
            <div className="bg-white rounded-[30px] p-8 shadow-lg border border-gray-100">

              <h3 className="text-2xl font-black text-blue-950 mb-6">
                Testimony
              </h3>

              <form className="space-y-4">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl border border-gray-200 outline-none"
                />

                <textarea
                  placeholder="Share your testimony..."
                  rows={5}
                  className="w-full p-4 rounded-xl border border-gray-200 outline-none"
                ></textarea>

                <button className="w-full bg-red-600 text-white py-4 rounded-xl font-bold hover:bg-red-700 transition">
                  Share Testimony
                </button>

              </form>

            </div>

            {/* QUESTION */}
            <div className="bg-blue-950 rounded-[30px] p-8 shadow-lg text-white">

              <h3 className="text-2xl font-black mb-6">
                Ask A Question
              </h3>

              <form className="space-y-4">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl bg-white text-black outline-none"
                />

                <textarea
                  placeholder="Type your question..."
                  rows={5}
                  className="w-full p-4 rounded-xl bg-white text-black outline-none"
                ></textarea>

                <button className="w-full bg-white text-blue-950 py-4 rounded-xl font-bold hover:bg-gray-200 transition">
                  Send Question
                </button>

              </form>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}