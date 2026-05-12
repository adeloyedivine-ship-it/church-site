"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const targetDate = new Date("2026-05-25T17:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
          (1000 * 60)
      );

      const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="relative section-spacing px-6 bg-gradient-to-b from-white to-blue-50 overflow-hidden">

      {/* Glow */}
      <div className="blue-glow bg-blue-300 w-[400px] h-[400px] top-0 left-0"></div>

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-[3rem] p-10 md:p-20 shadow-2xl border border-blue-100 text-center"
        >

          <p className="uppercase tracking-[0.3em] text-blue-600 font-bold text-sm mb-6">
            Countdown To Celebration
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
            25th Anniversary & Cathedral Dedication
          </h2>

          <p className="text-soft text-lg md:text-xl max-w-3xl mx-auto mb-16">
            Join us as we celebrate God’s faithfulness,
            revival, worship, and overflowing grace
            at RICHEM Worldwide.
          </p>

          {/* Countdown Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            <div className="glass rounded-3xl p-8 shadow-lg">

              <h3 className="text-5xl md:text-6xl font-black text-blue-700 mb-3">
                {timeLeft.days}
              </h3>

              <p className="text-slate-500 font-semibold">
                Days
              </p>

            </div>

            <div className="glass rounded-3xl p-8 shadow-lg">

              <h3 className="text-5xl md:text-6xl font-black text-blue-700 mb-3">
                {timeLeft.hours}
              </h3>

              <p className="text-slate-500 font-semibold">
                Hours
              </p>

            </div>

            <div className="glass rounded-3xl p-8 shadow-lg">

              <h3 className="text-5xl md:text-6xl font-black text-blue-700 mb-3">
                {timeLeft.minutes}
              </h3>

              <p className="text-slate-500 font-semibold">
                Minutes
              </p>

            </div>

            <div className="glass rounded-3xl p-8 shadow-lg">

              <h3 className="text-5xl md:text-6xl font-black text-blue-700 mb-3">
                {timeLeft.seconds}
              </h3>

              <p className="text-slate-500 font-semibold">
                Seconds
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}