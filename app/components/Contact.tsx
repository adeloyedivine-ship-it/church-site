"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-gradient-to-b from-blue-950 to-black text-white overflow-hidden"
    >

      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-[400px] h-[400px] bg-blue-500 blur-3xl rounded-full bottom-10 right-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[0.3em] text-blue-300 text-sm mb-4">
            Contact RICHEM
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Worship With Us
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            We welcome you to fellowship with us as we grow together
            in Christ through worship, prayer, teaching, and revival.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur"
          >

            <MapPin className="text-blue-300 mb-6" size={34} />

            <h3 className="text-2xl font-semibold mb-4">
              Location
            </h3>

            <p className="text-white/70 leading-relaxed">
              3A Joseph Ade-Ojo Street,
              Abusoro, Ijoka,
              Akure, Ondo State,
              Nigeria.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur"
          >

            <Phone className="text-blue-300 mb-6" size={34} />

            <h3 className="text-2xl font-semibold mb-4">
              Phone
            </h3>

            <p className="text-white/70">
              +234 9130490295
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur"
          >

            <Mail className="text-blue-300 mb-6" size={34} />

            <h3 className="text-2xl font-semibold mb-4">
              Email
            </h3>

            <p className="text-white/70 break-all">
              adeloyedivine@gmail.com
            </p>

          </motion.div>

        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h3 className="text-2xl font-bold text-blue-300">
              RICHEM
            </h3>

            <p className="text-white/50 mt-2">
              If God be for us, who can be against us?
            </p>
          </div>

          <a
            href="https://facebook.com/groups/richem/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-blue-300 transition"
          >

            <Globe size={24} />

            <span>
              Follow Us on Facebook
            </span>

          </a>

        </div>
      </div>
    </section>
  );
}